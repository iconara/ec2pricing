# encoding: utf-8

$: << File.expand_path('../lib', __FILE__)

require 'bundler/setup'
require 'ec2_pricing/defaults'
require 'ec2_pricing/api'
require 'rack/contrib/try_static'


use Rack::TryStatic, :root => 'public', :urls => %w[/], :try => %w[.html index.html /index.html]
run Ec2Pricing::Api