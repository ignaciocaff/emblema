import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions, Response } from '@angular/http';

import { Subject } from 'rxjs/Subject';

import { AppConfig } from '../../app.config';

import {
    Solicitud,
    Producto,
    Persona,
    Cliente,
    Empleo,
    Empleado
} from '../../entities/index';

@Injectable()
export class SolicitudService {

    //Definimos los Subjects para cada objeto de la solicitud
    private producto = new Subject<Producto>();
    producto$ = this.producto.asObservable();

    private solicitud = new Subject<Solicitud>();
    solicitud$ = this.solicitud.asObservable();

    constructor(
        private http: Http,
        private config: AppConfig
    ) {

    }

    //Comando de servicio de mensajes
    setProducto(producto: Producto) {
        this.producto.next(producto);
    }

    getAll() {
        return this.http.get(this.config.apiUrl + 'solicitudes/getAll').map((response: Response) => response.json());
    }

    getById(id: number) {
        return this.http.get(this.config.apiUrl + 'users/' + id, this.jwt()).map((response: Response) => response.json());
    }

    getByCliente(nro_documento: number) {
        return this.http.get(this.config.apiUrl + 'solicitudes/clientes/' + nro_documento).map((response: Response) => response.json());
    }

    create(obj: any) {
        return this.http.post(this.config.apiUrl + 'solicitudes/rsolicitud', obj);
    }

    update(obj: any) {
        return this.http.put(this.config.apiUrl + 'users/' + obj.id, obj, this.jwt());
    }

    delete(id: number) {
        return this.http.delete(this.config.apiUrl + 'users/' + id, this.jwt());
    }

    getInstance(solicitud: Solicitud) {
        this.solicitud.next(solicitud);
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