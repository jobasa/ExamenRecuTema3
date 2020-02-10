import { Component, OnInit } from '@angular/core';
import { ProductoService } from '../services/producto.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-insertar',
  templateUrl: './insertar.page.html',
  styleUrls: ['./insertar.page.scss'],
})
export class InsertarPage implements OnInit {

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

  constructor(private _ProductoService: ProductoService, private _activatedRoute: ActivatedRoute) { }

  ngOnInit() {

  }

  insertar(){
    
  }



  cambiar_Oculto($event) {
    console.log($event.target.value);
    this.categoria = $event.target.value;
  }
}
