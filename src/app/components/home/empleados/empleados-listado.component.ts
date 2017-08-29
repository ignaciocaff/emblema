import {
    Component,
    OnInit,
    AfterViewInit,
    ViewChild,
    ViewContainerRef,
    Renderer,
    ElementRef
} from '@angular/core';

import { BlockUI, BlockUIService, NgBlockUI } from 'ng-block-ui';
import { FormGroup } from '@angular/forms';
import { Subscription } from 'rxjs/Subscription';
import { DialogService } from '../../../services/common-services/index';
import { ToastsManager } from 'ng2-toastr/ng2-toastr';
import { DataTableResource } from 'angular-2-data-table';

import {
    Empleado,
} from '../../../entities/index';

import {
    EmpleadoService
} from '../../../services/entity-services/index';

@Component({
    moduleId: module.id,
    selector: 'empleados-listado',
    templateUrl: './empleados-listado.component.html',
    styleUrls: ['./empleados-listado.component.css'],
    providers: [
        BlockUIService,
        DialogService,
        EmpleadoService]
})
export class EmpleadosListadoComponent implements AfterViewInit {
    @ViewChild('btnConsultarListado') btnConsultarListado: ElementRef;
    @BlockUI() blockUI: NgBlockUI;

    public empleado: Empleado;

    empleadosJSONArray = new Array();
    private lsEmpleados = new Array<Empleado>();

    itemResource = new DataTableResource(this.empleadosJSONArray);
    items: any = [];
    itemCount = 0;

    constructor(
        private blockUIService: BlockUIService,
        private dialogService: DialogService,
        private empleadoService: EmpleadoService,
        public toastr: ToastsManager,
        private renderer: Renderer
    ) {
        this.empleado = new Empleado();
    }

    ngAfterViewInit() {
        this.items = null;
        this.empleado = new Empleado();
    }

    cargarListado(params: any) {
        this.blockUI.start();
        //Si se ingresa un documento, traemos las solicitudes del cliente correspondiente
        this.empleadoService.getAll().subscribe(
            data => {
                if (data != null) {
                    this.empleadosJSONArray = [];
                    for (var i = 0; i < data.json().length; i++) {
                        let empJSON = new Array<{
                                nombre: string,
                                apellido: string,
                                nro_documento: number,
                                n_cargo: string,
                                sup_ape: string,
                            }>();
                        let empleado = new Empleado();
                        empJSON["nombre"] = data.json()[i]["nombre"];
                        empJSON["apellido"] = data.json()[i]["apellido"];
                        empJSON["nro_documento"] = data.json()[i]["nro_documento"];
                        empJSON["n_cargo"] = data.json()[i]["cargo"]["n_cargo"];
                        empJSON["sup_ape"] =  data.json()[i]["supervisor"]["apellido"];

                        this.empleadosJSONArray.push(empJSON);
                    }

                    let itemResource = new DataTableResource(this.empleadosJSONArray);
                    this.items = null;
                    itemResource.query(params).then(items => this.items = items);
                    itemResource.count().then(count => {
                        this.itemCount = count;
                        if (this.itemCount == 0) {
                            this.items = null;
                            this.toastr.info("No se ha encontrado Personal cargado", "Info");
                        }
                    });

                    this.blockUI.stop();
                }
            },
            error => {
                this.items = null;
                this.blockUI.stop();
                this.toastr.info("Ha ocurrido un error al intentar consultar el listado de Personal, por favor intente nuevamente mas tarde", "Error");
            }
        );
    }

    rowClick(rowEvent: any) {
        console.log('Clicked: ' + rowEvent.row.item.name);
    }

    rowDoubleClick(rowEvent: any) {
        alert('Double clicked: ' + rowEvent.row.item.name);
    }

    rowTooltip(item: any) { return item.jobTitle; }
}
