import { Component, OnInit } from '@angular/core';
import { IProducto, IInmobiliaria, IMotor, ITecnologia } from '../interfaces';
import { ProductoService } from '../services/producto.service';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.page.html',
  styleUrls: ['./listado.page.scss'],
})

export class ListadoPage implements OnInit {

  productos: (IProducto | IInmobiliaria | IMotor | ITecnologia)[] = [];
  //claves: String[];
  constructor(private _ProductoService : ProductoService) { }

  ngOnInit() {
    //this.productos = this._ProductoService.getProductos();
    let ref = this._ProductoService.getProductos();
    ref.once("value", snapshot => {
      snapshot.forEach(child => {
        let value = child.val();
        value.id = child.key;
        this.productos.push(value);
        //this.claves.push(child.key);
        console.log("He encontrado "+ child.val().nombre);
        
      })
    })
  }

}
