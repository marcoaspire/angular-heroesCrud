import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import { Auth } from '../interfaces/auth.interface';
import { tap,map } from 'rxjs/operators'; //before subscription
import { Observable,of } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private endPoint: string = environment.endPoint;
  private _auth: Auth| undefined;


  get auth(){
    return {...this._auth};
  }

  constructor(private http: HttpClient) { }

  verifyAuth():Observable<boolean>{
    console.log("entre verifyAuth");
    

    if (!localStorage.getItem('id')){
      
      return of(false);
    }
    return this.http.get<Auth>(`${this.endPoint}/users/1`)
    .pipe(
      map( auth => {
        console.log('map',auth);
        this._auth = auth;
        console.log('verifyAuth return true');
        
        return true;
      }),
     

    );
  }


  login(){
    return this.http.get<Auth>(`${this.endPoint}/users/1`)
      .pipe(
        tap( auth => this._auth =auth),
        tap( auth => localStorage.setItem('id', auth.id))

      );
  }
  logout(){
    this._auth = undefined;
  }

}
