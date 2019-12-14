// Copyright 2019 Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: MIT-0

import { CognitoUserPoolTriggerHandler } from 'aws-lambda';
import { CognitoIdentityServiceProvider } from 'aws-sdk';

const cup = new CognitoIdentityServiceProvider();

export const handler: CognitoUserPoolTriggerHandler = async event => {
    const params: CognitoIdentityServiceProvider.AdminUpdateUserAttributesRequest = {
        UserPoolId: event.userPoolId,
        UserAttributes: [{
            Name: 'email_verified',
            Value: 'true',
        }],
        Username: event.userName!,
    };
    await cup.adminUpdateUserAttributes(params).promise();
    return event;
};
