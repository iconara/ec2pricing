callback({"vers": 0.01,"config": {"rate": "perhr","valueColumns": ["linux", "mswin"],"currencies": ["USD"],"regions": [{
                "region": "us-east",
                "footnotes": { 
                    "*" : "notAvailableForCCorCGPU"
                },
                "instanceTypes": [
                    {
                        "type": "stdSpot",
                        "sizes": [
                            {
                                "size": "m1.small",
                                "valueColumns": [
                                    {
                                        "name": "linux",
                                        "prices": {
                                            "USD": "0.007"
                                        }
                                    },
                                    {
                                        "name": "mswin",
                                        "prices": {
                                            "USD": "0.017"
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
                                            "USD": "0.013"
                                        }
                                    },
                                    {
                                        "name": "mswin",
                                        "prices": {
                                            "USD": "0.033"
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
                                            "USD": "0.026"
                                        }
                                    },
                                    {
                                        "name": "mswin",
                                        "prices": {
                                            "USD": "0.066"
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
                                            "USD": "0.052"
                                        }
                                    },
                                    {
                                        "name": "mswin",
                                        "prices": {
                                            "USD": "0.132"
                                        }
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        "type": "secgenstdSpot",
                        "sizes": [
                            {
                                "size": "m3.xlarge",
                                "valueColumns": [
                                    {
                                        "name": "linux",
                                        "prices": {
                                            "USD": "0.0575"
                                        }
                                    },
                                    {
                                        "name": "mswin",
                                        "prices": {
                                            "USD": "0.1375"
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
                                            "USD": "0.115"
                                        }
                                    },
                                    {
                                        "name": "mswin",
                                        "prices": {
                                            "USD": "0.275"
                                        }
                                    }
                                ]
                            }
                        ]
                    },          
                    {
                        "type": "uSpot",
                        "sizes": [
                            {
                                "size": "t1.micro",
                                "valueColumns": [
                                    {
                                        "name": "linux",
                                        "prices": {
                                            "USD": "0.003"
                                        }
                                    },
                                    {
                                        "name": "mswin",
                                        "prices": {
                                            "USD": "0.006"
                                        }
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        "type": "hiMemSpot",
                        "sizes": [
                            {
                                "size": "m2.xlarge",
                                "valueColumns": [
                                    {
                                        "name": "linux",
                                        "prices": {
                                            "USD": "0.035"
                                        }
                                    },
                                    {
                                        "name": "mswin",
                                        "prices": {
                                            "USD": "0.07"
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
                                            "USD": "0.07"
                                        }
                                    },
                                    {
                                        "name": "mswin",
                                        "prices": {
                                            "USD": "0.14"
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
                                            "USD": "0.14"
                                        }
                                    },
                                    {
                                        "name": "mswin",
                                        "prices": {
                                            "USD": "0.28"
                                        }
                                    }
                                ]
                            }
                        ]
                    },          
                    {
                        "type": "hiCPUSpot",
                        "sizes": [
                            {
                                "size": "c1.medium",
                                "valueColumns": [
                                    {
                                        "name": "linux",
                                        "prices": {
                                            "USD": "0.018"
                                        }
                                    },
                                    {
                                        "name": "mswin",
                                        "prices": {
                                            "USD": "0.05"
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
                                            "USD": "0.09"
                                        }
                                    },
                                    {
                                        "name": "mswin",
                                        "prices": {
                                            "USD": "0.2"
                                        }
                                    }
                                ]
                            },
                            {
                                  "size": "c3.large",
                                  "valueColumns": [
                                      {
                                          "name": "linux",
                                          "prices": {
                                              "USD": "0.032"
                                          }
                                      },
                                      {
                                          "name": "mswin",
                                          "prices": {
                                              "USD": "0.104"
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
                                              "USD": "0.064"
                                          }
                                      },
                                      {
                                          "name": "mswin",
                                          "prices": {
                                              "USD": "0.207"
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
                                              "USD": "0.16"
                                          }
                                      },
                                      {
                                          "name": "mswin",
                                          "prices": {
                                              "USD": "0.414"
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
                                              "USD": "0.5"
                                          }
                                      },
                                      {
                                          "name": "mswin",
                                          "prices": {
                                              "USD": "0.828"
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
                                              "USD": "0.513"
                                          }
                                      },
                                      {
                                          "name": "mswin",
                                          "prices": {
                                              "USD": "1.656"
                                          }
                                      }
                                  ]
                            },
                        ]
                    },
                    {
                        "type": "clusterComputeI",
                        "sizes": [
                            {
                                "size": "cc1.4xlarge",
                                "valueColumns": [
                                    {
                                        "name": "linux",
                                        "prices": {
                                            "USD": "0.208"
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
                                "size": "cc2.8xlarge",
                                "valueColumns": [
                                    {
                                        "name": "linux",
                                        "prices": {
                                            "USD": "0.27"
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
                        "type": "clusterHiMemSpot",
                        "sizes": [
                            {
                                "size": "cr1.8xlarge",
                                "valueColumns": [
                                    {
                                        "name": "linux",
                                        "prices": {
                                            "USD": "0.343"
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
                        "type": "GPUI",
                        "sizes": [
                            {
                                  "size": "g2.2xlarge",
                                  "valueColumns": [
                                      {
                                          "name": "linux",
                                          "prices": {
                                              "USD": "0.075"
                                          }
                                      },
                                      {
                                          "name": "mswin",
                                          "prices": {
                                              "USD": "0.104"
                                          }
                                      }
                                  ]
                            },
                            {
                                "size": "cg1.4xlarge",
                                "valueColumns": [
                                    {
                                        "name": "linux",
                                        "prices": {
                                            "USD": "0.346"
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
                    }
                ]
              },{
                "region": "us-west-2",
                "footnotes": { 
                    "*" : "clusterOnlyInUSEast"
                },
                "instanceTypes": [
                    {
                        "type": "stdSpot",
                        "sizes": [
                            {
                                "size": "m1.small",
                                "valueColumns": [
                                    {
                                        "name": "linux",
                                        "prices": {
                                            "USD": "0.01"
                                        }
                                    },
                                    {
                                        "name": "mswin",
                                        "prices": {
                                            "USD": "0.026"
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
                                            "USD": "0.021"
                                        }
                                    },
                                    {
                                        "name": "mswin",
                                        "prices": {
                                            "USD": "0.053"
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
                                            "USD": "0.042"
                                        }
                                    },
                                    {
                                        "name": "mswin",
                                        "prices": {
                                            "USD": "0.106"
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
                                            "USD": "0.083"
                                        }
                                    },
                                    {
                                        "name": "mswin",
                                        "prices": {
                                            "USD": "0.211"
                                        }
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        "type": "secgenstdSpot",
                        "sizes": [
                            {
                                "size": "m3.xlarge",
                                "valueColumns": [
                                    {
                                        "name": "linux",
                                        "prices": {
                                            "USD": "0.092"
                                        }
                                    },
                                    {
                                        "name": "mswin",
                                        "prices": {
                                            "USD": "0.22"
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
                                            "USD": "0.183"
                                        }
                                    },
                                    {
                                        "name": "mswin",
                                        "prices": {
                                            "USD": "0.439"
                                        }
                                    }
                                ]
                            }
                        ]
                    },          
                    {
                        "type": "uSpot",
                        "sizes": [
                            {
                                "size": "t1.micro",
                                "valueColumns": [
                                    {
                                        "name": "linux",
                                        "prices": {
                                            "USD": "0.004"
                                        }
                                    },
                                    {
                                        "name": "mswin",
                                        "prices": {
                                            "USD": "0.009"
                                        }
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        "type": "hiMemSpot",
                        "sizes": [
                            {
                                "size": "m2.xlarge",
                                "valueColumns": [
                                    {
                                        "name": "linux",
                                        "prices": {
                                            "USD": "0.056"
                                        }
                                    },
                                    {
                                        "name": "mswin",
                                        "prices": {
                                            "USD": "0.112"
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
                                            "USD": "0.112"
                                        }
                                    },
                                    {
                                        "name": "mswin",
                                        "prices": {
                                            "USD": "0.224"
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
                                            "USD": "0.224"
                                        }
                                    },
                                    {
                                        "name": "mswin",
                                        "prices": {
                                            "USD": "0.448"
                                        }
                                    }
                                ]
                            }
                        ]
                    },          
                    {
                        "type": "hiCPUSpot",
                        "sizes": [
                            {
                                "size": "c1.medium",
                                "valueColumns": [
                                    {
                                        "name": "linux",
                                        "prices": {
                                            "USD": "0.028"
                                        }
                                    },
                                    {
                                        "name": "mswin",
                                        "prices": {
                                            "USD": "0.08"
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
                                            "USD": "0.112"
                                        }
                                    },
                                    {
                                        "name": "mswin",
                                        "prices": {
                                            "USD": "0.32"
                                        }
                                    }
                                ]
                            },
                            {
                                  "size": "c3.large",
                                  "valueColumns": [
                                      {
                                          "name": "linux",
                                          "prices": {
                                              "USD": "0.032"
                                          }
                                      },
                                      {
                                          "name": "mswin",
                                          "prices": {
                                              "USD": "0.104"
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
                                              "USD": "0.064"
                                          }
                                      },
                                      {
                                          "name": "mswin",
                                          "prices": {
                                              "USD": "0.207"
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
                                              "USD": "0.25"
                                          }
                                      },
                                      {
                                          "name": "mswin",
                                          "prices": {
                                              "USD": "0.414"
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
                                              "USD": "0.257"
                                          }
                                      },
                                      {
                                          "name": "mswin",
                                          "prices": {
                                              "USD": "0.828"
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
                                              "USD": "0.513"
                                          }
                                      },
                                      {
                                          "name": "mswin",
                                          "prices": {
                                              "USD": "1.656"
                                          }
                                      }
                                  ]
                            },
                        ]
                    },
                    {
                        "type": "clusterComputeI",
                        "sizes": [
                            {
                                "size": "cc1.4xlarge",
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
                                "size": "cc2.8xlarge",
                                "valueColumns": [
                                    {
                                        "name": "linux",
                                        "prices": {
                                            "USD": "0.253"
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
                        "type": "clusterHiMemSpot",
                        "sizes": [
                            {
                                "size": "cr1.8xlarge",
                                "valueColumns": [
                                    {
                                        "name": "linux",
                                        "prices": {
                                            "USD": "0.343"
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
                        "type": "GPUI",
                        "sizes": [
                            {
                                  "size": "g2.2xlarge",
                                  "valueColumns": [
                                      {
                                          "name": "linux",
                                          "prices": {
                                              "USD": "0.075"
                                          }
                                      },
                                      {
                                          "name": "mswin",
                                          "prices": {
                                              "USD": "0.104"
                                          }
                                      }
                                  ]
                            },
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
                    }
                ]
              },{
                "region": "us-west",
                "footnotes": { 
                    "*" : "clusterOnlyInUSEast"
                },
                "instanceTypes": [
                    {
                        "type": "stdSpot",
                        "sizes": [
                            {
                                "size": "m1.small",
                                "valueColumns": [
                                    {
                                        "name": "linux",
                                        "prices": {
                                            "USD": "0.01"
                                        }
                                    },
                                    {
                                        "name": "mswin",
                                        "prices": {
                                            "USD": "0.02"
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
                                            "USD": "0.02"
                                        }
                                    },
                                    {
                                        "name": "mswin",
                                        "prices": {
                                            "USD": "0.04"
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
                                            "USD": "0.04"
                                        }
                                    },
                                    {
                                        "name": "mswin",
                                        "prices": {
                                            "USD": "0.08"
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
                                            "USD": "0.08"
                                        }
                                    },
                                    {
                                        "name": "mswin",
                                        "prices": {
                                            "USD": "0.16"
                                        }
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        "type": "secgenstdSpot",
                        "sizes": [
                            {
                                "size": "m3.xlarge",
                                "valueColumns": [
                                    {
                                        "name": "linux",
                                        "prices": {
                                            "USD": "0.088"
                                        }
                                    },
                                    {
                                        "name": "mswin",
                                        "prices": {
                                            "USD": "0.168"
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
                                            "USD": "0.175"
                                        }
                                    },
                                    {
                                        "name": "mswin",
                                        "prices": {
                                            "USD": "0.335"
                                        }
                                    }
                                ]
                            }
                        ]
                    },          
                    {
                        "type": "uSpot",
                        "sizes": [
                            {
                                "size": "t1.micro",
                                "valueColumns": [
                                    {
                                        "name": "linux",
                                        "prices": {
                                            "USD": "0.004"
                                        }
                                    },
                                    {
                                        "name": "mswin",
                                        "prices": {
                                            "USD": "0.007"
                                        }
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        "type": "hiMemSpot",
                        "sizes": [
                            {
                                "size": "m2.xlarge",
                                "valueColumns": [
                                    {
                                        "name": "linux",
                                        "prices": {
                                            "USD": "0.059"
                                        }
                                    },
                                    {
                                        "name": "mswin",
                                        "prices": {
                                            "USD": "0.099"
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
                                            "USD": "0.118"
                                        }
                                    },
                                    {
                                        "name": "mswin",
                                        "prices": {
                                            "USD": "0.198"
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
                                            "USD": "0.236"
                                        }
                                    },
                                    {
                                        "name": "mswin",
                                        "prices": {
                                            "USD": "0.396"
                                        }
                                    }
                                ]
                            }
                        ]
                    },          
                    {
                        "type": "hiCPUSpot",
                        "sizes": [
                            {
                                "size": "c1.medium",
                                "valueColumns": [
                                    {
                                        "name": "linux",
                                        "prices": {
                                            "USD": "0.028"
                                        }
                                    },
                                    {
                                        "name": "mswin",
                                        "prices": {
                                            "USD": "0.06"
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
                                            "USD": "0.11"
                                        }
                                    },
                                    {
                                        "name": "mswin",
                                        "prices": {
                                            "USD": "0.24"
                                        }
                                    }
                                ]
                            },
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
                            },
                        ]
                    },
                    {
                        "type": "clusterComputeI",
                        "sizes": [
                            {
                                "size": "cc1.4xlarge",
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
                        "type": "clusterHiMemSpot",
                        "sizes": [
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
                        "type": "GPUI",
                        "sizes": [
                            {
                                  "size": "g2.2xlarge",
                                  "valueColumns": [
                                      {
                                          "name": "linux",
                                          "prices": {
                                              "USD": "0.081"
                                          }
                                      },
                                      {
                                          "name": "mswin",
                                          "prices": {
                                              "USD": "0.11"
                                          }
                                      }
                                  ]
                            },
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
                    }
                ]
              },{
                "region": "eu-ireland",
                "footnotes": { 
                    "*" : "notAvailableForCCorCGPU"
                },
                "instanceTypes": [
                    {
                        "type": "stdSpot",
                        "sizes": [
                            {
                                "size": "m1.small",
                                "valueColumns": [
                                    {
                                        "name": "linux",
                                        "prices": {
                                            "USD": "0.016"
                                        }
                                    },
                                    {
                                        "name": "mswin",
                                        "prices": {
                                            "USD": "0.032"
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
                                            "USD": "0.032"
                                        }
                                    },
                                    {
                                        "name": "mswin",
                                        "prices": {
                                            "USD": "0.064"
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
                                            "USD": "0.064"
                                        }
                                    },
                                    {
                                        "name": "mswin",
                                        "prices": {
                                            "USD": "0.128"
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
                                            "USD": "0.128"
                                        }
                                    },
                                    {
                                        "name": "mswin",
                                        "prices": {
                                            "USD": "0.256"
                                        }
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        "type": "secgenstdSpot",
                        "sizes": [
                            {
                                "size": "m3.xlarge",
                                "valueColumns": [
                                    {
                                        "name": "linux",
                                        "prices": {
                                            "USD": "0.14"
                                        }
                                    },
                                    {
                                        "name": "mswin",
                                        "prices": {
                                            "USD": "0.268"
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
                                            "USD": "0.28"
                                        }
                                    },
                                    {
                                        "name": "mswin",
                                        "prices": {
                                            "USD": "0.536"
                                        }
                                    }
                                ]
                            }
                        ]
                    },          
                    {
                        "type": "uSpot",
                        "sizes": [
                            {
                                "size": "t1.micro",
                                "valueColumns": [
                                    {
                                        "name": "linux",
                                        "prices": {
                                            "USD": "0.006"
                                        }
                                    },
                                    {
                                        "name": "mswin",
                                        "prices": {
                                            "USD": "0.011"
                                        }
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        "type": "hiMemSpot",
                        "sizes": [
                            {
                                "size": "m2.xlarge",
                                "valueColumns": [
                                    {
                                        "name": "linux",
                                        "prices": {
                                            "USD": "0.094"
                                        }
                                    },
                                    {
                                        "name": "mswin",
                                        "prices": {
                                            "USD": "0.158"
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
                                            "USD": "0.189"
                                        }
                                    },
                                    {
                                        "name": "mswin",
                                        "prices": {
                                            "USD": "0.317"
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
                                            "USD": "0.378"
                                        }
                                    },
                                    {
                                        "name": "mswin",
                                        "prices": {
                                            "USD": "0.634"
                                        }
                                    }
                                ]
                            }
                        ]
                    },          
                    {
                        "type": "hiCPUSpot",
                        "sizes": [
                            {
                                "size": "c1.medium",
                                "valueColumns": [
                                    {
                                        "name": "linux",
                                        "prices": {
                                            "USD": "0.044"
                                        }
                                    },
                                    {
                                        "name": "mswin",
                                        "prices": {
                                            "USD": "0.096"
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
                                            "USD": "0.176"
                                        }
                                    },
                                    {
                                        "name": "mswin",
                                        "prices": {
                                            "USD": "0.384"
                                        }
                                    }
                                ]
                            },
                            {
                                  "size": "c3.large",
                                  "valueColumns": [
                                      {
                                          "name": "linux",
                                          "prices": {
                                              "USD": "0.051"
                                          }
                                      },
                                      {
                                          "name": "mswin",
                                          "prices": {
                                              "USD": "0.124"
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
                                              "USD": "0.101"
                                          }
                                      },
                                      {
                                          "name": "mswin",
                                          "prices": {
                                              "USD": "0.248"
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
                                              "USD": "0.203"
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
                                  "size": "c3.4xlarge",
                                  "valueColumns": [
                                      {
                                          "name": "linux",
                                          "prices": {
                                              "USD": "0.406"
                                          }
                                      },
                                      {
                                          "name": "mswin",
                                          "prices": {
                                              "USD": "0.994"
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
                                              "USD": "0.811"
                                          }
                                      },
                                      {
                                          "name": "mswin",
                                          "prices": {
                                              "USD": "1.987"
                                          }
                                      }
                                  ]
                            },
                        ]
                    },
                    {
                        "type": "clusterComputeI",
                        "sizes": [
                            {
                                "size": "cc1.4xlarge",
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
                                "size": "cc2.8xlarge",
                                "valueColumns": [
                                    {
                                        "name": "linux",
                                        "prices": {
                                            "USD": "0.488"
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
                        "type": "clusterHiMemSpot",
                        "sizes": [
                            {
                                "size": "cr1.8xlarge",
                                "valueColumns": [
                                    {
                                        "name": "linux",
                                        "prices": {
                                            "USD": "0.343"
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
                        "type": "GPUI",
                        "sizes": [
                            {
                                  "size": "g2.2xlarge",
                                  "valueColumns": [
                                      {
                                          "name": "linux",
                                          "prices": {
                                              "USD": "0.081"
                                          }
                                      },
                                      {
                                          "name": "mswin",
                                          "prices": {
                                              "USD": "0.103"
                                          }
                                      }
                                  ]
                            },
                            {
                                "size": "cg1.4xlarge",
                                "valueColumns": [
                                    {
                                        "name": "linux",
                                        "prices": {
                                            "USD": "0.54"
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
                    }
                ]
              },{
                "region": "apac-sin",
                "footnotes": { 
                    "*" : "clusterOnlyInUSEast"
                },
                "instanceTypes": [
                    {
                        "type": "stdSpot",
                        "sizes": [
                            {
                                "size": "m1.small",
                                "valueColumns": [
                                    {
                                        "name": "linux",
                                        "prices": {
                                            "USD": "0.01"
                                        }
                                    },
                                    {
                                        "name": "mswin",
                                        "prices": {
                                            "USD": "0.02"
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
                                            "USD": "0.02"
                                        }
                                    },
                                    {
                                        "name": "mswin",
                                        "prices": {
                                            "USD": "0.04"
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
                                            "USD": "0.04"
                                        }
                                    },
                                    {
                                        "name": "mswin",
                                        "prices": {
                                            "USD": "0.08"
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
                                            "USD": "0.08"
                                        }
                                    },
                                    {
                                        "name": "mswin",
                                        "prices": {
                                            "USD": "0.16"
                                        }
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        "type": "secgenstdSpot",
                        "sizes": [
                            {
                                "size": "m3.xlarge",
                                "valueColumns": [
                                    {
                                        "name": "linux",
                                        "prices": {
                                            "USD": "0.088"
                                        }
                                    },
                                    {
                                        "name": "mswin",
                                        "prices": {
                                            "USD": "0.168"
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
                                            "USD": "0.175"
                                        }
                                    },
                                    {
                                        "name": "mswin",
                                        "prices": {
                                            "USD": "0.335"
                                        }
                                    }
                                ]
                            }
                        ]
                    },          
                    {
                        "type": "uSpot",
                        "sizes": [
                            {
                                "size": "t1.micro",
                                "valueColumns": [
                                    {
                                        "name": "linux",
                                        "prices": {
                                            "USD": "0.004"
                                        }
                                    },
                                    {
                                        "name": "mswin",
                                        "prices": {
                                            "USD": "0.007"
                                        }
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        "type": "hiMemSpot",
                        "sizes": [
                            {
                                "size": "m2.xlarge",
                                "valueColumns": [
                                    {
                                        "name": "linux",
                                        "prices": {
                                            "USD": "0.059"
                                        }
                                    },
                                    {
                                        "name": "mswin",
                                        "prices": {
                                            "USD": "0.099"
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
                                            "USD": "0.118"
                                        }
                                    },
                                    {
                                        "name": "mswin",
                                        "prices": {
                                            "USD": "0.198"
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
                                            "USD": "0.236"
                                        }
                                    },
                                    {
                                        "name": "mswin",
                                        "prices": {
                                            "USD": "0.396"
                                        }
                                    }
                                ]
                            }
                        ]
                    },          
                    {
                        "type": "hiCPUSpot",
                        "sizes": [
                            {
                                "size": "c1.medium",
                                "valueColumns": [
                                    {
                                        "name": "linux",
                                        "prices": {
                                            "USD": "0.028"
                                        }
                                    },
                                    {
                                        "name": "mswin",
                                        "prices": {
                                            "USD": "0.06"
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
                                            "USD": "0.11"
                                        }
                                    },
                                    {
                                        "name": "mswin",
                                        "prices": {
                                            "USD": "0.24"
                                        }
                                    }
                                ]
                            },
                            {
                                  "size": "c3.large",
                                  "valueColumns": [
                                      {
                                          "name": "linux",
                                          "prices": {
                                              "USD": "0.056"
                                          }
                                      },
                                      {
                                          "name": "mswin",
                                          "prices": {
                                              "USD": "0.124"
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
                                              "USD": "0.112"
                                          }
                                      },
                                      {
                                          "name": "mswin",
                                          "prices": {
                                              "USD": "0.248"
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
                                              "USD": "0.224"
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
                                  "size": "c3.4xlarge",
                                  "valueColumns": [
                                      {
                                          "name": "linux",
                                          "prices": {
                                              "USD": "0.447"
                                          }
                                      },
                                      {
                                          "name": "mswin",
                                          "prices": {
                                              "USD": "0.994"
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
                                              "USD": "0.894"
                                          }
                                      },
                                      {
                                          "name": "mswin",
                                          "prices": {
                                              "USD": "1.987"
                                          }
                                      }
                                  ]
                            },
                        ]
                    },
                    {
                        "type": "clusterComputeI",
                        "sizes": [
                            {
                                "size": "cc1.4xlarge",
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
                        "type": "clusterHiMemSpot",
                        "sizes": [
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
                        "type": "GPUI",
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
                            },
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
                    }
                ]
              },{
                "region": "apac-tokyo",
                "footnotes": { 
                    "*" : "clusterOnlyInUSEast"
                },
                "instanceTypes": [
                    {
                        "type": "stdSpot",
                        "sizes": [
                            {
                                "size": "m1.small",
                                "valueColumns": [
                                    {
                                        "name": "linux",
                                        "prices": {
                                            "USD": "0.017"
                                        }
                                    },
                                    {
                                        "name": "mswin",
                                        "prices": {
                                            "USD": "0.035"
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
                                            "USD": "0.035"
                                        }
                                    },
                                    {
                                        "name": "mswin",
                                        "prices": {
                                            "USD": "0.07"
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
                                            "USD": "0.067"
                                        }
                                    },
                                    {
                                        "name": "mswin",
                                        "prices": {
                                            "USD": "0.141"
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
                                            "USD": "0.134"
                                        }
                                    },
                                    {
                                        "name": "mswin",
                                        "prices": {
                                            "USD": "0.282"
                                        }
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        "type": "secgenstdSpot",
                        "sizes": [
                            {
                                "size": "m3.xlarge",
                                "valueColumns": [
                                    {
                                        "name": "linux",
                                        "prices": {
                                            "USD": "0.148"
                                        }
                                    },
                                    {
                                        "name": "mswin",
                                        "prices": {
                                            "USD": "0.295"
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
                                            "USD": "0.295"
                                        }
                                    },
                                    {
                                        "name": "mswin",
                                        "prices": {
                                            "USD": "0.589"
                                        }
                                    }
                                ]
                            }
                        ]
                    },          
                    {
                        "type": "uSpot",
                        "sizes": [
                            {
                                "size": "t1.micro",
                                "valueColumns": [
                                    {
                                        "name": "linux",
                                        "prices": {
                                            "USD": "0.007"
                                        }
                                    },
                                    {
                                        "name": "mswin",
                                        "prices": {
                                            "USD": "0.015"
                                        }
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        "type": "hiMemSpot",
                        "sizes": [
                            {
                                "size": "m2.xlarge",
                                "valueColumns": [
                                    {
                                        "name": "linux",
                                        "prices": {
                                            "USD": "0.104"
                                        }
                                    },
                                    {
                                        "name": "mswin",
                                        "prices": {
                                            "USD": "0.172"
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
                                            "USD": "0.208"
                                        }
                                    },
                                    {
                                        "name": "mswin",
                                        "prices": {
                                            "USD": "0.344"
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
                                            "USD": "0.416"
                                        }
                                    },
                                    {
                                        "name": "mswin",
                                        "prices": {
                                            "USD": "0.688"
                                        }
                                    }
                                ]
                            }
                        ]
                    },          
                    {
                        "type": "hiCPUSpot",
                        "sizes": [
                            {
                                "size": "c1.medium",
                                "valueColumns": [
                                    {
                                        "name": "linux",
                                        "prices": {
                                            "USD": "0.048"
                                        }
                                    },
                                    {
                                        "name": "mswin",
                                        "prices": {
                                            "USD": "0.106"
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
                                            "USD": "0.192"
                                        }
                                    },
                                    {
                                        "name": "mswin",
                                        "prices": {
                                            "USD": "0.426"
                                        }
                                    }
                                ]
                            },
                            {
                                  "size": "c3.large",
                                  "valueColumns": [
                                      {
                                          "name": "linux",
                                          "prices": {
                                              "USD": "0.061"
                                          }
                                      },
                                      {
                                          "name": "mswin",
                                          "prices": {
                                              "USD": "0.138"
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
                                              "USD": "0.122"
                                          }
                                      },
                                      {
                                          "name": "mswin",
                                          "prices": {
                                              "USD": "0.275"
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
                                              "USD": "0.244"
                                          }
                                      },
                                      {
                                          "name": "mswin",
                                          "prices": {
                                              "USD": "0.551"
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
                                              "USD": "0.489"
                                          }
                                      },
                                      {
                                          "name": "mswin",
                                          "prices": {
                                              "USD": "1.101"
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
                                              "USD": "0.0001"
                                          }
                                      },
                                      {
                                          "name": "mswin",
                                          "prices": {
                                              "USD": "2.202"
                                          }
                                      }
                                  ]
                            },
                        ]
                    },
                    {
                        "type": "clusterComputeI",
                        "sizes": [
                            {
                                "size": "cc1.4xlarge",
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
                                "size": "cc2.8xlarge",
                                "valueColumns": [
                                    {
                                        "name": "linux",
                                        "prices": {
                                            "USD": "0.892"
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
                        "type": "clusterHiMemSpot",
                        "sizes": [
                            {
                                "size": "cr1.8xlarge",
                                "valueColumns": [
                                    {
                                        "name": "linux",
                                        "prices": {
                                            "USD": "0.982"
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
                        "type": "GPUI",
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
                            },
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
                    }
                ]
              },{
                "region": "apac-syd",
                "footnotes": { 
                    "*" : "clusterOnlyInUSEast"
                },
                "instanceTypes": [
                    {
                        "type": "stdSpot",
                        "sizes": [
                            {
                                "size": "m1.small",
                                "valueColumns": [
                                    {
                                        "name": "linux",
                                        "prices": {
                                            "USD": "0.01"
                                        }
                                    },
                                    {
                                        "name": "mswin",
                                        "prices": {
                                            "USD": "0.02"
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
                                            "USD": "0.02"
                                        }
                                    },
                                    {
                                        "name": "mswin",
                                        "prices": {
                                            "USD": "0.04"
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
                                            "USD": "0.04"
                                        }
                                    },
                                    {
                                        "name": "mswin",
                                        "prices": {
                                            "USD": "0.08"
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
                                            "USD": "0.08"
                                        }
                                    },
                                    {
                                        "name": "mswin",
                                        "prices": {
                                            "USD": "0.16"
                                        }
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        "type": "secgenstdSpot",
                        "sizes": [
                            {
                                "size": "m3.xlarge",
                                "valueColumns": [
                                    {
                                        "name": "linux",
                                        "prices": {
                                            "USD": "0.088"
                                        }
                                    },
                                    {
                                        "name": "mswin",
                                        "prices": {
                                            "USD": "0.168"
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
                                            "USD": "0.175"
                                        }
                                    },
                                    {
                                        "name": "mswin",
                                        "prices": {
                                            "USD": "0.335"
                                        }
                                    }
                                ]
                            }
                        ]
                    },          
                    {
                        "type": "uSpot",
                        "sizes": [
                            {
                                "size": "t1.micro",
                                "valueColumns": [
                                    {
                                        "name": "linux",
                                        "prices": {
                                            "USD": "0.004"
                                        }
                                    },
                                    {
                                        "name": "mswin",
                                        "prices": {
                                            "USD": "0.007"
                                        }
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        "type": "hiMemSpot",
                        "sizes": [
                            {
                                "size": "m2.xlarge",
                                "valueColumns": [
                                    {
                                        "name": "linux",
                                        "prices": {
                                            "USD": "0.059"
                                        }
                                    },
                                    {
                                        "name": "mswin",
                                        "prices": {
                                            "USD": "0.099"
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
                                            "USD": "0.118"
                                        }
                                    },
                                    {
                                        "name": "mswin",
                                        "prices": {
                                            "USD": "0.198"
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
                                            "USD": "0.236"
                                        }
                                    },
                                    {
                                        "name": "mswin",
                                        "prices": {
                                            "USD": "0.396"
                                        }
                                    }
                                ]
                            }
                        ]
                    },          
                    {
                        "type": "hiCPUSpot",
                        "sizes": [
                            {
                                "size": "c1.medium",
                                "valueColumns": [
                                    {
                                        "name": "linux",
                                        "prices": {
                                            "USD": "0.028"
                                        }
                                    },
                                    {
                                        "name": "mswin",
                                        "prices": {
                                            "USD": "0.06"
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
                                            "USD": "0.11"
                                        }
                                    },
                                    {
                                        "name": "mswin",
                                        "prices": {
                                            "USD": "0.24"
                                        }
                                    }
                                ]
                            },
                            {
                                  "size": "c3.large",
                                  "valueColumns": [
                                      {
                                          "name": "linux",
                                          "prices": {
                                              "USD": "0.0001"
                                          }
                                      },
                                      {
                                          "name": "mswin",
                                          "prices": {
                                              "USD": "0.124"
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
                                              "USD": "0.056"
                                          }
                                      },
                                      {
                                          "name": "mswin",
                                          "prices": {
                                              "USD": "0.248"
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
                                              "USD": "0.112"
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
                                  "size": "c3.4xlarge",
                                  "valueColumns": [
                                      {
                                          "name": "linux",
                                          "prices": {
                                              "USD": "0.447"
                                          }
                                      },
                                      {
                                          "name": "mswin",
                                          "prices": {
                                              "USD": "0.994"
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
                                              "USD": "0.447"
                                          }
                                      },
                                      {
                                          "name": "mswin",
                                          "prices": {
                                              "USD": "1.987"
                                          }
                                      }
                                  ]
                            },
                        ]
                    },
                    {
                        "type": "clusterComputeI",
                        "sizes": [
                            {
                                "size": "cc1.4xlarge",
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
                        "type": "clusterHiMemSpot",
                        "sizes": [
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
                        "type": "GPUI",
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
                            },
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
                    }
                ]
              },{
                "region": "sa-east-1",
                "footnotes": { 
                    "*" : "clusterOnlyInUSEast"
                },
                "instanceTypes": [
                    {
                        "type": "stdSpot",
                        "sizes": [
                            {
                                "size": "m1.small",
                                "valueColumns": [
                                    {
                                        "name": "linux",
                                        "prices": {
                                            "USD": "0.011"
                                        }
                                    },
                                    {
                                        "name": "mswin",
                                        "prices": {
                                            "USD": "0.021"
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
                                            "USD": "0.022"
                                        }
                                    },
                                    {
                                        "name": "mswin",
                                        "prices": {
                                            "USD": "0.042"
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
                                            "USD": "0.042"
                                        }
                                    },
                                    {
                                        "name": "mswin",
                                        "prices": {
                                            "USD": "0.082"
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
                                            "USD": "0.084"
                                        }
                                    },
                                    {
                                        "name": "mswin",
                                        "prices": {
                                            "USD": "0.164"
                                        }
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        "type": "secgenstdSpot",
                        "sizes": [
                            {
                                "size": "m3.xlarge",
                                "valueColumns": [
                                    {
                                        "name": "linux",
                                        "prices": {
                                            "USD": "0.092"
                                        }
                                    },
                                    {
                                        "name": "mswin",
                                        "prices": {
                                            "USD": "0.172"
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
                                            "USD": "0.185"
                                        }
                                    },
                                    {
                                        "name": "mswin",
                                        "prices": {
                                            "USD": "0.345"
                                        }
                                    }
                                ]
                            }
                        ]
                    },          
                    {
                        "type": "uSpot",
                        "sizes": [
                            {
                                "size": "t1.micro",
                                "valueColumns": [
                                    {
                                        "name": "linux",
                                        "prices": {
                                            "USD": "0.004"
                                        }
                                    },
                                    {
                                        "name": "mswin",
                                        "prices": {
                                            "USD": "0.007"
                                        }
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        "type": "hiMemSpot",
                        "sizes": [
                            {
                                "size": "m2.xlarge",
                                "valueColumns": [
                                    {
                                        "name": "linux",
                                        "prices": {
                                            "USD": "0.062"
                                        }
                                    },
                                    {
                                        "name": "mswin",
                                        "prices": {
                                            "USD": "0.097"
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
                                            "USD": "0.123"
                                        }
                                    },
                                    {
                                        "name": "mswin",
                                        "prices": {
                                            "USD": "0.193"
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
                                            "USD": "0.246"
                                        }
                                    },
                                    {
                                        "name": "mswin",
                                        "prices": {
                                            "USD": "0.386"
                                        }
                                    }
                                ]
                            }
                        ]
                    },          
                    {
                        "type": "hiCPUSpot",
                        "sizes": [
                            {
                                "size": "c1.medium",
                                "valueColumns": [
                                    {
                                        "name": "linux",
                                        "prices": {
                                            "USD": "0.024"
                                        }
                                    },
                                    {
                                        "name": "mswin",
                                        "prices": {
                                            "USD": "0.057"
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
                                            "USD": "0.096"
                                        }
                                    },
                                    {
                                        "name": "mswin",
                                        "prices": {
                                            "USD": "0.226"
                                        }
                                    }
                                ]
                            },
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
                            },
                        ]
                    },
                    {
                        "type": "clusterComputeI",
                        "sizes": [
                            {
                                "size": "cc1.4xlarge",
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
                        "type": "clusterHiMemSpot",
                        "sizes": [
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
                        "type": "GPUI",
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
                            },
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
                    }
                ]
              }]}})