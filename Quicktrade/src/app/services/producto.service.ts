import { Injectable } from '@angular/core';
import { IProducto, IInmobiliaria, IMotor, ITecnologia } from '../interfaces';
import { AngularFireDatabase } from '@angular/fire/database';


@Injectable()



export class ProductoService {

    /* productos: (IProducto | IInmobiliaria | IMotor | ITecnologia)[] = [
         {
             "id": 1,
             "nombre": "IPhone X",
             "descripcion": "Dispositivo movil de la marca Apple",
             "categoria": 1,
             "estado": 1,
             "precio": 500
         },
 
         {
             "id": 2,
             "nombre": "Samsung S9",
             "descripcion": "Dispositivo movil de la marca Samsung",
             "categoria": 1,
             "estado": 2,
             "precio": 300
         },
 
         {
             "id": 3,
             "nombre": "Apartameno",
             "descripcion": "Apartamento situado en el casco historico",
             "categoria": 3,
             "metrosCuadrados": 400,
             "numBanyos": 3,
             "numHabitaciones": 6,
             "localidad": "Xàbia",
             "precio": 600
         },
     ];
 
 
 
     getProductos(): (IProducto | IInmobiliaria | IMotor | ITecnologia)[] {
         return this.productos;
     }
 
     getProducto(id: Number): IProducto {
         return this.productos.find(x => x.id == id);
     }*/
    constructor(private _db: AngularFireDatabase) {

    }

    setProducto(producto: (IProducto | IInmobiliaria | IMotor | ITecnologia)) {
        let ref = this._db.database.ref("Productos");
        ref.push(producto);
    }


}