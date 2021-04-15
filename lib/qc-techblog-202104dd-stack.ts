import * as cdk from '@aws-cdk/core';
import * as ec2 from '@aws-cdk/aws-ec2';

export class QcTechblog202104DdStack extends cdk.Stack {
  constructor(scope: cdk.Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    // The code that defines your stack goes here
    const vpc = new ec2.Vpc(this, 'Vpc', {
      cidr: '10.11.0.0/16',
      subnetConfiguration: [
        {
          cidrMask: 24,
          name: 'rds-client',
          subnetType: ec2.SubnetType.PUBLIC,
        },
        {
          cidrMask: 28,
          name: 'rds',
          subnetType: ec2.SubnetType.ISOLATED,
        },
      ],
    });

    const bastion = new ec2.BastionHostLinux(this, 'bastion', {
      vpc,
      subnetSelection: { subnetType: ec2.SubnetType.PUBLIC },
    });

    bastion.connections.allowFromAnyIpv4(
      ec2.Port.tcp(22),
      "Internet access SSH",
    );
  }
}
