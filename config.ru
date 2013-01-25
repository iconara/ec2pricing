# encoding: utf-8

$: << File.expand_path('../lib', __FILE__)

require 'bundler/setup'
require 'ec2_pricing/api'
require 'rack/contrib/try_static'


ENV['AWS_ON_DEMAND_PRICING_URL'] ||= 'http://aws.amazon.com/ec2/pricing/pricing-on-demand-instances.json'
ENV['AWS_SPOT_PRICING_URL'] ||= 'http://spot-price.s3.amazonaws.com/spot.js'
ENV['AWS_INSTANCE_TYPES_URL'] ||= 'http://docs.aws.amazon.com/AWSEC2/latest/UserGuide/instance-types.html'

use Rack::TryStatic, :root => 'public', :urls => %w[/], :try => %w[.html index.html /index.html]
run Ec2Pricing::Api