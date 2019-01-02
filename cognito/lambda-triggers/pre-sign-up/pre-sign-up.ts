// Copyright 2019 Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: MIT-0

import { CognitoUserPoolTriggerHandler } from 'aws-lambda';

export const handler: CognitoUserPoolTriggerHandler = async event => {
    event.response.autoConfirmUser = true;
    (event.response as any).autoVerifyEmail = true;
    return event;
};
