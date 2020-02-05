import { Injectable } from '@angular/core';
import { IProducto, IInmobiliaria, IMotor, ITecnologia } from '../interfaces';


@Injectable()



export class ProductoService {

    productos: (IProducto | IInmobiliaria | IMotor | ITecnologia)[] = [
        {
            "id": 1,
            "nombre": "Joan",
            "descripcion": "Xico Alto y guapo",
            "categoria": 2,
            "precio": 500
        },

        {
            "id": 2,
            "nombre": "Javi",
            "descripcion": "Xico",
            "categoria": 3,
            "estado": 1,
            "precio": 500
        },
    ];



    getProductos(): (IProducto | IInmobiliaria | IMotor | ITecnologia)[] {
        return this.productos;
    }

    getProducto(id: Number): (IProducto | IInmobiliaria | IMotor | ITecnologia)[] {
        return this.productos.find(x => x.id == id)[0];
    }


}