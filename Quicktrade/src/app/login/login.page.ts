import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  nombreUsu: string = "";
  password: string = "";

  constructor() { }

  ngOnInit() {
    
  }


  //EL boton de login tiene que llamar a una funcion para comprobar si el usuario existe y si existe ir a la pagina que tiene que ir y si no quedarse o mostrar un error.
  //En el componente de insertar producto tengo que recuperar la variable del usuario que tengo guardada en el servicio de login y una vez he recuperado la variable añadirle al
  //producto un campo usuario o propiedad usuario con la key del usuario logueado.

}
