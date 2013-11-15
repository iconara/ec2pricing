# encoding: utf-8

require 'spec_helper'


module Ec2Pricing
  describe InstanceTypesParser do
    let :parser do
      described_class.new
    end

    let :type_data do
      Nokogiri::HTML(Pathname.new(File.expand_path('../../resources/instance-types.html', __FILE__)).read)
    end

    describe '#parse' do
      let :instance_types do
        parser.parse(type_data)
      end

      def find_instance_type(api_name)
        instance_types.find { |instance_type| instance_type[:api_name] == api_name }
      end

      it 'finds all instance types' do
        api_names = instance_types.map { |instance_type| instance_type[:api_name] }
        expect(api_names.sort).to eql(%w[
          m1.small
          m1.medium
          m1.large
          m1.xlarge
          t1.micro
          c1.medium
          c1.xlarge
          c3.large
          c3.xlarge
          c3.2xlarge
          c3.4xlarge
          c3.8xlarge
          m2.xlarge
          m2.2xlarge
          m2.4xlarge
          m3.xlarge
          m3.2xlarge
          cc2.8xlarge
          cg1.4xlarge
          cr1.8xlarge
          hi1.4xlarge
          hs1.8xlarge
          g2.2xlarge
        ].sort)
      end

      it 'finds the names' do
        t1_micro = find_instance_type('t1.micro')
        m1_small = find_instance_type('m1.small')
        m2_2xlarge = find_instance_type('m2.2xlarge')
        cc2_8xlarge = find_instance_type('cc2.8xlarge')
        cg1_4xlarge = find_instance_type('cg1.4xlarge')
        hi1_4xlarge = find_instance_type('hi1.4xlarge')
        hs1_8xlarge = find_instance_type('hs1.8xlarge')
        expect(t1_micro[:name]).to eql('Micro')
        expect(m1_small[:name]).to eql('M1 Small')
        expect(m2_2xlarge[:name]).to eql('High Memory Double Extra Large')
        expect(cc2_8xlarge[:name]).to eql('Cluster Compute Eight Extra Large')
        expect(cg1_4xlarge[:name]).to eql('Cluster GPU Quadruple Extra Large')
        expect(hi1_4xlarge[:name]).to eql('High IO Quadruple Extra Large')
        expect(hs1_8xlarge[:name]).to eql('High Storage Eight Extra Large')
      end

      it 'finds the number of cores' do
        m1_small = find_instance_type('m1.small')
        m2_xlarge = find_instance_type('m2.xlarge')
        t1_micro = find_instance_type('t1.micro')
        expect(m1_small[:cores]).to eql(1)
        expect(m2_xlarge[:cores]).to eql(2)
        expect(t1_micro[:cores]).to eql(1)
      end

      it 'corrects for core numbers on cluster compute instances' do
        cc2_8xlarge = find_instance_type('cc2.8xlarge')
        cg1_4xlarge = find_instance_type('cg1.4xlarge')
        expect(cc2_8xlarge[:cores]).to eql(32)
        expect(cg1_4xlarge[:cores]).to eql(16)
      end

      it 'corrects for core numbers on high storage instances' do
        hs1_8xlarge = find_instance_type('hs1.8xlarge')
        expect(hs1_8xlarge[:cores]).to eql(16)
      end

      it 'finds the number of ECUs' do
        m1_small = find_instance_type('m1.small')
        m2_xlarge = find_instance_type('m2.xlarge')
        t1_micro = find_instance_type('t1.micro')
        cc2_8xlarge = find_instance_type('cc2.8xlarge')
        cg1_4xlarge = find_instance_type('cg1.4xlarge')
        expect(m1_small[:ecus]).to eql(1)
        expect(m2_xlarge[:ecus]).to eql(6.5)
        expect(t1_micro[:ecus]).to eql(0)
        expect(cc2_8xlarge[:ecus]).to eql(88)
        expect(cg1_4xlarge[:ecus]).to eql(33.5)
      end

      it 'finds the amount of RAM' do
        m2_2xlarge = find_instance_type('m2.2xlarge')
        t1_micro = find_instance_type('t1.micro')
        expect(m2_2xlarge[:ram]).to eql('34.2 GiB')
        expect(t1_micro[:ram]).to eql('0.615 GiB')
      end

      it 'ignores comments about RAM' do
        cg1_4xlarge = find_instance_type('cg1.4xlarge')
        expect(cg1_4xlarge[:ram]).to eql('22.5 GiB')
      end

      it 'finds the amount of disk' do
        m1_xlarge = find_instance_type('m1.xlarge')
        cc2_8xlarge = find_instance_type('cc2.8xlarge')
        expect(m1_xlarge[:disk_size]).to eql('1680 GiB')
        expect(cc2_8xlarge[:disk_size]).to eql('3360 GiB')
      end

      it 'converts very large disk sizes to TiB' do
        hs1_8xlarge = find_instance_type('hs1.8xlarge')
        expect(hs1_8xlarge[:disk_size]).to eql('48 TiB')
      end

      it 'finds the number of disks' do
        m1_small = find_instance_type('m1.small')
        hi1_4xlarge = find_instance_type('hi1.4xlarge')
        hs1_8xlarge = find_instance_type('hs1.8xlarge')
        expect(m1_small[:disk_count]).to eql(1)
        expect(hi1_4xlarge[:disk_count]).to eql(2)
        expect(hs1_8xlarge[:disk_count]).to eql(24)
      end

      it 'finds no disk size for EBS-only instances' do
        m3_xlarge = find_instance_type('m3.xlarge')
        t1_micro = find_instance_type('t1.micro')
        expect(m3_xlarge[:disk_size]).to be_nil
        expect(t1_micro[:disk_size]).to be_nil
      end

      it 'finds zero disks for EBS-only instances' do
        m3_xlarge = find_instance_type('m3.xlarge')
        t1_micro = find_instance_type('t1.micro')
        expect(m3_xlarge[:disk_count]).to eql(0)
        expect(t1_micro[:disk_count]).to eql(0)
      end

      it 'finds the amount of disk for SSD instances' do
        hi1_4xlarge = find_instance_type('hi1.4xlarge')
        expect(hi1_4xlarge[:disk_size]).to eql('2048 GiB')
      end

      it 'marks SSD instances' do
        hi1_4xlarge = find_instance_type('hi1.4xlarge')
        hs1_8xlarge = find_instance_type('hs1.8xlarge')
        expect(hi1_4xlarge[:ssd]).to be_true
        expect(hs1_8xlarge[:ssd]).to be_false
      end

      it 'finds the processor architecture' do
        m1_small = find_instance_type('m1.small')
        cc2_8xlarge = find_instance_type('cc2.8xlarge')
        expect(m1_small[:architectures]).to eql([32, 64])
        expect(cc2_8xlarge[:architectures]).to eql([64])
      end

      it 'finds the IO performance' do
        m2_xlarge = find_instance_type('m2.xlarge')
        m3_xlarge = find_instance_type('m3.xlarge')
        c1_xlarge = find_instance_type('c1.xlarge')
        cc2_8xlarge = find_instance_type('cc2.8xlarge')
        expect(m2_xlarge[:io_performance]).to eql('moderate')
        expect(m3_xlarge[:io_performance]).to eql('moderate')
        expect(c1_xlarge[:io_performance]).to eql('high')
        expect(cc2_8xlarge[:io_performance]).to eql('10 gigabit')
      end

      it 'finds if the instance is EBS-only' do
        m1_large = find_instance_type('m1.large')
        t1_micro = find_instance_type('t1.micro')
        m3_2xlarge = find_instance_type('m3.2xlarge')
        expect(m1_large[:ebs_only]).to be_false
        expect(t1_micro[:ebs_only]).to be_true
        expect(m3_2xlarge[:ebs_only]).to be_true
      end

      it 'does not return empty notes properties' do
        m1_small = find_instance_type('m1.small')
        expect(m1_small[:notes]).to be_nil
      end
    end
  end
end