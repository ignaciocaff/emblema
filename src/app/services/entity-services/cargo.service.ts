import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions, Response } from '@angular/http';

import { AppConfig } from '../../app.config';
import { Cargo } from '../../entities/index';

@Injectable()
export class CargoService {
    constructor(private http: Http, private config: AppConfig) { }

     getAll() {
        return this.http.get(this.config.apiUrl + 'personas/cargos', (response: Response) => response.json());
    }

    getById(id: number) {
        return this.http.get(this.config.apiUrl + '' + id).map((response: Response) => response.json());
    }
      create(obj: any) {
        return this.http.post(this.config.apiUrl + '', obj);
    }
    update(obj: any) {
        return this.http.put(this.config.apiUrl + '' + obj.id, obj);
    }

    delete(id: number) {
        return this.http.delete(this.config.apiUrl + '' + id);
    }
}