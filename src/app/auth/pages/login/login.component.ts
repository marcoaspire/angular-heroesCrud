import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { response } from 'express';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styles: [
  ]
})
export class LoginComponent{

  constructor( private router:Router,
               private AS:AuthService
    ) { }

  login(){
    //check backend
    //user
    this.AS.login().subscribe( res => {
      //console.log(res)
      if (res.id){
        console.log("logeado");
        
        this.router.navigate(['./heroes/list'])

      }
      
    });
  }
  logout(){
    //check backend
    //user
    this.AS.logout();
    this.router.navigate(['./heroes'])
  }

}
