import { MdDialogRef, MD_DIALOG_DATA } from '@angular/material';
import { Component, OnInit, Inject, ViewContainerRef } from '@angular/core';
import { BlockUI, NgBlockUI } from 'ng-block-ui';
import { ToastsManager } from 'ng2-toastr/ng2-toastr';
import {
    Segmento,
    TipoProducto
} from '../../../entities/index';

import {
    TipoProductoService,
    SegmentoService,
} from '../../../services/entity-services/index';

@Component({
    moduleId: module.id,
    selector: 'segmentos-carga',
    templateUrl: './segmentos-carga.component.html',
    providers: [
        TipoProductoService,
        SegmentoService
    ]
})
export class SegmentosCargaComponent implements OnInit {
    @BlockUI() blockUI: NgBlockUI;
    segmento: Segmento;

    constructor(
        public dialogRef: MdDialogRef<SegmentosCargaComponent>,
        private tipoProductoService: TipoProductoService,
        private segmentoService: SegmentoService,
        public toastr: ToastsManager,
        @Inject(MD_DIALOG_DATA) public data: TipoProducto
    ) {

    }

    ngOnInit() {
        this.segmento = new Segmento();
        this.segmento.tipoProducto = this.data;
    }

    registrarSegmento() {
        this.blockUI.start();
        this.segmentoService.create(this.segmento).subscribe(
            data => {
                this.blockUI.stop();
                this.dialogRef.close(true);
                this.toastr.success("El segmento fue creado correctamente", "Exito!");
            },
            error => {
                this.blockUI.stop();
                this.toastr.error("El nombre de segmento para ese tipo de producto ya existe", "Error!");
            });
    }
}