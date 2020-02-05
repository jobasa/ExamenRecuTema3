import { Component, OnInit } from '@angular/core';
import { IProducto, IInmobiliaria, IMotor, ITecnologia } from '../interfaces';
import { ProductoService } from '../services/producto.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-details',
  templateUrl: './details.page.html',
  styleUrls: ['./details.page.scss'],
})
export class DetailsPage implements OnInit {

  productos: (IProducto | IInmobiliaria | IMotor | ITecnologia)[] = [];
  id : Number;

  constructor(private _ProductoService : ProductoService, private _activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    //Recibe un id
    this.id = +this._activatedRoute.snapshot.paramMap.get('id');

    this._ProductoService.getProducto(this.id);
  }

}
