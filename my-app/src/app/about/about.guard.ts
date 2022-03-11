import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';

import {Router} from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AboutGuard implements CanActivate {
  constructor( private myRoute: Router){
  }

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    if (this.isLoggednIn()){
      return true;
    } else {
      this.myRoute.navigate(["auth"]);
      return false;
    }
  }
  isLoggednIn(){
      return false
  }
}