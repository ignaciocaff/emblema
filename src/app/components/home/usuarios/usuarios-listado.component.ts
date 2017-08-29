import { Component } from '@angular/core';
import { DataTableResource } from 'angular-2-data-table';
import persons from './data';


@Component({
    moduleId: module.id,
    selector: 'usuarios-listado',
    providers: [],
    templateUrl: './usuarios-listado.component.html',
    styleUrls: ['usuarios-listado.component.css']
})
export class UsuariosListadoComponent {

    itemResource = new DataTableResource(persons);
    items: any = [];
    itemCount = 0;

    constructor() {
        this.itemResource.count().then(count => this.itemCount = count);
    }

    reloadItems(params: any) {
        this.itemResource.query(params).then(items => this.items = items);
    }

    // special properties:

    rowClick(rowEvent: any) {
        console.log('Clicked: ' + rowEvent.row.item.name);
    }

    rowDoubleClick(rowEvent: any) {
        alert('Double clicked: ' + rowEvent.row.item.name);
    }

    rowTooltip(item: any) { return item.jobTitle; }
}