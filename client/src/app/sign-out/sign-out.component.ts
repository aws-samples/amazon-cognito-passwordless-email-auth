// Copyright 2019 Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: MIT-0

import { Component, AfterViewInit, ChangeDetectionStrategy } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-sign-out',
  templateUrl: './sign-out.component.html',
  styleUrls: ['./sign-out.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SignOutComponent implements AfterViewInit {

  constructor(private auth: AuthService, private router: Router) { }

  async ngAfterViewInit() {
    await this.auth.signOut();
    this.router.navigate(['/sign-in']);
  }

}
