import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, CanLoad, Route, RouterStateSnapshot, UrlSegment, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '../services/auth.service';
import { tap,map } from 'rxjs/operators'; //before subscription

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanLoad,CanActivate {

  constructor(private authService:AuthService,
              private router:Router
              ){}
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
      console.log("bloqueado canActivate");
      return this.authService.verifyAuth()
        .pipe(
          tap( isAuth => {
            if (!isAuth){
              this.router.navigate(['./auth/login']);

            }
          })
        );
      
    //return true;
  }
  canLoad(
    route: Route,
    segments: UrlSegment[]): Observable<boolean> | Promise<boolean> | boolean {
      console.log("canload");
      
      return this.authService.verifyAuth()
        .pipe(
          tap( isAuth => {
            if (!isAuth){
              console.log(isAuth);
              
              this.router.navigate(['./auth/login']);

            }
          })
        );
      // if (this.authService.auth.id){
        
      //   console.log('canLoad');
      //   console.log(route);
        
      //   console.log(segments);
      //   return true;
      // }

      
    console.log("prohibido canLoad");
      
    return false;
  }
}
