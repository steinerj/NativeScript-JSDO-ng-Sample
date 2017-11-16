import { Injectable } from "@angular/core";

import { SessionService } from "./shared/session.service";

import { Router, CanActivate } from "@angular/router";


@Injectable()
export class AuthGuardService implements CanActivate {
  constructor(private router: Router, private sessionService:SessionService) { }

  canActivate():boolean {
    if (this.sessionService.isLoggedIn) {
      return true;
    }
    else {
      this.router.navigate(["/login"]);
      return false;
    }
  }
}
