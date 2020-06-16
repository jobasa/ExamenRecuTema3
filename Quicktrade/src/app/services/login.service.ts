import { Injectable } from "@angular/core";

import { IInmobiliaria, IMotor, IProducto, ITecnologia, IUsuario } from "../interfaces";
import { AngularFireDatabase, snapshotChanges } from "@angular/fire/database";

@Injectable()

export class LoginService {
    constructor(private _db: AngularFireDatabase) { }

    nombreUsuario: string;
    usuario: IUsuario;
    id: Number;
    nombre = []
    clave = []

    obtenerID(nombreUSU: string): Number {
        let ref = this._db.database.ref("Usuarios");
        console.log(ref);
        
        ref.orderByChild("nombreUsu").equalTo(this.nombreUsuario).once("value", snapshot => {
            snapshot.forEach(child => {
                this.usuario = child.val();
              
                
                this.id = this.usuario.id;
                console.log(this.id);
            })
        })
        return this.id;
    }

    setUsuario(Nom: string) {
        this.nombreUsuario = Nom;
        this.id = this.obtenerID(this.nombreUsuario);
    }

}