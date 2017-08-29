import {
    Component,
    OnInit,
    ViewContainerRef,
    Renderer,
    ElementRef,
    ViewChild,
    AfterViewInit
} from '@angular/core';

import { DataTableResource } from 'angular-2-data-table';
import { Http } from "@angular/http";
import { Subscription } from 'rxjs/Subscription';

import { BlockUI, NgBlockUI } from 'ng-block-ui';
import { ToastsManager } from 'ng2-toastr/ng2-toastr';
//import persons from './data';

import {
    Cliente,
    Solicitud,
    Producto,
    Modelo,
    Marca,
    EstadoSolicitud,
    Empleado
} from '../../../entities/index';
import { SolicitudService } from '../../../services/entity-services/solicitud.service';

import { DialogService } from '../../../services/common-services/index';

@Component({
    moduleId: module.id,
    selector: 'solicitudes-listado',
    templateUrl: 'solicitudes-listado.component.html',
    styleUrls: [
        './solicitudes-listado.component.css'
    ],
    providers: [SolicitudService, DialogService]
})

export class SolicitudesListadoComponent implements AfterViewInit {
    @BlockUI() blockUI: NgBlockUI;
    @ViewChild('btnConsultarListado') btnConsultarListado: ElementRef;

    lsSolicitudes: Array<Solicitud>;

    //solJSON = new Array();
    solJSONArray = new Array();

    itemResource = new DataTableResource(this.solJSONArray);
    items: any = [];
    itemCount = 0;

    cliente: Cliente;

    constructor(
        private solicitudService: SolicitudService,
        private dialogService: DialogService,
        private toastr: ToastsManager,
        private renderer: Renderer
    ) {
        this.cliente = new Cliente();

    }

    ngAfterViewInit() {
        this.items = null;
    }

    cargarListado(params: any) {
        this.blockUI.start();
        //Si se ingresa un documento, traemos las solicitudes del cliente correspondiente
        if (this.cliente.nro_documento > 0) {
            this.solicitudService.getByCliente(this.cliente.nro_documento).subscribe(
                data => {
                    if (data) {
                        this.solJSONArray = [];
                        for (var i = 0; i < data.length; i++) {
                            let solJSON = new Array<{
                                nro_contrato: number,
                                nombre: string,
                                apellido: string,
                                nro_documento: number,
                                anio: number,
                                n_modelo: string,
                                n_marca: string,
                                n_estado_solicitud: string,
                                monto_mensual: number,
                            }>();

                            solJSON["nro_contrato"] = data[i]["nro_contrato"];
                            solJSON["nombre"] = data[i]["cliente"]["nombre"];
                            solJSON["apellido"] = data[i]["cliente"]["apellido"];
                            solJSON["nro_documento"] = data[i]["cliente"]["nro_documento"];
                            solJSON["anio"] = data[i]["producto"]["anio"];
                            solJSON["n_modelo"] = data[i]["producto"]["modelo"]["n_modelo"];
                            solJSON["n_marca"] = data[i]["producto"]["modelo"]["marca"]["n_marca"];
                            solJSON["n_estado_solicitud"] = data[i]["estado_solicitud"]["n_estado_solicitud"];
                            solJSON["monto_mensual"] = data[i]["monto_mensual"];

                            this.solJSONArray.push(solJSON);
                        }

                        let itemResource = new DataTableResource(this.solJSONArray);
                        this.items = null;
                        itemResource.query(params).then(items => this.items = items);
                        itemResource.count().then(count => {
                            this.itemCount = count;
                            if (this.itemCount == 0) {
                                this.items = null;
                                this.toastr.info("No se han encontrado solicitudes para el cliente ingresado", "Info");
                            }
                        });

                        this.blockUI.stop();
                    }
                },
                error => {
                    this.items = null;
                    this.blockUI.stop();
                    if (this.cliente.nro_documento == null || this.cliente.nro_documento.toString() == "") {
                        this.toastr.info("Ingrese un numero de documento para realizar la consulta", "Info");
                    } else {
                        this.toastr.error("Intente más tarde", "Error");
                    }
                }
            );
        } else {
            this.solicitudService.getAll().subscribe(
                data => {
                    if (data) {
                        this.solJSONArray = [];
                        for (var i = 0; i < data.length; i++) {
                            let solJSON = new Array<{
                                nro_contrato: number,
                                nombre: string,
                                apellido: string,
                                nro_documento: number,
                                anio: number,
                                n_modelo: string,
                                n_marca: string,
                                n_estado_solicitud: string,
                                monto_mensual: number,
                            }>();

                            solJSON["nro_contrato"] = data[i]["nro_contrato"];
                            solJSON["nombre"] = data[i]["cliente"]["nombre"];
                            solJSON["apellido"] = data[i]["cliente"]["apellido"];
                            solJSON["nro_documento"] = data[i]["cliente"]["nro_documento"];
                            solJSON["anio"] = data[i]["producto"]["anio"];
                            solJSON["n_modelo"] = data[i]["producto"]["modelo"]["n_modelo"];
                            solJSON["n_marca"] = data[i]["producto"]["modelo"]["marca"]["n_marca"];
                            solJSON["n_estado_solicitud"] = data[i]["estado_solicitud"]["n_estado_solicitud"];
                            solJSON["monto_mensual"] = data[i]["monto_mensual"];

                            this.solJSONArray.push(solJSON);
                        }

                        let itemResource = new DataTableResource(this.solJSONArray);
                        this.items = null;
                        itemResource.query(params).then(items => this.items = items);
                        itemResource.count().then(count => {
                            this.itemCount = count;
                            if (this.itemCount == 0) {
                                this.items = null;
                                this.toastr.info("No se han encontrado solicitudes cargadas", "Info");
                            }
                        });

                        this.blockUI.stop();
                    }
                },
                error => {
                    this.items = null;
                    this.blockUI.stop();
                    this.toastr.error("Ha ocurrido un error al intentar cargar las solicitudes, por favor intente mas tarde", "Error");
                }
            );
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