// Copyright 2019 Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: MIT-0

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SignInComponent } from './sign-in/sign-in.component';
import { SignOutComponent } from './sign-out/sign-out.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { PrivateComponent } from './private/private.component';
import { AnswerChallengeComponent } from './answer-challenge/answer-challenge.component';
import { NotFoundComponent } from './not-found/not-found.component';

import { IsAuthenticated, IsNotAuthenticated } from './auth.guard';

const routes: Routes = [
  { path: 'sign-in', component: SignInComponent, canActivate: [IsNotAuthenticated] },
  { path: 'sign-up', component: SignUpComponent, canActivate: [IsNotAuthenticated] },
  { path: 'enter-secret-code', component: AnswerChallengeComponent, canActivate: [IsNotAuthenticated] },
  { path: 'sign-out', component: SignOutComponent, canActivate: [IsAuthenticated] },
  { path: 'private', component: PrivateComponent, canActivate: [IsAuthenticated] },
  { path: '', redirectTo: '/private', pathMatch: 'full' },
  { path: '**', component: NotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { scrollPositionRestoration: 'enabled' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
