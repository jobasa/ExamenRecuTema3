import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  titulo : string = "Información sobre productos";
  motorOculto : boolean = true;
  inmobiliariaOculto : boolean = true;
  tecnologiaOculto : boolean = true;
  categoria : Number = 1;
  nombre : string = "";

    constructor() { }

    cambiar_Oculto($event){
      console.log($event.target.value);
      this.categoria=$event.target.value;
    }

}
