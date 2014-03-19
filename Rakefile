$: << File.expand_path('../lib', __FILE__)

require 'open-uri'
require 'fileutils'
require 'aws'
require 'multi_json'
require 'nokogiri'
require 'ec2_pricing'
require 'ec2_pricing/defaults'


begin
  require 'rspec/core/rake_task'

  RSpec::Core::RakeTask.new(:spec) do |r|
    r.rspec_opts = '--tty'
  end

  task :spec => 'update:resources'
rescue LoadError
end

namespace :cache do
  task :data do
    api_host = ENV['API_HOST'] || 'ec2pricing.heroku.com'
    api_url =  "http://#{api_host}/api/v1"
    $stderr.puts("Downloading #{api_url}")
    @data = open(api_url).read
  end

  task :resources do
    @pricing_data = {}
    Ec2Pricing::AWS_PRICING_URLS.each_value do |url|
      $stderr.puts("Downloading #{url}")
      @pricing_data[url] = open(url).read
    end
    $stderr.puts("Downloading #{Ec2Pricing::AWS_INSTANCE_TYPES_URL}")
    @instance_types_data = open(Ec2Pricing::AWS_INSTANCE_TYPES_URL).read
  end
end

namespace :update do
  task :data => 'cache:data' do
    local_path = 'public/data/data.json'
    $stderr.puts("Writing #{local_path}")
    FileUtils.mkdir_p(File.dirname(local_path))
    File.write(local_path, @data)
  end

  task :resources => 'cache:resources' do
    @pricing_data.each do |url, data|
      file_name = File.basename(url)
      path = "spec/resources/#{file_name}"
      $stderr.puts("Saving #{url} as #{path}")
      File.open(path, 'w') do |w|
        w.write(data)
      end
    end
    File.open('spec/resources/instance-types.html', 'w') do |w|
      w.write(@instance_types_data)
    end
  end
end

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
          $stderr.puts("Skipping #{local_path}")
        else
          $stderr.puts("Uploading #{local_path} to #{remote_path}")
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

  task :data => ['cache:data', :connect] do
    date_stamp = Time.now.utc.strftime('%Y%m%d')
    $stderr.puts("Writing s3://#{@bucket.name}/data/data.json")
    options = {:acl => :public_read, :content_type => MIME_TYPES['.json']}
    @bucket.objects['data/data.json'].write(@data, options)
    $stderr.puts("Writing s3://#{@bucket.name}/data/#{date_stamp}/ec2pricing.json")
    @bucket.objects["data/#{date_stamp}/ec2pricing.json"].write(@data, options)
  end

  task :resources => ['cache:resources', :connect] do
    options = {:acl => :public_read, :content_type => MIME_TYPES['.json']}
    date_stamp = Time.now.utc.strftime('%Y%m%d')
    @pricing_data.each do |url, data|
      file_name = url.end_with?('spot.js') ? 'spot.js' : url.scan(%r{/([^/]+/[^/]+)$}).flatten.first
      key = "data/#{date_stamp}/#{file_name}"
      $stderr.puts("Writing s3://#{@bucket.name}/#{key}")
      @bucket.objects[key].write(data, options)
    end
    key = "data/#{date_stamp}/instance-types.html"
    $stderr.puts("Writing s3://#{@bucket.name}/#{key}")
    @bucket.objects[key].write(@instance_types_data, options)
  end
end

task :upload => ['upload:data', 'upload:site']