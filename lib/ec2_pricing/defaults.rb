# encoding: utf-8

module Ec2Pricing
  AWS_INSTANCE_TYPES_URL = 'http://aws.amazon.com/ec2/instance-types/'.freeze
  PRICING_BASE_URL = 'http://aws-assets-pricing-prod.s3.amazonaws.com/pricing'.freeze

  AWS_PRICING_URLS = {
    :linux_od => '/ec2/linux-od.js',
    :mswin_od => '/ec2/mswin-od.js',
    :rhel_od => '/ec2/rhel-od.js',
    :sles_od => '/ec2/sles-od.js',
    :mswin_sql_od => '/ec2/mswinSQL-od.js',
    :mswin_sql_web_od => '/ec2/mswinSQLWeb-od.js',
    :linux_ri_light => '/ec2/linux-ri-light.js',
    :rhel_ri_light => '/ec2/rhel-ri-light.js',
    :sles_ri_light => '/ec2/sles-ri-light.js',
    :mswin_ri_light => '/ec2/mswin-ri-light.js',
    :mswin_sql_ri_light => '/ec2/mswinSQL-ri-light.js',
    :mswin_sql_web_ri_light => '/ec2/mswinSQLWeb-ri-light.js',
    :linux_ri_medium => '/ec2/linux-ri-medium.js',
    :rhel_ri_medium => '/ec2/rhel-ri-medium.js',
    :sles_ri_medium => '/ec2/sles-ri-medium.js',
    :mswin_ri_medium => '/ec2/mswin-ri-medium.js',
    :mswin_sql_ri_medium => '/ec2/mswinSQL-ri-medium.js',
    :mswin_sql_web_ri_medium => '/ec2/mswinSQLWeb-ri-medium.js',
    :linux_ri_heavy => '/ec2/linux-ri-heavy.js',
    :rhel_ri_heavy => '/ec2/rhel-ri-heavy.js',
    :sles_ri_heavy => '/ec2/sles-ri-heavy.js',
    :mswin_ri_heavy => '/ec2/mswin-ri-heavy.js',
    :mswin_sql_ri_heavy => '/ec2/mswinSQL-ri-heavy.js',
    :mswin_sql_web_ri_heavy => '/ec2/mswinSQLWeb-ri-heavy.js',
    :data_transfer_with_regions => '/ec2/pricing-data-transfer-with-regions.js',
    :ebs_optimized_instances => '/ec2/pricing-ebs-optimized-instances.js',
    :ebs => '/ec2/pricing-ebs.js',
    :elastic_ips => '/ec2/pricing-elastic-ips.js',
    :cloudwatch => '/ec2/pricing-cloudwatch.js',
    :elb => '/ec2/pricing-elb.js',
    :emr => '/emr/pricing-emr.js',
    :spot => 'http://spot-price.s3.amazonaws.com/spot.js',
  }

  AWS_PRICING_URLS.each_value do |url|
    unless url.start_with?('http:')
      url.replace(PRICING_BASE_URL + url)
    end
  end
  AWS_PRICING_URLS.freeze

  AWS_ON_DEMAND_PRICE_KEYS = [:linux_od, :mswin_od, :rhel_od, :sles_od].freeze
  AWS_EXTRA_PRICE_KEYS = [:spot, :emr].freeze
end