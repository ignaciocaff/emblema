import { Injectable } from '@angular/core';
import { Http, Headers, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map'

import { AppConfig } from '../app.config';

@Injectable()
export class ModelService {
    constructor(private http: Http, private config: AppConfig) { }

    getMarcas() {
        return this.http.get(this.config.apiUrl + '/api/marcas/getMarcas')
            .map((response: Response) => {
                let lsMarcas = response.json();
                if (lsMarcas) {
                    localStorage.setItem('lsMarcas', JSON.stringify(lsMarcas));
                }
            })
    }

    getTiposDocumento() {
        return this.http.get(this.config.apiUrl + '/api/tiposDocumento/getTiposDocumento')
            .map((response: Response) => {
                let lsTiposDocumento = response.json();
                if (lsTiposDocumento) {
                    localStorage.setItem('lsTiposDocumento', JSON.stringify(lsTiposDocumento));
                }
            })
    }

    getProductos() {
        return this.http.get(this.config.apiUrl + '/api/productos/getProductos')
            .map((response: Response) => {
                let lsProductos = response.json();
                if (lsProductos) {
                    localStorage.setItem('lsProductos', JSON.stringify(lsProductos));
                }
            })
    }

    getTiposProducto() {
        return this.http.get(this.config.apiUrl + '/api/tiposProducto/getTiposProducto')
            .map((response: Response) => {
                let lsTiposProducto = response.json();
                if (lsTiposProducto) {
                    localStorage.setItem('lsTiposProducto', JSON.stringify(lsTiposProducto));
                }
            })
    }

    getEstadosCivil() {
        return this.http.get(this.config.apiUrl + '/api/estadosCivil/getEstadosCivil')
            .map((response: Response) => {
                let lsEstadosCivil = response.json();
                if (lsEstadosCivil) {
                    localStorage.setItem('lsEstadosCivil', JSON.stringify(lsEstadosCivil));
                }
            })
    }

    getProvincias() {
        return this.http.get(this.config.apiUrl + '/api/provincias/getProvincias')
            .map((response: Response) => {
                let lsProvincias = response.json();
                if (lsProvincias) {
                    localStorage.setItem('lsProvincias', JSON.stringify(lsProvincias));
                }
            })
    }

    getLocalidades() {
        return this.http.get(this.config.apiUrl + '/api/localidades/getLocalidades')
            .map((response: Response) => {
                let lsLocalidades = response.json();
                if (lsLocalidades) {
                    localStorage.setItem('lsLocalidades', JSON.stringify(lsLocalidades));
                }
            })
    }

    getVendedores () {
        return this.http.get(this.config.apiUrl + '/api/localidades/getVendedores')
            .map((response: Response) => {
                let lsVendedores = response.json();
                if (lsVendedores) {
                    localStorage.setItem('lsVendedores', JSON.stringify(lsVendedores));
                }
            })
    }
}