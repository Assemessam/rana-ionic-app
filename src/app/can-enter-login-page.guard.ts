import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, CanActivate, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { map } from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class CanEnterLoginPageGuard implements CanActivate {

  constructor(
    private _angularFireAuth: AngularFireAuth,
    private _router: Router
  ){

  } 

  canActivate(
    activatedRouteSnapshot: ActivatedRouteSnapshot,
    stateSnapshot: RouterStateSnapshot){
      return this._angularFireAuth.authState.pipe(
        map((auth)=> {
          if(auth){
            this._router.navigate(["/tabs"]);
            return false;
          } else {
            return true;
          }
        })
      );
  }

}
