$: << File.expand_path('../lib', __FILE__)

require 'aws'
require 'ec2_pricing'


task :update do
  puts 'Updating public/pricing.json'
  pricing = Ec2Pricing::OnDemandPricing.new
  File.open('public/data/pricing.json', 'w') do |io|
    io.write(JSON.pretty_generate(pricing.by_region))
  end
end

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

task :upload => [:update, :just_upload]

task :just_upload do
  options = {
    :access_key_id => ENV['AWS_ACCESS_KEY'],
    :secret_access_key => ENV['AWS_SECRET_KEY'],
    :s3_endpoint => 's3-eu-west-1.amazonaws.com'
  }
  s3 = AWS::S3.new(options)
  bucket = s3.buckets['ec2pricing.iconara.info']
  Dir['public/**/*'].each do |local_path|
    unless File.directory?(local_path)
      remote_path = local_path.sub(/^public\//, '')
      puts "Sending #{local_path} -> #{remote_path}"
      object_options = {
        :file => local_path,
        :acl => :public_read,
        :content_type => MIME_TYPES[File.extname(local_path)]
      }
      bucket.objects[remote_path].write(object_options)
    end
  end
end