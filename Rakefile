require 'aws'

task :update do
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
      bucket.objects[remote_path].write(:file => local_path, :acl => :public_read)
    end
  end
end