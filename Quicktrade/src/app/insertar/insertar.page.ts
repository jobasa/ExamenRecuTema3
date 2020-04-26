import { Component, OnInit } from '@angular/core';
import { ProductoService } from '../services/producto.service';
import { ActivatedRoute } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { IProducto, IInmobiliaria, IMotor, ITecnologia } from '../interfaces';
import { AngularFireAuth } from '@angular/fire/auth';

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
  listadoProductos: (IProducto | IInmobiliaria | IMotor | ITecnologia)[] = [];

  constructor(private _ProductoService: ProductoService, private _activatedRoute: ActivatedRoute, private AFauth : AngularFireAuth) { }

  ngOnInit() {

  }

  public alertController: AlertController

  async presentAlert() {
    const alert = await this.alertController.create({
      header: 'Alert',
      subHeader: 'Subtitle',
      message: 'This is an alert message.',
      buttons: ['OK']
    });

    await alert.present();
  }

  insertar() {
    if (this.categoria == 1) {
      this._ProductoService.setProducto({
        "id": this.listadoProductos.length + 1, "nombre": this.nombre, "descripcion": this.descripcion, "precio": this.precio, "categoria": this.categoria, "estado": this.estado, "uid": this.AFauth.auth.currentUser.uid
      });
      alert("La inserción se ha hecho correctamente");
    } else if (this.categoria == 4) {
      this._ProductoService.setProducto({
        "id": this.listadoProductos.length + 1, "nombre": this.nombre, "descripcion": this.descripcion, "precio": this.precio, "kilometros": this.kilometros, "anyos": this.anyos, "categoria": this.categoria, "vehiculo": this.vehiculo, "uid": this.AFauth.auth.currentUser.uid
      });
      alert("La inserción se ha hecho correctamente");
    } else if (this.categoria == 3) {
      this._ProductoService.setProducto({
        "id": this.listadoProductos.length + 1, "nombre": this.nombre, "descripcion": this.descripcion, "precio": this.precio, "metrosCuadrados": this.metrosCuadrados, "numBanyos": this.numBanyos, "numHabitaciones": this.numHabitaciones, "localidad": this.localidad, "categoria": this.categoria, "uid": this.AFauth.auth.currentUser.uid
      });
      alert("La inserción se ha hecho correctamente");
    } else {
      this._ProductoService.setProducto({
        "id": this.listadoProductos.length + 1, "nombre": this.nombre, "descripcion": this.descripcion, "precio": this.precio, "categoria": this.categoria, "uid": this.AFauth.auth.currentUser.uid
      });
      alert("La inserción se ha hecho correctamente");
    }
  }



  cambiar_Oculto($event) {
    console.log($event.target.value);
    this.categoria = $event.target.value;
  }
}
