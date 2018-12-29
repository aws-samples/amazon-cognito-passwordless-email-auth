# Cognito E-Mail Auth Client

This is a client web app that provides custom sign-in and sign-up pages to authenticate against Amazon Cognito using passwordless e-mail auth.

This web app is written in Angular 7 but the integration with Amazon Cognito should be mostly identical in other frameworks (React, Vue, Plain HTML+JS). Check out this file: `src/app/auth.service.ts` (and disregard the little Angular Boilerplate)

The Amazon Cognito User Pool back end that implements the passwordless e-mail auth can be found here: [../cognito](../cognito)

# How to run this web app

### Pre-requisites

1. Download and install [Node.js](https://nodejs.org/en/download/)
2. Set up a Cognito User Pool that implements passwordless e-mail auth: [../cognito](../cognito)

### Run the web app

1. Clone this repo `git clone https://github.com/aws-samples/amazon-cognito-passwordless-email-auth.git`
2. Enter client directory: `cd amazon-cognito-passwordless-email-auth/client`
3. Install dependencies: `npm install`
4. Enter your AWS region, Cognito User Pool ID and your Web App Client ID in this file: `src/environments/environment.ts`. You can get this information from the  CloudFormation stack outputs of the Cognito user pool back end (per pre-requisite 2)
5. Run the web app: `npm run start`

If you've done all this, the web app should be running at http://localhost:4200

## License Summary

This sample code is made available under a modified MIT license. See the LICENSE file.
