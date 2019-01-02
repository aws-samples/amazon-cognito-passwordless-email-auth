# Cognito E-Mail Auth Backend

This is an AWS Serverless Application. If you deploy it, this is what you get:

- An Amazon Cognito User Pool, pre-configured with AWS Lambda triggers to implement passwordless e-mail auth
- An Amazon Cognito User Pool Client, that you can use to integrate with the User Pool
- The needed Lambda functions that serve as User Pool triggers
- The permissions on the Lambda functions so that the User Pool may invoke them

An example client web app that is ready to run against this Serverless Application can be found at [../client](../client)

## Deployment instructions

Deploy either through the Serverless Application Repository or with the AWS SAM CLI

### Deployment trough Serverless Application Repository

This is the easiest path. Find the Serverless Application in the [Repository](https://console.aws.amazon.com/serverlessrepo/) using tags "cognito" and "passwordless" or navigate to it directly with [this link](https://serverlessrepo.aws.amazon.com/applications/arn:aws:serverlessrepo:us-east-1:520945424137:applications~amazon-cognito-passwordless-email-auth).

If you deploy the Serverless Application you'll get a CloudFormation stack with the resources mentioned above. The outputs of the CloudFormation stack will contain the ID's of the user pool and client, that you can use in your client web app.

#### Pre-requisite

- You need to have a [verified e-mail address in Amazon SES](https://docs.aws.amazon.com/ses/latest/DeveloperGuide/verify-email-addresses-procedure.html) to send the e-mails from. If your AWS account in still in the [SES sandbox](https://docs.aws.amazon.com/ses/latest/DeveloperGuide/request-production-access.html), you also need to verify the e-mail adresses you want to send mails to. Lastly, if you don't want your mails to end up in spam folders, [verify the domain](https://docs.aws.amazon.com/ses/latest/DeveloperGuide/verify-domain-procedure.html) you use to send mails from as well.

### Alternative Deployment with AWS SAM CLI

#### Pre-requisites

1. Download and install [Node.js](https://nodejs.org/en/download/)
2. Download and install [AWS SAM CLI](https://github.com/awslabs/aws-sam-cli)
3. Of course you need an AWS account and necessary permissions to create resources in it. Make sure your AWS credentials can be found during deployment, e.g. by making your AWS_ACCESS_KEY_ID and AWS_SECRET_ACCESS_KEY available as environment variables.
4. You need to have a [verified e-mail address in Amazon SES](https://docs.aws.amazon.com/ses/latest/DeveloperGuide/verify-email-addresses-procedure.html) to send the e-mails from. If your AWS account in still in the [SES sandbox](https://docs.aws.amazon.com/ses/latest/DeveloperGuide/request-production-access.html), you also need to verify the e-mail adresses you want to send mails to. Lastly, if you don't want your mails to end up in spam folders, [verify the domain](https://docs.aws.amazon.com/ses/latest/DeveloperGuide/verify-domain-procedure.html) you use to send mails from as well.
5. You need an existing S3 bucket to use for the SAM deployment. Create an empty bucket.

NOTE: To deploy this application _**please pick an AWS Region in which you can use Amazon Simple E-Mail Service (i.e. us-east-1, us-west-2 or eu-west-1)**_ and create all resources (including the S3 bucket) in that region. This is not a hard requirement for setting up e-mail auth in Cognito in general; but it is so in this demo application to keep things simple.

#### How to deploy the Serverless Application with AWS SAM CLI

1. Clone this repo `git clone https://github.com/aws-samples/amazon-cognito-passwordless-email-auth.git`
2. Enter cognito directory: `cd amazon-cognito-passwordless-email-auth/cognito`
3. Install dependencies: `npm install`
4. Set the following environment variables (all mandatory):
  - S3_BUCKET_NAME='the bucket name of the bucket you want to use for your SAM deployment'
  - SES_FROM_ADDRESS='the verfied e-mail address in SES the e-mails will be sent from'
  - STACK_NAME='the name you want the CloudFormation stack to be created with'
  - USER_POOL_NAME='the name you want your User Pool to be created with'
5. Build and deploy the application: `npm run bd` This runs AWS SAM CLI

if that succeeded, you have succesfully deployed your application. The outputs of the CloudFormation stack will contain the ID's of the User Pool and Client, that you can use in your client web app.

## License Summary

This sample code is made available under a modified MIT license. See the LICENSE file.
