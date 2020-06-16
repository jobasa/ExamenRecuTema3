import { Injectable } from '@angular/core';

import { IUsuario } from '../interfaces';
import { AngularFireDatabase } from '@angular/fire/database';
import { identifierModuleUrl } from '@angular/compiler';

@Injectable()

export class UsuarioService {

    constructor(private _db: AngularFireDatabase) { }

    getUsuarios() {
        let id = null;
        let ref = this._db.database.ref("Usuarios");
        return ref;
    }
}