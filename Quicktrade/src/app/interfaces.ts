import {Component} from '@angular/core';

export interface IUsuario {
    "id" : Number;
    "nombre": string;
}

export interface IProducto {
    "id" : Number;
    "nombre" : string;
    "descripcion" : string;
    "precio" : Number;
    "categoria": Number;
}

export interface IInmobiliaria extends IProducto {
    "metrosCuadrados" : Number;
    "numBanyos" : Number;
    "numHabitaciones" : Number;
    "localidad" : string;
}

export interface IMotor extends IProducto {
    "vehiculo" : Number;
    "kilometros" : Number;
    "anyos" : Number;
}

export interface ITecnologia extends IProducto {
    "estado" : Number;
}