import { Component, OnInit } from '@angular/core';

import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  nomUsu: string;
  password: string;

  constructor(private authService: AuthService, public router : Router) { }

  ngOnInit() {
  }

  OnSubmitLogin() 
  {
    this.authService.login(this.nomUsu, this.password).then( res =>{
      this.router.navigate(['/inicio']);
    }).catch(err => alert("Los datos son incorrectos o no existe el usuario"))
  }

}
