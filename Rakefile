$: << File.expand_path('../lib', __FILE__)

require 'open-uri'
require 'fileutils'
require 'aws'
require 'multi_json'
require 'nokogiri'
require 'ec2_pricing'


task :update => 'data:update'

namespace :data do
  task :types do
    puts 'Loading instance types data'
    doc = Nokogiri::HTML(open('http://aws.amazon.com/ec2/instance-types/'))
    parser = Ec2Pricing::InstanceTypesParser.new
    types = parser.parse(doc)
    @types_file_name = 'instance-types.json'
    @types_json = MultiJson.dump(types, pretty: true)
  end

  task :pricing do
    pricing_parser = Ec2Pricing::PricingParser.new
    base_url = 'http://aws.amazon.com/ec2/pricing/'
    files = %w[pricing-on-demand-instances.json ri-light-linux.json ri-light-mswin.json ri-medium-linux.json ri-medium-mswin.json ri-heavy-linux.json ri-heavy-mswin.json]
    @raw_pricing_json = files.each_with_object({}) do |file, pricing|
      puts "Updating #{file}"
      pricing[file] = open(base_url + file).read
    end
    @pricing_json = {
      'on-demand-pricing.json' => MultiJson.dump(pricing_parser.parse(MultiJson.load(@raw_pricing_json['pricing-on-demand-instances.json'])), pretty: true)
    }
  end

  task :update => [:pricing, :types] do
    FileUtils.mkdir_p('public/data/aws')
    puts "Writing public/data/#{@types_file_name}"
    File.open("public/data/#{@types_file_name}", 'w') do |io|
      io.write(@types_json)
    end
    @raw_pricing_json.each do |file, data|
      puts "Writing public/data/aws/#{file}"
      File.open("public/data/aws/#{file}", 'w') do |io|
        io.write(data)
      end
    end
    @pricing_json.each do |file, data|
      puts "Writing public/data/#{file}"
      File.write("public/data/#{file}", data)
    end
  end
end

task :upload => ['data:update', 'upload:data', 'upload:site']

namespace :upload do
  MIME_TYPES = {
    '.js'   => 'application/javascript',
    '.html' => 'text/html',
    '.css'  => 'text/css',
    '.eot'  => 'application/vnd.ms-fontobject',
    '.svg'  => 'image/svg+xml',
    '.ttf'  => 'application/x-font-ttf',
    '.woff' => 'application/x-font-woff',
    '.png'  => 'image/png',
    '.json' => 'application/json'
  }
  MIME_TYPES.default = 'application/octet-stream'

  task :connect do
    # the S3 driver will pick up the AWS_ACCESS_KEY_ID and AWS_SECRET_ACCESS_KEY environment variables
    @s3 ||= AWS::S3.new(:s3_endpoint => 's3-eu-west-1.amazonaws.com')
    @bucket ||= @s3.buckets['ec2pricing.iconara.info']
  end

  task :site => :connect do
    etags = Hash[@bucket.objects.reject { |obj| obj.key =~ /^(?:logs|data)/ }.map { |obj| [obj.key, obj.etag[1...-1]] }]
    Dir['public/**/*'].each do |local_path|
      unless File.directory?(local_path) || File.dirname(local_path) == 'public/data'
        local_data = File.read(local_path)
        local_md5 = Digest::MD5.hexdigest(local_data)
        remote_path = local_path.sub(/^public\//, '')
        if local_md5 == etags[remote_path]
          puts "Skipping #{local_path}"
        else
          puts "Uploading #{local_path} to #{remote_path}"
          object_options = {
            :data => local_data,
            :acl => :public_read,
            :content_type => MIME_TYPES[File.extname(local_path)]
          }
          @bucket.objects[remote_path].write(object_options)
        end
      end
    end
  end

  task :data => ['data:pricing', 'data:types', :connect] do
    options = {:acl => :public_read, :content_type => MIME_TYPES['.json']}
    puts "Uploading to data/#{@types_file_name}"
    @bucket.objects["data/#{@types_file_name}"].write(@types_json, options)
    @raw_pricing_json.each do |file, data|
      puts "Uploading to data/aws/#{file}"
      @bucket.objects["data/aws/#{file}"].write(data, options)
    end
    @pricing_json.each do |file, data|
      puts "Uploading to data/#{file}"
      @bucket.objects["data/#{file}"].write(data, options)
    end
  end
end