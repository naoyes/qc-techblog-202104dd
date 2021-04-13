#!/usr/bin/env node
import 'source-map-support/register';
import * as cdk from '@aws-cdk/core';
import { QcTechblog202104DdStack } from '../lib/qc-techblog-202104dd-stack';

const app = new cdk.App();
new QcTechblog202104DdStack(app, 'QcTechblog202104DdStack');
