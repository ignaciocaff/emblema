import {
    Component,
    OnInit,
    ViewContainerRef,
    Renderer,
    ElementRef,
    ViewChild,
    AfterViewInit
} from '@angular/core';

import {
    EstadoSolicitud,
    Contrato,
    Empleado
} from '../../../entities/index';

import { DataTableResource } from 'angular-2-data-table';
import { Http } from "@angular/http";
import { Subscription } from 'rxjs/Subscription';

import { BlockUI, NgBlockUI } from 'ng-block-ui';
import { ToastsManager } from 'ng2-toastr/ng2-toastr';
import { DialogService } from '../../../services/common-services/index';
import { ContratoService } from '../../../services/entity-services/index';

@Component({
    moduleId: module.id,
    selector: 'contratos-listado',
    templateUrl: 'contratos-listado.component.html',
    styleUrls: [
        './contratos-listado.component.css'
    ],
    providers: [ContratoService]
})

export class ContratosListadoComponent implements AfterViewInit {
    @BlockUI() blockUI: NgBlockUI;
    @ViewChild('btnConsultarListado') btnConsultarListado: ElementRef;

    lsContratos: Array<Contrato>;
    public empleado: Empleado;
    //solJSON = new Array();
    solJSONArray = new Array();

    itemResource = new DataTableResource(this.solJSONArray);
    items: any = [];
    itemCount = 0;

    contrato: Contrato;

    constructor(
        private contratoService: ContratoService,
        private dialogService: DialogService,
        private toastr: ToastsManager,
        private renderer: Renderer
    ) {
        this.contrato = new Contrato();
        this.empleado = new Empleado();
        this.empleado = JSON.parse(localStorage.getItem('currentUser'));

    }

    ngAfterViewInit() {
        this.items = null;
    }

    cargarListado(params: any) {
        this.blockUI.start();
        if (this.empleado.cargo.n_cargo == 'Gerente') {
            if (this.contrato.id_contrato > 0) {
                this.contratoService.getByContrato(this.contrato.id_contrato).subscribe(
                    data => {
                        if (data) {
                            this.solJSONArray = [];
                            for (var i = 0; i < data.length; i++) {
                                let solJSON = new Array<{
                                    id_contrato: number,
                                    id_supervisor_venta: string,
                                    nombreS: string,
                                    apellidoS: string,
                                    id_estado_contrato: number,
                                    n_estado_contrato: string,
                                    id_gerente: number,
                                    nombreG: string,
                                    apellidoG: string,
                                    apellidoA: string,
                                    nombreA: string,
                                    id_asesor: number,

                                }>();

                                solJSON["id_contrato"] = data[i]["id_contrato"];
                                solJSON["id_supervisor_venta"] = data[i]["supervisor_venta"]["id_empleado"];
                                solJSON["nombreS"] = data[i]["supervisor_venta"]["nombre"];
                                solJSON["apellidoS"] = data[i]["supervisor_venta"]["apellido"];
                                solJSON["id_gerente"] = data[i]["gerente"]["id_empleado"];
                                solJSON["nombreG"] = data[i]["gerente"]["nombre"];
                                solJSON["apellidoG"] = data[i]["gerente"]["apellido"];
                                solJSON["apellidoA"] = data[i]["asesor"]["apellido"];
                                solJSON["nombreA"] = data[i]["asesor"]["nombre"];
                                solJSON["id_asesor"] = data[i]["asesor"]["id_empleado"];
                                solJSON["id_estado_contrato"] = data[i]["estado_contrato"]["id_estado_solicitud"];
                                solJSON["n_estado_contrato"] = data[i]["estado_contrato"]["n_estado_solicitud"];
                                this.solJSONArray.push(solJSON);
                            }

                            let itemResource = new DataTableResource(this.solJSONArray);
                            this.items = null;
                            itemResource.query(params).then(items => this.items = items);
                            itemResource.count().then(count => {
                                this.itemCount = count;
                                if (this.itemCount == 0) {
                                    this.items = null;
                                    this.toastr.info("No se han encontrado contratos", "Info");
                                }
                            });

                            this.blockUI.stop();
                        }
                    },
                    error => {
                        this.items = null;
                        this.blockUI.stop();
                        this.toastr.error("Intente más tarde", "Error");
                    }
                );
            } else {
                this.contratoService.getAll().subscribe(
                    data => {
                        if (data) {
                            this.solJSONArray = [];
                            for (var i = 0; i < data.length; i++) {
                                let solJSON = new Array<{
                                    id_contrato: number,
                                    id_supervisor_venta: string,
                                    nombreS: string,
                                    apellidoS: string,
                                    id_estado_contrato: number,
                                    n_estado_contrato: string,
                                    id_gerente: number,
                                    nombreG: string,
                                    apellidoG: string,
                                    apellidoA: string,
                                    nombreA:string,
                                    id_asesor: number,
                                }>();

                                solJSON["id_contrato"] = data[i]["id_contrato"];
                                solJSON["id_supervisor_venta"] = data[i]["supervisor_venta"]["id_empleado"];
                                solJSON["nombreS"] = data[i]["supervisor_venta"]["nombre"];
                                solJSON["apellidoS"] = data[i]["supervisor_venta"]["apellido"];
                                solJSON["id_gerente"] = data[i]["gerente"]["id_empleado"];
                                solJSON["nombreG"] = data[i]["gerente"]["nombre"];
                                solJSON["apellidoG"] = data[i]["gerente"]["apellido"];
                                solJSON["apellidoA"] = data[i]["asesor"]["apellido"];
                                solJSON["nombreA"] = data[i]["asesor"]["nombre"];
                                solJSON["id_asesor"] = data[i]["asesor"]["id_empleado"];
                                solJSON["id_estado_contrato"] = data[i]["estado_contrato"]["id_estado_solicitud"];
                                solJSON["n_estado_contrato"] = data[i]["estado_contrato"]["n_estado_solicitud"];
                                this.solJSONArray.push(solJSON);
                            }

                            let itemResource = new DataTableResource(this.solJSONArray);
                            this.items = null;
                            itemResource.query(params).then(items => this.items = items);
                            itemResource.count().then(count => {
                                this.itemCount = count;
                                if (this.itemCount == 0) {
                                    this.items = null;
                                    this.toastr.info("No se han encontrado contratos", "Info");
                                }
                            });

                            this.blockUI.stop();
                        }
                    },
                    error => {
                        this.items = null;
                        this.blockUI.stop();
                        this.toastr.error("Intente más tarde", "Error");
                    }
                );

            }
        } else {
            this.blockUI.stop();
            this.toastr.error("No posee permisos para ver este listado de contratos", "Error");
        }
    }

    rowClick(rowEvent: any) {
        console.log('Clicked: ' + rowEvent.row.item.name);
    }

    rowDoubleClick(rowEvent: any) {
        alert('Double clicked: ' + rowEvent.row.item.name);
    }

    rowTooltip(item: any) { return item.jobTitle; }
}