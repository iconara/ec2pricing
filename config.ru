# encoding: utf-8

require 'rack'

run lambda { |env| [200, {'Content-Type' => 'text/plain'}, ['OK']] }