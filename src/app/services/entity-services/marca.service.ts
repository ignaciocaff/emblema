import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions, Response } from '@angular/http';

import { AppConfig } from '../../app.config';
import {
    Marca
} from '../../entities/index';

@Injectable()
export class MarcaService {
    constructor(private http: Http, private config: AppConfig) { }

    getAll() {
        return this.http.get(this.config.apiUrl + 'marcamodelo', (response: Response) => response.json());
    }

    create(obj: any) {
        return this.http.post(this.config.apiUrl + 'marcamodelo/rmarca', obj);
    }

    getById(id: number) {
        return this.http.get(this.config.apiUrl + '' + id, this.jwt()).map((response: Response) => response.json());
    }

    update(marca: Marca) {
        //return this.http.put(this.config.apiUrl + '/users/' + user.id, user, this.jwt());
    }

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