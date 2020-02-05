import { Injectable } from '@angular/core';
import { IProducto, IInmobiliaria, IMotor, ITecnologia } from '../interfaces';
import { element } from 'protractor';


@Injectable()



export class ProductoService {

    productos: (IProducto | IInmobiliaria | IMotor | ITecnologia)[] = [
        {
            "id": 1,
            "nombre": "Joan",
            "descripcion": "Xico",
            "categoria": 2,
            "precio": 500
        },

        {
            "id": 2,
            "nombre": "Manolo",
            "descripcion": "Xico",
            "categoria": 3,
            "estado": 1,
            "precio": 500
        },
    ];



    getProductos(): (IProducto | IInmobiliaria | IMotor | ITecnologia)[] {
        return this.productos;
    }

    getProducto(id: Number): (IProducto | IInmobiliaria | IMotor | ITecnologia) {
        let producto: (IProducto | IInmobiliaria | IMotor | ITecnologia) = null; 

        this.productos.forEach(element => {
            if (element.id == id) {
                producto == element;
            }
        });
        return producto;
    }


}