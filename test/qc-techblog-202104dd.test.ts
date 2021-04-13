import { expect as expectCDK, matchTemplate, MatchStyle } from '@aws-cdk/assert';
import * as cdk from '@aws-cdk/core';
import * as QcTechblog202104Dd from '../lib/qc-techblog-202104dd-stack';

test('Empty Stack', () => {
    const app = new cdk.App();
    // WHEN
    const stack = new QcTechblog202104Dd.QcTechblog202104DdStack(app, 'MyTestStack');
    // THEN
    expectCDK(stack).to(matchTemplate({
      "Resources": {}
    }, MatchStyle.EXACT))
});
