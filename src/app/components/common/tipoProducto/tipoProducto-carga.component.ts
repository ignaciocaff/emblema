import { MdDialogRef, MD_DIALOG_DATA } from '@angular/material';
import { Component, OnInit, Inject, ViewContainerRef } from '@angular/core';
import { BlockUI, NgBlockUI } from 'ng-block-ui';
import { ToastsManager } from 'ng2-toastr/ng2-toastr';
import {
    TipoProducto,
    Provincia
} from '../../../entities/index';

import {
    ProvinciaService,
    TipoProductoService,
} from '../../../services/entity-services/index';

@Component({
    moduleId: module.id,
    selector: 'tipoProducto-carga',
    templateUrl: './tipoProducto-carga.component.html',
    providers: [
        ProvinciaService,
        TipoProductoService
    ]
})
export class TipoProductoCargaComponent implements OnInit {
    @BlockUI() blockUI: NgBlockUI;
    tipoProducto: TipoProducto;
    

    constructor(
        public dialogRef: MdDialogRef<TipoProductoCargaComponent>,
        private tipoProductoService: TipoProductoService,
        public toastr: ToastsManager
    ) {
    }

    ngOnInit() {
        this.tipoProducto = new TipoProducto();
    }

    registrarTipoProducto() {
        this.blockUI.start();
        this.tipoProductoService.create(this.tipoProducto).subscribe(
            data => {
                this.blockUI.stop();
                this.dialogRef.close(true)
                this.toastr.success("El tipo de producto fue creado correctamente", "Exito!");
            },
            error => {
                this.blockUI.stop();
                this.toastr.error("El nombre de ese tipo de producto ya existe", "Error!");
            });
    }
}