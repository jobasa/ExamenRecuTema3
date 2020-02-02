import { Injectable } from '@angular/core';
import { IProducto, Inmobiliaria, IMotor, ITecnologia } from '../interfaces';


@Injectable()



export class ProductoService {

    productos: (IProducto | Inmobiliaria | IMotor | ITecnologia)[] = [];



    getProductos(): (IProducto | Inmobiliaria | IMotor | ITecnologia)[] {
        return this.productos;
    }

    
}