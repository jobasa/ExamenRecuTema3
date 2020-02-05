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

  constructor(private _ProductoService : ProductoService) { }

  ngOnInit() {
    this.productos = this._ProductoService.getProductos();
  }

}
