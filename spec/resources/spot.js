callback({"vers": 0.01,"config": {"rate": "perhr","valueColumns": ["linux", "mswin"],"currencies": ["USD"],"regions": [{
                "region": "us-east",
                "footnotes": { 
                    "*" : "notAvailableForCCorCGPU"
                },
                "instanceTypes": [
                    {
                        "type": "generalCurrentGen",
                        "sizes": [
                            {
                                "size": "m3.medium",
                                "valueColumns": [
                                    {
                                        "name": "linux",
                                        "prices": {
                                            "USD": "0.0081"
                                        }
                                    },
                                    {
                                        "name": "mswin",
                                        "prices": {
                                            "USD": "0.0591"
                                        }
                                    }
                                ]
                            },
                            {
                                "size": "m3.large",
                                "valueColumns": [
                                    {
                                        "name": "linux",
                                        "prices": {
                                            "USD": "0.0161"
                                        }
                                    },
                                    {
                                        "name": "mswin",
                                        "prices": {
                                            "USD": "0.1171"
                                        }
                                    }
                                ]
                            },
                            {
                                "size": "m3.xlarge",
                                "valueColumns": [
                                    {
                                        "name": "linux",
                                        "prices": {
                                            "USD": "0.5"
                                        }
                                    },
                                    {
                                        "name": "mswin",
                                        "prices": {
                                            "USD": "0.1447"
                                        }
                                    }
                                ]
                            },
                            {
                                "size": "m3.2xlarge",
                                "valueColumns": [
                                    {
                                        "name": "linux",
                                        "prices": {
                                            "USD": "0.2401"
                                        }
                                    },
                                    {
                                        "name": "mswin",
                                        "prices": {
                                            "USD": "0.2883"
                                        }
                                    }
                                ]
                            }
                        ]
                    },          
                    {
                        "type": "generalPreviousGen",
                        "sizes": [
                            {
                                "size": "m1.small",
                                "valueColumns": [
                                    {
                                        "name": "linux",
                                        "prices": {
                                            "USD": "0.0071"
                                        }
                                    },
                                    {
                                        "name": "mswin",
                                        "prices": {
                                            "USD": "0.0171"
                                        }
                                    }
                                ]
                            },
                            {
                                "size": "m1.medium",
                                "valueColumns": [
                                    {
                                        "name": "linux",
                                        "prices": {
                                            "USD": "0.0081"
                                        }
                                    },
                                    {
                                        "name": "mswin",
                                        "prices": {
                                            "USD": "0.0331"
                                        }
                                    }
                                ]
                            },
                            {
                                "size": "m1.large",
                                "valueColumns": [
                                    {
                                        "name": "linux",
                                        "prices": {
                                            "USD": "0.0161"
                                        }
                                    },
                                    {
                                        "name": "mswin",
                                        "prices": {
                                            "USD": "0.0661"
                                        }
                                    }
                                ]
                            },
                            {
                                "size": "m1.xlarge",
                                "valueColumns": [
                                    {
                                        "name": "linux",
                                        "prices": {
                                            "USD": "0.0321"
                                        }
                                    },
                                    {
                                        "name": "mswin",
                                        "prices": {
                                            "USD": "0.1321"
                                        }
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        "type":"computeCurrentGen",
                        "sizes": [
                            {
                                "size": "c3.large",
                                "valueColumns": [
                                    {
                                        "name": "linux",
                                        "prices": {
                                            "USD": "0.0161"
                                        }
                                    },
                                    {
                                        "name": "mswin",
                                        "prices": {
                                            "USD": "0.1041"
                                        }
                                    }
                                ]
                            },
                            {
                                "size": "c3.xlarge",
                                "valueColumns": [
                                    {
                                        "name": "linux",
                                        "prices": {
                                            "USD": "0.0321"
                                        }
                                    },
                                    {
                                        "name": "mswin",
                                        "prices": {
                                            "USD": "0.1981"
                                        }
                                    }
                                ]
                            },
                            {
                                "size": "c3.2xlarge",
                                "valueColumns": [
                                    {
                                        "name": "linux",
                                        "prices": {
                                            "USD": "0.0641"
                                        }
                                    },
                                    {
                                        "name": "mswin",
                                        "prices": {
                                            "USD": "0.3961"
                                        }
                                    }
                                ]
                            },
                            {
                                "size": "c3.4xlarge",
                                "valueColumns": [
                                    {
                                        "name": "linux",
                                        "prices": {
                                            "USD": "0.1283"
                                        }
                                    },
                                    {
                                        "name": "mswin",
                                        "prices": {
                                            "USD": "0.7921"
                                        }
                                    }
                                ]
                            },
                            {
                                "size": "c3.8xlarge",
                                "valueColumns": [
                                    {
                                        "name": "linux",
                                        "prices": {
                                            "USD": "0.2561"
                                        }
                                    },
                                    {
                                        "name": "mswin",
                                        "prices": {
                                            "USD": "1.5841"
                                        }
                                    }
                                ]
                            }                              
                        ]
                    },
                    {
                        "type": "computePreviousGen",
                        "sizes": [
                            {
                                "size": "c1.medium",
                                "valueColumns": [
                                    {
                                        "name": "linux",
                                        "prices": {
                                            "USD": "0.0161"
                                        }
                                    },
                                    {
                                        "name": "mswin",
                                        "prices": {
                                            "USD": "0.0501"
                                        }
                                    }
                                ]
                            },
                            {
                                "size": "c1.xlarge",
                                "valueColumns": [
                                    {
                                        "name": "linux",
                                        "prices": {
                                            "USD": "0.0641"
                                        }
                                    },
                                    {
                                        "name": "mswin",
                                        "prices": {
                                            "USD": "0.2001"
                                        }
                                    }
                                ]
                            },
                            {
                                "size": "cc2.8xlarge",
                                "valueColumns": [
                                    {
                                        "name": "linux",
                                        "prices": {
                                            "USD": "0.2561"
                                        }
                                    },
                                    {
                                        "name": "mswin",
                                        "prices": {
                                            "USD": "N/A*"
                                        }
                                    }
                                ]
                            }
                        ]
                    },             
                    {
                        "type": "gpuCurrentGen",
                        "sizes": [
                            {
                                  "size": "g2.2xlarge",
                                  "valueColumns": [
                                      {
                                          "name": "linux",
                                          "prices": {
                                              "USD": "0.0666"
                                          }
                                      },
                                      {
                                          "name": "mswin",
                                          "prices": {
                                              "USD": "0.1043"
                                          }
                                      }
                                  ]
                             }
                        ]
                    },
                    {
                        "type": "gpuPreviousGen",
                        "sizes": [
                            {
                                "size": "cg1.4xlarge",
                                "valueColumns": [
                                    {
                                        "name": "linux",
                                        "prices": {
                                            "USD": "2.1001"
                                        }
                                    },
                                    {
                                        "name": "mswin",
                                        "prices": {
                                            "USD": "N/A*"
                                        }
                                    }
                                ]
                            }                          
                        ]
                    },
                    {
                        "type": "hiMemCurrentGen",
                        "sizes": [
                            {
                                "size": "r3.large",
                                "valueColumns": [
                                    {
                                        "name": "linux",
                                        "prices": {
                                            "USD": "0.0161"  
                                        }
                                    },
                                    {
                                        "name": "mswin",
                                        "prices": {
                                            "USD": "0.1741"
                                        }
                                    }
                                ]
                            },
                            {
                                "size": "r3.xlarge",
                                "valueColumns": [
                                    {
                                        "name": "linux",
                                        "prices": {
                                            "USD": "0.0321" 
                                        }
                                    },
                                    {
                                        "name": "mswin",
                                        "prices": {
                                            "USD": "0.2821"
                                        }
                                    }
                                ]
                            },
                            {
                                "size": "r3.2xlarge",
                                "valueColumns": [
                                    {
                                        "name": "linux",
                                        "prices": {
                                            "USD": "0.0641"
                                        }
                                    },
                                    {
                                        "name": "mswin",
                                        "prices": {
                                            "USD": "0.4441"
                                        }
                                    }
                                ]
                            },
                            {
                                "size": "r3.4xlarge",
                                "valueColumns": [
                                    {
                                        "name": "linux",
                                        "prices": {
                                            "USD": "0.1281"
                                        }
                                    },
                                    {
                                        "name": "mswin",
                                        "prices": {
                                            "USD": "0.6721"
                                        }
                                    }
                                ]
                            },
                            {
                                "size": "r3.8xlarge",
                                "valueColumns": [
                                    {
                                        "name": "linux",
                                        "prices": {
                                            "USD": "0.2561"
                                        }
                                    },
                                    {
                                        "name": "mswin",
                                        "prices": {
                                            "USD": "0.9561"
                                        }
                                    }
                                ]
                            }                           
                        ]
                    },                    
                    {
                        "type": "Memory Optimized - Previous Generation",
                        "sizes": [
                            {
                                "size": "m2.xlarge",
                                "valueColumns": [
                                    {
                                        "name": "linux",
                                        "prices": {
                                            "USD": "0.0161"
                                        }
                                    },
                                    {
                                        "name": "mswin",
                                        "prices": {
                                            "USD": "0.0701"
                                        }
                                    }
                                ]
                            },
                            {
                                "size": "m2.2xlarge",
                                "valueColumns": [
                                    {
                                        "name": "linux",
                                        "prices": {
                                            "USD": "0.0321"
                                        }
                                    },
                                    {
                                        "name": "mswin",
                                        "prices": {
                                            "USD": "0.1401"
                                        }
                                    }
                                ]
                            },
                            {
                                "size": "m2.4xlarge",
                                "valueColumns": [
                                    {
                                        "name": "linux",
                                        "prices": {
                                            "USD": "0.0642"
                                        }
                                    },
                                    {
                                        "name": "mswin",
                                        "prices": {
                                            "USD": "0.2801"
                                        }
                                    }
                                ]
                            },
                            {
                                "size": "cr1.8xlarge",
                                "valueColumns": [
                                    {
                                        "name": "linux",
                                        "prices": {
                                            "USD": "0.3197"
                                        }
                                    },
                                    {
                                        "name": "mswin",
                                        "prices": {
                                            "USD": "N/A*"
                                        }
                                    }
                                ]
                            }                            
                        ]
                    },
                    {
                        "type": "storagePreviousGen",
                        "sizes": [
                            {
                                "size": "hi1.4xlarge",
                                "valueColumns": [
                                    {
                                        "name": "linux",
                                        "prices": {
                                            "USD": "0.1283"
                                        }
                                    },
                                    {
                                        "name": "mswin",
                                        "prices": {
                                            "USD": "0.4811"
                                        }
                                    }
                                ]
                            }
                        ]
                    },                        
                    {
                        "type": "uI",
                        "sizes": [
                            {
                                "size": "t1.micro",
                                "valueColumns": [
                                    {
                                        "name": "linux",
                                        "prices": {
                                            "USD": "0.0031"
                                        }
                                    },
                                    {
                                        "name": "mswin",
                                        "prices": {
                                            "USD": "0.0061"
                                        }
                                    }
                                ]
                            }
                        ]
                    }
                ]
              },{
                "region": "us-west-2",
                "footnotes": { 
                    "*" : "clusterOnlyInUSEast"
                },
                "instanceTypes": [
                    {
                        "type": "generalCurrentGen",
                        "sizes": [
                            {
                                "size": "m3.medium",
                                "valueColumns": [
                                    {
                                        "name": "linux",
                                        "prices": {
                                            "USD": "0.0081"
                                        }
                                    },
                                    {
                                        "name": "mswin",
                                        "prices": {
                                            "USD": "0.0591"
                                        }
                                    }
                                ]
                            },
                            {
                                "size": "m3.large",
                                "valueColumns": [
                                    {
                                        "name": "linux",
                                        "prices": {
                                            "USD": "0.0161"
                                        }
                                    },
                                    {
                                        "name": "mswin",
                                        "prices": {
                                            "USD": "0.1171"
                                        }
                                    }
                                ]
                            },
                            {
                                "size": "m3.xlarge",
                                "valueColumns": [
                                    {
                                        "name": "linux",
                                        "prices": {
                                            "USD": "0.0321"
                                        }
                                    },
                                    {
                                        "name": "mswin",
                                        "prices": {
                                            "USD": "0.2201"
                                        }
                                    }
                                ]
                            },
                            {
                                "size": "m3.2xlarge",
                                "valueColumns": [
                                    {
                                        "name": "linux",
                                        "prices": {
                                            "USD": "0.0641"
                                        }
                                    },
                                    {
                                        "name": "mswin",
                                        "prices": {
                                            "USD": "0.4391"
                                        }
                                    }
                                ]
                            }
                        ]
                    },          
                    {
                        "type": "generalPreviousGen",
                        "sizes": [
                            {
                                "size": "m1.small",
                                "valueColumns": [
                                    {
                                        "name": "linux",
                                        "prices": {
                                            "USD": "0.0081"
                                        }
                                    },
                                    {
                                        "name": "mswin",
                                        "prices": {
                                            "USD": "0.0261"
                                        }
                                    }
                                ]
                            },
                            {
                                "size": "m1.medium",
                                "valueColumns": [
                                    {
                                        "name": "linux",
                                        "prices": {
                                            "USD": "0.0081"
                                        }
                                    },
                                    {
                                        "name": "mswin",
                                        "prices": {
                                            "USD": "0.0531"
                                        }
                                    }
                                ]
                            },
                            {
                                "size": "m1.large",
                                "valueColumns": [
                                    {
                                        "name": "linux",
                                        "prices": {
                                            "USD": "0.0161"
                                        }
                                    },
                                    {
                                        "name": "mswin",
                                        "prices": {
                                            "USD": "0.1061"
                                        }
                                    }
                                ]
                            },
                            {
                                "size": "m1.xlarge",
                                "valueColumns": [
                                    {
                                        "name": "linux",
                                        "prices": {
                                            "USD": "0.0321"
                                        }
                                    },
                                    {
                                        "name": "mswin",
                                        "prices": {
                                            "USD": "0.2111"
                                        }
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        "type":"computeCurrentGen",
                        "sizes": [
                            {
                                "size": "c3.large",
                                "valueColumns": [
                                    {
                                        "name": "linux",
                                        "prices": {
                                            "USD": "0.0161"
                                        }
                                    },
                                    {
                                        "name": "mswin",
                                        "prices": {
                                            "USD": "0.1041"
                                        }
                                    }
                                ]
                            },
                            {
                                "size": "c3.xlarge",
                                "valueColumns": [
                                    {
                                        "name": "linux",
                                        "prices": {
                                            "USD": "0.0321"
                                        }
                                    },
                                    {
                                        "name": "mswin",
                                        "prices": {
                                            "USD": "0.1981"
                                        }
                                    }
                                ]
                            },
                            {
                                "size": "c3.2xlarge",
                                "valueColumns": [
                                    {
                                        "name": "linux",
                                        "prices": {
                                            "USD": "0.0641"
                                        }
                                    },
                                    {
                                        "name": "mswin",
                                        "prices": {
                                            "USD": "0.3961"
                                        }
                                    }
                                ]
                            },
                            {
                                "size": "c3.4xlarge",
                                "valueColumns": [
                                    {
                                        "name": "linux",
                                        "prices": {
                                            "USD": "0.1283"
                                        }
                                    },
                                    {
                                        "name": "mswin",
                                        "prices": {
                                            "USD": "0.7921"
                                        }
                                    }
                                ]
                            },
                            {
                                "size": "c3.8xlarge",
                                "valueColumns": [
                                    {
                                        "name": "linux",
                                        "prices": {
                                            "USD": "0.2562"
                                        }
                                    },
                                    {
                                        "name": "mswin",
                                        "prices": {
                                            "USD": "1.5841"
                                        }
                                    }
                                ]
                            }                              
                        ]
                    },
                    {
                        "type": "computePreviousGen",
                        "sizes": [
                            {
                                "size": "c1.medium",
                                "valueColumns": [
                                    {
                                        "name": "linux",
                                        "prices": {
                                            "USD": "0.0161"
                                        }
                                    },
                                    {
                                        "name": "mswin",
                                        "prices": {
                                            "USD": "0.0801"
                                        }
                                    }
                                ]
                            },
                            {
                                "size": "c1.xlarge",
                                "valueColumns": [
                                    {
                                        "name": "linux",
                                        "prices": {
                                            "USD": "0.0641"
                                        }
                                    },
                                    {
                                        "name": "mswin",
                                        "prices": {
                                            "USD": "0.3201"
                                        }
                                    }
                                ]
                            },
                            {
                                "size": "cc2.8xlarge",
                                "valueColumns": [
                                    {
                                        "name": "linux",
                                        "prices": {
                                            "USD": "0.2531"
                                        }
                                    },
                                    {
                                        "name": "mswin",
                                        "prices": {
                                            "USD": "N/A*"
                                        }
                                    }
                                ]
                            }
                        ]
                    },             
                    {
                        "type": "gpuCurrentGen",
                        "sizes": [
                            {
                                  "size": "g2.2xlarge",
                                  "valueColumns": [
                                      {
                                          "name": "linux",
                                          "prices": {
                                              "USD": "0.12"
                                          }
                                      },
                                      {
                                          "name": "mswin",
                                          "prices": {
                                              "USD": "0.115"
                                          }
                                      }
                                  ]
                             }
                        ]
                    },
                    {
                        "type": "gpuPreviousGen",
                        "sizes": [
                            {
                                "size": "cg1.4xlarge",
                                "valueColumns": [
                                    {
                                        "name": "linux",
                                        "prices": {
                                            "USD": "N/A*"
                                        }
                                    },
                                    {
                                        "name": "mswin",
                                        "prices": {
                                            "USD": "N/A*"
                                        }
                                    }
                                ]
                            }                          
                        ]
                    },
                    {
                        "type": "hiMemCurrentGen",
                        "sizes": [
                            {
                                "size": "r3.large",
                                "valueColumns": [
                                    {
                                        "name": "linux",
                                        "prices": {
                                            "USD": "0.0161"  
                                        }
                                    },
                                    {
                                        "name": "mswin",
                                        "prices": {
                                            "USD": "0.1741"
                                        }
                                    }
                                ]
                            },
                            {
                                "size": "r3.xlarge",
                                "valueColumns": [
                                    {
                                        "name": "linux",
                                        "prices": {
                                            "USD": "0.0321" 
                                        }
                                    },
                                    {
                                        "name": "mswin",
                                        "prices": {
                                            "USD": "0.2821"
                                        }
                                    }
                                ]
                            },
                            {
                                "size": "r3.2xlarge",
                                "valueColumns": [
                                    {
                                        "name": "linux",
                                        "prices": {
                                            "USD": "0.0641"
                                        }
                                    },
                                    {
                                        "name": "mswin",
                                        "prices": {
                                            "USD": "0.4441"
                                        }
                                    }
                                ]
                            },
                            {
                                "size": "r3.4xlarge",
                                "valueColumns": [
                                    {
                                        "name": "linux",
                                        "prices": {
                                            "USD": "0.1281"
                                        }
                                    },
                                    {
                                        "name": "mswin",
                                        "prices": {
                                            "USD": "0.6721"
                                        }
                                    }
                                ]
                            },
                            {
                                "size": "r3.8xlarge",
                                "valueColumns": [
                                    {
                                        "name": "linux",
                                        "prices": {
                                            "USD": "0.2562"
                                        }
                                    },
                                    {
                                        "name": "mswin",
                                        "prices": {
                                            "USD": "0.9562"
                                        }
                                    }
                                ]
                            }                           
                        ]
                    },                    
                    {
                        "type": "Memory Optimized - Previous Generation",
                        "sizes": [
                            {
                                "size": "m2.xlarge",
                                "valueColumns": [
                                    {
                                        "name": "linux",
                                        "prices": {
                                            "USD": "0.0161"
                                        }
                                    },
                                    {
                                        "name": "mswin",
                                        "prices": {
                                            "USD": "0.1121"
                                        }
                                    }
                                ]
                            },
                            {
                                "size": "m2.2xlarge",
                                "valueColumns": [
                                    {
                                        "name": "linux",
                                        "prices": {
                                            "USD": "0.0321"
                                        }
                                    },
                                    {
                                        "name": "mswin",
                                        "prices": {
                                            "USD": "0.2241"
                                        }
                                    }
                                ]
                            },
                            {
                                "size": "m2.4xlarge",
                                "valueColumns": [
                                    {
                                        "name": "linux",
                                        "prices": {
                                            "USD": "0.0641"
                                        }
                                    },
                                    {
                                        "name": "mswin",
                                        "prices": {
                                            "USD": "0.4481"
                                        }
                                    }
                                ]
                            },
                            {
                                "size": "cr1.8xlarge",
                                "valueColumns": [
                                    {
                                        "name": "linux",
                                        "prices": {
                                            "USD": "0.3719"
                                        }
                                    },
                                    {
                                        "name": "mswin",
                                        "prices": {
                                            "USD": "N/A*"
                                        }
                                    }
                                ]
                            }                            
                        ]
                    },
                    {
                        "type": "storagePreviousGen",
                        "sizes": [
                            {
                                "size": "hi1.4xlarge",
                                "valueColumns": [
                                    {
                                        "name": "linux",
                                        "prices": {
                                            "USD": "0.1281"
                                        }
                                    },
                                    {
                                        "name": "mswin",
                                        "prices": {
                                            "USD": "0.4811"
                                        }
                                    }
                                ]
                            }
                        ]
                    },                        
                    {
                        "type": "uI",
                        "sizes": [
                            {
                                "size": "t1.micro",
                                "valueColumns": [
                                    {
                                        "name": "linux",
                                        "prices": {
                                            "USD": "0.0031"
                                        }
                                    },
                                    {
                                        "name": "mswin",
                                        "prices": {
                                            "USD": "0.0061"
                                        }
                                    }
                                ]
                            }
                        ]
                    }
                ]
              },{
                "region": "us-west",
                "footnotes": { 
                    "*" : "clusterOnlyInUSEast"
                },
                "instanceTypes": [
                    {
                        "type": "generalCurrentGen",
                        "sizes": [
                            {
                                "size": "m3.medium",
                                "valueColumns": [
                                    {
                                        "name": "linux",
                                        "prices": {
                                            "USD": "0.0081"
                                        }
                                    },
                                    {
                                        "name": "mswin",
                                        "prices": {
                                            "USD": "0.0711"
                                        }
                                    }
                                ]
                            },
                            {
                                "size": "m3.large",
                                "valueColumns": [
                                    {
                                        "name": "linux",
                                        "prices": {
                                            "USD": "0.0162"
                                        }
                                    },
                                    {
                                        "name": "mswin",
                                        "prices": {
                                            "USD": "0.1422"
                                        }
                                    }
                                ]
                            },
                            {
                                "size": "m3.xlarge",
                                "valueColumns": [
                                    {
                                        "name": "linux",
                                        "prices": {
                                            "USD": "0.0321"
                                        }
                                    },
                                    {
                                        "name": "mswin",
                                        "prices": {
                                            "USD": "0.1681"
                                        }
                                    }
                                ]
                            },
                            {
                                "size": "m3.2xlarge",
                                "valueColumns": [
                                    {
                                        "name": "linux",
                                        "prices": {
                                            "USD": "0.0655"
                                        }
                                    },
                                    {
                                        "name": "mswin",
                                        "prices": {
                                            "USD": "0.3361"
                                        }
                                    }
                                ]
                            }
                        ]
                    },          
                    {
                        "type": "generalPreviousGen",
                        "sizes": [
                            {
                                "size": "m1.small",
                                "valueColumns": [
                                    {
                                        "name": "linux",
                                        "prices": {
                                            "USD": "0.0081"
                                        }
                                    },
                                    {
                                        "name": "mswin",
                                        "prices": {
                                            "USD": "0.0201"
                                        }
                                    }
                                ]
                            },
                            {
                                "size": "m1.medium",
                                "valueColumns": [
                                    {
                                        "name": "linux",
                                        "prices": {
                                            "USD": "0.0081"
                                        }
                                    },
                                    {
                                        "name": "mswin",
                                        "prices": {
                                            "USD": "0.0401"
                                        }
                                    }
                                ]
                            },
                            {
                                "size": "m1.large",
                                "valueColumns": [
                                    {
                                        "name": "linux",
                                        "prices": {
                                            "USD": "0.0161"
                                        }
                                    },
                                    {
                                        "name": "mswin",
                                        "prices": {
                                            "USD": "0.0801"
                                        }
                                    }
                                ]
                            },
                            {
                                "size": "m1.xlarge",
                                "valueColumns": [
                                    {
                                        "name": "linux",
                                        "prices": {
                                            "USD": "0.0321"
                                        }
                                    },
                                    {
                                        "name": "mswin",
                                        "prices": {
                                            "USD": "0.1601"
                                        }
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        "type":"computeCurrentGen",
                        "sizes": [
                            {
                                "size": "c3.large",
                                "valueColumns": [
                                    {
                                        "name": "linux",
                                        "prices": {
                                            "USD": "0.0161"
                                        }
                                    },
                                    {
                                        "name": "mswin",
                                        "prices": {
                                            "USD": "0.0621"
                                        }
                                    }
                                ]
                            },
                            {
                                "size": "c3.xlarge",
                                "valueColumns": [
                                    {
                                        "name": "linux",
                                        "prices": {
                                            "USD": "0.0321"
                                        }
                                    },
                                    {
                                        "name": "mswin",
                                        "prices": {
                                            "USD": "0.1241"
                                        }
                                    }
                                ]
                            },
                            {
                                "size": "c3.2xlarge",
                                "valueColumns": [
                                    {
                                        "name": "linux",
                                        "prices": {
                                            "USD": "0.0645"
                                        }
                                    },
                                    {
                                        "name": "mswin",
                                        "prices": {
                                            "USD": "0.2497"
                                        }
                                    }
                                ]
                            },
                            {
                                "size": "c3.4xlarge",
                                "valueColumns": [
                                    {
                                        "name": "linux",
                                        "prices": {
                                            "USD": "0.1281"
                                        }
                                    },
                                    {
                                        "name": "mswin",
                                        "prices": {
                                            "USD": "0.497"
                                        }
                                    }
                                ]
                            },
                            {
                                "size": "c3.8xlarge",
                                "valueColumns": [
                                    {
                                        "name": "linux",
                                        "prices": {
                                            "USD": "0.4108"
                                        }
                                    },
                                    {
                                        "name": "mswin",
                                        "prices": {
                                            "USD": "1.1034"
                                        }
                                    }
                                ]
                            }                              
                        ]
                    },
                    {
                        "type": "computePreviousGen",
                        "sizes": [
                            {
                                "size": "c1.medium",
                                "valueColumns": [
                                    {
                                        "name": "linux",
                                        "prices": {
                                            "USD": "0.0161"
                                        }
                                    },
                                    {
                                        "name": "mswin",
                                        "prices": {
                                            "USD": "0.0601"
                                        }
                                    }
                                ]
                            },
                            {
                                "size": "c1.xlarge",
                                "valueColumns": [
                                    {
                                        "name": "linux",
                                        "prices": {
                                            "USD": "0.0641"
                                        }
                                    },
                                    {
                                        "name": "mswin",
                                        "prices": {
                                            "USD": "0.2401"
                                        }
                                    }
                                ]
                            },
                            {
                                "size": "cc2.8xlarge",
                                "valueColumns": [
                                    {
                                        "name": "linux",
                                        "prices": {
                                            "USD": "N/A*"
                                        }
                                    },
                                    {
                                        "name": "mswin",
                                        "prices": {
                                            "USD": "N/A*"
                                        }
                                    }
                                ]
                            }
                        ]
                    },             
                    {
                        "type": "gpuCurrentGen",
                        "sizes": [
                            {
                                  "size": "g2.2xlarge",
                                  "valueColumns": [
                                      {
                                          "name": "linux",
                                          "prices": {
                                              "USD": "0.702"
                                          }
                                      },
                                      {
                                          "name": "mswin",
                                          "prices": {
                                              "USD": "0.1557"
                                          }
                                      }
                                  ]
                             }
                        ]
                    },
                    {
                        "type": "gpuPreviousGen",
                        "sizes": [
                            {
                                "size": "cg1.4xlarge",
                                "valueColumns": [
                                    {
                                        "name": "linux",
                                        "prices": {
                                            "USD": "N/A*"
                                        }
                                    },
                                    {
                                        "name": "mswin",
                                        "prices": {
                                            "USD": "N/A*"
                                        }
                                    }
                                ]
                            }                          
                        ]
                    },
                    {
                        "type": "hiMemCurrentGen",
                        "sizes": [
                            {
                                "size": "r3.large",
                                "valueColumns": [
                                    {
                                        "name": "linux",
                                        "prices": {
                                            "USD": "0.0161"  
                                        }
                                    },
                                    {
                                        "name": "mswin",
                                        "prices": {
                                            "USD": "0.1741"
                                        }
                                    }
                                ]
                            },
                            {
                                "size": "r3.xlarge",
                                "valueColumns": [
                                    {
                                        "name": "linux",
                                        "prices": {
                                            "USD": "0.0321" 
                                        }
                                    },
                                    {
                                        "name": "mswin",
                                        "prices": {
                                            "USD": "0.2821"
                                        }
                                    }
                                ]
                            },
                            {
                                "size": "r3.2xlarge",
                                "valueColumns": [
                                    {
                                        "name": "linux",
                                        "prices": {
                                            "USD": "0.0641"
                                        }
                                    },
                                    {
                                        "name": "mswin",
                                        "prices": {
                                            "USD": "0.4441"
                                        }
                                    }
                                ]
                            },
                            {
                                "size": "r3.4xlarge",
                                "valueColumns": [
                                    {
                                        "name": "linux",
                                        "prices": {
                                            "USD": "0.1283"
                                        }
                                    },
                                    {
                                        "name": "mswin",
                                        "prices": {
                                            "USD": "0.6723"
                                        }
                                    }
                                ]
                            },
                            {
                                "size": "r3.8xlarge",
                                "valueColumns": [
                                    {
                                        "name": "linux",
                                        "prices": {
                                            "USD": "0.2564"
                                        }
                                    },
                                    {
                                        "name": "mswin",
                                        "prices": {
                                            "USD": "0.9564"
                                        }
                                    }
                                ]
                            }                           
                        ]
                    },                    
                    {
                        "type": "Memory Optimized - Previous Generation",
                        "sizes": [
                            {
                                "size": "m2.xlarge",
                                "valueColumns": [
                                    {
                                        "name": "linux",
                                        "prices": {
                                            "USD": "0.0162"
                                        }
                                    },
                                    {
                                        "name": "mswin",
                                        "prices": {
                                            "USD": "0.0991"
                                        }
                                    }
                                ]
                            },
                            {
                                "size": "m2.2xlarge",
                                "valueColumns": [
                                    {
                                        "name": "linux",
                                        "prices": {
                                            "USD": "0.0322"
                                        }
                                    },
                                    {
                                        "name": "mswin",
                                        "prices": {
                                            "USD": "0.1982"
                                        }
                                    }
                                ]
                            },
                            {
                                "size": "m2.4xlarge",
                                "valueColumns": [
                                    {
                                        "name": "linux",
                                        "prices": {
                                            "USD": "0.0641"
                                        }
                                    },
                                    {
                                        "name": "mswin",
                                        "prices": {
                                            "USD": "0.3961"
                                        }
                                    }
                                ]
                            },
                            {
                                "size": "cr1.8xlarge",
                                "valueColumns": [
                                    {
                                        "name": "linux",
                                        "prices": {
                                            "USD": "N/A*"
                                        }
                                    },
                                    {
                                        "name": "mswin",
                                        "prices": {
                                            "USD": "N/A*"
                                        }
                                    }
                                ]
                            }                            
                        ]
                    },
                    {
                        "type": "storagePreviousGen",
                        "sizes": [
                            {
                                "size": "hi1.4xlarge",
                                "valueColumns": [
                                    {
                                        "name": "linux",
                                        "prices": {
                                            "USD": "N/A*"
                                        }
                                    },
                                    {
                                        "name": "mswin",
                                        "prices": {
                                            "USD": "N/A*"
                                        }
                                    }
                                ]
                            }
                        ]
                    },                        
                    {
                        "type": "uI",
                        "sizes": [
                            {
                                "size": "t1.micro",
                                "valueColumns": [
                                    {
                                        "name": "linux",
                                        "prices": {
                                            "USD": "0.0031"
                                        }
                                    },
                                    {
                                        "name": "mswin",
                                        "prices": {
                                            "USD": "0.0061"
                                        }
                                    }
                                ]
                            }
                        ]
                    }
                ]
              },{
                "region": "eu-ireland",
                "footnotes": { 
                    "*" : "notAvailableForCCorCGPU"
                },
                "instanceTypes": [
                    {
                        "type": "generalCurrentGen",
                        "sizes": [
                            {
                                "size": "m3.medium",
                                "valueColumns": [
                                    {
                                        "name": "linux",
                                        "prices": {
                                            "USD": "0.0101"
                                        }
                                    },
                                    {
                                        "name": "mswin",
                                        "prices": {
                                            "USD": "0.0721"
                                        }
                                    }
                                ]
                            },
                            {
                                "size": "m3.large",
                                "valueColumns": [
                                    {
                                        "name": "linux",
                                        "prices": {
                                            "USD": "0.0201"
                                        }
                                    },
                                    {
                                        "name": "mswin",
                                        "prices": {
                                            "USD": "0.1431"
                                        }
                                    }
                                ]
                            },
                            {
                                "size": "m3.xlarge",
                                "valueColumns": [
                                    {
                                        "name": "linux",
                                        "prices": {
                                            "USD": "0.0407"
                                        }
                                    },
                                    {
                                        "name": "mswin",
                                        "prices": {
                                            "USD": "0.2692"
                                        }
                                    }
                                ]
                            },
                            {
                                "size": "m3.2xlarge",
                                "valueColumns": [
                                    {
                                        "name": "linux",
                                        "prices": {
                                            "USD": "0.0826"
                                        }
                                    },
                                    {
                                        "name": "mswin",
                                        "prices": {
                                            "USD": "0.5382"
                                        }
                                    }
                                ]
                            }
                        ]
                    },          
                    {
                        "type": "generalPreviousGen",
                        "sizes": [
                            {
                                "size": "m1.small",
                                "valueColumns": [
                                    {
                                        "name": "linux",
                                        "prices": {
                                            "USD": "0.0101"
                                        }
                                    },
                                    {
                                        "name": "mswin",
                                        "prices": {
                                            "USD": "0.0321"
                                        }
                                    }
                                ]
                            },
                            {
                                "size": "m1.medium",
                                "valueColumns": [
                                    {
                                        "name": "linux",
                                        "prices": {
                                            "USD": "0.0101"
                                        }
                                    },
                                    {
                                        "name": "mswin",
                                        "prices": {
                                            "USD": "0.0641"
                                        }
                                    }
                                ]
                            },
                            {
                                "size": "m1.large",
                                "valueColumns": [
                                    {
                                        "name": "linux",
                                        "prices": {
                                            "USD": "0.0201"
                                        }
                                    },
                                    {
                                        "name": "mswin",
                                        "prices": {
                                            "USD": "0.1281"
                                        }
                                    }
                                ]
                            },
                            {
                                "size": "m1.xlarge",
                                "valueColumns": [
                                    {
                                        "name": "linux",
                                        "prices": {
                                            "USD": "0.0401"
                                        }
                                    },
                                    {
                                        "name": "mswin",
                                        "prices": {
                                            "USD": "0.2561"
                                        }
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        "type":"computeCurrentGen",
                        "sizes": [
                            {
                                "size": "c3.large",
                                "valueColumns": [
                                    {
                                        "name": "linux",
                                        "prices": {
                                            "USD": "0.0201"
                                        }
                                    },
                                    {
                                        "name": "mswin",
                                        "prices": {
                                            "USD": "0.1031"
                                        }
                                    }
                                ]
                            },
                            {
                                "size": "c3.xlarge",
                                "valueColumns": [
                                    {
                                        "name": "linux",
                                        "prices": {
                                            "USD": "0.0401"
                                        }
                                    },
                                    {
                                        "name": "mswin",
                                        "prices": {
                                            "USD": "0.2061"
                                        }
                                    }
                                ]
                            },
                            {
                                "size": "c3.2xlarge",
                                "valueColumns": [
                                    {
                                        "name": "linux",
                                        "prices": {
                                            "USD": "0.0801"
                                        }
                                    },
                                    {
                                        "name": "mswin",
                                        "prices": {
                                            "USD": "0.4121"
                                        }
                                    }
                                ]
                            },
                            {
                                "size": "c3.4xlarge",
                                "valueColumns": [
                                    {
                                        "name": "linux",
                                        "prices": {
                                            "USD": "0.1601"
                                        }
                                    },
                                    {
                                        "name": "mswin",
                                        "prices": {
                                            "USD": "0.8241"
                                        }
                                    }
                                ]
                            },
                            {
                                "size": "c3.8xlarge",
                                "valueColumns": [
                                    {
                                        "name": "linux",
                                        "prices": {
                                            "USD": "0.3201"
                                        }
                                    },
                                    {
                                        "name": "mswin",
                                        "prices": {
                                            "USD": "1.6481"
                                        }
                                    }
                                ]
                            }                              
                        ]
                    },
                    {
                        "type": "computePreviousGen",
                        "sizes": [
                            {
                                "size": "c1.medium",
                                "valueColumns": [
                                    {
                                        "name": "linux",
                                        "prices": {
                                            "USD": "0.0201"
                                        }
                                    },
                                    {
                                        "name": "mswin",
                                        "prices": {
                                            "USD": "0.0961"
                                        }
                                    }
                                ]
                            },
                            {
                                "size": "c1.xlarge",
                                "valueColumns": [
                                    {
                                        "name": "linux",
                                        "prices": {
                                            "USD": "0.0801"
                                        }
                                    },
                                    {
                                        "name": "mswin",
                                        "prices": {
                                            "USD": "0.3841"
                                        }
                                    }
                                ]
                            },
                            {
                                "size": "cc2.8xlarge",
                                "valueColumns": [
                                    {
                                        "name": "linux",
                                        "prices": {
                                            "USD": "0.3201"
                                        }
                                    },
                                    {
                                        "name": "mswin",
                                        "prices": {
                                            "USD": "N/A*"
                                        }
                                    }
                                ]
                            }
                        ]
                    },             
                    {
                        "type": "gpuCurrentGen",
                        "sizes": [
                            {
                                  "size": "g2.2xlarge",
                                  "valueColumns": [
                                      {
                                          "name": "linux",
                                          "prices": {
                                              "USD": "0.0865"
                                          }
                                      },
                                      {
                                          "name": "mswin",
                                          "prices": {
                                              "USD": "0.1063"
                                          }
                                      }
                                  ]
                             }
                        ]
                    },
                    {
                        "type": "gpuPreviousGen",
                        "sizes": [
                            {
                                "size": "cg1.4xlarge",
                                "valueColumns": [
                                    {
                                        "name": "linux",
                                        "prices": {
                                            "USD": "2.36"
                                        }
                                    },
                                    {
                                        "name": "mswin",
                                        "prices": {
                                            "USD": "N/A*"
                                        }
                                    }
                                ]
                            }                          
                        ]
                    },
                    {
                        "type": "hiMemCurrentGen",
                        "sizes": [
                            {
                                "size": "r3.large",
                                "valueColumns": [
                                    {
                                        "name": "linux",
                                        "prices": {
                                            "USD": "0.0201"  
                                        }
                                    },
                                    {
                                        "name": "mswin",
                                        "prices": {
                                            "USD": "0.1781"
                                        }
                                    }
                                ]
                            },
                            {
                                "size": "r3.xlarge",
                                "valueColumns": [
                                    {
                                        "name": "linux",
                                        "prices": {
                                            "USD": "0.0401" 
                                        }
                                    },
                                    {
                                        "name": "mswin",
                                        "prices": {
                                            "USD": "0.2901"
                                        }
                                    }
                                ]
                            },
                            {
                                "size": "r3.2xlarge",
                                "valueColumns": [
                                    {
                                        "name": "linux",
                                        "prices": {
                                            "USD": "0.0801"
                                        }
                                    },
                                    {
                                        "name": "mswin",
                                        "prices": {
                                            "USD": "0.4601"
                                        }
                                    }
                                ]
                            },
                            {
                                "size": "r3.4xlarge",
                                "valueColumns": [
                                    {
                                        "name": "linux",
                                        "prices": {
                                            "USD": "0.1602"
                                        }
                                    },
                                    {
                                        "name": "mswin",
                                        "prices": {
                                            "USD": "0.7042"
                                        }
                                    }
                                ]
                            },
                            {
                                "size": "r3.8xlarge",
                                "valueColumns": [
                                    {
                                        "name": "linux",
                                        "prices": {
                                            "USD": "0.3202"
                                        }
                                    },
                                    {
                                        "name": "mswin",
                                        "prices": {
                                            "USD": "1.0202"
                                        }
                                    }
                                ]
                            }                           
                        ]
                    },                    
                    {
                        "type": "Memory Optimized - Previous Generation",
                        "sizes": [
                            {
                                "size": "m2.xlarge",
                                "valueColumns": [
                                    {
                                        "name": "linux",
                                        "prices": {
                                            "USD": "0.0201"
                                        }
                                    },
                                    {
                                        "name": "mswin",
                                        "prices": {
                                            "USD": "0.1581"
                                        }
                                    }
                                ]
                            },
                            {
                                "size": "m2.2xlarge",
                                "valueColumns": [
                                    {
                                        "name": "linux",
                                        "prices": {
                                            "USD": "0.0401"
                                        }
                                    },
                                    {
                                        "name": "mswin",
                                        "prices": {
                                            "USD": "0.3171"
                                        }
                                    }
                                ]
                            },
                            {
                                "size": "m2.4xlarge",
                                "valueColumns": [
                                    {
                                        "name": "linux",
                                        "prices": {
                                            "USD": "0.0801"
                                        }
                                    },
                                    {
                                        "name": "mswin",
                                        "prices": {
                                            "USD": "0.4801"
                                        }
                                    }
                                ]
                            },
                            {
                                "size": "cr1.8xlarge",
                                "valueColumns": [
                                    {
                                        "name": "linux",
                                        "prices": {
                                            "USD": "3.75"
                                        }
                                    },
                                    {
                                        "name": "mswin",
                                        "prices": {
                                            "USD": "N/A*"
                                        }
                                    }
                                ]
                            }                            
                        ]
                    },
                    {
                        "type": "storagePreviousGen",
                        "sizes": [
                            {
                                "size": "hi1.4xlarge",
                                "valueColumns": [
                                    {
                                        "name": "linux",
                                        "prices": {
                                            "USD": "0.1607"
                                        }
                                    },
                                    {
                                        "name": "mswin",
                                        "prices": {
                                            "USD": "0.4823"
                                        }
                                    }
                                ]
                            }
                        ]
                    },                        
                    {
                        "type": "uI",
                        "sizes": [
                            {
                                "size": "t1.micro",
                                "valueColumns": [
                                    {
                                        "name": "linux",
                                        "prices": {
                                            "USD": "0.0031"
                                        }
                                    },
                                    {
                                        "name": "mswin",
                                        "prices": {
                                            "USD": "0.0031"
                                        }
                                    }
                                ]
                            }
                        ]
                    }
                ]
              },{
                "region": "apac-sin",
                "footnotes": { 
                    "*" : "clusterOnlyInUSEast"
                },
                "instanceTypes": [
                    {
                        "type": "generalCurrentGen",
                        "sizes": [
                            {
                                "size": "m3.medium",
                                "valueColumns": [
                                    {
                                        "name": "linux",
                                        "prices": {
                                            "USD": "0.0101"
                                        }
                                    },
                                    {
                                        "name": "mswin",
                                        "prices": {
                                            "USD": "0.0721"
                                        }
                                    }
                                ]
                            },
                            {
                                "size": "m3.large",
                                "valueColumns": [
                                    {
                                        "name": "linux",
                                        "prices": {
                                            "USD": "0.0201"
                                        }
                                    },
                                    {
                                        "name": "mswin",
                                        "prices": {
                                            "USD": "0.1431"
                                        }
                                    }
                                ]
                            },
                            {
                                "size": "m3.xlarge",
                                "valueColumns": [
                                    {
                                        "name": "linux",
                                        "prices": {
                                            "USD": "0.0401"
                                        }
                                    },
                                    {
                                        "name": "mswin",
                                        "prices": {
                                            "USD": "0.1681"
                                        }
                                    }
                                ]
                            },
                            {
                                "size": "m3.2xlarge",
                                "valueColumns": [
                                    {
                                        "name": "linux",
                                        "prices": {
                                            "USD": "0.0801"
                                        }
                                    },
                                    {
                                        "name": "mswin",
                                        "prices": {
                                            "USD": "0.3351"
                                        }
                                    }
                                ]
                            }
                        ]
                    },          
                    {
                        "type": "generalPreviousGen",
                        "sizes": [
                            {
                                "size": "m1.small",
                                "valueColumns": [
                                    {
                                        "name": "linux",
                                        "prices": {
                                            "USD": "0.0102"
                                        }
                                    },
                                    {
                                        "name": "mswin",
                                        "prices": {
                                            "USD": "0.0201"
                                        }
                                    }
                                ]
                            },
                            {
                                "size": "m1.medium",
                                "valueColumns": [
                                    {
                                        "name": "linux",
                                        "prices": {
                                            "USD": "0.0101"
                                        }
                                    },
                                    {
                                        "name": "mswin",
                                        "prices": {
                                            "USD": "0.0401"
                                        }
                                    }
                                ]
                            },
                            {
                                "size": "m1.large",
                                "valueColumns": [
                                    {
                                        "name": "linux",
                                        "prices": {
                                            "USD": "0.0201"
                                        }
                                    },
                                    {
                                        "name": "mswin",
                                        "prices": {
                                            "USD": "0.0801"
                                        }
                                    }
                                ]
                            },
                            {
                                "size": "m1.xlarge",
                                "valueColumns": [
                                    {
                                        "name": "linux",
                                        "prices": {
                                            "USD": "0.0401"
                                        }
                                    },
                                    {
                                        "name": "mswin",
                                        "prices": {
                                            "USD": "0.1601"
                                        }
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        "type":"computeCurrentGen",
                        "sizes": [
                            {
                                "size": "c3.large",
                                "valueColumns": [
                                    {
                                        "name": "linux",
                                        "prices": {
                                            "USD": "0.0201"
                                        }
                                    },
                                    {
                                        "name": "mswin",
                                        "prices": {
                                            "USD": "0.1241"
                                        }
                                    }
                                ]
                            },
                            {
                                "size": "c3.xlarge",
                                "valueColumns": [
                                    {
                                        "name": "linux",
                                        "prices": {
                                            "USD": "0.0404"
                                        }
                                    },
                                    {
                                        "name": "mswin",
                                        "prices": {
                                            "USD": "0.2062"
                                        }
                                    }
                                ]
                            },
                            {
                                "size": "c3.2xlarge",
                                "valueColumns": [
                                    {
                                        "name": "linux",
                                        "prices": {
                                            "USD": "0.0804"
                                        }
                                    },
                                    {
                                        "name": "mswin",
                                        "prices": {
                                            "USD": "0.4122"
                                        }
                                    }
                                ]
                            },
                            {
                                "size": "c3.4xlarge",
                                "valueColumns": [
                                    {
                                        "name": "linux",
                                        "prices": {
                                            "USD": "0.1619"
                                        }
                                    },
                                    {
                                        "name": "mswin",
                                        "prices": {
                                            "USD": "0.8247"
                                        }
                                    }
                                ]
                            },
                            {
                                "size": "c3.8xlarge",
                                "valueColumns": [
                                    {
                                        "name": "linux",
                                        "prices": {
                                            "USD": "0.3202"
                                        }
                                    },
                                    {
                                        "name": "mswin",
                                        "prices": {
                                            "USD": "1.6481"
                                        }
                                    }
                                ]
                            }                              
                        ]
                    },
                    {
                        "type": "computePreviousGen",
                        "sizes": [
                            {
                                "size": "c1.medium",
                                "valueColumns": [
                                    {
                                        "name": "linux",
                                        "prices": {
                                            "USD": "0.0201"
                                        }
                                    },
                                    {
                                        "name": "mswin",
                                        "prices": {
                                            "USD": "0.0601"
                                        }
                                    }
                                ]
                            },
                            {
                                "size": "c1.xlarge",
                                "valueColumns": [
                                    {
                                        "name": "linux",
                                        "prices": {
                                            "USD": "0.0801"
                                        }
                                    },
                                    {
                                        "name": "mswin",
                                        "prices": {
                                            "USD": "0.2401"
                                        }
                                    }
                                ]
                            },
                            {
                                "size": "cc2.8xlarge",
                                "valueColumns": [
                                    {
                                        "name": "linux",
                                        "prices": {
                                            "USD": "N/A*"
                                        }
                                    },
                                    {
                                        "name": "mswin",
                                        "prices": {
                                            "USD": "N/A*"
                                        }
                                    }
                                ]
                            }
                        ]
                    },             
                    {
                        "type": "gpuCurrentGen",
                        "sizes": [
                            {
                                  "size": "g2.2xlarge",
                                  "valueColumns": [
                                      {
                                          "name": "linux",
                                          "prices": {
                                              "USD": "N/A*"
                                          }
                                      },
                                      {
                                          "name": "mswin",
                                          "prices": {
                                              "USD": "N/A*"
                                          }
                                      }
                                  ]
                             }
                        ]
                    },
                    {
                        "type": "gpuPreviousGen",
                        "sizes": [
                            {
                                "size": "cg1.4xlarge",
                                "valueColumns": [
                                    {
                                        "name": "linux",
                                        "prices": {
                                            "USD": "N/A*"
                                        }
                                    },
                                    {
                                        "name": "mswin",
                                        "prices": {
                                            "USD": "N/A*"
                                        }
                                    }
                                ]
                            }                          
                        ]
                    },
                    {
                        "type": "hiMemCurrentGen",
                        "sizes": [
                            {
                                "size": "r3.large",
                                "valueColumns": [
                                    {
                                        "name": "linux",
                                        "prices": {
                                            "USD": "0.0201"  
                                        }
                                    },
                                    {
                                        "name": "mswin",
                                        "prices": {
                                            "USD": "0.1781"
                                        }
                                    }
                                ]
                            },
                            {
                                "size": "r3.xlarge",
                                "valueColumns": [
                                    {
                                        "name": "linux",
                                        "prices": {
                                            "USD": "0.0401" 
                                        }
                                    },
                                    {
                                        "name": "mswin",
                                        "prices": {
                                            "USD": "0.2901"
                                        }
                                    }
                                ]
                            },
                            {
                                "size": "r3.2xlarge",
                                "valueColumns": [
                                    {
                                        "name": "linux",
                                        "prices": {
                                            "USD": "0.0801"
                                        }
                                    },
                                    {
                                        "name": "mswin",
                                        "prices": {
                                            "USD": "0.4601"
                                        }
                                    }
                                ]
                            },
                            {
                                "size": "r3.4xlarge",
                                "valueColumns": [
                                    {
                                        "name": "linux",
                                        "prices": {
                                            "USD": "0.1605"
                                        }
                                    },
                                    {
                                        "name": "mswin",
                                        "prices": {
                                            "USD": "0.7044"
                                        }
                                    }
                                ]
                            },
                            {
                                "size": "r3.8xlarge",
                                "valueColumns": [
                                    {
                                        "name": "linux",
                                        "prices": {
                                            "USD": "0.3255"
                                        }
                                    },
                                    {
                                        "name": "mswin",
                                        "prices": {
                                            "USD": "1.0283"
                                        }
                                    }
                                ]
                            }                           
                        ]
                    },                    
                    {
                        "type": "Memory Optimized - Previous Generation",
                        "sizes": [
                            {
                                "size": "m2.xlarge",
                                "valueColumns": [
                                    {
                                        "name": "linux",
                                        "prices": {
                                            "USD": "0.0202"
                                        }
                                    },
                                    {
                                        "name": "mswin",
                                        "prices": {
                                            "USD": "0.0991"
                                        }
                                    }
                                ]
                            },
                            {
                                "size": "m2.2xlarge",
                                "valueColumns": [
                                    {
                                        "name": "linux",
                                        "prices": {
                                            "USD": "0.0408"
                                        }
                                    },
                                    {
                                        "name": "mswin",
                                        "prices": {
                                            "USD": "0.1983"
                                        }
                                    }
                                ]
                            },
                            {
                                "size": "m2.4xlarge",
                                "valueColumns": [
                                    {
                                        "name": "linux",
                                        "prices": {
                                            "USD": "0.0805"
                                        }
                                    },
                                    {
                                        "name": "mswin",
                                        "prices": {
                                            "USD": "0.3965"
                                        }
                                    }
                                ]
                            },
                            {
                                "size": "cr1.8xlarge",
                                "valueColumns": [
                                    {
                                        "name": "linux",
                                        "prices": {
                                            "USD": "N/A*"
                                        }
                                    },
                                    {
                                        "name": "mswin",
                                        "prices": {
                                            "USD": "N/A*"
                                        }
                                    }
                                ]
                            }                            
                        ]
                    },
                    {
                        "type": "storagePreviousGen",
                        "sizes": [
                            {
                                "size": "hi1.4xlarge",
                                "valueColumns": [
                                    {
                                        "name": "linux",
                                        "prices": {
                                            "USD": "N/A*"
                                        }
                                    },
                                    {
                                        "name": "mswin",
                                        "prices": {
                                            "USD": "N/A*"
                                        }
                                    }
                                ]
                            }
                        ]
                    },                        
                    {
                        "type": "uI",
                        "sizes": [
                            {
                                "size": "t1.micro",
                                "valueColumns": [
                                    {
                                        "name": "linux",
                                        "prices": {
                                            "USD": "0.025"
                                        }
                                    },
                                    {
                                        "name": "mswin",
                                        "prices": {
                                            "USD": "0.0061"
                                        }
                                    }
                                ]
                            }
                        ]
                    }
                ]
              },{
                "region": "apac-tokyo",
                "footnotes": { 
                    "*" : "clusterOnlyInUSEast"
                },
                "instanceTypes": [
                    {
                        "type": "generalCurrentGen",
                        "sizes": [
                            {
                                "size": "m3.medium",
                                "valueColumns": [
                                    {
                                        "name": "linux",
                                        "prices": {
                                            "USD": "0.0101"
                                        }
                                    },
                                    {
                                        "name": "mswin",
                                        "prices": {
                                            "USD": "0.0731"
                                        }
                                    }
                                ]
                            },
                            {
                                "size": "m3.large",
                                "valueColumns": [
                                    {
                                        "name": "linux",
                                        "prices": {
                                            "USD": "0.0201"
                                        }
                                    },
                                    {
                                        "name": "mswin",
                                        "prices": {
                                            "USD": "0.1461"
                                        }
                                    }
                                ]
                            },
                            {
                                "size": "m3.xlarge",
                                "valueColumns": [
                                    {
                                        "name": "linux",
                                        "prices": {
                                            "USD": "0.0413"
                                        }
                                    },
                                    {
                                        "name": "mswin",
                                        "prices": {
                                            "USD": "0.2928"
                                        }
                                    }
                                ]
                            },
                            {
                                "size": "m3.2xlarge",
                                "valueColumns": [
                                    {
                                        "name": "linux",
                                        "prices": {
                                            "USD": "0.2947"
                                        }
                                    },
                                    {
                                        "name": "mswin",
                                        "prices": {
                                            "USD": "0.587"
                                        }
                                    }
                                ]
                            }
                        ]
                    },          
                    {
                        "type": "generalPreviousGen",
                        "sizes": [
                            {
                                "size": "m1.small",
                                "valueColumns": [
                                    {
                                        "name": "linux",
                                        "prices": {
                                            "USD": "0.0101"
                                        }
                                    },
                                    {
                                        "name": "mswin",
                                        "prices": {
                                            "USD": "0.0351"
                                        }
                                    }
                                ]
                            },
                            {
                                "size": "m1.medium",
                                "valueColumns": [
                                    {
                                        "name": "linux",
                                        "prices": {
                                            "USD": "0.0101"
                                        }
                                    },
                                    {
                                        "name": "mswin",
                                        "prices": {
                                            "USD": "0.0701"
                                        }
                                    }
                                ]
                            },
                            {
                                "size": "m1.large",
                                "valueColumns": [
                                    {
                                        "name": "linux",
                                        "prices": {
                                            "USD": "0.0201"
                                        }
                                    },
                                    {
                                        "name": "mswin",
                                        "prices": {
                                            "USD": "0.1411"
                                        }
                                    }
                                ]
                            },
                            {
                                "size": "m1.xlarge",
                                "valueColumns": [
                                    {
                                        "name": "linux",
                                        "prices": {
                                            "USD": "0.0401"
                                        }
                                    },
                                    {
                                        "name": "mswin",
                                        "prices": {
                                            "USD": "0.2821"
                                        }
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        "type":"computeCurrentGen",
                        "sizes": [
                            {
                                "size": "c3.large",
                                "valueColumns": [
                                    {
                                        "name": "linux",
                                        "prices": {
                                            "USD": "0.0202"
                                        }
                                    },
                                    {
                                        "name": "mswin",
                                        "prices": {
                                            "USD": "0.1031"
                                        }
                                    }
                                ]
                            },
                            {
                                "size": "c3.xlarge",
                                "valueColumns": [
                                    {
                                        "name": "linux",
                                        "prices": {
                                            "USD": "0.0401"
                                        }
                                    },
                                    {
                                        "name": "mswin",
                                        "prices": {
                                            "USD": "0.2061"
                                        }
                                    }
                                ]
                            },
                            {
                                "size": "c3.2xlarge",
                                "valueColumns": [
                                    {
                                        "name": "linux",
                                        "prices": {
                                            "USD": "0.0804"
                                        }
                                    },
                                    {
                                        "name": "mswin",
                                        "prices": {
                                            "USD": "0.4121"
                                        }
                                    }
                                ]
                            },
                            {
                                "size": "c3.4xlarge",
                                "valueColumns": [
                                    {
                                        "name": "linux",
                                        "prices": {
                                            "USD": "0.161"
                                        }
                                    },
                                    {
                                        "name": "mswin",
                                        "prices": {
                                            "USD": "0.8247"
                                        }
                                    }
                                ]
                            },
                            {
                                "size": "c3.8xlarge",
                                "valueColumns": [
                                    {
                                        "name": "linux",
                                        "prices": {
                                            "USD": "3.0641"
                                        }
                                    },
                                    {
                                        "name": "mswin",
                                        "prices": {
                                            "USD": "4.72"
                                        }
                                    }
                                ]
                            }                              
                        ]
                    },
                    {
                        "type": "computePreviousGen",
                        "sizes": [
                            {
                                "size": "c1.medium",
                                "valueColumns": [
                                    {
                                        "name": "linux",
                                        "prices": {
                                            "USD": "0.0201"
                                        }
                                    },
                                    {
                                        "name": "mswin",
                                        "prices": {
                                            "USD": "0.1061"
                                        }
                                    }
                                ]
                            },
                            {
                                "size": "c1.xlarge",
                                "valueColumns": [
                                    {
                                        "name": "linux",
                                        "prices": {
                                            "USD": "0.0801"
                                        }
                                    },
                                    {
                                        "name": "mswin",
                                        "prices": {
                                            "USD": "0.4001"
                                        }
                                    }
                                ]
                            },
                            {
                                "size": "cc2.8xlarge",
                                "valueColumns": [
                                    {
                                        "name": "linux",
                                        "prices": {
                                            "USD": "0.3201"
                                        }
                                    },
                                    {
                                        "name": "mswin",
                                        "prices": {
                                            "USD": "N/A*"
                                        }
                                    }
                                ]
                            }
                        ]
                    },             
                    {
                        "type": "gpuCurrentGen",
                        "sizes": [
                            {
                                  "size": "g2.2xlarge",
                                  "valueColumns": [
                                      {
                                          "name": "linux",
                                          "prices": {
                                              "USD": "0.174"
                                          }
                                      },
                                      {
                                          "name": "mswin",
                                          "prices": {
                                              "USD": "0.1147"
                                          }
                                      }
                                  ]
                             }
                        ]
                    },
                    {
                        "type": "gpuPreviousGen",
                        "sizes": [
                            {
                                "size": "cg1.4xlarge",
                                "valueColumns": [
                                    {
                                        "name": "linux",
                                        "prices": {
                                            "USD": "N/A*"
                                        }
                                    },
                                    {
                                        "name": "mswin",
                                        "prices": {
                                            "USD": "N/A*"
                                        }
                                    }
                                ]
                            }                          
                        ]
                    },
                    {
                        "type": "hiMemCurrentGen",
                        "sizes": [
                            {
                                "size": "r3.large",
                                "valueColumns": [
                                    {
                                        "name": "linux",
                                        "prices": {
                                            "USD": "0.0201"  
                                        }
                                    },
                                    {
                                        "name": "mswin",
                                        "prices": {
                                            "USD": "0.1781"
                                        }
                                    }
                                ]
                            },
                            {
                                "size": "r3.xlarge",
                                "valueColumns": [
                                    {
                                        "name": "linux",
                                        "prices": {
                                            "USD": "0.0403" 
                                        }
                                    },
                                    {
                                        "name": "mswin",
                                        "prices": {
                                            "USD": "0.2902"
                                        }
                                    }
                                ]
                            },
                            {
                                "size": "r3.2xlarge",
                                "valueColumns": [
                                    {
                                        "name": "linux",
                                        "prices": {
                                            "USD": "0.0884"
                                        }
                                    },
                                    {
                                        "name": "mswin",
                                        "prices": {
                                            "USD": "0.463"
                                        }
                                    }
                                ]
                            },
                            {
                                "size": "r3.4xlarge",
                                "valueColumns": [
                                    {
                                        "name": "linux",
                                        "prices": {
                                            "USD": "0.2143"
                                        }
                                    },
                                    {
                                        "name": "mswin",
                                        "prices": {
                                            "USD": "0.719"
                                        }
                                    }
                                ]
                            },
                            {
                                "size": "r3.8xlarge",
                                "valueColumns": [
                                    {
                                        "name": "linux",
                                        "prices": {
                                            "USD": "0.3203"
                                        }
                                    },
                                    {
                                        "name": "mswin",
                                        "prices": {
                                            "USD": "1.0203"
                                        }
                                    }
                                ]
                            }                           
                        ]
                    },                    
                    {
                        "type": "Memory Optimized - Previous Generation",
                        "sizes": [
                            {
                                "size": "m2.xlarge",
                                "valueColumns": [
                                    {
                                        "name": "linux",
                                        "prices": {
                                            "USD": "0.0201"
                                        }
                                    },
                                    {
                                        "name": "mswin",
                                        "prices": {
                                            "USD": "0.1721"
                                        }
                                    }
                                ]
                            },
                            {
                                "size": "m2.2xlarge",
                                "valueColumns": [
                                    {
                                        "name": "linux",
                                        "prices": {
                                            "USD": "0.0401"
                                        }
                                    },
                                    {
                                        "name": "mswin",
                                        "prices": {
                                            "USD": "0.3443"
                                        }
                                    }
                                ]
                            },
                            {
                                "size": "m2.4xlarge",
                                "valueColumns": [
                                    {
                                        "name": "linux",
                                        "prices": {
                                            "USD": "0.0801"
                                        }
                                    },
                                    {
                                        "name": "mswin",
                                        "prices": {
                                            "USD": "0.4802"
                                        }
                                    }
                                ]
                            },
                            {
                                "size": "cr1.8xlarge",
                                "valueColumns": [
                                    {
                                        "name": "linux",
                                        "prices": {
                                            "USD": "0.3209"
                                        }
                                    },
                                    {
                                        "name": "mswin",
                                        "prices": {
                                            "USD": "N/A*"
                                        }
                                    }
                                ]
                            }                            
                        ]
                    },
                    {
                        "type": "storagePreviousGen",
                        "sizes": [
                            {
                                "size": "hi1.4xlarge",
                                "valueColumns": [
                                    {
                                        "name": "linux",
                                        "prices": {
                                            "USD": "0.1601"
                                        }
                                    },
                                    {
                                        "name": "mswin",
                                        "prices": {
                                            "USD": "0.6181"
                                        }
                                    }
                                ]
                            }
                        ]
                    },                        
                    {
                        "type": "uI",
                        "sizes": [
                            {
                                "size": "t1.micro",
                                "valueColumns": [
                                    {
                                        "name": "linux",
                                        "prices": {
                                            "USD": "0.0031"
                                        }
                                    },
                                    {
                                        "name": "mswin",
                                        "prices": {
                                            "USD": "0.0061"
                                        }
                                    }
                                ]
                            }
                        ]
                    }
                ]
              },{
                "region": "apac-syd",
                "footnotes": { 
                    "*" : "clusterOnlyInUSEast"
                },
                "instanceTypes": [
                    {
                        "type": "generalCurrentGen",
                        "sizes": [
                            {
                                "size": "m3.medium",
                                "valueColumns": [
                                    {
                                        "name": "linux",
                                        "prices": {
                                            "USD": "0.0361"
                                        }
                                    },
                                    {
                                        "name": "mswin",
                                        "prices": {
                                            "USD": "0.0721"
                                        }
                                    }
                                ]
                            },
                            {
                                "size": "m3.large",
                                "valueColumns": [
                                    {
                                        "name": "linux",
                                        "prices": {
                                            "USD": "0.0721"
                                        }
                                    },
                                    {
                                        "name": "mswin",
                                        "prices": {
                                            "USD": "0.1431"
                                        }
                                    }
                                ]
                            },
                            {
                                "size": "m3.xlarge",
                                "valueColumns": [
                                    {
                                        "name": "linux",
                                        "prices": {
                                            "USD": "0.0881"
                                        }
                                    },
                                    {
                                        "name": "mswin",
                                        "prices": {
                                            "USD": "0.1681"
                                        }
                                    }
                                ]
                            },
                            {
                                "size": "m3.2xlarge",
                                "valueColumns": [
                                    {
                                        "name": "linux",
                                        "prices": {
                                            "USD": "0.1751"
                                        }
                                    },
                                    {
                                        "name": "mswin",
                                        "prices": {
                                            "USD": "0.3351"
                                        }
                                    }
                                ]
                            }
                        ]
                    },          
                    {
                        "type": "generalPreviousGen",
                        "sizes": [
                            {
                                "size": "m1.small",
                                "valueColumns": [
                                    {
                                        "name": "linux",
                                        "prices": {
                                            "USD": "0.0101"
                                        }
                                    },
                                    {
                                        "name": "mswin",
                                        "prices": {
                                            "USD": "0.0201"
                                        }
                                    }
                                ]
                            },
                            {
                                "size": "m1.medium",
                                "valueColumns": [
                                    {
                                        "name": "linux",
                                        "prices": {
                                            "USD": "0.0201"
                                        }
                                    },
                                    {
                                        "name": "mswin",
                                        "prices": {
                                            "USD": "0.0401"
                                        }
                                    }
                                ]
                            },
                            {
                                "size": "m1.large",
                                "valueColumns": [
                                    {
                                        "name": "linux",
                                        "prices": {
                                            "USD": "0.0401"
                                        }
                                    },
                                    {
                                        "name": "mswin",
                                        "prices": {
                                            "USD": "0.0801"
                                        }
                                    }
                                ]
                            },
                            {
                                "size": "m1.xlarge",
                                "valueColumns": [
                                    {
                                        "name": "linux",
                                        "prices": {
                                            "USD": "0.0801"
                                        }
                                    },
                                    {
                                        "name": "mswin",
                                        "prices": {
                                            "USD": "0.1601"
                                        }
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        "type":"computeCurrentGen",
                        "sizes": [
                            {
                                "size": "c3.large",
                                "valueColumns": [
                                    {
                                        "name": "linux",
                                        "prices": {
                                            "USD": "0.0161"
                                        }
                                    },
                                    {
                                        "name": "mswin",
                                        "prices": {
                                            "USD": "0.1241"
                                        }
                                    }
                                ]
                            },
                            {
                                "size": "c3.xlarge",
                                "valueColumns": [
                                    {
                                        "name": "linux",
                                        "prices": {
                                            "USD": "0.0562"
                                        }
                                    },
                                    {
                                        "name": "mswin",
                                        "prices": {
                                            "USD": "0.2483"
                                        }
                                    }
                                ]
                            },
                            {
                                "size": "c3.2xlarge",
                                "valueColumns": [
                                    {
                                        "name": "linux",
                                        "prices": {
                                            "USD": "0.1121"
                                        }
                                    },
                                    {
                                        "name": "mswin",
                                        "prices": {
                                            "USD": "0.4971"
                                        }
                                    }
                                ]
                            },
                            {
                                "size": "c3.4xlarge",
                                "valueColumns": [
                                    {
                                        "name": "linux",
                                        "prices": {
                                            "USD": "0.2244"
                                        }
                                    },
                                    {
                                        "name": "mswin",
                                        "prices": {
                                            "USD": "0.9943"
                                        }
                                    }
                                ]
                            },
                            {
                                "size": "c3.8xlarge",
                                "valueColumns": [
                                    {
                                        "name": "linux",
                                        "prices": {
                                            "USD": "0.4472"
                                        }
                                    },
                                    {
                                        "name": "mswin",
                                        "prices": {
                                            "USD": "1.9871"
                                        }
                                    }
                                ]
                            }                              
                        ]
                    },
                    {
                        "type": "computePreviousGen",
                        "sizes": [
                            {
                                "size": "c1.medium",
                                "valueColumns": [
                                    {
                                        "name": "linux",
                                        "prices": {
                                            "USD": "0.0281"
                                        }
                                    },
                                    {
                                        "name": "mswin",
                                        "prices": {
                                            "USD": "0.0601"
                                        }
                                    }
                                ]
                            },
                            {
                                "size": "c1.xlarge",
                                "valueColumns": [
                                    {
                                        "name": "linux",
                                        "prices": {
                                            "USD": "0.1101"
                                        }
                                    },
                                    {
                                        "name": "mswin",
                                        "prices": {
                                            "USD": "0.2401"
                                        }
                                    }
                                ]
                            },
                            {
                                "size": "cc2.8xlarge",
                                "valueColumns": [
                                    {
                                        "name": "linux",
                                        "prices": {
                                            "USD": "N/A*"
                                        }
                                    },
                                    {
                                        "name": "mswin",
                                        "prices": {
                                            "USD": "N/A*"
                                        }
                                    }
                                ]
                            }
                        ]
                    },             
                    {
                        "type": "gpuCurrentGen",
                        "sizes": [
                            {
                                  "size": "g2.2xlarge",
                                  "valueColumns": [
                                      {
                                          "name": "linux",
                                          "prices": {
                                              "USD": "N/A*"
                                          }
                                      },
                                      {
                                          "name": "mswin",
                                          "prices": {
                                              "USD": "N/A*"
                                          }
                                      }
                                  ]
                             }
                        ]
                    },
                    {
                        "type": "gpuPreviousGen",
                        "sizes": [
                            {
                                "size": "cg1.4xlarge",
                                "valueColumns": [
                                    {
                                        "name": "linux",
                                        "prices": {
                                            "USD": "N/A*"
                                        }
                                    },
                                    {
                                        "name": "mswin",
                                        "prices": {
                                            "USD": "N/A*"
                                        }
                                    }
                                ]
                            }                          
                        ]
                    },
                    {
                        "type": "hiMemCurrentGen",
                        "sizes": [
                            {
                                "size": "r3.large",
                                "valueColumns": [
                                    {
                                        "name": "linux",
                                        "prices": {
                                            "USD": "0.0201"  
                                        }
                                    },
                                    {
                                        "name": "mswin",
                                        "prices": {
                                            "USD": "0.1781"
                                        }
                                    }
                                ]
                            },
                            {
                                "size": "r3.xlarge",
                                "valueColumns": [
                                    {
                                        "name": "linux",
                                        "prices": {
                                            "USD": "0.0401" 
                                        }
                                    },
                                    {
                                        "name": "mswin",
                                        "prices": {
                                            "USD": "0.2901"
                                        }
                                    }
                                ]
                            },
                            {
                                "size": "r3.2xlarge",
                                "valueColumns": [
                                    {
                                        "name": "linux",
                                        "prices": {
                                            "USD": "0.0813"
                                        }
                                    },
                                    {
                                        "name": "mswin",
                                        "prices": {
                                            "USD": "0.4603"
                                        }
                                    }
                                ]
                            },
                            {
                                "size": "r3.4xlarge",
                                "valueColumns": [
                                    {
                                        "name": "linux",
                                        "prices": {
                                            "USD": "0.1614"
                                        }
                                    },
                                    {
                                        "name": "mswin",
                                        "prices": {
                                            "USD": "0.7051"
                                        }
                                    }
                                ]
                            },
                            {
                                "size": "r3.8xlarge",
                                "valueColumns": [
                                    {
                                        "name": "linux",
                                        "prices": {
                                            "USD": "0.323"
                                        }
                                    },
                                    {
                                        "name": "mswin",
                                        "prices": {
                                            "USD": "1.0226"
                                        }
                                    }
                                ]
                            }                           
                        ]
                    },                    
                    {
                        "type": "Memory Optimized - Previous Generation",
                        "sizes": [
                            {
                                "size": "m2.xlarge",
                                "valueColumns": [
                                    {
                                        "name": "linux",
                                        "prices": {
                                            "USD": "0.0596"
                                        }
                                    },
                                    {
                                        "name": "mswin",
                                        "prices": {
                                            "USD": "0.0996"
                                        }
                                    }
                                ]
                            },
                            {
                                "size": "m2.2xlarge",
                                "valueColumns": [
                                    {
                                        "name": "linux",
                                        "prices": {
                                            "USD": "0.1268"
                                        }
                                    },
                                    {
                                        "name": "mswin",
                                        "prices": {
                                            "USD": "0.1994"
                                        }
                                    }
                                ]
                            },
                            {
                                "size": "m2.4xlarge",
                                "valueColumns": [
                                    {
                                        "name": "linux",
                                        "prices": {
                                            "USD": "0.2397"
                                        }
                                    },
                                    {
                                        "name": "mswin",
                                        "prices": {
                                            "USD": "0.4026"
                                        }
                                    }
                                ]
                            },
                            {
                                "size": "cr1.8xlarge",
                                "valueColumns": [
                                    {
                                        "name": "linux",
                                        "prices": {
                                            "USD": "N/A*"
                                        }
                                    },
                                    {
                                        "name": "mswin",
                                        "prices": {
                                            "USD": "N/A*"
                                        }
                                    }
                                ]
                            }                            
                        ]
                    },
                    {
                        "type": "storagePreviousGen",
                        "sizes": [
                            {
                                "size": "hi1.4xlarge",
                                "valueColumns": [
                                    {
                                        "name": "linux",
                                        "prices": {
                                            "USD": "N/A*"
                                        }
                                    },
                                    {
                                        "name": "mswin",
                                        "prices": {
                                            "USD": "N/A*"
                                        }
                                    }
                                ]
                            }
                        ]
                    },                        
                    {
                        "type": "uI",
                        "sizes": [
                            {
                                "size": "t1.micro",
                                "valueColumns": [
                                    {
                                        "name": "linux",
                                        "prices": {
                                            "USD": "0.0041"
                                        }
                                    },
                                    {
                                        "name": "mswin",
                                        "prices": {
                                            "USD": "0.0071"
                                        }
                                    }
                                ]
                            }
                        ]
                    }
                ]
              },{
                "region": "sa-east-1",
                "footnotes": { 
                    "*" : "clusterOnlyInUSEast"
                },
                "instanceTypes": [
                    {
                        "type": "generalCurrentGen",
                        "sizes": [
                            {
                                "size": "m3.medium",
                                "valueColumns": [
                                    {
                                        "name": "linux",
                                        "prices": {
                                            "USD": "0.0101"
                                        }
                                    },
                                    {
                                        "name": "mswin",
                                        "prices": {
                                            "USD": "0.0731"
                                        }
                                    }
                                ]
                            },
                            {
                                "size": "m3.large",
                                "valueColumns": [
                                    {
                                        "name": "linux",
                                        "prices": {
                                            "USD": "0.0201"
                                        }
                                    },
                                    {
                                        "name": "mswin",
                                        "prices": {
                                            "USD": "0.1461"
                                        }
                                    }
                                ]
                            },
                            {
                                "size": "m3.xlarge",
                                "valueColumns": [
                                    {
                                        "name": "linux",
                                        "prices": {
                                            "USD": "0.0973"
                                        }
                                    },
                                    {
                                        "name": "mswin",
                                        "prices": {
                                            "USD": "0.2297"
                                        }
                                    }
                                ]
                            },
                            {
                                "size": "m3.2xlarge",
                                "valueColumns": [
                                    {
                                        "name": "linux",
                                        "prices": {
                                            "USD": "0.0954"
                                        }
                                    },
                                    {
                                        "name": "mswin",
                                        "prices": {
                                            "USD": "0.3485"
                                        }
                                    }
                                ]
                            }
                        ]
                    },          
                    {
                        "type": "generalPreviousGen",
                        "sizes": [
                            {
                                "size": "m1.small",
                                "valueColumns": [
                                    {
                                        "name": "linux",
                                        "prices": {
                                            "USD": "0.0101"
                                        }
                                    },
                                    {
                                        "name": "mswin",
                                        "prices": {
                                            "USD": "0.0211"
                                        }
                                    }
                                ]
                            },
                            {
                                "size": "m1.medium",
                                "valueColumns": [
                                    {
                                        "name": "linux",
                                        "prices": {
                                            "USD": "0.0101"
                                        }
                                    },
                                    {
                                        "name": "mswin",
                                        "prices": {
                                            "USD": "0.0421"
                                        }
                                    }
                                ]
                            },
                            {
                                "size": "m1.large",
                                "valueColumns": [
                                    {
                                        "name": "linux",
                                        "prices": {
                                            "USD": "0.0205"
                                        }
                                    },
                                    {
                                        "name": "mswin",
                                        "prices": {
                                            "USD": "0.0822"
                                        }
                                    }
                                ]
                            },
                            {
                                "size": "m1.xlarge",
                                "valueColumns": [
                                    {
                                        "name": "linux",
                                        "prices": {
                                            "USD": "0.0401"
                                        }
                                    },
                                    {
                                        "name": "mswin",
                                        "prices": {
                                            "USD": "0.1641"
                                        }
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        "type":"computeCurrentGen",
                        "sizes": [
                            {
                                "size": "c3.large",
                                "valueColumns": [
                                    {
                                        "name": "linux",
                                        "prices": {
                                            "USD": "N/A*"
                                        }
                                    },
                                    {
                                        "name": "mswin",
                                        "prices": {
                                            "USD": "N/A*"
                                        }
                                    }
                                ]
                            },
                            {
                                "size": "c3.xlarge",
                                "valueColumns": [
                                    {
                                        "name": "linux",
                                        "prices": {
                                            "USD": "N/A*"
                                        }
                                    },
                                    {
                                        "name": "mswin",
                                        "prices": {
                                            "USD": "N/A*"
                                        }
                                    }
                                ]
                            },
                            {
                                "size": "c3.2xlarge",
                                "valueColumns": [
                                    {
                                        "name": "linux",
                                        "prices": {
                                            "USD": "N/A*"
                                        }
                                    },
                                    {
                                        "name": "mswin",
                                        "prices": {
                                            "USD": "N/A*"
                                        }
                                    }
                                ]
                            },
                            {
                                "size": "c3.4xlarge",
                                "valueColumns": [
                                    {
                                        "name": "linux",
                                        "prices": {
                                            "USD": "N/A*"
                                        }
                                    },
                                    {
                                        "name": "mswin",
                                        "prices": {
                                            "USD": "N/A*"
                                        }
                                    }
                                ]
                            },
                            {
                                "size": "c3.8xlarge",
                                "valueColumns": [
                                    {
                                        "name": "linux",
                                        "prices": {
                                            "USD": "N/A*"
                                        }
                                    },
                                    {
                                        "name": "mswin",
                                        "prices": {
                                            "USD": "N/A*"
                                        }
                                    }
                                ]
                            }                              
                        ]
                    },
                    {
                        "type": "computePreviousGen",
                        "sizes": [
                            {
                                "size": "c1.medium",
                                "valueColumns": [
                                    {
                                        "name": "linux",
                                        "prices": {
                                            "USD": "0.0201"
                                        }
                                    },
                                    {
                                        "name": "mswin",
                                        "prices": {
                                            "USD": "0.0571"
                                        }
                                    }
                                ]
                            },
                            {
                                "size": "c1.xlarge",
                                "valueColumns": [
                                    {
                                        "name": "linux",
                                        "prices": {
                                            "USD": "0.0801"
                                        }
                                    },
                                    {
                                        "name": "mswin",
                                        "prices": {
                                            "USD": "0.2261"
                                        }
                                    }
                                ]
                            },
                            {
                                "size": "cc2.8xlarge",
                                "valueColumns": [
                                    {
                                        "name": "linux",
                                        "prices": {
                                            "USD": "N/A*"
                                        }
                                    },
                                    {
                                        "name": "mswin",
                                        "prices": {
                                            "USD": "N/A*"
                                        }
                                    }
                                ]
                            }
                        ]
                    },             
                    {
                        "type": "gpuCurrentGen",
                        "sizes": [
                            {
                                  "size": "g2.2xlarge",
                                  "valueColumns": [
                                      {
                                          "name": "linux",
                                          "prices": {
                                              "USD": "N/A*"
                                          }
                                      },
                                      {
                                          "name": "mswin",
                                          "prices": {
                                              "USD": "N/A*"
                                          }
                                      }
                                  ]
                             }
                        ]
                    },
                    {
                        "type": "gpuPreviousGen",
                        "sizes": [
                            {
                                "size": "cg1.4xlarge",
                                "valueColumns": [
                                    {
                                        "name": "linux",
                                        "prices": {
                                            "USD": "N/A*"
                                        }
                                    },
                                    {
                                        "name": "mswin",
                                        "prices": {
                                            "USD": "N/A*"
                                        }
                                    }
                                ]
                            }                          
                        ]
                    },
                    {
                        "type": "hiMemCurrentGen",
                        "sizes": [
                            {
                                "size": "r3.large",
                                "valueColumns": [
                                    {
                                        "name": "linux",
                                        "prices": {
                                            "USD": "N/A*"  
                                        }
                                    },
                                    {
                                        "name": "mswin",
                                        "prices": {
                                            "USD": "N/A*"
                                        }
                                    }
                                ]
                            },
                            {
                                "size": "r3.xlarge",
                                "valueColumns": [
                                    {
                                        "name": "linux",
                                        "prices": {
                                            "USD": "N/A*" 
                                        }
                                    },
                                    {
                                        "name": "mswin",
                                        "prices": {
                                            "USD": "N/A*"
                                        }
                                    }
                                ]
                            },
                            {
                                "size": "r3.2xlarge",
                                "valueColumns": [
                                    {
                                        "name": "linux",
                                        "prices": {
                                            "USD": "N/A*"
                                        }
                                    },
                                    {
                                        "name": "mswin",
                                        "prices": {
                                            "USD": "N/A*"
                                        }
                                    }
                                ]
                            },
                            {
                                "size": "r3.4xlarge",
                                "valueColumns": [
                                    {
                                        "name": "linux",
                                        "prices": {
                                            "USD": "N/A*"
                                        }
                                    },
                                    {
                                        "name": "mswin",
                                        "prices": {
                                            "USD": "N/A*"
                                        }
                                    }
                                ]
                            },
                            {
                                "size": "r3.8xlarge",
                                "valueColumns": [
                                    {
                                        "name": "linux",
                                        "prices": {
                                            "USD": "N/A*"
                                        }
                                    },
                                    {
                                        "name": "mswin",
                                        "prices": {
                                            "USD": "N/A*"
                                        }
                                    }
                                ]
                            }                           
                        ]
                    },                    
                    {
                        "type": "Memory Optimized - Previous Generation",
                        "sizes": [
                            {
                                "size": "m2.xlarge",
                                "valueColumns": [
                                    {
                                        "name": "linux",
                                        "prices": {
                                            "USD": "0.0209"
                                        }
                                    },
                                    {
                                        "name": "mswin",
                                        "prices": {
                                            "USD": "0.0977"
                                        }
                                    }
                                ]
                            },
                            {
                                "size": "m2.2xlarge",
                                "valueColumns": [
                                    {
                                        "name": "linux",
                                        "prices": {
                                            "USD": "0.0407"
                                        }
                                    },
                                    {
                                        "name": "mswin",
                                        "prices": {
                                            "USD": "0.1934"
                                        }
                                    }
                                ]
                            },
                            {
                                "size": "m2.4xlarge",
                                "valueColumns": [
                                    {
                                        "name": "linux",
                                        "prices": {
                                            "USD": "0.0802"
                                        }
                                    },
                                    {
                                        "name": "mswin",
                                        "prices": {
                                            "USD": "0.3861"
                                        }
                                    }
                                ]
                            },
                            {
                                "size": "cr1.8xlarge",
                                "valueColumns": [
                                    {
                                        "name": "linux",
                                        "prices": {
                                            "USD": "N/A*"
                                        }
                                    },
                                    {
                                        "name": "mswin",
                                        "prices": {
                                            "USD": "N/A*"
                                        }
                                    }
                                ]
                            }                            
                        ]
                    },
                    {
                        "type": "storagePreviousGen",
                        "sizes": [
                            {
                                "size": "hi1.4xlarge",
                                "valueColumns": [
                                    {
                                        "name": "linux",
                                        "prices": {
                                            "USD": "N/A*"
                                        }
                                    },
                                    {
                                        "name": "mswin",
                                        "prices": {
                                            "USD": "N/A*"
                                        }
                                    }
                                ]
                            }
                        ]
                    },                        
                    {
                        "type": "uI",
                        "sizes": [
                            {
                                "size": "t1.micro",
                                "valueColumns": [
                                    {
                                        "name": "linux",
                                        "prices": {
                                            "USD": "0.0031"
                                        }
                                    },
                                    {
                                        "name": "mswin",
                                        "prices": {
                                            "USD": "0.0061"
                                        }
                                    }
                                ]
                            }
                        ]
                    }
                ]
              }]}})