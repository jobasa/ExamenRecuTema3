/*import { Component } from '@angular/core';
import { IProducto, IInmobiliaria, IMotor, ITecnologia} from '../interfaces';
import { AlertController } from '@ionic/angular';

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
  listadoProductos: (IProducto | IInmobiliaria | IMotor | ITecnologia) [] = [];

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

  cambiar_Oculto($event) {
    console.log($event.target.value);
    this.categoria = $event.target.value;
  }

  guarda(){
    if (this.categoria == 1) {
      this.listadoProductos.push({
        id : this.listadoProductos.length+1, nombre : this.nombre, descripcion : this.descripcion, precio : this.precio, categoria : this.categoria, estado : this.estado
      });
      alert("La inserción se ha hecho correctamente");
    } else if (this.categoria == 4) {
      this.listadoProductos.push({
        id : this.listadoProductos.length+1, nombre : this.nombre, descripcion : this.descripcion, precio : this.precio, kilometros : this.kilometros, anyos : this.anyos, categoria : this.categoria, vehiculo : this.vehiculo
      });
      alert("La inserción se ha hecho correctamente");
    } else if (this.categoria == 3) {
      this.listadoProductos.push({
        id: this.listadoProductos.length+1, nombre : this.nombre, descripcion : this.descripcion, precio : this.precio, metrosCuadrados : this.metrosCuadrados, numBanyos : this.numBanyos, numHabitaciones : this.numHabitaciones, localidad : this.localidad, categoria : this.categoria 
      });
      alert("La inserción se ha hecho correctamente");
    } else {
      this.listadoProductos.push({
        id : this.listadoProductos.length+1, nombre : this.nombre, descripcion : this.descripcion, precio : this.precio, categoria : this.categoria
      });
      alert("La inserción se ha hecho correctamente");
    }
  }

}*/
