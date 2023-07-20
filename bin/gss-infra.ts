#!/usr/bin/env node
import * as cdk from 'aws-cdk-lib';
import { GssInfraStack } from '../lib/gss-infra-stack';

const app = new cdk.App();
new GssInfraStack(app, 'GssInfraStack');
