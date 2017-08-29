import { Component, OnInit } from '@angular/core';
import { Http } from "@angular/http";

@Component({
    moduleId: module.id,
    selector: 'clientes-listado',
    templateUrl: 'clientes-listado.component.html',
    styleUrls: [
        './clientes-listado.component.css'
    ]
})

export class ClientesListadoComponent {

    constructor(private http: Http) {
    }
}
