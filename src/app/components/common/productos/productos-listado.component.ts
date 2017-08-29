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
    Producto,
} from '../../../entities/index';

import {
    ProductoService
} from '../../../services/entity-services/index';

@Component({
    moduleId: module.id,
    selector: 'productos-listado',
    templateUrl: './productos-listado.component.html',
    styleUrls: ['./productos-listado.component.css'],
    providers: [
        BlockUIService,
        DialogService,
        ProductoService]
})
export class ProductosListadoComponent implements AfterViewInit {
    @ViewChild('btnConsultarListado') btnConsultarListado: ElementRef;
    @BlockUI() blockUI: NgBlockUI;

    public producto: Producto;
    
    productosJSONArray = new Array();
    itemResource = new DataTableResource(this.productosJSONArray);
    items: any = [];
    itemCount = 0;

    constructor(
        private blockUIService: BlockUIService,
        private dialogService: DialogService,
        private productoService: ProductoService,
        public toastr: ToastsManager,
        private renderer: Renderer
    ) {
        this.producto = new Producto();
    }

    ngAfterViewInit() {
        this.items = null;
        this.producto = new Producto();
    }

    cargarListado(params: any) {
        this.blockUI.start();
        //Si se ingresa un documento, traemos las solicitudes del cliente correspondiente
        this.productoService.getAll().subscribe(
            data => {
                if (data) {
                    this.productosJSONArray = [];
                    for (var i = 0; i < data.length; i++) {
                        let prodJSON = new Array<{
                            id_producto: number,
                            modelo: string,
                            marca: string,
                            color: string,
                            anio: number,
                            segmento: string,
                            combustible: string,
                            precio: number,
                            dominio: string
                        }>();

                        prodJSON["id_producto"] = data[i]["id_producto"];
                        prodJSON["modelo"] = data[i]["modelo"]["n_modelo"];
                        prodJSON["marca"] = data[i]["modelo"]["marca"]["n_marca"];
                        prodJSON["color"] = data[i]["color"]["n_color"];
                        prodJSON["anio"] = data[i]["anio"];
                        prodJSON["segmento"] = data[i]["segmento"]["n_segmento"];
                        prodJSON["combustible"] = data[i]["combustible"]["n_combustible"];
                        prodJSON["precio"] = data[i]["precio"];
                        prodJSON["dominio"] = data[i]["dominio"];

                        this.productosJSONArray.push(prodJSON);
                    }

                    let itemResource = new DataTableResource(this.productosJSONArray);
                    this.items = null;
                    itemResource.query(params).then(items => this.items = items);
                    itemResource.count().then(count => {
                        this.itemCount = count;
                        if (this.itemCount == 0) {
                            this.items = null;
                            this.toastr.info("No se han encontrado productos", "Info");
                        }
                    });

                    this.blockUI.stop();
                }
            },
            error => {
                this.items = null;
                this.blockUI.stop();
                this.toastr.info("Ha ocurrido un error al intentar consultar los productos, por favor intente nuevamente mas tarde", "Error");
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
