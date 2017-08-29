import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions, Response } from '@angular/http';

import { AppConfig } from '../../app.config';

import { Combustible } from '../../entities/index';

@Injectable()
export class CombustibleService {
    constructor(private http: Http, private config: AppConfig) { }

    getAll(): any {
        let lsCombustibles: Array<Combustible> = new Array<Combustible>();
        let err: any;

        this.http.get(this.config.apiUrl + 'productos/combustible', (response: Response) => response.json())
            .subscribe(
            data => {
                for (var i = 0; i < data.json().length; i++) {
                    let combustible: Combustible = new Combustible(
                        data.json()[i]["id_combustible"],
                        data.json()[i]["n_combustible"]
                    );
                    lsCombustibles.push(combustible);
                }
            },
            error => {
                err = error;
            });
            
            if (lsCombustibles){
                return lsCombustibles;
            } else {
                return err;
            }
    }

    getById(id: number) {
        return this.http.get(this.config.apiUrl + 'users/' + id, this.jwt()).map((response: Response) => response.json());
    }

    create(obj: any) {
        return this.http.post(this.config.apiUrl + 'productos/combustible/rtipocombustible', obj);
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