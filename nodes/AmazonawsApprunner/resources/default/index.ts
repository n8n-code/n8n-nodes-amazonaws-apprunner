import type { INodeProperties } from 'n8n-workflow';

export const defaultDescription: INodeProperties[] = [
		{
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					]
				}
			},
			"options": [
				{
					"name": "Associate Custom Domain",
					"value": "Associate Custom Domain",
					"action": "Associate Custom Domain",
					"description": "<p>Associate your own domain name with the App Runner subdomain URL of your App Runner service.</p> <p>After you call <code>AssociateCustomDomain</code> and receive a successful response, use the information in the <a>CustomDomain</a> record that's returned to add CNAME records to your Domain Name System (DNS). For each mapped domain name, add a mapping to the target App Runner subdomain and one or more certificate validation records. App Runner then performs DNS validation to verify that you own or control the domain name that you associated. App Runner tracks domain validity in a certificate stored in <a href=\"https://docs.aws.amazon.com/acm/latest/userguide\">AWS Certificate Manager (ACM)</a>.</p>",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/#X-Amz-Target=AppRunner.AssociateCustomDomain"
						}
					}
				},
				{
					"name": "Create Auto Scaling Configuration",
					"value": "Create Auto Scaling Configuration",
					"action": "Create Auto Scaling Configuration",
					"description": "<p>Create an App Runner automatic scaling configuration resource. App Runner requires this resource when you create or update App Runner services and you require non-default auto scaling settings. You can share an auto scaling configuration across multiple services.</p> <p>Create multiple revisions of a configuration by calling this action multiple times using the same <code>AutoScalingConfigurationName</code>. The call returns incremental <code>AutoScalingConfigurationRevision</code> values. When you create a service and configure an auto scaling configuration resource, the service uses the latest active revision of the auto scaling configuration by default. You can optionally configure the service to use a specific revision.</p> <p>Configure a higher <code>MinSize</code> to increase the spread of your App Runner service over more Availability Zones in the Amazon Web Services Region. The tradeoff is a higher minimal cost.</p> <p>Configure a lower <code>MaxSize</code> to control your cost. The tradeoff is lower responsiveness during peak demand.</p>",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/#X-Amz-Target=AppRunner.CreateAutoScalingConfiguration"
						}
					}
				},
				{
					"name": "Create Connection",
					"value": "Create Connection",
					"action": "Create Connection",
					"description": "<p>Create an App Runner connection resource. App Runner requires a connection resource when you create App Runner services that access private repositories from certain third-party providers. You can share a connection across multiple services.</p> <p>A connection resource is needed to access GitHub repositories. GitHub requires a user interface approval process through the App Runner console before you can use the connection.</p>",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/#X-Amz-Target=AppRunner.CreateConnection"
						}
					}
				},
				{
					"name": "Create Observability Configuration",
					"value": "Create Observability Configuration",
					"action": "Create Observability Configuration",
					"description": "<p>Create an App Runner observability configuration resource. App Runner requires this resource when you create or update App Runner services and you want to enable non-default observability features. You can share an observability configuration across multiple services.</p> <p>Create multiple revisions of a configuration by calling this action multiple times using the same <code>ObservabilityConfigurationName</code>. The call returns incremental <code>ObservabilityConfigurationRevision</code> values. When you create a service and configure an observability configuration resource, the service uses the latest active revision of the observability configuration by default. You can optionally configure the service to use a specific revision.</p> <p>The observability configuration resource is designed to configure multiple features (currently one feature, tracing). This action takes optional parameters that describe the configuration of these features (currently one parameter, <code>TraceConfiguration</code>). If you don't specify a feature parameter, App Runner doesn't enable the feature.</p>",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/#X-Amz-Target=AppRunner.CreateObservabilityConfiguration"
						}
					}
				},
				{
					"name": "Create Service",
					"value": "Create Service",
					"action": "Create Service",
					"description": "<p>Create an App Runner service. After the service is created, the action also automatically starts a deployment.</p> <p>This is an asynchronous operation. On a successful call, you can use the returned <code>OperationId</code> and the <a href=\"https://docs.aws.amazon.com/apprunner/latest/api/API_ListOperations.html\">ListOperations</a> call to track the operation's progress.</p>",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/#X-Amz-Target=AppRunner.CreateService"
						}
					}
				},
				{
					"name": "Create Vpc Connector",
					"value": "Create Vpc Connector",
					"action": "Create Vpc Connector",
					"description": "Create an App Runner VPC connector resource. App Runner requires this resource when you want to associate your App Runner service to a custom Amazon Virtual Private Cloud (Amazon VPC).",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/#X-Amz-Target=AppRunner.CreateVpcConnector"
						}
					}
				},
				{
					"name": "Create Vpc Ingress Connection",
					"value": "Create Vpc Ingress Connection",
					"action": "Create Vpc Ingress Connection",
					"description": "Create an App Runner VPC Ingress Connection resource. App Runner requires this resource when you want to associate your App Runner service with an Amazon VPC endpoint.",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/#X-Amz-Target=AppRunner.CreateVpcIngressConnection"
						}
					}
				},
				{
					"name": "Delete Auto Scaling Configuration",
					"value": "Delete Auto Scaling Configuration",
					"action": "Delete Auto Scaling Configuration",
					"description": "Delete an App Runner automatic scaling configuration resource. You can delete a specific revision or the latest active revision. You can't delete a configuration that's used by one or more App Runner services.",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/#X-Amz-Target=AppRunner.DeleteAutoScalingConfiguration"
						}
					}
				},
				{
					"name": "Delete Connection",
					"value": "Delete Connection",
					"action": "Delete Connection",
					"description": "Delete an App Runner connection. You must first ensure that there are no running App Runner services that use this connection. If there are any, the <code>DeleteConnection</code> action fails.",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/#X-Amz-Target=AppRunner.DeleteConnection"
						}
					}
				},
				{
					"name": "Delete Observability Configuration",
					"value": "Delete Observability Configuration",
					"action": "Delete Observability Configuration",
					"description": "Delete an App Runner observability configuration resource. You can delete a specific revision or the latest active revision. You can't delete a configuration that's used by one or more App Runner services.",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/#X-Amz-Target=AppRunner.DeleteObservabilityConfiguration"
						}
					}
				},
				{
					"name": "Delete Service",
					"value": "Delete Service",
					"action": "Delete Service",
					"description": "<p>Delete an App Runner service.</p> <p>This is an asynchronous operation. On a successful call, you can use the returned <code>OperationId</code> and the <a>ListOperations</a> call to track the operation's progress.</p> <note> <p>Make sure that you don't have any active VPCIngressConnections associated with the service you want to delete. </p> </note>",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/#X-Amz-Target=AppRunner.DeleteService"
						}
					}
				},
				{
					"name": "Delete Vpc Connector",
					"value": "Delete Vpc Connector",
					"action": "Delete Vpc Connector",
					"description": "Delete an App Runner VPC connector resource. You can't delete a connector that's used by one or more App Runner services.",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/#X-Amz-Target=AppRunner.DeleteVpcConnector"
						}
					}
				},
				{
					"name": "Delete Vpc Ingress Connection",
					"value": "Delete Vpc Ingress Connection",
					"action": "Delete Vpc Ingress Connection",
					"description": "<p>Delete an App Runner VPC Ingress Connection resource that's associated with an App Runner service. The VPC Ingress Connection must be in one of the following states to be deleted: </p> <ul> <li> <p> <code>AVAILABLE</code> </p> </li> <li> <p> <code>FAILED_CREATION</code> </p> </li> <li> <p> <code>FAILED_UPDATE</code> </p> </li> <li> <p> <code>FAILED_DELETION</code> </p> </li> </ul>",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/#X-Amz-Target=AppRunner.DeleteVpcIngressConnection"
						}
					}
				},
				{
					"name": "Describe Auto Scaling Configuration",
					"value": "Describe Auto Scaling Configuration",
					"action": "Describe Auto Scaling Configuration",
					"description": "Return a full description of an App Runner automatic scaling configuration resource.",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/#X-Amz-Target=AppRunner.DescribeAutoScalingConfiguration"
						}
					}
				},
				{
					"name": "Describe Custom Domains",
					"value": "Describe Custom Domains",
					"action": "Describe Custom Domains",
					"description": "Return a description of custom domain names that are associated with an App Runner service.",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/#X-Amz-Target=AppRunner.DescribeCustomDomains"
						}
					}
				},
				{
					"name": "Describe Observability Configuration",
					"value": "Describe Observability Configuration",
					"action": "Describe Observability Configuration",
					"description": "Return a full description of an App Runner observability configuration resource.",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/#X-Amz-Target=AppRunner.DescribeObservabilityConfiguration"
						}
					}
				},
				{
					"name": "Describe Service",
					"value": "Describe Service",
					"action": "Describe Service",
					"description": "Return a full description of an App Runner service.",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/#X-Amz-Target=AppRunner.DescribeService"
						}
					}
				},
				{
					"name": "Describe Vpc Connector",
					"value": "Describe Vpc Connector",
					"action": "Describe Vpc Connector",
					"description": "Return a description of an App Runner VPC connector resource.",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/#X-Amz-Target=AppRunner.DescribeVpcConnector"
						}
					}
				},
				{
					"name": "Describe Vpc Ingress Connection",
					"value": "Describe Vpc Ingress Connection",
					"action": "Describe Vpc Ingress Connection",
					"description": "Return a full description of an App Runner VPC Ingress Connection resource.",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/#X-Amz-Target=AppRunner.DescribeVpcIngressConnection"
						}
					}
				},
				{
					"name": "Disassociate Custom Domain",
					"value": "Disassociate Custom Domain",
					"action": "Disassociate Custom Domain",
					"description": "<p>Disassociate a custom domain name from an App Runner service.</p> <p>Certificates tracking domain validity are associated with a custom domain and are stored in <a href=\"https://docs.aws.amazon.com/acm/latest/userguide\">AWS Certificate Manager (ACM)</a>. These certificates aren't deleted as part of this action. App Runner delays certificate deletion for 30 days after a domain is disassociated from your service.</p>",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/#X-Amz-Target=AppRunner.DisassociateCustomDomain"
						}
					}
				},
				{
					"name": "List Auto Scaling Configurations",
					"value": "List Auto Scaling Configurations",
					"action": "List Auto Scaling Configurations",
					"description": "<p>Returns a list of active App Runner automatic scaling configurations in your Amazon Web Services account. You can query the revisions for a specific configuration name or the revisions for all active configurations in your account. You can optionally query only the latest revision of each requested name.</p> <p>To retrieve a full description of a particular configuration revision, call and provide one of the ARNs returned by <code>ListAutoScalingConfigurations</code>.</p>",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/#X-Amz-Target=AppRunner.ListAutoScalingConfigurations"
						}
					}
				},
				{
					"name": "List Connections",
					"value": "List Connections",
					"action": "List Connections",
					"description": "Returns a list of App Runner connections that are associated with your Amazon Web Services account.",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/#X-Amz-Target=AppRunner.ListConnections"
						}
					}
				},
				{
					"name": "List Observability Configurations",
					"value": "List Observability Configurations",
					"action": "List Observability Configurations",
					"description": "<p>Returns a list of active App Runner observability configurations in your Amazon Web Services account. You can query the revisions for a specific configuration name or the revisions for all active configurations in your account. You can optionally query only the latest revision of each requested name.</p> <p>To retrieve a full description of a particular configuration revision, call and provide one of the ARNs returned by <code>ListObservabilityConfigurations</code>.</p>",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/#X-Amz-Target=AppRunner.ListObservabilityConfigurations"
						}
					}
				},
				{
					"name": "List Operations",
					"value": "List Operations",
					"action": "List Operations",
					"description": "<p>Return a list of operations that occurred on an App Runner service.</p> <p>The resulting list of <a>OperationSummary</a> objects is sorted in reverse chronological order. The first object on the list represents the last started operation.</p>",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/#X-Amz-Target=AppRunner.ListOperations"
						}
					}
				},
				{
					"name": "List Services",
					"value": "List Services",
					"action": "List Services",
					"description": "Returns a list of running App Runner services in your Amazon Web Services account.",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/#X-Amz-Target=AppRunner.ListServices"
						}
					}
				},
				{
					"name": "List Tags For Resource",
					"value": "List Tags For Resource",
					"action": "List Tags For Resource",
					"description": "List tags that are associated with for an App Runner resource. The response contains a list of tag key-value pairs.",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/#X-Amz-Target=AppRunner.ListTagsForResource"
						}
					}
				},
				{
					"name": "List Vpc Connectors",
					"value": "List Vpc Connectors",
					"action": "List Vpc Connectors",
					"description": "Returns a list of App Runner VPC connectors in your Amazon Web Services account.",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/#X-Amz-Target=AppRunner.ListVpcConnectors"
						}
					}
				},
				{
					"name": "List Vpc Ingress Connections",
					"value": "List Vpc Ingress Connections",
					"action": "List Vpc Ingress Connections",
					"description": "Return a list of App Runner VPC Ingress Connections in your Amazon Web Services account.",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/#X-Amz-Target=AppRunner.ListVpcIngressConnections"
						}
					}
				},
				{
					"name": "Pause Service",
					"value": "Pause Service",
					"action": "Pause Service",
					"description": "<p>Pause an active App Runner service. App Runner reduces compute capacity for the service to zero and loses state (for example, ephemeral storage is removed).</p> <p>This is an asynchronous operation. On a successful call, you can use the returned <code>OperationId</code> and the <a>ListOperations</a> call to track the operation's progress.</p>",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/#X-Amz-Target=AppRunner.PauseService"
						}
					}
				},
				{
					"name": "Resume Service",
					"value": "Resume Service",
					"action": "Resume Service",
					"description": "<p>Resume an active App Runner service. App Runner provisions compute capacity for the service.</p> <p>This is an asynchronous operation. On a successful call, you can use the returned <code>OperationId</code> and the <a>ListOperations</a> call to track the operation's progress.</p>",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/#X-Amz-Target=AppRunner.ResumeService"
						}
					}
				},
				{
					"name": "Start Deployment",
					"value": "Start Deployment",
					"action": "Start Deployment",
					"description": "<p>Initiate a manual deployment of the latest commit in a source code repository or the latest image in a source image repository to an App Runner service.</p> <p>For a source code repository, App Runner retrieves the commit and builds a Docker image. For a source image repository, App Runner retrieves the latest Docker image. In both cases, App Runner then deploys the new image to your service and starts a new container instance.</p> <p>This is an asynchronous operation. On a successful call, you can use the returned <code>OperationId</code> and the <a>ListOperations</a> call to track the operation's progress.</p>",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/#X-Amz-Target=AppRunner.StartDeployment"
						}
					}
				},
				{
					"name": "Tag Resource",
					"value": "Tag Resource",
					"action": "Tag Resource",
					"description": "Add tags to, or update the tag values of, an App Runner resource. A tag is a key-value pair.",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/#X-Amz-Target=AppRunner.TagResource"
						}
					}
				},
				{
					"name": "Untag Resource",
					"value": "Untag Resource",
					"action": "Untag Resource",
					"description": "Remove tags from an App Runner resource.",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/#X-Amz-Target=AppRunner.UntagResource"
						}
					}
				},
				{
					"name": "Update Service",
					"value": "Update Service",
					"action": "Update Service",
					"description": "<p>Update an App Runner service. You can update the source configuration and instance configuration of the service. You can also update the ARN of the auto scaling configuration resource that's associated with the service. However, you can't change the name or the encryption configuration of the service. These can be set only when you create the service.</p> <p>To update the tags applied to your service, use the separate actions <a>TagResource</a> and <a>UntagResource</a>.</p> <p>This is an asynchronous operation. On a successful call, you can use the returned <code>OperationId</code> and the <a>ListOperations</a> call to track the operation's progress.</p>",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/#X-Amz-Target=AppRunner.UpdateService"
						}
					}
				},
				{
					"name": "Update Vpc Ingress Connection",
					"value": "Update Vpc Ingress Connection",
					"action": "Update Vpc Ingress Connection",
					"description": "<p>Update an existing App Runner VPC Ingress Connection resource. The VPC Ingress Connection must be in one of the following states to be updated:</p> <ul> <li> <p> AVAILABLE </p> </li> <li> <p> FAILED_CREATION </p> </li> <li> <p> FAILED_UPDATE </p> </li> </ul>",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/#X-Amz-Target=AppRunner.UpdateVpcIngressConnection"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "POST /#X-Amz-Target=AppRunner.AssociateCustomDomain",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Associate Custom Domain"
					]
				}
			}
		},
		{
			"displayName": "X Amz Target",
			"name": "X-Amz-Target",
			"required": true,
			"default": "AppRunner.AssociateCustomDomain",
			"type": "options",
			"options": [
				{
					"name": "App Runner Associate Custom Domain",
					"value": "AppRunner.AssociateCustomDomain"
				}
			],
			"routing": {
				"request": {
					"headers": {
						"X-Amz-Target": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Associate Custom Domain"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Service Arn",
			"name": "ServiceArn",
			"type": "string",
			"default": "",
			"description": "The Amazon Resource Name (ARN) of the App Runner service that you want to associate a custom domain name with.",
			"routing": {
				"send": {
					"property": "ServiceArn",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Associate Custom Domain"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Domain Name",
			"name": "DomainName",
			"type": "string",
			"default": "",
			"description": "A custom domain endpoint to associate. Specify a root domain (for example, <code>example.com</code>), a subdomain (for example, <code>login.example.com</code> or <code>admin.login.example.com</code>), or a wildcard (for example, <code>*.example.com</code>).",
			"routing": {
				"send": {
					"property": "DomainName",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Associate Custom Domain"
					]
				}
			}
		},
		{
			"displayName": "Enable WWW Subdomain",
			"name": "EnableWWWSubdomain",
			"type": "boolean",
			"default": true,
			"description": "<p>Set to <code>true</code> to associate the subdomain <code>www.<i>DomainName</i> </code> with the App Runner service in addition to the base domain.</p> <p>Default: <code>true</code> </p>",
			"routing": {
				"send": {
					"property": "EnableWWWSubdomain",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Associate Custom Domain"
					]
				}
			}
		},
		{
			"displayName": "Hmac API Key",
			"name": "security_hmac",
			"type": "string",
			"default": "",
			"description": "Amazon Signature authorization v4",
			"required": false,
			"routing": {
				"request": {
					"headers": {
						"Authorization": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Associate Custom Domain"
					]
				}
			}
		},
		{
			"displayName": "POST /#X-Amz-Target=AppRunner.CreateAutoScalingConfiguration",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Create Auto Scaling Configuration"
					]
				}
			}
		},
		{
			"displayName": "X Amz Target",
			"name": "X-Amz-Target",
			"required": true,
			"default": "AppRunner.CreateAutoScalingConfiguration",
			"type": "options",
			"options": [
				{
					"name": "App Runner Create Auto Scaling Configuration",
					"value": "AppRunner.CreateAutoScalingConfiguration"
				}
			],
			"routing": {
				"request": {
					"headers": {
						"X-Amz-Target": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Create Auto Scaling Configuration"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Auto Scaling Configuration Name",
			"name": "AutoScalingConfigurationName",
			"type": "string",
			"default": "",
			"description": "<p>A name for the auto scaling configuration. When you use it for the first time in an Amazon Web Services Region, App Runner creates revision number <code>1</code> of this name. When you use the same name in subsequent calls, App Runner creates incremental revisions of the configuration.</p> <note> <p>The name <code>DefaultConfiguration</code> is reserved (it's the configuration that App Runner uses if you don't provide a custome one). You can't use it to create a new auto scaling configuration, and you can't create a revision of it.</p> <p>When you want to use your own auto scaling configuration for your App Runner service, <i>create a configuration with a different name</i>, and then provide it when you create or update your service.</p> </note>",
			"routing": {
				"send": {
					"property": "AutoScalingConfigurationName",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Create Auto Scaling Configuration"
					]
				}
			}
		},
		{
			"displayName": "Max Concurrency",
			"name": "MaxConcurrency",
			"type": "number",
			"default": 0,
			"description": "<p>The maximum number of concurrent requests that you want an instance to process. If the number of concurrent requests exceeds this limit, App Runner scales up your service.</p> <p>Default: <code>100</code> </p>",
			"routing": {
				"send": {
					"property": "MaxConcurrency",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Create Auto Scaling Configuration"
					]
				}
			}
		},
		{
			"displayName": "Min Size",
			"name": "MinSize",
			"type": "number",
			"default": 0,
			"description": "<p>The minimum number of instances that App Runner provisions for your service. The service always has at least <code>MinSize</code> provisioned instances. Some of them actively serve traffic. The rest of them (provisioned and inactive instances) are a cost-effective compute capacity reserve and are ready to be quickly activated. You pay for memory usage of all the provisioned instances. You pay for CPU usage of only the active subset.</p> <p>App Runner temporarily doubles the number of provisioned instances during deployments, to maintain the same capacity for both old and new code.</p> <p>Default: <code>1</code> </p>",
			"routing": {
				"send": {
					"property": "MinSize",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Create Auto Scaling Configuration"
					]
				}
			}
		},
		{
			"displayName": "Max Size",
			"name": "MaxSize",
			"type": "number",
			"default": 0,
			"description": "<p>The maximum number of instances that your service scales up to. At most <code>MaxSize</code> instances actively serve traffic for your service.</p> <p>Default: <code>25</code> </p>",
			"routing": {
				"send": {
					"property": "MaxSize",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Create Auto Scaling Configuration"
					]
				}
			}
		},
		{
			"displayName": "Tags",
			"name": "Tags",
			"type": "json",
			"default": "[\n  {\n    \"Value\": {}\n  }\n]",
			"description": "A list of metadata items that you can associate with your auto scaling configuration resource. A tag is a key-value pair.",
			"routing": {
				"send": {
					"property": "Tags",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Create Auto Scaling Configuration"
					]
				}
			}
		},
		{
			"displayName": "Hmac API Key",
			"name": "security_hmac",
			"type": "string",
			"default": "",
			"description": "Amazon Signature authorization v4",
			"required": false,
			"routing": {
				"request": {
					"headers": {
						"Authorization": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Create Auto Scaling Configuration"
					]
				}
			}
		},
		{
			"displayName": "POST /#X-Amz-Target=AppRunner.CreateConnection",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Create Connection"
					]
				}
			}
		},
		{
			"displayName": "X Amz Target",
			"name": "X-Amz-Target",
			"required": true,
			"default": "AppRunner.CreateConnection",
			"type": "options",
			"options": [
				{
					"name": "App Runner Create Connection",
					"value": "AppRunner.CreateConnection"
				}
			],
			"routing": {
				"request": {
					"headers": {
						"X-Amz-Target": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Create Connection"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Connection Name",
			"name": "ConnectionName",
			"type": "string",
			"default": "",
			"description": "A name for the new connection. It must be unique across all App Runner connections for the Amazon Web Services account in the Amazon Web Services Region.",
			"routing": {
				"send": {
					"property": "ConnectionName",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Create Connection"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Provider Type",
			"name": "ProviderType",
			"type": "options",
			"default": "GITHUB",
			"description": "The source repository provider.",
			"options": [
				{
					"name": "GITHUB",
					"value": "GITHUB"
				}
			],
			"routing": {
				"send": {
					"property": "ProviderType",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Create Connection"
					]
				}
			}
		},
		{
			"displayName": "Tags",
			"name": "Tags",
			"type": "json",
			"default": "[\n  {\n    \"Value\": {}\n  }\n]",
			"description": "A list of metadata items that you can associate with your connection resource. A tag is a key-value pair.",
			"routing": {
				"send": {
					"property": "Tags",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Create Connection"
					]
				}
			}
		},
		{
			"displayName": "Hmac API Key",
			"name": "security_hmac",
			"type": "string",
			"default": "",
			"description": "Amazon Signature authorization v4",
			"required": false,
			"routing": {
				"request": {
					"headers": {
						"Authorization": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Create Connection"
					]
				}
			}
		},
		{
			"displayName": "POST /#X-Amz-Target=AppRunner.CreateObservabilityConfiguration",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Create Observability Configuration"
					]
				}
			}
		},
		{
			"displayName": "X Amz Target",
			"name": "X-Amz-Target",
			"required": true,
			"default": "AppRunner.CreateObservabilityConfiguration",
			"type": "options",
			"options": [
				{
					"name": "App Runner Create Observability Configuration",
					"value": "AppRunner.CreateObservabilityConfiguration"
				}
			],
			"routing": {
				"request": {
					"headers": {
						"X-Amz-Target": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Create Observability Configuration"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Observability Configuration Name",
			"name": "ObservabilityConfigurationName",
			"type": "string",
			"default": "",
			"description": "<p>A name for the observability configuration. When you use it for the first time in an Amazon Web Services Region, App Runner creates revision number <code>1</code> of this name. When you use the same name in subsequent calls, App Runner creates incremental revisions of the configuration.</p> <note> <p>The name <code>DefaultConfiguration</code> is reserved. You can't use it to create a new observability configuration, and you can't create a revision of it.</p> <p>When you want to use your own observability configuration for your App Runner service, <i>create a configuration with a different name</i>, and then provide it when you create or update your service.</p> </note>",
			"routing": {
				"send": {
					"property": "ObservabilityConfigurationName",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Create Observability Configuration"
					]
				}
			}
		},
		{
			"displayName": "Trace Configuration",
			"name": "TraceConfiguration",
			"type": "json",
			"default": "{}",
			"description": "The configuration of the tracing feature within this observability configuration. If you don't specify it, App Runner doesn't enable tracing.",
			"routing": {
				"send": {
					"property": "TraceConfiguration",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Create Observability Configuration"
					]
				}
			}
		},
		{
			"displayName": "Tags",
			"name": "Tags",
			"type": "json",
			"default": "[\n  {\n    \"Value\": {}\n  }\n]",
			"description": "A list of metadata items that you can associate with your observability configuration resource. A tag is a key-value pair.",
			"routing": {
				"send": {
					"property": "Tags",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Create Observability Configuration"
					]
				}
			}
		},
		{
			"displayName": "Hmac API Key",
			"name": "security_hmac",
			"type": "string",
			"default": "",
			"description": "Amazon Signature authorization v4",
			"required": false,
			"routing": {
				"request": {
					"headers": {
						"Authorization": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Create Observability Configuration"
					]
				}
			}
		},
		{
			"displayName": "POST /#X-Amz-Target=AppRunner.CreateService",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Create Service"
					]
				}
			}
		},
		{
			"displayName": "X Amz Target",
			"name": "X-Amz-Target",
			"required": true,
			"default": "AppRunner.CreateService",
			"type": "options",
			"options": [
				{
					"name": "App Runner Create Service",
					"value": "AppRunner.CreateService"
				}
			],
			"routing": {
				"request": {
					"headers": {
						"X-Amz-Target": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Create Service"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Service Name",
			"name": "ServiceName",
			"type": "string",
			"default": "",
			"description": "A name for the App Runner service. It must be unique across all the running App Runner services in your Amazon Web Services account in the Amazon Web Services Region.",
			"routing": {
				"send": {
					"property": "ServiceName",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Create Service"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Source Configuration",
			"name": "SourceConfiguration",
			"type": "json",
			"default": "{\n  \"CodeRepository\": {\n    \"RepositoryUrl\": {},\n    \"SourceCodeVersion\": {},\n    \"CodeConfiguration\": {}\n  },\n  \"ImageRepository\": {},\n  \"AutoDeploymentsEnabled\": {},\n  \"AuthenticationConfiguration\": {}\n}",
			"description": "The source to deploy to the App Runner service. It can be a code or an image repository.",
			"routing": {
				"send": {
					"property": "SourceConfiguration",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Create Service"
					]
				}
			}
		},
		{
			"displayName": "Instance Configuration",
			"name": "InstanceConfiguration",
			"type": "json",
			"default": "{\n  \"Memory\": {},\n  \"InstanceRoleArn\": {}\n}",
			"description": "The runtime configuration of instances (scaling units) of your service.",
			"routing": {
				"send": {
					"property": "InstanceConfiguration",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Create Service"
					]
				}
			}
		},
		{
			"displayName": "Tags",
			"name": "Tags",
			"type": "json",
			"default": "[\n  {\n    \"Value\": {}\n  }\n]",
			"description": "An optional list of metadata items that you can associate with the App Runner service resource. A tag is a key-value pair.",
			"routing": {
				"send": {
					"property": "Tags",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Create Service"
					]
				}
			}
		},
		{
			"displayName": "Encryption Configuration",
			"name": "EncryptionConfiguration",
			"type": "json",
			"default": "{}",
			"description": "An optional custom encryption key that App Runner uses to encrypt the copy of your source repository that it maintains and your service logs. By default, App Runner uses an Amazon Web Services managed key.",
			"routing": {
				"send": {
					"property": "EncryptionConfiguration",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Create Service"
					]
				}
			}
		},
		{
			"displayName": "Health Check Configuration",
			"name": "HealthCheckConfiguration",
			"type": "json",
			"default": "{\n  \"Path\": {},\n  \"Interval\": {},\n  \"Timeout\": {},\n  \"HealthyThreshold\": {},\n  \"UnhealthyThreshold\": {}\n}",
			"description": "The settings for the health check that App Runner performs to monitor the health of the App Runner service.",
			"routing": {
				"send": {
					"property": "HealthCheckConfiguration",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Create Service"
					]
				}
			}
		},
		{
			"displayName": "Auto Scaling Configuration Arn",
			"name": "AutoScalingConfigurationArn",
			"type": "string",
			"default": "",
			"description": "<p>The Amazon Resource Name (ARN) of an App Runner automatic scaling configuration resource that you want to associate with your service. If not provided, App Runner associates the latest revision of a default auto scaling configuration.</p> <p>Specify an ARN with a name and a revision number to associate that revision. For example: <code>arn:aws:apprunner:us-east-1:123456789012:autoscalingconfiguration/high-availability/3</code> </p> <p>Specify just the name to associate the latest revision. For example: <code>arn:aws:apprunner:us-east-1:123456789012:autoscalingconfiguration/high-availability</code> </p>",
			"routing": {
				"send": {
					"property": "AutoScalingConfigurationArn",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Create Service"
					]
				}
			}
		},
		{
			"displayName": "Network Configuration",
			"name": "NetworkConfiguration",
			"type": "json",
			"default": "{\n  \"EgressConfiguration\": {\n    \"EgressType\": {},\n    \"VpcConnectorArn\": {}\n  },\n  \"IngressConfiguration\": {}\n}",
			"description": "Configuration settings related to network traffic of the web application that the App Runner service runs.",
			"routing": {
				"send": {
					"property": "NetworkConfiguration",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Create Service"
					]
				}
			}
		},
		{
			"displayName": "Observability Configuration",
			"name": "ObservabilityConfiguration",
			"type": "json",
			"default": "{\n  \"ObservabilityConfigurationArn\": {}\n}",
			"description": "The observability configuration of your service.",
			"routing": {
				"send": {
					"property": "ObservabilityConfiguration",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Create Service"
					]
				}
			}
		},
		{
			"displayName": "Hmac API Key",
			"name": "security_hmac",
			"type": "string",
			"default": "",
			"description": "Amazon Signature authorization v4",
			"required": false,
			"routing": {
				"request": {
					"headers": {
						"Authorization": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Create Service"
					]
				}
			}
		},
		{
			"displayName": "POST /#X-Amz-Target=AppRunner.CreateVpcConnector",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Create Vpc Connector"
					]
				}
			}
		},
		{
			"displayName": "X Amz Target",
			"name": "X-Amz-Target",
			"required": true,
			"default": "AppRunner.CreateVpcConnector",
			"type": "options",
			"options": [
				{
					"name": "App Runner Create Vpc Connector",
					"value": "AppRunner.CreateVpcConnector"
				}
			],
			"routing": {
				"request": {
					"headers": {
						"X-Amz-Target": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Create Vpc Connector"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Vpc Connector Name",
			"name": "VpcConnectorName",
			"type": "string",
			"default": "",
			"description": "A name for the VPC connector.",
			"routing": {
				"send": {
					"property": "VpcConnectorName",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Create Vpc Connector"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Subnets",
			"name": "Subnets",
			"type": "json",
			"default": "[\n  null\n]",
			"description": "<p>A list of IDs of subnets that App Runner should use when it associates your service with a custom Amazon VPC. Specify IDs of subnets of a single Amazon VPC. App Runner determines the Amazon VPC from the subnets you specify.</p> <note> <p> App Runner currently only provides support for IPv4. </p> </note>",
			"routing": {
				"send": {
					"property": "Subnets",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Create Vpc Connector"
					]
				}
			}
		},
		{
			"displayName": "Security Groups",
			"name": "SecurityGroups",
			"type": "json",
			"default": "[\n  null\n]",
			"description": "A list of IDs of security groups that App Runner should use for access to Amazon Web Services resources under the specified subnets. If not specified, App Runner uses the default security group of the Amazon VPC. The default security group allows all outbound traffic.",
			"routing": {
				"send": {
					"property": "SecurityGroups",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Create Vpc Connector"
					]
				}
			}
		},
		{
			"displayName": "Tags",
			"name": "Tags",
			"type": "json",
			"default": "[\n  {\n    \"Value\": {}\n  }\n]",
			"description": "A list of metadata items that you can associate with your VPC connector resource. A tag is a key-value pair.",
			"routing": {
				"send": {
					"property": "Tags",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Create Vpc Connector"
					]
				}
			}
		},
		{
			"displayName": "Hmac API Key",
			"name": "security_hmac",
			"type": "string",
			"default": "",
			"description": "Amazon Signature authorization v4",
			"required": false,
			"routing": {
				"request": {
					"headers": {
						"Authorization": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Create Vpc Connector"
					]
				}
			}
		},
		{
			"displayName": "POST /#X-Amz-Target=AppRunner.CreateVpcIngressConnection",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Create Vpc Ingress Connection"
					]
				}
			}
		},
		{
			"displayName": "X Amz Target",
			"name": "X-Amz-Target",
			"required": true,
			"default": "AppRunner.CreateVpcIngressConnection",
			"type": "options",
			"options": [
				{
					"name": "App Runner Create Vpc Ingress Connection",
					"value": "AppRunner.CreateVpcIngressConnection"
				}
			],
			"routing": {
				"request": {
					"headers": {
						"X-Amz-Target": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Create Vpc Ingress Connection"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Service Arn",
			"name": "ServiceArn",
			"type": "string",
			"default": "",
			"description": "The Amazon Resource Name (ARN) for this App Runner service that is used to create the VPC Ingress Connection resource.",
			"routing": {
				"send": {
					"property": "ServiceArn",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Create Vpc Ingress Connection"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Vpc Ingress Connection Name",
			"name": "VpcIngressConnectionName",
			"type": "string",
			"default": "",
			"description": "A name for the VPC Ingress Connection resource. It must be unique across all the active VPC Ingress Connections in your Amazon Web Services account in the Amazon Web Services Region. ",
			"routing": {
				"send": {
					"property": "VpcIngressConnectionName",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Create Vpc Ingress Connection"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Ingress Vpc Configuration",
			"name": "IngressVpcConfiguration",
			"type": "json",
			"default": "{\n  \"VpcEndpointId\": {}\n}",
			"description": "Specifications for the customer’s Amazon VPC and the related Amazon Web Services PrivateLink VPC endpoint that are used to create the VPC Ingress Connection resource.",
			"routing": {
				"send": {
					"property": "IngressVpcConfiguration",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Create Vpc Ingress Connection"
					]
				}
			}
		},
		{
			"displayName": "Tags",
			"name": "Tags",
			"type": "json",
			"default": "[\n  {\n    \"Value\": {}\n  }\n]",
			"description": "An optional list of metadata items that you can associate with the VPC Ingress Connection resource. A tag is a key-value pair.",
			"routing": {
				"send": {
					"property": "Tags",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Create Vpc Ingress Connection"
					]
				}
			}
		},
		{
			"displayName": "Hmac API Key",
			"name": "security_hmac",
			"type": "string",
			"default": "",
			"description": "Amazon Signature authorization v4",
			"required": false,
			"routing": {
				"request": {
					"headers": {
						"Authorization": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Create Vpc Ingress Connection"
					]
				}
			}
		},
		{
			"displayName": "POST /#X-Amz-Target=AppRunner.DeleteAutoScalingConfiguration",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Delete Auto Scaling Configuration"
					]
				}
			}
		},
		{
			"displayName": "X Amz Target",
			"name": "X-Amz-Target",
			"required": true,
			"default": "AppRunner.DeleteAutoScalingConfiguration",
			"type": "options",
			"options": [
				{
					"name": "App Runner Delete Auto Scaling Configuration",
					"value": "AppRunner.DeleteAutoScalingConfiguration"
				}
			],
			"routing": {
				"request": {
					"headers": {
						"X-Amz-Target": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Delete Auto Scaling Configuration"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Auto Scaling Configuration Arn",
			"name": "AutoScalingConfigurationArn",
			"type": "string",
			"default": "",
			"description": "<p>The Amazon Resource Name (ARN) of the App Runner auto scaling configuration that you want to delete.</p> <p>The ARN can be a full auto scaling configuration ARN, or a partial ARN ending with either <code>.../<i>name</i> </code> or <code>.../<i>name</i>/<i>revision</i> </code>. If a revision isn't specified, the latest active revision is deleted.</p>",
			"routing": {
				"send": {
					"property": "AutoScalingConfigurationArn",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Delete Auto Scaling Configuration"
					]
				}
			}
		},
		{
			"displayName": "Hmac API Key",
			"name": "security_hmac",
			"type": "string",
			"default": "",
			"description": "Amazon Signature authorization v4",
			"required": false,
			"routing": {
				"request": {
					"headers": {
						"Authorization": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Delete Auto Scaling Configuration"
					]
				}
			}
		},
		{
			"displayName": "POST /#X-Amz-Target=AppRunner.DeleteConnection",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Delete Connection"
					]
				}
			}
		},
		{
			"displayName": "X Amz Target",
			"name": "X-Amz-Target",
			"required": true,
			"default": "AppRunner.DeleteConnection",
			"type": "options",
			"options": [
				{
					"name": "App Runner Delete Connection",
					"value": "AppRunner.DeleteConnection"
				}
			],
			"routing": {
				"request": {
					"headers": {
						"X-Amz-Target": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Delete Connection"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Connection Arn",
			"name": "ConnectionArn",
			"type": "string",
			"default": "",
			"description": "The Amazon Resource Name (ARN) of the App Runner connection that you want to delete.",
			"routing": {
				"send": {
					"property": "ConnectionArn",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Delete Connection"
					]
				}
			}
		},
		{
			"displayName": "Hmac API Key",
			"name": "security_hmac",
			"type": "string",
			"default": "",
			"description": "Amazon Signature authorization v4",
			"required": false,
			"routing": {
				"request": {
					"headers": {
						"Authorization": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Delete Connection"
					]
				}
			}
		},
		{
			"displayName": "POST /#X-Amz-Target=AppRunner.DeleteObservabilityConfiguration",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Delete Observability Configuration"
					]
				}
			}
		},
		{
			"displayName": "X Amz Target",
			"name": "X-Amz-Target",
			"required": true,
			"default": "AppRunner.DeleteObservabilityConfiguration",
			"type": "options",
			"options": [
				{
					"name": "App Runner Delete Observability Configuration",
					"value": "AppRunner.DeleteObservabilityConfiguration"
				}
			],
			"routing": {
				"request": {
					"headers": {
						"X-Amz-Target": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Delete Observability Configuration"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Observability Configuration Arn",
			"name": "ObservabilityConfigurationArn",
			"type": "string",
			"default": "",
			"description": "<p>The Amazon Resource Name (ARN) of the App Runner observability configuration that you want to delete.</p> <p>The ARN can be a full observability configuration ARN, or a partial ARN ending with either <code>.../<i>name</i> </code> or <code>.../<i>name</i>/<i>revision</i> </code>. If a revision isn't specified, the latest active revision is deleted.</p>",
			"routing": {
				"send": {
					"property": "ObservabilityConfigurationArn",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Delete Observability Configuration"
					]
				}
			}
		},
		{
			"displayName": "Hmac API Key",
			"name": "security_hmac",
			"type": "string",
			"default": "",
			"description": "Amazon Signature authorization v4",
			"required": false,
			"routing": {
				"request": {
					"headers": {
						"Authorization": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Delete Observability Configuration"
					]
				}
			}
		},
		{
			"displayName": "POST /#X-Amz-Target=AppRunner.DeleteService",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Delete Service"
					]
				}
			}
		},
		{
			"displayName": "X Amz Target",
			"name": "X-Amz-Target",
			"required": true,
			"default": "AppRunner.DeleteService",
			"type": "options",
			"options": [
				{
					"name": "App Runner Delete Service",
					"value": "AppRunner.DeleteService"
				}
			],
			"routing": {
				"request": {
					"headers": {
						"X-Amz-Target": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Delete Service"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Service Arn",
			"name": "ServiceArn",
			"type": "string",
			"default": "",
			"description": "The Amazon Resource Name (ARN) of the App Runner service that you want to delete.",
			"routing": {
				"send": {
					"property": "ServiceArn",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Delete Service"
					]
				}
			}
		},
		{
			"displayName": "Hmac API Key",
			"name": "security_hmac",
			"type": "string",
			"default": "",
			"description": "Amazon Signature authorization v4",
			"required": false,
			"routing": {
				"request": {
					"headers": {
						"Authorization": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Delete Service"
					]
				}
			}
		},
		{
			"displayName": "POST /#X-Amz-Target=AppRunner.DeleteVpcConnector",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Delete Vpc Connector"
					]
				}
			}
		},
		{
			"displayName": "X Amz Target",
			"name": "X-Amz-Target",
			"required": true,
			"default": "AppRunner.DeleteVpcConnector",
			"type": "options",
			"options": [
				{
					"name": "App Runner Delete Vpc Connector",
					"value": "AppRunner.DeleteVpcConnector"
				}
			],
			"routing": {
				"request": {
					"headers": {
						"X-Amz-Target": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Delete Vpc Connector"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Vpc Connector Arn",
			"name": "VpcConnectorArn",
			"type": "string",
			"default": "",
			"description": "<p>The Amazon Resource Name (ARN) of the App Runner VPC connector that you want to delete.</p> <p>The ARN must be a full VPC connector ARN.</p>",
			"routing": {
				"send": {
					"property": "VpcConnectorArn",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Delete Vpc Connector"
					]
				}
			}
		},
		{
			"displayName": "Hmac API Key",
			"name": "security_hmac",
			"type": "string",
			"default": "",
			"description": "Amazon Signature authorization v4",
			"required": false,
			"routing": {
				"request": {
					"headers": {
						"Authorization": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Delete Vpc Connector"
					]
				}
			}
		},
		{
			"displayName": "POST /#X-Amz-Target=AppRunner.DeleteVpcIngressConnection",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Delete Vpc Ingress Connection"
					]
				}
			}
		},
		{
			"displayName": "X Amz Target",
			"name": "X-Amz-Target",
			"required": true,
			"default": "AppRunner.DeleteVpcIngressConnection",
			"type": "options",
			"options": [
				{
					"name": "App Runner Delete Vpc Ingress Connection",
					"value": "AppRunner.DeleteVpcIngressConnection"
				}
			],
			"routing": {
				"request": {
					"headers": {
						"X-Amz-Target": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Delete Vpc Ingress Connection"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Vpc Ingress Connection Arn",
			"name": "VpcIngressConnectionArn",
			"type": "string",
			"default": "",
			"description": "The Amazon Resource Name (ARN) of the App Runner VPC Ingress Connection that you want to delete.",
			"routing": {
				"send": {
					"property": "VpcIngressConnectionArn",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Delete Vpc Ingress Connection"
					]
				}
			}
		},
		{
			"displayName": "Hmac API Key",
			"name": "security_hmac",
			"type": "string",
			"default": "",
			"description": "Amazon Signature authorization v4",
			"required": false,
			"routing": {
				"request": {
					"headers": {
						"Authorization": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Delete Vpc Ingress Connection"
					]
				}
			}
		},
		{
			"displayName": "POST /#X-Amz-Target=AppRunner.DescribeAutoScalingConfiguration",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Describe Auto Scaling Configuration"
					]
				}
			}
		},
		{
			"displayName": "X Amz Target",
			"name": "X-Amz-Target",
			"required": true,
			"default": "AppRunner.DescribeAutoScalingConfiguration",
			"type": "options",
			"options": [
				{
					"name": "App Runner Describe Auto Scaling Configuration",
					"value": "AppRunner.DescribeAutoScalingConfiguration"
				}
			],
			"routing": {
				"request": {
					"headers": {
						"X-Amz-Target": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Describe Auto Scaling Configuration"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Auto Scaling Configuration Arn",
			"name": "AutoScalingConfigurationArn",
			"type": "string",
			"default": "",
			"description": "<p>The Amazon Resource Name (ARN) of the App Runner auto scaling configuration that you want a description for.</p> <p>The ARN can be a full auto scaling configuration ARN, or a partial ARN ending with either <code>.../<i>name</i> </code> or <code>.../<i>name</i>/<i>revision</i> </code>. If a revision isn't specified, the latest active revision is described.</p>",
			"routing": {
				"send": {
					"property": "AutoScalingConfigurationArn",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Describe Auto Scaling Configuration"
					]
				}
			}
		},
		{
			"displayName": "Hmac API Key",
			"name": "security_hmac",
			"type": "string",
			"default": "",
			"description": "Amazon Signature authorization v4",
			"required": false,
			"routing": {
				"request": {
					"headers": {
						"Authorization": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Describe Auto Scaling Configuration"
					]
				}
			}
		},
		{
			"displayName": "POST /#X-Amz-Target=AppRunner.DescribeCustomDomains",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Describe Custom Domains"
					]
				}
			}
		},
		{
			"displayName": "Max Results",
			"name": "MaxResults",
			"description": "Pagination limit",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "MaxResults",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Describe Custom Domains"
					]
				}
			}
		},
		{
			"displayName": "Next Token",
			"name": "NextToken",
			"description": "Pagination token",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "NextToken",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Describe Custom Domains"
					]
				}
			}
		},
		{
			"displayName": "X Amz Target",
			"name": "X-Amz-Target",
			"required": true,
			"default": "AppRunner.DescribeCustomDomains",
			"type": "options",
			"options": [
				{
					"name": "App Runner Describe Custom Domains",
					"value": "AppRunner.DescribeCustomDomains"
				}
			],
			"routing": {
				"request": {
					"headers": {
						"X-Amz-Target": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Describe Custom Domains"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Service Arn",
			"name": "ServiceArn",
			"type": "string",
			"default": "",
			"description": "The Amazon Resource Name (ARN) of the App Runner service that you want associated custom domain names to be described for.",
			"routing": {
				"send": {
					"property": "ServiceArn",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Describe Custom Domains"
					]
				}
			}
		},
		{
			"displayName": "Next Token",
			"name": "NextToken",
			"type": "string",
			"default": "",
			"description": "<p>A token from a previous result page. It's used for a paginated request. The request retrieves the next result page. All other parameter values must be identical to the ones that are specified in the initial request.</p> <p>If you don't specify <code>NextToken</code>, the request retrieves the first result page.</p>",
			"routing": {
				"send": {
					"property": "NextToken",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Describe Custom Domains"
					]
				}
			}
		},
		{
			"displayName": "Max Results",
			"name": "MaxResults",
			"type": "number",
			"default": 0,
			"description": "<p>The maximum number of results that each response (result page) can include. It's used for a paginated request.</p> <p>If you don't specify <code>MaxResults</code>, the request retrieves all available results in a single response.</p>",
			"routing": {
				"send": {
					"property": "MaxResults",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Describe Custom Domains"
					]
				}
			}
		},
		{
			"displayName": "Hmac API Key",
			"name": "security_hmac",
			"type": "string",
			"default": "",
			"description": "Amazon Signature authorization v4",
			"required": false,
			"routing": {
				"request": {
					"headers": {
						"Authorization": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Describe Custom Domains"
					]
				}
			}
		},
		{
			"displayName": "POST /#X-Amz-Target=AppRunner.DescribeObservabilityConfiguration",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Describe Observability Configuration"
					]
				}
			}
		},
		{
			"displayName": "X Amz Target",
			"name": "X-Amz-Target",
			"required": true,
			"default": "AppRunner.DescribeObservabilityConfiguration",
			"type": "options",
			"options": [
				{
					"name": "App Runner Describe Observability Configuration",
					"value": "AppRunner.DescribeObservabilityConfiguration"
				}
			],
			"routing": {
				"request": {
					"headers": {
						"X-Amz-Target": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Describe Observability Configuration"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Observability Configuration Arn",
			"name": "ObservabilityConfigurationArn",
			"type": "string",
			"default": "",
			"description": "<p>The Amazon Resource Name (ARN) of the App Runner observability configuration that you want a description for.</p> <p>The ARN can be a full observability configuration ARN, or a partial ARN ending with either <code>.../<i>name</i> </code> or <code>.../<i>name</i>/<i>revision</i> </code>. If a revision isn't specified, the latest active revision is described.</p>",
			"routing": {
				"send": {
					"property": "ObservabilityConfigurationArn",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Describe Observability Configuration"
					]
				}
			}
		},
		{
			"displayName": "Hmac API Key",
			"name": "security_hmac",
			"type": "string",
			"default": "",
			"description": "Amazon Signature authorization v4",
			"required": false,
			"routing": {
				"request": {
					"headers": {
						"Authorization": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Describe Observability Configuration"
					]
				}
			}
		},
		{
			"displayName": "POST /#X-Amz-Target=AppRunner.DescribeService",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Describe Service"
					]
				}
			}
		},
		{
			"displayName": "X Amz Target",
			"name": "X-Amz-Target",
			"required": true,
			"default": "AppRunner.DescribeService",
			"type": "options",
			"options": [
				{
					"name": "App Runner Describe Service",
					"value": "AppRunner.DescribeService"
				}
			],
			"routing": {
				"request": {
					"headers": {
						"X-Amz-Target": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Describe Service"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Service Arn",
			"name": "ServiceArn",
			"type": "string",
			"default": "",
			"description": "The Amazon Resource Name (ARN) of the App Runner service that you want a description for.",
			"routing": {
				"send": {
					"property": "ServiceArn",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Describe Service"
					]
				}
			}
		},
		{
			"displayName": "Hmac API Key",
			"name": "security_hmac",
			"type": "string",
			"default": "",
			"description": "Amazon Signature authorization v4",
			"required": false,
			"routing": {
				"request": {
					"headers": {
						"Authorization": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Describe Service"
					]
				}
			}
		},
		{
			"displayName": "POST /#X-Amz-Target=AppRunner.DescribeVpcConnector",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Describe Vpc Connector"
					]
				}
			}
		},
		{
			"displayName": "X Amz Target",
			"name": "X-Amz-Target",
			"required": true,
			"default": "AppRunner.DescribeVpcConnector",
			"type": "options",
			"options": [
				{
					"name": "App Runner Describe Vpc Connector",
					"value": "AppRunner.DescribeVpcConnector"
				}
			],
			"routing": {
				"request": {
					"headers": {
						"X-Amz-Target": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Describe Vpc Connector"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Vpc Connector Arn",
			"name": "VpcConnectorArn",
			"type": "string",
			"default": "",
			"description": "<p>The Amazon Resource Name (ARN) of the App Runner VPC connector that you want a description for.</p> <p>The ARN must be a full VPC connector ARN.</p>",
			"routing": {
				"send": {
					"property": "VpcConnectorArn",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Describe Vpc Connector"
					]
				}
			}
		},
		{
			"displayName": "Hmac API Key",
			"name": "security_hmac",
			"type": "string",
			"default": "",
			"description": "Amazon Signature authorization v4",
			"required": false,
			"routing": {
				"request": {
					"headers": {
						"Authorization": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Describe Vpc Connector"
					]
				}
			}
		},
		{
			"displayName": "POST /#X-Amz-Target=AppRunner.DescribeVpcIngressConnection",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Describe Vpc Ingress Connection"
					]
				}
			}
		},
		{
			"displayName": "X Amz Target",
			"name": "X-Amz-Target",
			"required": true,
			"default": "AppRunner.DescribeVpcIngressConnection",
			"type": "options",
			"options": [
				{
					"name": "App Runner Describe Vpc Ingress Connection",
					"value": "AppRunner.DescribeVpcIngressConnection"
				}
			],
			"routing": {
				"request": {
					"headers": {
						"X-Amz-Target": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Describe Vpc Ingress Connection"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Vpc Ingress Connection Arn",
			"name": "VpcIngressConnectionArn",
			"type": "string",
			"default": "",
			"description": "The Amazon Resource Name (ARN) of the App Runner VPC Ingress Connection that you want a description for.",
			"routing": {
				"send": {
					"property": "VpcIngressConnectionArn",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Describe Vpc Ingress Connection"
					]
				}
			}
		},
		{
			"displayName": "Hmac API Key",
			"name": "security_hmac",
			"type": "string",
			"default": "",
			"description": "Amazon Signature authorization v4",
			"required": false,
			"routing": {
				"request": {
					"headers": {
						"Authorization": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Describe Vpc Ingress Connection"
					]
				}
			}
		},
		{
			"displayName": "POST /#X-Amz-Target=AppRunner.DisassociateCustomDomain",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Disassociate Custom Domain"
					]
				}
			}
		},
		{
			"displayName": "X Amz Target",
			"name": "X-Amz-Target",
			"required": true,
			"default": "AppRunner.DisassociateCustomDomain",
			"type": "options",
			"options": [
				{
					"name": "App Runner Disassociate Custom Domain",
					"value": "AppRunner.DisassociateCustomDomain"
				}
			],
			"routing": {
				"request": {
					"headers": {
						"X-Amz-Target": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Disassociate Custom Domain"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Service Arn",
			"name": "ServiceArn",
			"type": "string",
			"default": "",
			"description": "The Amazon Resource Name (ARN) of the App Runner service that you want to disassociate a custom domain name from.",
			"routing": {
				"send": {
					"property": "ServiceArn",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Disassociate Custom Domain"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Domain Name",
			"name": "DomainName",
			"type": "string",
			"default": "",
			"description": "The domain name that you want to disassociate from the App Runner service.",
			"routing": {
				"send": {
					"property": "DomainName",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Disassociate Custom Domain"
					]
				}
			}
		},
		{
			"displayName": "Hmac API Key",
			"name": "security_hmac",
			"type": "string",
			"default": "",
			"description": "Amazon Signature authorization v4",
			"required": false,
			"routing": {
				"request": {
					"headers": {
						"Authorization": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Disassociate Custom Domain"
					]
				}
			}
		},
		{
			"displayName": "POST /#X-Amz-Target=AppRunner.ListAutoScalingConfigurations",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"List Auto Scaling Configurations"
					]
				}
			}
		},
		{
			"displayName": "Max Results",
			"name": "MaxResults",
			"description": "Pagination limit",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "MaxResults",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"List Auto Scaling Configurations"
					]
				}
			}
		},
		{
			"displayName": "Next Token",
			"name": "NextToken",
			"description": "Pagination token",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "NextToken",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"List Auto Scaling Configurations"
					]
				}
			}
		},
		{
			"displayName": "X Amz Target",
			"name": "X-Amz-Target",
			"required": true,
			"default": "AppRunner.ListAutoScalingConfigurations",
			"type": "options",
			"options": [
				{
					"name": "App Runner List Auto Scaling Configurations",
					"value": "AppRunner.ListAutoScalingConfigurations"
				}
			],
			"routing": {
				"request": {
					"headers": {
						"X-Amz-Target": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"List Auto Scaling Configurations"
					]
				}
			}
		},
		{
			"displayName": "Auto Scaling Configuration Name",
			"name": "AutoScalingConfigurationName",
			"type": "string",
			"default": "",
			"description": "The name of the App Runner auto scaling configuration that you want to list. If specified, App Runner lists revisions that share this name. If not specified, App Runner returns revisions of all active configurations.",
			"routing": {
				"send": {
					"property": "AutoScalingConfigurationName",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"List Auto Scaling Configurations"
					]
				}
			}
		},
		{
			"displayName": "Latest Only",
			"name": "LatestOnly",
			"type": "boolean",
			"default": true,
			"description": "<p>Set to <code>true</code> to list only the latest revision for each requested configuration name.</p> <p>Set to <code>false</code> to list all revisions for each requested configuration name.</p> <p>Default: <code>true</code> </p>",
			"routing": {
				"send": {
					"property": "LatestOnly",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"List Auto Scaling Configurations"
					]
				}
			}
		},
		{
			"displayName": "Max Results",
			"name": "MaxResults",
			"type": "number",
			"default": 0,
			"description": "<p>The maximum number of results to include in each response (result page). It's used for a paginated request.</p> <p>If you don't specify <code>MaxResults</code>, the request retrieves all available results in a single response.</p>",
			"routing": {
				"send": {
					"property": "MaxResults",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"List Auto Scaling Configurations"
					]
				}
			}
		},
		{
			"displayName": "Next Token",
			"name": "NextToken",
			"type": "string",
			"default": "",
			"description": "<p>A token from a previous result page. It's used for a paginated request. The request retrieves the next result page. All other parameter values must be identical to the ones that are specified in the initial request.</p> <p>If you don't specify <code>NextToken</code>, the request retrieves the first result page.</p>",
			"routing": {
				"send": {
					"property": "NextToken",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"List Auto Scaling Configurations"
					]
				}
			}
		},
		{
			"displayName": "Hmac API Key",
			"name": "security_hmac",
			"type": "string",
			"default": "",
			"description": "Amazon Signature authorization v4",
			"required": false,
			"routing": {
				"request": {
					"headers": {
						"Authorization": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"List Auto Scaling Configurations"
					]
				}
			}
		},
		{
			"displayName": "POST /#X-Amz-Target=AppRunner.ListConnections",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"List Connections"
					]
				}
			}
		},
		{
			"displayName": "Max Results",
			"name": "MaxResults",
			"description": "Pagination limit",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "MaxResults",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"List Connections"
					]
				}
			}
		},
		{
			"displayName": "Next Token",
			"name": "NextToken",
			"description": "Pagination token",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "NextToken",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"List Connections"
					]
				}
			}
		},
		{
			"displayName": "X Amz Target",
			"name": "X-Amz-Target",
			"required": true,
			"default": "AppRunner.ListConnections",
			"type": "options",
			"options": [
				{
					"name": "App Runner List Connections",
					"value": "AppRunner.ListConnections"
				}
			],
			"routing": {
				"request": {
					"headers": {
						"X-Amz-Target": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"List Connections"
					]
				}
			}
		},
		{
			"displayName": "Connection Name",
			"name": "ConnectionName",
			"type": "string",
			"default": "",
			"description": "If specified, only this connection is returned. If not specified, the result isn't filtered by name.",
			"routing": {
				"send": {
					"property": "ConnectionName",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"List Connections"
					]
				}
			}
		},
		{
			"displayName": "Max Results",
			"name": "MaxResults",
			"type": "number",
			"default": 0,
			"description": "<p>The maximum number of results to include in each response (result page). Used for a paginated request.</p> <p>If you don't specify <code>MaxResults</code>, the request retrieves all available results in a single response.</p>",
			"routing": {
				"send": {
					"property": "MaxResults",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"List Connections"
					]
				}
			}
		},
		{
			"displayName": "Next Token",
			"name": "NextToken",
			"type": "string",
			"default": "",
			"description": "<p>A token from a previous result page. Used for a paginated request. The request retrieves the next result page. All other parameter values must be identical to the ones specified in the initial request.</p> <p>If you don't specify <code>NextToken</code>, the request retrieves the first result page.</p>",
			"routing": {
				"send": {
					"property": "NextToken",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"List Connections"
					]
				}
			}
		},
		{
			"displayName": "Hmac API Key",
			"name": "security_hmac",
			"type": "string",
			"default": "",
			"description": "Amazon Signature authorization v4",
			"required": false,
			"routing": {
				"request": {
					"headers": {
						"Authorization": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"List Connections"
					]
				}
			}
		},
		{
			"displayName": "POST /#X-Amz-Target=AppRunner.ListObservabilityConfigurations",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"List Observability Configurations"
					]
				}
			}
		},
		{
			"displayName": "Max Results",
			"name": "MaxResults",
			"description": "Pagination limit",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "MaxResults",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"List Observability Configurations"
					]
				}
			}
		},
		{
			"displayName": "Next Token",
			"name": "NextToken",
			"description": "Pagination token",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "NextToken",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"List Observability Configurations"
					]
				}
			}
		},
		{
			"displayName": "X Amz Target",
			"name": "X-Amz-Target",
			"required": true,
			"default": "AppRunner.ListObservabilityConfigurations",
			"type": "options",
			"options": [
				{
					"name": "App Runner List Observability Configurations",
					"value": "AppRunner.ListObservabilityConfigurations"
				}
			],
			"routing": {
				"request": {
					"headers": {
						"X-Amz-Target": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"List Observability Configurations"
					]
				}
			}
		},
		{
			"displayName": "Observability Configuration Name",
			"name": "ObservabilityConfigurationName",
			"type": "string",
			"default": "",
			"description": "The name of the App Runner observability configuration that you want to list. If specified, App Runner lists revisions that share this name. If not specified, App Runner returns revisions of all active configurations.",
			"routing": {
				"send": {
					"property": "ObservabilityConfigurationName",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"List Observability Configurations"
					]
				}
			}
		},
		{
			"displayName": "Latest Only",
			"name": "LatestOnly",
			"type": "boolean",
			"default": true,
			"description": "<p>Set to <code>true</code> to list only the latest revision for each requested configuration name.</p> <p>Set to <code>false</code> to list all revisions for each requested configuration name.</p> <p>Default: <code>true</code> </p>",
			"routing": {
				"send": {
					"property": "LatestOnly",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"List Observability Configurations"
					]
				}
			}
		},
		{
			"displayName": "Max Results",
			"name": "MaxResults",
			"type": "number",
			"default": 0,
			"description": "<p>The maximum number of results to include in each response (result page). It's used for a paginated request.</p> <p>If you don't specify <code>MaxResults</code>, the request retrieves all available results in a single response.</p>",
			"routing": {
				"send": {
					"property": "MaxResults",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"List Observability Configurations"
					]
				}
			}
		},
		{
			"displayName": "Next Token",
			"name": "NextToken",
			"type": "string",
			"default": "",
			"description": "<p>A token from a previous result page. It's used for a paginated request. The request retrieves the next result page. All other parameter values must be identical to the ones that are specified in the initial request.</p> <p>If you don't specify <code>NextToken</code>, the request retrieves the first result page.</p>",
			"routing": {
				"send": {
					"property": "NextToken",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"List Observability Configurations"
					]
				}
			}
		},
		{
			"displayName": "Hmac API Key",
			"name": "security_hmac",
			"type": "string",
			"default": "",
			"description": "Amazon Signature authorization v4",
			"required": false,
			"routing": {
				"request": {
					"headers": {
						"Authorization": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"List Observability Configurations"
					]
				}
			}
		},
		{
			"displayName": "POST /#X-Amz-Target=AppRunner.ListOperations",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"List Operations"
					]
				}
			}
		},
		{
			"displayName": "Max Results",
			"name": "MaxResults",
			"description": "Pagination limit",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "MaxResults",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"List Operations"
					]
				}
			}
		},
		{
			"displayName": "Next Token",
			"name": "NextToken",
			"description": "Pagination token",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "NextToken",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"List Operations"
					]
				}
			}
		},
		{
			"displayName": "X Amz Target",
			"name": "X-Amz-Target",
			"required": true,
			"default": "AppRunner.ListOperations",
			"type": "options",
			"options": [
				{
					"name": "App Runner List Operations",
					"value": "AppRunner.ListOperations"
				}
			],
			"routing": {
				"request": {
					"headers": {
						"X-Amz-Target": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"List Operations"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Service Arn",
			"name": "ServiceArn",
			"type": "string",
			"default": "",
			"description": "The Amazon Resource Name (ARN) of the App Runner service that you want a list of operations for.",
			"routing": {
				"send": {
					"property": "ServiceArn",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"List Operations"
					]
				}
			}
		},
		{
			"displayName": "Next Token",
			"name": "NextToken",
			"type": "string",
			"default": "",
			"description": "<p>A token from a previous result page. It's used for a paginated request. The request retrieves the next result page. All other parameter values must be identical to the ones specified in the initial request.</p> <p>If you don't specify <code>NextToken</code>, the request retrieves the first result page.</p>",
			"routing": {
				"send": {
					"property": "NextToken",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"List Operations"
					]
				}
			}
		},
		{
			"displayName": "Max Results",
			"name": "MaxResults",
			"type": "number",
			"default": 0,
			"description": "<p>The maximum number of results to include in each response (result page). It's used for a paginated request.</p> <p>If you don't specify <code>MaxResults</code>, the request retrieves all available results in a single response.</p>",
			"routing": {
				"send": {
					"property": "MaxResults",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"List Operations"
					]
				}
			}
		},
		{
			"displayName": "Hmac API Key",
			"name": "security_hmac",
			"type": "string",
			"default": "",
			"description": "Amazon Signature authorization v4",
			"required": false,
			"routing": {
				"request": {
					"headers": {
						"Authorization": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"List Operations"
					]
				}
			}
		},
		{
			"displayName": "POST /#X-Amz-Target=AppRunner.ListServices",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"List Services"
					]
				}
			}
		},
		{
			"displayName": "Max Results",
			"name": "MaxResults",
			"description": "Pagination limit",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "MaxResults",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"List Services"
					]
				}
			}
		},
		{
			"displayName": "Next Token",
			"name": "NextToken",
			"description": "Pagination token",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "NextToken",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"List Services"
					]
				}
			}
		},
		{
			"displayName": "X Amz Target",
			"name": "X-Amz-Target",
			"required": true,
			"default": "AppRunner.ListServices",
			"type": "options",
			"options": [
				{
					"name": "App Runner List Services",
					"value": "AppRunner.ListServices"
				}
			],
			"routing": {
				"request": {
					"headers": {
						"X-Amz-Target": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"List Services"
					]
				}
			}
		},
		{
			"displayName": "Next Token",
			"name": "NextToken",
			"type": "string",
			"default": "",
			"description": "<p>A token from a previous result page. Used for a paginated request. The request retrieves the next result page. All other parameter values must be identical to the ones specified in the initial request.</p> <p>If you don't specify <code>NextToken</code>, the request retrieves the first result page.</p>",
			"routing": {
				"send": {
					"property": "NextToken",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"List Services"
					]
				}
			}
		},
		{
			"displayName": "Max Results",
			"name": "MaxResults",
			"type": "number",
			"default": 0,
			"description": "<p>The maximum number of results to include in each response (result page). It's used for a paginated request.</p> <p>If you don't specify <code>MaxResults</code>, the request retrieves all available results in a single response.</p>",
			"routing": {
				"send": {
					"property": "MaxResults",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"List Services"
					]
				}
			}
		},
		{
			"displayName": "Hmac API Key",
			"name": "security_hmac",
			"type": "string",
			"default": "",
			"description": "Amazon Signature authorization v4",
			"required": false,
			"routing": {
				"request": {
					"headers": {
						"Authorization": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"List Services"
					]
				}
			}
		},
		{
			"displayName": "POST /#X-Amz-Target=AppRunner.ListTagsForResource",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"List Tags For Resource"
					]
				}
			}
		},
		{
			"displayName": "X Amz Target",
			"name": "X-Amz-Target",
			"required": true,
			"default": "AppRunner.ListTagsForResource",
			"type": "options",
			"options": [
				{
					"name": "App Runner List Tags For Resource",
					"value": "AppRunner.ListTagsForResource"
				}
			],
			"routing": {
				"request": {
					"headers": {
						"X-Amz-Target": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"List Tags For Resource"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Resource Arn",
			"name": "ResourceArn",
			"type": "string",
			"default": "",
			"description": "<p>The Amazon Resource Name (ARN) of the resource that a tag list is requested for.</p> <p>It must be the ARN of an App Runner resource.</p>",
			"routing": {
				"send": {
					"property": "ResourceArn",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"List Tags For Resource"
					]
				}
			}
		},
		{
			"displayName": "Hmac API Key",
			"name": "security_hmac",
			"type": "string",
			"default": "",
			"description": "Amazon Signature authorization v4",
			"required": false,
			"routing": {
				"request": {
					"headers": {
						"Authorization": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"List Tags For Resource"
					]
				}
			}
		},
		{
			"displayName": "POST /#X-Amz-Target=AppRunner.ListVpcConnectors",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"List Vpc Connectors"
					]
				}
			}
		},
		{
			"displayName": "Max Results",
			"name": "MaxResults",
			"description": "Pagination limit",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "MaxResults",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"List Vpc Connectors"
					]
				}
			}
		},
		{
			"displayName": "Next Token",
			"name": "NextToken",
			"description": "Pagination token",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "NextToken",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"List Vpc Connectors"
					]
				}
			}
		},
		{
			"displayName": "X Amz Target",
			"name": "X-Amz-Target",
			"required": true,
			"default": "AppRunner.ListVpcConnectors",
			"type": "options",
			"options": [
				{
					"name": "App Runner List Vpc Connectors",
					"value": "AppRunner.ListVpcConnectors"
				}
			],
			"routing": {
				"request": {
					"headers": {
						"X-Amz-Target": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"List Vpc Connectors"
					]
				}
			}
		},
		{
			"displayName": "Max Results",
			"name": "MaxResults",
			"type": "number",
			"default": 0,
			"description": "<p>The maximum number of results to include in each response (result page). It's used for a paginated request.</p> <p>If you don't specify <code>MaxResults</code>, the request retrieves all available results in a single response.</p>",
			"routing": {
				"send": {
					"property": "MaxResults",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"List Vpc Connectors"
					]
				}
			}
		},
		{
			"displayName": "Next Token",
			"name": "NextToken",
			"type": "string",
			"default": "",
			"description": "<p>A token from a previous result page. It's used for a paginated request. The request retrieves the next result page. All other parameter values must be identical to the ones that are specified in the initial request.</p> <p>If you don't specify <code>NextToken</code>, the request retrieves the first result page.</p>",
			"routing": {
				"send": {
					"property": "NextToken",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"List Vpc Connectors"
					]
				}
			}
		},
		{
			"displayName": "Hmac API Key",
			"name": "security_hmac",
			"type": "string",
			"default": "",
			"description": "Amazon Signature authorization v4",
			"required": false,
			"routing": {
				"request": {
					"headers": {
						"Authorization": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"List Vpc Connectors"
					]
				}
			}
		},
		{
			"displayName": "POST /#X-Amz-Target=AppRunner.ListVpcIngressConnections",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"List Vpc Ingress Connections"
					]
				}
			}
		},
		{
			"displayName": "Max Results",
			"name": "MaxResults",
			"description": "Pagination limit",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "MaxResults",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"List Vpc Ingress Connections"
					]
				}
			}
		},
		{
			"displayName": "Next Token",
			"name": "NextToken",
			"description": "Pagination token",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "NextToken",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"List Vpc Ingress Connections"
					]
				}
			}
		},
		{
			"displayName": "X Amz Target",
			"name": "X-Amz-Target",
			"required": true,
			"default": "AppRunner.ListVpcIngressConnections",
			"type": "options",
			"options": [
				{
					"name": "App Runner List Vpc Ingress Connections",
					"value": "AppRunner.ListVpcIngressConnections"
				}
			],
			"routing": {
				"request": {
					"headers": {
						"X-Amz-Target": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"List Vpc Ingress Connections"
					]
				}
			}
		},
		{
			"displayName": "Filter",
			"name": "Filter",
			"type": "json",
			"default": "{\n  \"VpcEndpointId\": {}\n}",
			"description": "The VPC Ingress Connections to be listed based on either the Service Arn or Vpc Endpoint Id, or both.",
			"routing": {
				"send": {
					"property": "Filter",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"List Vpc Ingress Connections"
					]
				}
			}
		},
		{
			"displayName": "Max Results",
			"name": "MaxResults",
			"type": "number",
			"default": 0,
			"description": "<p>The maximum number of results to include in each response (result page). It's used for a paginated request.</p> <p>If you don't specify <code>MaxResults</code>, the request retrieves all available results in a single response.</p>",
			"routing": {
				"send": {
					"property": "MaxResults",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"List Vpc Ingress Connections"
					]
				}
			}
		},
		{
			"displayName": "Next Token",
			"name": "NextToken",
			"type": "string",
			"default": "",
			"description": "<p>A token from a previous result page. It's used for a paginated request. The request retrieves the next result page. All other parameter values must be identical to the ones that are specified in the initial request.</p> <p>If you don't specify <code>NextToken</code>, the request retrieves the first result page.</p>",
			"routing": {
				"send": {
					"property": "NextToken",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"List Vpc Ingress Connections"
					]
				}
			}
		},
		{
			"displayName": "Hmac API Key",
			"name": "security_hmac",
			"type": "string",
			"default": "",
			"description": "Amazon Signature authorization v4",
			"required": false,
			"routing": {
				"request": {
					"headers": {
						"Authorization": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"List Vpc Ingress Connections"
					]
				}
			}
		},
		{
			"displayName": "POST /#X-Amz-Target=AppRunner.PauseService",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Pause Service"
					]
				}
			}
		},
		{
			"displayName": "X Amz Target",
			"name": "X-Amz-Target",
			"required": true,
			"default": "AppRunner.PauseService",
			"type": "options",
			"options": [
				{
					"name": "App Runner Pause Service",
					"value": "AppRunner.PauseService"
				}
			],
			"routing": {
				"request": {
					"headers": {
						"X-Amz-Target": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Pause Service"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Service Arn",
			"name": "ServiceArn",
			"type": "string",
			"default": "",
			"description": "The Amazon Resource Name (ARN) of the App Runner service that you want to pause.",
			"routing": {
				"send": {
					"property": "ServiceArn",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Pause Service"
					]
				}
			}
		},
		{
			"displayName": "Hmac API Key",
			"name": "security_hmac",
			"type": "string",
			"default": "",
			"description": "Amazon Signature authorization v4",
			"required": false,
			"routing": {
				"request": {
					"headers": {
						"Authorization": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Pause Service"
					]
				}
			}
		},
		{
			"displayName": "POST /#X-Amz-Target=AppRunner.ResumeService",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Resume Service"
					]
				}
			}
		},
		{
			"displayName": "X Amz Target",
			"name": "X-Amz-Target",
			"required": true,
			"default": "AppRunner.ResumeService",
			"type": "options",
			"options": [
				{
					"name": "App Runner Resume Service",
					"value": "AppRunner.ResumeService"
				}
			],
			"routing": {
				"request": {
					"headers": {
						"X-Amz-Target": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Resume Service"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Service Arn",
			"name": "ServiceArn",
			"type": "string",
			"default": "",
			"description": "The Amazon Resource Name (ARN) of the App Runner service that you want to resume.",
			"routing": {
				"send": {
					"property": "ServiceArn",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Resume Service"
					]
				}
			}
		},
		{
			"displayName": "Hmac API Key",
			"name": "security_hmac",
			"type": "string",
			"default": "",
			"description": "Amazon Signature authorization v4",
			"required": false,
			"routing": {
				"request": {
					"headers": {
						"Authorization": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Resume Service"
					]
				}
			}
		},
		{
			"displayName": "POST /#X-Amz-Target=AppRunner.StartDeployment",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Start Deployment"
					]
				}
			}
		},
		{
			"displayName": "X Amz Target",
			"name": "X-Amz-Target",
			"required": true,
			"default": "AppRunner.StartDeployment",
			"type": "options",
			"options": [
				{
					"name": "App Runner Start Deployment",
					"value": "AppRunner.StartDeployment"
				}
			],
			"routing": {
				"request": {
					"headers": {
						"X-Amz-Target": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Start Deployment"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Service Arn",
			"name": "ServiceArn",
			"type": "string",
			"default": "",
			"description": "The Amazon Resource Name (ARN) of the App Runner service that you want to manually deploy to.",
			"routing": {
				"send": {
					"property": "ServiceArn",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Start Deployment"
					]
				}
			}
		},
		{
			"displayName": "Hmac API Key",
			"name": "security_hmac",
			"type": "string",
			"default": "",
			"description": "Amazon Signature authorization v4",
			"required": false,
			"routing": {
				"request": {
					"headers": {
						"Authorization": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Start Deployment"
					]
				}
			}
		},
		{
			"displayName": "POST /#X-Amz-Target=AppRunner.TagResource",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Tag Resource"
					]
				}
			}
		},
		{
			"displayName": "X Amz Target",
			"name": "X-Amz-Target",
			"required": true,
			"default": "AppRunner.TagResource",
			"type": "options",
			"options": [
				{
					"name": "App Runner Tag Resource",
					"value": "AppRunner.TagResource"
				}
			],
			"routing": {
				"request": {
					"headers": {
						"X-Amz-Target": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Tag Resource"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Resource Arn",
			"name": "ResourceArn",
			"type": "string",
			"default": "",
			"description": "<p>The Amazon Resource Name (ARN) of the resource that you want to update tags for.</p> <p>It must be the ARN of an App Runner resource.</p>",
			"routing": {
				"send": {
					"property": "ResourceArn",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Tag Resource"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Tags",
			"name": "Tags",
			"type": "json",
			"default": "[\n  {\n    \"Value\": {}\n  }\n]",
			"description": "A list of tag key-value pairs to add or update. If a key is new to the resource, the tag is added with the provided value. If a key is already associated with the resource, the value of the tag is updated.",
			"routing": {
				"send": {
					"property": "Tags",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Tag Resource"
					]
				}
			}
		},
		{
			"displayName": "Hmac API Key",
			"name": "security_hmac",
			"type": "string",
			"default": "",
			"description": "Amazon Signature authorization v4",
			"required": false,
			"routing": {
				"request": {
					"headers": {
						"Authorization": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Tag Resource"
					]
				}
			}
		},
		{
			"displayName": "POST /#X-Amz-Target=AppRunner.UntagResource",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Untag Resource"
					]
				}
			}
		},
		{
			"displayName": "X Amz Target",
			"name": "X-Amz-Target",
			"required": true,
			"default": "AppRunner.UntagResource",
			"type": "options",
			"options": [
				{
					"name": "App Runner Untag Resource",
					"value": "AppRunner.UntagResource"
				}
			],
			"routing": {
				"request": {
					"headers": {
						"X-Amz-Target": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Untag Resource"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Resource Arn",
			"name": "ResourceArn",
			"type": "string",
			"default": "",
			"description": "<p>The Amazon Resource Name (ARN) of the resource that you want to remove tags from.</p> <p>It must be the ARN of an App Runner resource.</p>",
			"routing": {
				"send": {
					"property": "ResourceArn",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Untag Resource"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Tag Keys",
			"name": "TagKeys",
			"type": "json",
			"default": "[\n  null\n]",
			"description": "A list of tag keys that you want to remove.",
			"routing": {
				"send": {
					"property": "TagKeys",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Untag Resource"
					]
				}
			}
		},
		{
			"displayName": "Hmac API Key",
			"name": "security_hmac",
			"type": "string",
			"default": "",
			"description": "Amazon Signature authorization v4",
			"required": false,
			"routing": {
				"request": {
					"headers": {
						"Authorization": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Untag Resource"
					]
				}
			}
		},
		{
			"displayName": "POST /#X-Amz-Target=AppRunner.UpdateService",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Update Service"
					]
				}
			}
		},
		{
			"displayName": "X Amz Target",
			"name": "X-Amz-Target",
			"required": true,
			"default": "AppRunner.UpdateService",
			"type": "options",
			"options": [
				{
					"name": "App Runner Update Service",
					"value": "AppRunner.UpdateService"
				}
			],
			"routing": {
				"request": {
					"headers": {
						"X-Amz-Target": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Update Service"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Service Arn",
			"name": "ServiceArn",
			"type": "string",
			"default": "",
			"description": "The Amazon Resource Name (ARN) of the App Runner service that you want to update.",
			"routing": {
				"send": {
					"property": "ServiceArn",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Update Service"
					]
				}
			}
		},
		{
			"displayName": "Source Configuration",
			"name": "SourceConfiguration",
			"type": "json",
			"default": "{\n  \"CodeRepository\": {\n    \"RepositoryUrl\": {},\n    \"SourceCodeVersion\": {},\n    \"CodeConfiguration\": {}\n  },\n  \"ImageRepository\": {},\n  \"AutoDeploymentsEnabled\": {},\n  \"AuthenticationConfiguration\": {}\n}",
			"description": "<p>The source configuration to apply to the App Runner service.</p> <p>You can change the configuration of the code or image repository that the service uses. However, you can't switch from code to image or the other way around. This means that you must provide the same structure member of <code>SourceConfiguration</code> that you originally included when you created the service. Specifically, you can include either <code>CodeRepository</code> or <code>ImageRepository</code>. To update the source configuration, set the values to members of the structure that you include.</p>",
			"routing": {
				"send": {
					"property": "SourceConfiguration",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Update Service"
					]
				}
			}
		},
		{
			"displayName": "Instance Configuration",
			"name": "InstanceConfiguration",
			"type": "json",
			"default": "{\n  \"Memory\": {},\n  \"InstanceRoleArn\": {}\n}",
			"description": "The runtime configuration to apply to instances (scaling units) of your service.",
			"routing": {
				"send": {
					"property": "InstanceConfiguration",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Update Service"
					]
				}
			}
		},
		{
			"displayName": "Auto Scaling Configuration Arn",
			"name": "AutoScalingConfigurationArn",
			"type": "string",
			"default": "",
			"description": "The Amazon Resource Name (ARN) of an App Runner automatic scaling configuration resource that you want to associate with the App Runner service.",
			"routing": {
				"send": {
					"property": "AutoScalingConfigurationArn",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Update Service"
					]
				}
			}
		},
		{
			"displayName": "Health Check Configuration",
			"name": "HealthCheckConfiguration",
			"type": "json",
			"default": "{\n  \"Path\": {},\n  \"Interval\": {},\n  \"Timeout\": {},\n  \"HealthyThreshold\": {},\n  \"UnhealthyThreshold\": {}\n}",
			"description": "The settings for the health check that App Runner performs to monitor the health of the App Runner service.",
			"routing": {
				"send": {
					"property": "HealthCheckConfiguration",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Update Service"
					]
				}
			}
		},
		{
			"displayName": "Network Configuration",
			"name": "NetworkConfiguration",
			"type": "json",
			"default": "{\n  \"EgressConfiguration\": {\n    \"EgressType\": {},\n    \"VpcConnectorArn\": {}\n  },\n  \"IngressConfiguration\": {}\n}",
			"description": "Configuration settings related to network traffic of the web application that the App Runner service runs.",
			"routing": {
				"send": {
					"property": "NetworkConfiguration",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Update Service"
					]
				}
			}
		},
		{
			"displayName": "Observability Configuration",
			"name": "ObservabilityConfiguration",
			"type": "json",
			"default": "{\n  \"ObservabilityConfigurationArn\": {}\n}",
			"description": "The observability configuration of your service.",
			"routing": {
				"send": {
					"property": "ObservabilityConfiguration",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Update Service"
					]
				}
			}
		},
		{
			"displayName": "Hmac API Key",
			"name": "security_hmac",
			"type": "string",
			"default": "",
			"description": "Amazon Signature authorization v4",
			"required": false,
			"routing": {
				"request": {
					"headers": {
						"Authorization": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Update Service"
					]
				}
			}
		},
		{
			"displayName": "POST /#X-Amz-Target=AppRunner.UpdateVpcIngressConnection",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Update Vpc Ingress Connection"
					]
				}
			}
		},
		{
			"displayName": "X Amz Target",
			"name": "X-Amz-Target",
			"required": true,
			"default": "AppRunner.UpdateVpcIngressConnection",
			"type": "options",
			"options": [
				{
					"name": "App Runner Update Vpc Ingress Connection",
					"value": "AppRunner.UpdateVpcIngressConnection"
				}
			],
			"routing": {
				"request": {
					"headers": {
						"X-Amz-Target": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Update Vpc Ingress Connection"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Vpc Ingress Connection Arn",
			"name": "VpcIngressConnectionArn",
			"type": "string",
			"default": "",
			"description": "The Amazon Resource Name (Arn) for the App Runner VPC Ingress Connection resource that you want to update.",
			"routing": {
				"send": {
					"property": "VpcIngressConnectionArn",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Update Vpc Ingress Connection"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Ingress Vpc Configuration",
			"name": "IngressVpcConfiguration",
			"type": "json",
			"default": "{\n  \"VpcEndpointId\": {}\n}",
			"description": "Specifications for the customer’s Amazon VPC and the related Amazon Web Services PrivateLink VPC endpoint that are used to update the VPC Ingress Connection resource.",
			"routing": {
				"send": {
					"property": "IngressVpcConfiguration",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Update Vpc Ingress Connection"
					]
				}
			}
		},
		{
			"displayName": "Hmac API Key",
			"name": "security_hmac",
			"type": "string",
			"default": "",
			"description": "Amazon Signature authorization v4",
			"required": false,
			"routing": {
				"request": {
					"headers": {
						"Authorization": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Update Vpc Ingress Connection"
					]
				}
			}
		},
];
