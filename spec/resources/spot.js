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
                                            "USD": "0.1839"
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
                                            "USD": "0.3776"
                                        }
                                    },
                                    {
                                        "name": "mswin",
                                        "prices": {
                                            "USD": "0.2927"
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
                                            "USD": "0.0643"
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
                                            "USD": "0.1358"
                                        }
                                    },
                                    {
                                        "name": "mswin",
                                        "prices": {
                                            "USD": "0.7938"
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
                                            "USD": "0.2562"
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
                                              "USD": "0.08"
                                          }
                                      },
                                      {
                                          "name": "mswin",
                                          "prices": {
                                              "USD": "0.105"
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
                                            "USD": "0.0651"
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
                                            "USD": "0.4963"
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
                                            "USD": "0.0221"
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
                                            "USD": "0.0431"
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
                                            "USD": "0.0932"
                                        }
                                    },
                                    {
                                        "name": "mswin",
                                        "prices": {
                                            "USD": "0.2207"
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
                                            "USD": "0.1859"
                                        }
                                    },
                                    {
                                        "name": "mswin",
                                        "prices": {
                                            "USD": "0.4415"
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
                                            "USD": "0.0211"
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
                                            "USD": "0.0421"
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
                                            "USD": "0.0831"
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
                                            "USD": "0.0321"
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
                                            "USD": "0.0644"
                                        }
                                    },
                                    {
                                        "name": "mswin",
                                        "prices": {
                                            "USD": "0.2071"
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
                                            "USD": "0.1281"
                                        }
                                    },
                                    {
                                        "name": "mswin",
                                        "prices": {
                                            "USD": "0.4141"
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
                                            "USD": "0.2571"
                                        }
                                    },
                                    {
                                        "name": "mswin",
                                        "prices": {
                                            "USD": "0.8281"
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
                                            "USD": "0.5131"
                                        }
                                    },
                                    {
                                        "name": "mswin",
                                        "prices": {
                                            "USD": "1.6561"
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
                                            "USD": "0.1121"
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
                                            "USD": "0.2534"
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
                                              "USD": "0.111"
                                          }
                                      },
                                      {
                                          "name": "mswin",
                                          "prices": {
                                              "USD": "0.1142"
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
                                            "USD": "0.2566"
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
                                            "USD": "0.0561"
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
                                            "USD": "0.1126"
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
                                            "USD": "0.2241"
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
                                            "USD": "0.6588"
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
                                            "USD": "0.2411"
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
                                            "USD": "0.0041"
                                        }
                                    },
                                    {
                                        "name": "mswin",
                                        "prices": {
                                            "USD": "0.0091"
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
                                            "USD": "0.0332"
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
                                            "USD": "0.0661"
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
                                            "USD": "0.0952"
                                        }
                                    },
                                    {
                                        "name": "mswin",
                                        "prices": {
                                            "USD": "0.1695"
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
                                            "USD": "0.1851"
                                        }
                                    },
                                    {
                                        "name": "mswin",
                                        "prices": {
                                            "USD": "0.3466"
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
                                            "USD": "0.0261"
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
                                            "USD": "0.0511"
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
                                            "USD": "0.103"
                                        }
                                    },
                                    {
                                        "name": "mswin",
                                        "prices": {
                                            "USD": "0.25"
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
                                            "USD": "0.2031"
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
                                            "USD": "0.5514"
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
                                              "USD": "0.111"
                                          }
                                      },
                                      {
                                          "name": "mswin",
                                          "prices": {
                                              "USD": "0.1137"
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
                                            "USD": "0.2572"
                                        }
                                    },
                                    {
                                        "name": "mswin",
                                        "prices": {
                                            "USD": "0.9571"
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
                                            "USD": "0.0604"
                                        }
                                    },
                                    {
                                        "name": "mswin",
                                        "prices": {
                                            "USD": "0.0992"
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
                                            "USD": "0.1182"
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
                                            "USD": "0.2361"
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
                                            "USD": "0.0411"
                                        }
                                    },
                                    {
                                        "name": "mswin",
                                        "prices": {
                                            "USD": "0.2689"
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
                                            "USD": "0.0204"
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
                                              "USD": "0.111"
                                          }
                                      },
                                      {
                                          "name": "mswin",
                                          "prices": {
                                              "USD": "0.1077"
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
                                            "USD": "0.7041"
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
                                            "USD": "0.3225"
                                        }
                                    },
                                    {
                                        "name": "mswin",
                                        "prices": {
                                            "USD": "1.025"
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
                                            "USD": "0.1603"
                                        }
                                    },
                                    {
                                        "name": "mswin",
                                        "prices": {
                                            "USD": "0.4816"
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
                                            "USD": "0.0102"
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
                                            "USD": "0.0991"
                                        }
                                    },
                                    {
                                        "name": "mswin",
                                        "prices": {
                                            "USD": "0.1948"
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
                                            "USD": "0.1981"
                                        }
                                    },
                                    {
                                        "name": "mswin",
                                        "prices": {
                                            "USD": "0.3886"
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
                                            "USD": "0.0202"
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
                                            "USD": "0.0406"
                                        }
                                    },
                                    {
                                        "name": "mswin",
                                        "prices": {
                                            "USD": "0.2064"
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
                                            "USD": "0.0803"
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
                                            "USD": "0.1647"
                                        }
                                    },
                                    {
                                        "name": "mswin",
                                        "prices": {
                                            "USD": "0.8253"
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
                                            "USD": "0.3204"
                                        }
                                    },
                                    {
                                        "name": "mswin",
                                        "prices": {
                                            "USD": "1.6482"
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
                                            "USD": "0.0802"
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
                                            "USD": "0.1604"
                                        }
                                    },
                                    {
                                        "name": "mswin",
                                        "prices": {
                                            "USD": "0.7043"
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
                                            "USD": "0.3345"
                                        }
                                    },
                                    {
                                        "name": "mswin",
                                        "prices": {
                                            "USD": "1.0342"
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
                                            "USD": "0.0203"
                                        }
                                    },
                                    {
                                        "name": "mswin",
                                        "prices": {
                                            "USD": "0.0992"
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
                                            "USD": "0.99"
                                        }
                                    },
                                    {
                                        "name": "mswin",
                                        "prices": {
                                            "USD": "0.2046"
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
                                            "USD": "0.0991"
                                        }
                                    },
                                    {
                                        "name": "mswin",
                                        "prices": {
                                            "USD": "0.4044"
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
                                            "USD": "0.0032"
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
                                            "USD": "0.0204"
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
                                            "USD": "0.0455"
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
                                            "USD": "0.1364"
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
                                            "USD": "0.0814"
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
                                            "USD": "0.1738"
                                        }
                                    },
                                    {
                                        "name": "mswin",
                                        "prices": {
                                            "USD": "0.8319"
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
                                            "USD": "0.4298"
                                        }
                                    },
                                    {
                                        "name": "mswin",
                                        "prices": {
                                            "USD": "1.6575"
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
                                              "USD": "0.943"
                                          }
                                      },
                                      {
                                          "name": "mswin",
                                          "prices": {
                                              "USD": "0.1456"
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
                                            "USD": "0.0202"  
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
                                            "USD": "0.0419" 
                                        }
                                    },
                                    {
                                        "name": "mswin",
                                        "prices": {
                                            "USD": "0.2914"
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
                                            "USD": "0.1162"
                                        }
                                    },
                                    {
                                        "name": "mswin",
                                        "prices": {
                                            "USD": "0.4811"
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
                                            "USD": "0.7789"
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
                                            "USD": "0.4286"
                                        }
                                    },
                                    {
                                        "name": "mswin",
                                        "prices": {
                                            "USD": "1.1739"
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
                                            "USD": "0.0722"
                                        }
                                    },
                                    {
                                        "name": "mswin",
                                        "prices": {
                                            "USD": "0.1434"
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
                                            "USD": "0.0944"
                                        }
                                    },
                                    {
                                        "name": "mswin",
                                        "prices": {
                                            "USD": "0.1704"
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
                                            "USD": "0.2138"
                                        }
                                    },
                                    {
                                        "name": "mswin",
                                        "prices": {
                                            "USD": "0.3493"
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
                                            "USD": "0.2482"
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
                                            "USD": "0.2258"
                                        }
                                    },
                                    {
                                        "name": "mswin",
                                        "prices": {
                                            "USD": "0.9951"
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
                                            "USD": "1.9872"
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
                                            "USD": "0.0815"
                                        }
                                    },
                                    {
                                        "name": "mswin",
                                        "prices": {
                                            "USD": "0.4604"
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
                                            "USD": "0.1616"
                                        }
                                    },
                                    {
                                        "name": "mswin",
                                        "prices": {
                                            "USD": "0.7053"
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
                                            "USD": "3.36"
                                        }
                                    },
                                    {
                                        "name": "mswin",
                                        "prices": {
                                            "USD": "1.9151"
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
                                            "USD": "0.0595"
                                        }
                                    },
                                    {
                                        "name": "mswin",
                                        "prices": {
                                            "USD": "0.0993"
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
                                            "USD": "0.1202"
                                        }
                                    },
                                    {
                                        "name": "mswin",
                                        "prices": {
                                            "USD": "0.1999"
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
                                            "USD": "0.2368"
                                        }
                                    },
                                    {
                                        "name": "mswin",
                                        "prices": {
                                            "USD": "0.3968"
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
                                            "USD": "0.0301"
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
                                            "USD": "0.0611"
                                        }
                                    },
                                    {
                                        "name": "mswin",
                                        "prices": {
                                            "USD": "0.1471"
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
                                            "USD": "0.1245"
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
                                            "USD": "0.2121"
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
                                            "USD": "0.0111"
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
                                            "USD": "0.0221"
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
                                            "USD": "0.0424"
                                        }
                                    },
                                    {
                                        "name": "mswin",
                                        "prices": {
                                            "USD": "0.0823"
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
                                            "USD": "0.0841"
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
                                            "USD": "0.0241"
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
                                            "USD": "0.0961"
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
                                            "USD": "0.0629"
                                        }
                                    },
                                    {
                                        "name": "mswin",
                                        "prices": {
                                            "USD": "0.0978"
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
                                            "USD": "0.1235"
                                        }
                                    },
                                    {
                                        "name": "mswin",
                                        "prices": {
                                            "USD": "0.1933"
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
                                            "USD": "0.2462"
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
              }]}})