import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, GuardResult, MaybeAsync, Router, RouterStateSnapshot } from '@angular/router';
import { HardcodedAuthentication } from './hardcoded-authentication';

@Injectable({
  providedIn: 'root'
})
export class RouteGuard implements CanActivate {

  constructor(private hardCodedAuthentication: HardcodedAuthentication
             ,private router : Router
  ) { }
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    if (this.hardCodedAuthentication.isLoggedIn()) {
      return true;
    }
    this.router.navigate(['login']);
    return false;
  }
}
