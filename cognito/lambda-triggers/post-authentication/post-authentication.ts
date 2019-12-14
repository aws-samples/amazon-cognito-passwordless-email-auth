// Copyright 2019 Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: MIT-0

import { CognitoUserPoolTriggerHandler } from 'aws-lambda';
import { CognitoIdentityServiceProvider } from 'aws-sdk';

const CUP_CLIENT = new CognitoIdentityServiceProvider();

export const handler: CognitoUserPoolTriggerHandler = async event => {
    console.log(JSON.stringify(event));
    const params: CognitoIdentityServiceProvider.AdminUpdateUserAttributesRequest = {
        UserPoolId: event.userPoolId,
        UserAttributes: [{
            Name: 'email_verified',
            Value: 'true',
        }],
        Username: event.userName!,
    };
    await CUP_CLIENT.adminUpdateUserAttributes(params).promise();
    return event;
};
