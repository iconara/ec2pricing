$: << File.expand_path('../lib', __FILE__)

require 'open-uri'
require 'fileutils'
require 'aws'
require 'multi_json'
require 'nokogiri'
require 'ec2_pricing'


task :upload => ['upload:data', 'upload:site']

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

  task :data => :connect do
    api_host = ENV['API_HOST'] || 'ec2pricing.heroku.com'
    api_url =  "http://#{api_host}/api/v1"
    $stderr.puts("Uploading data/data.json from #{api_url}")
    options = {:acl => :public_read, :content_type => MIME_TYPES['.json']}
    @bucket.objects['data/data.json'].write(open(api_url), options)
  end
end