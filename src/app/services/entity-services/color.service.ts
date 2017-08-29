import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions, Response } from '@angular/http';

import { AppConfig } from '../../app.config';
import { Color } from '../../entities/index';

@Injectable()
export class ColorService {
    constructor(private http: Http, private config: AppConfig) { }

    getAll(): any {
        let lsColores = new Array<Color>();
        let err: any;

        this.http.get(this.config.apiUrl + 'productos/colores', (response: Response) => response.json())
            .subscribe(
            data => {
                for (var i = 0; i < data.json().length; i++) {
                    let color: Color = new Color(
                        data.json()[i]["id_color"],
                        data.json()[i]["n_color"]
                    );
                    lsColores.push(color);
                }
            },
            error => {
                err = error;
            });

        if (lsColores) {
            return lsColores;
        } else {
            return err;
        }
    }

    getById(id: number) {
        return this.http.get(this.config.apiUrl + 'colores/' + id, this.jwt()).map((response: Response) => response.json());
    }
      create(obj: any) {
        return this.http.post(this.config.apiUrl + 'productos/colores/rcolor', obj);
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