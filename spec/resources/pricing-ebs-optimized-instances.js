callback(
{
  "vers": 0.01,
  "config": {
    "rate": "perhr",
    "valueColumns": [
      "ebsOptimized"
    ],
    "currencies": [
      "USD"
    ],
    "regions": [
      {
        "region": "us-east",
        "instanceTypes": [
          {
            "type": "std",
            "sizes": [
              {
                "size": "m1.large",
                "valueColumns": [
                  {
                    "name": "ebsOptimized",
                    "prices": {
                      "USD": "0.025"
                    }
                  }
                ]
              },
              {
                "size": "m1.xlarge",
                "valueColumns": [
                  {
                    "name": "ebsOptimized",
                    "prices": {
                      "USD": "0.05"
                    }
                  }
                ]
              }
            ]
          },
          {
            "type": "secgenstd",
            "sizes": [
              {
                "size": "m3.xlarge",
                "valueColumns": [
                  {
                    "name": "ebsOptimized",
                    "prices": {
                      "USD": "0.025"
                    }
                  }
                ]
              },
              {
                "size": "m3.2xlarge",
                "valueColumns": [
                  {
                    "name": "ebsOptimized",
                    "prices": {
                      "USD": "0.05"
                    }
                  }
                ]
              }
            ]
          },
          {
            "type": "hiMem",
            "sizes": [
              {
                "size": "m2.2xlarge",
                "valueColumns": [
                  {
                    "name": "ebsOptimized",
                    "prices": {
                      "USD": "0.025"
                    }
                  }
                ]
              },
              {
                "size": "m2.4xlarge",
                "valueColumns": [
                  {
                    "name": "ebsOptimized",
                    "prices": {
                      "USD": "0.05"
                    }
                  }
                ]
              }
            ]
          },
          {
            "type": "hiCPU",
            "sizes": [
              {
                "size": "c3.xlarge",
                "valueColumns": [
                  {
                    "name": "ebsOptimized",
                    "prices": {
                      "USD": "0.02"
                    }
                  }
                ]
              },
              {
                "size": "c3.2xlarge",
                "valueColumns": [
                  {
                    "name": "ebsOptimized",
                    "prices": {
                      "USD": "0.05"
                    }
                  }
                ]
              },
              {
                "size": "c3.4xlarge",
                "valueColumns": [
                  {
                    "name": "ebsOptimized",
                    "prices": {
                      "USD": "0.10"
                    }
                  }
                ]
              },
              {
                "size": "c1.xlarge",
                "valueColumns": [
                  {
                    "name": "ebsOptimized",
                    "prices": {
                      "USD": "0.05"
                    }
                  }
                ]
              }
            ]
          },
          {
            "type": "GPUI",
            "sizes": [
           {
                "size": "g2.2xlarge",
                "valueColumns": [
                  {
                    "name": "ebsOptimized",
                    "prices": {
                      "USD": "0.05"
                    }
                  }
                ]
              }
            ]
          },
  {
            "type": "storageOpt",
            "sizes": [
        {
                "size": "i2.xlarge",
                "valueColumns": [
                  {
                    "name": "ebsOptimized",
                    "prices": {
                      "USD": "0.02"
                    }
                  }
                ]
              },
{
                "size": "i2.2xlarge",
                "valueColumns": [
                  {
                    "name": "ebsOptimized",
                    "prices": {
                      "USD": "0.05"
                    }
                  }
                ]
              },
        {
                "size": "i2.4xlarge",
                "valueColumns": [
                  {
                    "name": "ebsOptimized",
                    "prices": {
                      "USD": "0.10"
                    }
                  }
                ]
              }
            ]
          }
        ]
      },
      {
        "region": "us-west-2",
        "instanceTypes": [
          {
            "type": "std",
            "sizes": [
              {
                "size": "m1.large",
                "valueColumns": [
                  {
                    "name": "ebsOptimized",
                    "prices": {
                      "USD": "0.025"
                    }
                  }
                ]
              },
              {
                "size": "m1.xlarge",
                "valueColumns": [
                  {
                    "name": "ebsOptimized",
                    "prices": {
                      "USD": "0.05"
                    }
                  }
                ]
              }
            ]
          },
          {
            "type": "secgenstd",
            "sizes": [
              {
                "size": "m3.xlarge",
                "valueColumns": [
                  {
                    "name": "ebsOptimized",
                    "prices": {
                      "USD": "0.025"
                    }
                  }
                ]
              },
              {
                "size": "m3.2xlarge",
                "valueColumns": [
                  {
                    "name": "ebsOptimized",
                    "prices": {
                      "USD": "0.05"
                    }
                  }
                ]
              }
            ]
          },
          {
            "type": "hiMem",
            "sizes": [
              {
                "size": "m2.2xlarge",
                "valueColumns": [
                  {
                    "name": "ebsOptimized",
                    "prices": {
                      "USD": "0.025"
                    }
                  }
                ]
              },
              {
                "size": "m2.4xlarge",
                "valueColumns": [
                  {
                    "name": "ebsOptimized",
                    "prices": {
                      "USD": "0.05"
                    }
                  }
                ]
              }
            ]
          },
          {
            "type": "hiCPU",
            "sizes": [
              {
                "size": "c3.xlarge",
                "valueColumns": [
                  {
                    "name": "ebsOptimized",
                    "prices": {
                      "USD": "0.02"
                    }
                  }
                ]
              },
              {
                "size": "c3.2xlarge",
                "valueColumns": [
                  {
                    "name": "ebsOptimized",
                    "prices": {
                      "USD": "0.05"
                    }
                  }
                ]
              },
              {
                "size": "c3.4xlarge",
                "valueColumns": [
                  {
                    "name": "ebsOptimized",
                    "prices": {
                      "USD": "0.10"
                    }
                  }
                ]
              },
              {
                "size": "c1.xlarge",
                "valueColumns": [
                  {
                    "name": "ebsOptimized",
                    "prices": {
                      "USD": "0.05"
                    }
                  }
                ]
              }
            ]
          },
          {
            "type": "GPUI",
            "sizes": [
              {
                "size": "g2.2xlarge",
                "valueColumns": [
                  {
                    "name": "ebsOptimized",
                    "prices": {
                      "USD": "0.05"
                    }
                  }
                ]
              }
            ]
          },
{
            "type": "storageOpt",
            "sizes": [
        {
                "size": "i2.xlarge",
                "valueColumns": [
                  {
                    "name": "ebsOptimized",
                    "prices": {
                      "USD": "0.02"
                    }
                  }
                ]
              },
{
                "size": "i2.2xlarge",
                "valueColumns": [
                  {
                    "name": "ebsOptimized",
                    "prices": {
                      "USD": "0.05"
                    }
                  }
                ]
              },
        {
                "size": "i2.4xlarge",
                "valueColumns": [
                  {
                    "name": "ebsOptimized",
                    "prices": {
                      "USD": "0.10"
                    }
                  }
                ]
              }
            ]
          }
        ]
      },
      {
        "region": "us-west-1",
        "instanceTypes": [
          {
            "type": "std",
            "sizes": [
              {
                "size": "m1.large",
                "valueColumns": [
                  {
                    "name": "ebsOptimized",
                    "prices": {
                      "USD": "0.025"
                    }
                  }
                ]
              },
              {
                "size": "m1.xlarge",
                "valueColumns": [
                  {
                    "name": "ebsOptimized",
                    "prices": {
                      "USD": "0.05"
                    }
                  }
                ]
              }
            ]
          },
          {
            "type": "secgenstd",
            "sizes": [
              {
                "size": "m3.xlarge",
                "valueColumns": [
                  {
                    "name": "ebsOptimized",
                    "prices": {
                      "USD": "0.025"
                    }
                  }
                ]
              },
              {
                "size": "m3.2xlarge",
                "valueColumns": [
                  {
                    "name": "ebsOptimized",
                    "prices": {
                      "USD": "0.05"
                    }
                  }
                ]
              }
            ]
          },
          {
            "type": "hiMem",
            "sizes": [
              {
                "size": "m2.2xlarge",
                "valueColumns": [
                  {
                    "name": "ebsOptimized",
                    "prices": {
                      "USD": "0.025"
                    }
                  }
                ]
              },
              {
                "size": "m2.4xlarge",
                "valueColumns": [
                  {
                    "name": "ebsOptimized",
                    "prices": {
                      "USD": "0.05"
                    }
                  }
                ]
              }
            ]
          },
          {
            "type": "hiCPU",
            "sizes": [
              {
                "size": "c1.xlarge",
                "valueColumns": [
                  {
                    "name": "ebsOptimized",
                    "prices": {
                      "USD": "0.05"
                    }
                  }
                ]
              }
            ]
          },
          {
            "type": "GPUI",
            "sizes": [
              {
                "size": "g2.2xlarge",
                "valueColumns": [
                  {
                    "name": "ebsOptimized",
                    "prices": {
                      "USD": "0.05"
                    }
                  }
                ]
              }
            ]
          },
{
            "type": "storageOpt",
            "sizes": [
        {
                "size": "i2.xlarge",
                "valueColumns": [
                  {
                    "name": "ebsOptimized",
                    "prices": {
                      "USD": "0.02"
                    }
                  }
                ]
              },
{
                "size": "i2.2xlarge",
                "valueColumns": [
                  {
                    "name": "ebsOptimized",
                    "prices": {
                      "USD": "0.05"
                    }
                  }
                ]
              },
        {
                "size": "i2.4xlarge",
                "valueColumns": [
                  {
                    "name": "ebsOptimized",
                    "prices": {
                      "USD": "0.10"
                    }
                  }
                ]
              }
            ]
          }
        ]
      },
      {
        "region": "eu-west-1",
        "instanceTypes": [
          {
            "type": "std",
            "sizes": [
              {
                "size": "m1.large",
                "valueColumns": [
                  {
                    "name": "ebsOptimized",
                    "prices": {
                      "USD": "0.025"
                    }
                  }
                ]
              },
              {
                "size": "m1.xlarge",
                "valueColumns": [
                  {
                    "name": "ebsOptimized",
                    "prices": {
                      "USD": "0.05"
                    }
                  }
                ]
              }
            ]
          },
          {
            "type": "secgenstd",
            "sizes": [
              {
                "size": "m3.xlarge",
                "valueColumns": [
                  {
                    "name": "ebsOptimized",
                    "prices": {
                      "USD": "0.025"
                    }
                  }
                ]
              },
              {
                "size": "m3.2xlarge",
                "valueColumns": [
                  {
                    "name": "ebsOptimized",
                    "prices": {
                      "USD": "0.05"
                    }
                  }
                ]
              }
            ]
          },
          {
            "type": "hiMem",
            "sizes": [
              {
                "size": "m2.2xlarge",
                "valueColumns": [
                  {
                    "name": "ebsOptimized",
                    "prices": {
                      "USD": "0.025"
                    }
                  }
                ]
              },
              {
                "size": "m2.4xlarge",
                "valueColumns": [
                  {
                    "name": "ebsOptimized",
                    "prices": {
                      "USD": "0.05"
                    }
                  }
                ]
              }
            ]
          },
          {
            "type": "hiCPU",
            "sizes": [
              {
                "size": "c3.xlarge",
                "valueColumns": [
                  {
                    "name": "ebsOptimized",
                    "prices": {
                      "USD": "0.02"
                    }
                  }
                ]
              },
              {
                "size": "c3.2xlarge",
                "valueColumns": [
                  {
                    "name": "ebsOptimized",
                    "prices": {
                      "USD": "0.05"
                    }
                  }
                ]
              },
              {
                "size": "c3.4xlarge",
                "valueColumns": [
                  {
                    "name": "ebsOptimized",
                    "prices": {
                      "USD": "0.10"
                    }
                  }
                ]
              },
              {
                "size": "c1.xlarge",
                "valueColumns": [
                  {
                    "name": "ebsOptimized",
                    "prices": {
                      "USD": "0.05"
                    }
                  }
                ]
              }
            ]
          },
          {
            "type": "GPUI",
            "sizes": [
              {
                "size": "g2.2xlarge",
                "valueColumns": [
                  {
                    "name": "ebsOptimized",
                    "prices": {
                      "USD": "0.05"
                    }
                  }
                ]
              }
            ]
          },
{
            "type": "storageOpt",
            "sizes": [
        {
                "size": "i2.xlarge",
                "valueColumns": [
                  {
                    "name": "ebsOptimized",
                    "prices": {
                      "USD": "0.02"
                    }
                  }
                ]
              },
{
                "size": "i2.2xlarge",
                "valueColumns": [
                  {
                    "name": "ebsOptimized",
                    "prices": {
                      "USD": "0.05"
                    }
                  }
                ]
              },
        {
                "size": "i2.4xlarge",
                "valueColumns": [
                  {
                    "name": "ebsOptimized",
                    "prices": {
                      "USD": "0.10"
                    }
                  }
                ]
              }
            ]
          }
        ]
      },
      {
        "region": "ap-southeast-1",
        "instanceTypes": [
          {
            "type": "std",
            "sizes": [
              {
                "size": "m1.large",
                "valueColumns": [
                  {
                    "name": "ebsOptimized",
                    "prices": {
                      "USD": "0.025"
                    }
                  }
                ]
              },
              {
                "size": "m1.xlarge",
                "valueColumns": [
                  {
                    "name": "ebsOptimized",
                    "prices": {
                      "USD": "0.05"
                    }
                  }
                ]
              }
            ]
          },
          {
            "type": "secgenstd",
            "sizes": [
              {
                "size": "m3.xlarge",
                "valueColumns": [
                  {
                    "name": "ebsOptimized",
                    "prices": {
                      "USD": "0.025"
                    }
                  }
                ]
              },
              {
                "size": "m3.2xlarge",
                "valueColumns": [
                  {
                    "name": "ebsOptimized",
                    "prices": {
                      "USD": "0.05"
                    }
                  }
                ]
              }
            ]
          },
          {
            "type": "hiMem",
            "sizes": [
              {
                "size": "m2.2xlarge",
                "valueColumns": [
                  {
                    "name": "ebsOptimized",
                    "prices": {
                      "USD": "0.025"
                    }
                  }
                ]
              },
              {
                "size": "m2.4xlarge",
                "valueColumns": [
                  {
                    "name": "ebsOptimized",
                    "prices": {
                      "USD": "0.05"
                    }
                  }
                ]
              }
            ]
          },
          {
            "type": "hiCPU",
            "sizes": [
              {
                "size": "c3.xlarge",
                "valueColumns": [
                  {
                    "name": "ebsOptimized",
                    "prices": {
                      "USD": "0.02"
                    }
                  }
                ]
              },
              {
                "size": "c3.2xlarge",
                "valueColumns": [
                  {
                    "name": "ebsOptimized",
                    "prices": {
                      "USD": "0.05"
                    }
                  }
                ]
              },
              {
                "size": "c3.4xlarge",
                "valueColumns": [
                  {
                    "name": "ebsOptimized",
                    "prices": {
                      "USD": "0.10"
                    }
                  }
                ]
              },
              {
                "size": "c1.xlarge",
                "valueColumns": [
                  {
                    "name": "ebsOptimized",
                    "prices": {
                      "USD": "0.05"
                    }
                  }
                ]
              }
            ]
          },
{
            "type": "storageOpt",
            "sizes": [
        {
                "size": "i2.xlarge",
                "valueColumns": [
                  {
                    "name": "ebsOptimized",
                    "prices": {
                      "USD": "0.02"
                    }
                  }
                ]
              },
{
                "size": "i2.2xlarge",
                "valueColumns": [
                  {
                    "name": "ebsOptimized",
                    "prices": {
                      "USD": "0.05"
                    }
                  }
                ]
              },
        {
                "size": "i2.4xlarge",
                "valueColumns": [
                  {
                    "name": "ebsOptimized",
                    "prices": {
                      "USD": "0.10"
                    }
                  }
                ]
              }
            ]
          }
        ]
      },
      {
        "region": "ap-northeast-1",
        "instanceTypes": [
          {
            "type": "std",
            "sizes": [
              {
                "size": "m1.large",
                "valueColumns": [
                  {
                    "name": "ebsOptimized",
                    "prices": {
                      "USD": "0.025"
                    }
                  }
                ]
              },
              {
                "size": "m1.xlarge",
                "valueColumns": [
                  {
                    "name": "ebsOptimized",
                    "prices": {
                      "USD": "0.05"
                    }
                  }
                ]
              }
            ]
          },
          {
            "type": "secgenstd",
            "sizes": [
              {
                "size": "m3.xlarge",
                "valueColumns": [
                  {
                    "name": "ebsOptimized",
                    "prices": {
                      "USD": "0.025"
                    }
                  }
                ]
              },
              {
                "size": "m3.2xlarge",
                "valueColumns": [
                  {
                    "name": "ebsOptimized",
                    "prices": {
                      "USD": "0.05"
                    }
                  }
                ]
              }
            ]
          },
          {
            "type": "hiMem",
            "sizes": [
              {
                "size": "m2.2xlarge",
                "valueColumns": [
                  {
                    "name": "ebsOptimized",
                    "prices": {
                      "USD": "0.025"
                    }
                  }
                ]
              },
              {
                "size": "m2.4xlarge",
                "valueColumns": [
                  {
                    "name": "ebsOptimized",
                    "prices": {
                      "USD": "0.05"
                    }
                  }
                ]
              }
            ]
          },
          {
            "type": "hiCPU",
            "sizes": [
              {
                "size": "c3.xlarge",
                "valueColumns": [
                  {
                    "name": "ebsOptimized",
                    "prices": {
                      "USD": "0.02"
                    }
                  }
                ]
              },
              {
                "size": "c3.2xlarge",
                "valueColumns": [
                  {
                    "name": "ebsOptimized",
                    "prices": {
                      "USD": "0.05"
                    }
                  }
                ]
              },
              {
                "size": "c3.4xlarge",
                "valueColumns": [
                  {
                    "name": "ebsOptimized",
                    "prices": {
                      "USD": "0.10"
                    }
                  }
                ]
              },
              {
                "size": "c1.xlarge",
                "valueColumns": [
                  {
                    "name": "ebsOptimized",
                    "prices": {
                      "USD": "0.05"
                    }
                  }
                ]
              }
            ]
          },
{
            "type": "storageOpt",
            "sizes": [
        {
                "size": "i2.xlarge",
                "valueColumns": [
                  {
                    "name": "ebsOptimized",
                    "prices": {
                      "USD": "0.02"
                    }
                  }
                ]
              },
{
                "size": "i2.2xlarge",
                "valueColumns": [
                  {
                    "name": "ebsOptimized",
                    "prices": {
                      "USD": "0.05"
                    }
                  }
                ]
              },
        {
                "size": "i2.4xlarge",
                "valueColumns": [
                  {
                    "name": "ebsOptimized",
                    "prices": {
                      "USD": "0.10"
                    }
                  }
                ]
              }
            ]
          }
        ]
      },
      {
        "region": "ap-southeast-2",
        "instanceTypes": [
          {
            "type": "std",
            "sizes": [
              {
                "size": "m1.large",
                "valueColumns": [
                  {
                    "name": "ebsOptimized",
                    "prices": {
                      "USD": "0.025"
                    }
                  }
                ]
              },
              {
                "size": "m1.xlarge",
                "valueColumns": [
                  {
                    "name": "ebsOptimized",
                    "prices": {
                      "USD": "0.05"
                    }
                  }
                ]
              }
            ]
          },
          {
            "type": "secgenstd",
            "sizes": [
              {
                "size": "m3.xlarge",
                "valueColumns": [
                  {
                    "name": "ebsOptimized",
                    "prices": {
                      "USD": "0.025"
                    }
                  }
                ]
              },
              {
                "size": "m3.2xlarge",
                "valueColumns": [
                  {
                    "name": "ebsOptimized",
                    "prices": {
                      "USD": "0.05"
                    }
                  }
                ]
              }
            ]
          },
          {
            "type": "hiMem",
            "sizes": [
              {
                "size": "m2.2xlarge",
                "valueColumns": [
                  {
                    "name": "ebsOptimized",
                    "prices": {
                      "USD": "0.025"
                    }
                  }
                ]
              },
              {
                "size": "m2.4xlarge",
                "valueColumns": [
                  {
                    "name": "ebsOptimized",
                    "prices": {
                      "USD": "0.05"
                    }
                  }
                ]
              }
            ]
          },
          {
            "type": "hiCPU",
            "sizes": [
              {
                "size": "c3.xlarge",
                "valueColumns": [
                  {
                    "name": "ebsOptimized",
                    "prices": {
                      "USD": "0.02"
                    }
                  }
                ]
              },
              {
                "size": "c3.2xlarge",
                "valueColumns": [
                  {
                    "name": "ebsOptimized",
                    "prices": {
                      "USD": "0.05"
                    }
                  }
                ]
              },
              {
                "size": "c3.4xlarge",
                "valueColumns": [
                  {
                    "name": "ebsOptimized",
                    "prices": {
                      "USD": "0.10"
                    }
                  }
                ]
              },
              {
                "size": "c1.xlarge",
                "valueColumns": [
                  {
                    "name": "ebsOptimized",
                    "prices": {
                      "USD": "0.05"
                    }
                  }
                ]
              }
            ]
          },
{
            "type": "storageOpt",
            "sizes": [
        {
                "size": "i2.xlarge",
                "valueColumns": [
                  {
                    "name": "ebsOptimized",
                    "prices": {
                      "USD": "0.02"
                    }
                  }
                ]
              },
{
                "size": "i2.2xlarge",
                "valueColumns": [
                  {
                    "name": "ebsOptimized",
                    "prices": {
                      "USD": "0.05"
                    }
                  }
                ]
              },
        {
                "size": "i2.4xlarge",
                "valueColumns": [
                  {
                    "name": "ebsOptimized",
                    "prices": {
                      "USD": "0.10"
                    }
                  }
                ]
              }
            ]
          }
        ]
      },
      {
        "region": "sa-east-1",
        "instanceTypes": [
          {
            "type": "std",
            "sizes": [
              {
                "size": "m1.large",
                "valueColumns": [
                  {
                    "name": "ebsOptimized",
                    "prices": {
                      "USD": "0.025"
                    }
                  }
                ]
              },
              {
                "size": "m1.xlarge",
                "valueColumns": [
                  {
                    "name": "ebsOptimized",
                    "prices": {
                      "USD": "0.05"
                    }
                  }
                ]
              }
            ]
          },
          {
            "type": "secgenstd",
            "sizes": [
              {
                "size": "m3.xlarge",
                "valueColumns": [
                  {
                    "name": "ebsOptimized",
                    "prices": {
                      "USD": "0.025"
                    }
                  }
                ]
              },
              {
                "size": "m3.2xlarge",
                "valueColumns": [
                  {
                    "name": "ebsOptimized",
                    "prices": {
                      "USD": "0.05"
                    }
                  }
                ]
              }
            ]
          },
          {
            "type": "hiMem",
            "sizes": [
              {
                "size": "m2.2xlarge",
                "valueColumns": [
                  {
                    "name": "ebsOptimized",
                    "prices": {
                      "USD": "0.025"
                    }
                  }
                ]
              },
              {
                "size": "m2.4xlarge",
                "valueColumns": [
                  {
                    "name": "ebsOptimized",
                    "prices": {
                      "USD": "0.05"
                    }
                  }
                ]
              }
            ]
          },
          {
            "type": "hiCPU",
            "sizes": [
              {
                "size": "c1.xlarge",
                "valueColumns": [
                  {
                    "name": "ebsOptimized",
                    "prices": {
                      "USD": "0.05"
                    }
                  }
                ]
              }
            ]
          }
        ]
      }
    ]
  }
}
)