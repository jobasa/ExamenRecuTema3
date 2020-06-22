import { Component, OnInit } from '@angular/core';
import { IProducto, IInmobiliaria, IMotor, ITecnologia } from '../interfaces';
import { ProductoService } from '../services/producto.service';

@Component({
  selector: 'app-precio',
  templateUrl: './precio.page.html',
  styleUrls: ['./precio.page.scss'],
})
export class PrecioPage implements OnInit {

  productos: (IProducto | IInmobiliaria | IMotor | ITecnologia)[] = [];

  constructor(private _ProductoService : ProductoService) { }

  ngOnInit() {
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

  buscar(){
    
  }

}
