import { Construct } from 'constructs';
import { NodejsFunction } from 'aws-cdk-lib/aws-lambda-nodejs';
import { LambdaRestApi } from 'aws-cdk-lib/aws-apigateway';

// construct defined for lambda
export class HelloWorld extends Construct {
  constructor(scope: Construct, id: string) {
    super(scope, id);
    // the function literal/wording in the name points to the file of the Lambda handler code.
    const helloFunction = new NodejsFunction(this, 'function');

    new LambdaRestApi(this, 'apigw', {
      handler: helloFunction,
    });

  }
}
