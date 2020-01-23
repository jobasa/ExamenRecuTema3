import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  titulo: string = "Información sobre productos";
  motorOculto: boolean = true;
  inmobiliariaOculto: boolean = true;
  tecnologiaOculto: boolean = true;
  nombre: string = "";
  descripcion: string = "";
  categoria: Number = 1;
  vehiculo: Number = 1;
  kilometros: Number = 0;
  anyos: Number = 0;
  metrosCuadrados: Number = 0;
  numBanyos: Number = 0;
  numHabitaciones: Number = 0;
  localidad: string = "";
  estado: Number = 1;
  precio: Number = 0;


  constructor() { }

  cambiar_Oculto($event) {
    console.log($event.target.value);
    this.categoria = $event.target.value;
  }

}
