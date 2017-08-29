import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions, Response } from '@angular/http';

import { AppConfig } from '../../app.config';
import { TipoProducto } from '../../entities/index';

@Injectable()
export class TipoProductoService {
    constructor(private http: Http, private config: AppConfig) { }

    getAll() {
        return this.http.get(this.config.apiUrl + 'productos/getTiposProducto', (response: Response) => response.json());
    }

    getById(id: number) {
        return this.http.get(this.config.apiUrl + 'users/' + id, this.jwt()).map((response: Response) => response.json());
    }

    create(obj: any) {
        return this.http.post(this.config.apiUrl + 'productos/rtipoproducto', obj);
    }

    update(obj: any) {
        return this.http.put(this.config.apiUrl + 'users/' + obj.id, obj, this.jwt());
    }

    delete(id: number) {
        return this.http.delete(this.config.apiUrl + 'users/' + id, this.jwt());
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