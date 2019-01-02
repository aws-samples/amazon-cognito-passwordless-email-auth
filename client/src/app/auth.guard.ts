// Copyright 2019 Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: MIT-0

import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class IsAuthenticated implements CanActivate {

  constructor(private auth: AuthService, private router: Router) { }

  async canActivate(): Promise<boolean> {
    if (await this.auth.isAuthenticated()) {
      return true;
    }
    this.router.navigate(['/sign-in']);
    return false;
  }
}

@Injectable({
  providedIn: 'root'
})
export class IsNotAuthenticated implements CanActivate {

  constructor(private auth: AuthService, private router: Router) { }

  async canActivate(): Promise<boolean> {
    if (!await this.auth.isAuthenticated()) {
      return true;
    }
    this.router.navigate(['/private']);
    return false;
  }
}
