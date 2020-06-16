import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductoService } from '../services/producto.service';
import { AngularFireAuth } from '@angular/fire/auth';
import { IProducto, IInmobiliaria, IMotor, ITecnologia } from '../interfaces';
import { AuthService } from '../services/auth.service';
import { snapshotChanges } from '@angular/fire/database';
import { AngularFireDatabase } from '@angular/fire/database';


@Component({
  selector: 'app-misproductos',
  templateUrl: './misproductos.page.html',
  styleUrls: ['./misproductos.page.scss'],
})
export class MisproductosPage implements OnInit {

  id: number = 1;
  categoria: number = 1;
  listadoProductos = [];

  constructor(private _activatedRoute: ActivatedRoute, private _ProductoService: ProductoService, private _AFauth: AngularFireAuth, private _db: AngularFireDatabase) { }

  ngOnInit() {
    this.listar_productos();
  }

  listar_productos() {
    this.listadoProductos = [];
    this.id = +this._activatedRoute.snapshot.paramMap.get('id');
    var ref = this._ProductoService.getProductos();

    if (this.id == 0) {
      ref.once("value", snapshot => {
        snapshot.forEach(child => {
          if ((child.val().categoria == this.categoria)) {
            var value = child.val();
            value.key = child.key;
            this.listadoProductos.push(value);
          }
        });
      }

      )
    } else {
      ref.orderByChild('uid').equalTo(this.id).once('value', snapshot => {
        snapshot.forEach(child => {
          if ((child.val().categoria == this.categoria)) {
            var value = child.val();
            value.key = child.key;
            this.listadoProductos.push(value)
          }
        });
      })
    }

  }

  borrar(id: string) {
    this._db.object("Productos/"+ id).remove();
    this.listar_productos();
  }

  cambiar_Oculto($event) {
    console.log($event.target.value);
    this.categoria = $event.target.value;
    this.listar_productos();
  }

}
