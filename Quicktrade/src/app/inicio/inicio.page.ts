import { Component, OnInit } from '@angular/core';
import { UsuarioService } from '../services/usuario.service';
import { ActivatedRoute } from '@angular/router';
import { LoginService } from '../services/login.service';
import { ProductoService } from '../services/producto.service';
import { IProducto } from '../interfaces';



@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.page.html',
  styleUrls: ['./inicio.page.scss'],
})
export class InicioPage implements OnInit {

  constructor(private _activatedRoute: ActivatedRoute, private _login: LoginService, private _producto: ProductoService) { }

  idUsu: number;
  keys = [];
  productos: IProducto[]=[];

  ngOnInit() {

     let referencia = this._producto.getProductos();
     this._login.setUsuario(this._activatedRoute.snapshot.paramMap.get('nombreUsu'));
     referencia.once('value', snapshot => {
       snapshot.forEach(child => {
         let value = child.val();
         this.productos.push(value);
         this.keys.push(child.key);
       })
     })

   /* let ref = this._producto.getProductos();
    this._login.setUsuarioActual(this._activatedRoute.snapshot.paramMap.get("id"));
    ref.once("value", snapshot => {
      snapshot.forEach(child => {
        let value = child.val();
        this.productos.push(value);
        this.claves.push(child.key);
        console.log("He encontrado "+ child.val().nombre);
        
      })
    })*/


    
  }

}
