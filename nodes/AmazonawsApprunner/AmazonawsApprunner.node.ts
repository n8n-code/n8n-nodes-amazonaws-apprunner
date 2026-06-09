import { NodeConnectionTypes, type INodeType, type INodeTypeDescription } from 'n8n-workflow';
import { defaultDescription } from './resources/default';

export class AmazonawsApprunner implements INodeType {
	description: INodeTypeDescription = {
		displayName: 'amazonaws-apprunner',
		name: 'N8nDevAmazonawsApprunner',
		icon: { light: 'file:./amazonaws-apprunner.png', dark: 'file:./amazonaws-apprunner.dark.png' },
		group: ['input'],
		version: 1,
		subtitle: '={{\$parameter["operation"] + ": " + \$parameter["resource"]}}',
		description: 'App Runner is an application service that provides a fast, simple, and cost-effective way to go directly from an existing container image or source code to a runn..',
		defaults: { name: 'amazonaws-apprunner' },
		usableAsTool: true,
		inputs: [NodeConnectionTypes.Main],
		outputs: [NodeConnectionTypes.Main],
		credentials: [
			{
				name: 'N8nDevAmazonawsApprunnerApi',
				required: true,
			},
		],
		requestDefaults: {
			baseURL: '={{\$credentials.url}}',
			headers: {
				Accept: 'application/json',
				'Content-Type': 'application/json',
			},
		},
		properties: [
		{
			"displayName": "Resource",
			"name": "resource",
			"type": "options",
			"noDataExpression": true,
			"options": [
				{
					"name": "Default",
					"value": "Default",
					"description": ""
				}
			],
			"default": ""
		},
		...defaultDescription
		],
	};
}
