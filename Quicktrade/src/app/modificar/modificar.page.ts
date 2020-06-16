import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase, snapshotChanges } from '@angular/fire/database';
import { IProducto, IInmobiliaria, IMotor, ITecnologia } from '../interfaces';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-modificar',
  templateUrl: './modificar.page.html',
  styleUrls: ['./modificar.page.scss'],
})
export class ModificarPage implements OnInit {

  producto: IProducto;
  id: number;
  key: string;


  constructor(private _db: AngularFireDatabase, private _activatedroute: ActivatedRoute, private _router: Router) { }

  ngOnInit() {
    this.id = +this._activatedroute.snapshot.paramMap.get('id');
    this.key = this._activatedroute.snapshot.paramMap.get('key');

    var reference = this._db.database.ref().child('Productos/' + this.key)
      .once('value')
      .then(snapshot => {
        this.producto = snapshot.val();
      })
  }

  Modificar() {
    this._db.object('Productos/' + this.key).set(this.producto);
    this._router.navigateByUrl('/misproductos/' + this.id);
  }

}
