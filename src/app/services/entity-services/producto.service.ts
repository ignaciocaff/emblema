import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions, Response } from '@angular/http';

import { Subject } from 'rxjs/Subject';

import { AppConfig } from '../../app.config';
import { 
    Producto
 } from '../../entities/index';

@Injectable()
export class ProductoService {
    constructor(private http: Http, private config: AppConfig) { }

    private producto = new Subject<Producto>();
    producto$ = this.producto.asObservable();  

    /*getAll() {
        return this.http.get(this.config.apiUrl + 'marcamodelo', (response: Response) => response.json());
    }*/


    getAll() {
        return this.http.get(this.config.apiUrl + 'productos/getAll').map((response: Response) => response.json());
    }

    getById(id: number) {
        return this.http.get(this.config.apiUrl + 'productos/getById/' + id).map((response: Response) => response.json());
    }


    create(obj: any) {
        return this.http.post(this.config.apiUrl + 'productos/rproducto', obj);
    }

    /*reate(marca: Marca) {
        //return this.http.post(this.config.apiUrl + '/api/users/register', user);
    }

    update(marca: Marca) {
        //return this.http.put(this.config.apiUrl + '/users/' + user.id, user, this.jwt());
    }*/

    delete(id: number) {
        //return this.http.delete(this.config.apiUrl + '/users/' + id, this.jwt());
    }

    // private helper methods
    private jwt() {
        let currentUser = JSON.parse(localStorage.getItem('currentUser'));
        if (currentUser && currentUser.token) {
            let headers = new Headers({ 'Authorization': 'Bearer ' + currentUser.token });
            return new RequestOptions({ headers: headers });
        }
    }
}