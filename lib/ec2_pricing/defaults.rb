# encoding: utf-8

module Ec2Pricing
  AWS_INSTANCE_TYPES_URL = 'http://aws.amazon.com/ec2/instance-types/'.freeze
  PRICING_BASE_URL = 'http://a0.awsstatic.com/pricing/1'.freeze

  AWS_PRICING_URLS = {
    :linux_od => '/ec2/linux-od.min.js',
    :mswin_od => '/ec2/mswin-od.min.js',
    :rhel_od => '/ec2/rhel-od.min.js',
    :sles_od => '/ec2/sles-od.min.js',
    :mswin_sql_od => '/ec2/mswinSQL-od.min.js',
    :mswin_sql_web_od => '/ec2/mswinSQLWeb-od.min.js',
    :linux_ri_light => '/ec2/linux-ri-light.min.js',
    :rhel_ri_light => '/ec2/rhel-ri-light.min.js',
    :sles_ri_light => '/ec2/sles-ri-light.min.js',
    :mswin_ri_light => '/ec2/mswin-ri-light.min.js',
    :mswin_sql_ri_light => '/ec2/mswinSQL-ri-light.min.js',
    :mswin_sql_web_ri_light => '/ec2/mswinSQLWeb-ri-light.min.js',
    :linux_ri_medium => '/ec2/linux-ri-medium.min.js',
    :rhel_ri_medium => '/ec2/rhel-ri-medium.min.js',
    :sles_ri_medium => '/ec2/sles-ri-medium.min.js',
    :mswin_ri_medium => '/ec2/mswin-ri-medium.min.js',
    :mswin_sql_ri_medium => '/ec2/mswinSQL-ri-medium.min.js',
    :mswin_sql_web_ri_medium => '/ec2/mswinSQLWeb-ri-medium.min.js',
    :linux_ri_heavy => '/ec2/linux-ri-heavy.min.js',
    :rhel_ri_heavy => '/ec2/rhel-ri-heavy.min.js',
    :sles_ri_heavy => '/ec2/sles-ri-heavy.min.js',
    :mswin_ri_heavy => '/ec2/mswin-ri-heavy.min.js',
    :mswin_sql_ri_heavy => '/ec2/mswinSQL-ri-heavy.min.js',
    :mswin_sql_web_ri_heavy => '/ec2/mswinSQLWeb-ri-heavy.min.js',
    :data_transfer_with_regions => '/ec2/pricing-data-transfer-with-regions.min.js',
    :ebs_optimized_instances => '/ec2/pricing-ebs-optimized-instances.min.js',
    :ebs => '/ec2/pricing-ebs.min.js',
    :elastic_ips => '/ec2/pricing-elastic-ips.min.js',
    :cloudwatch => '/ec2/pricing-cloudwatch.min.js',
    :elb => '/ec2/pricing-elb.min.js',
    :emr => '/emr/pricing-emr.min.js',
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