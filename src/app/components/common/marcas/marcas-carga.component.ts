import { MdDialogRef, MD_DIALOG_DATA } from '@angular/material';
import { Component, OnInit, Inject, ViewContainerRef } from '@angular/core';
import { BlockUI, NgBlockUI } from 'ng-block-ui';
import { ToastsManager } from 'ng2-toastr/ng2-toastr';

import {
    Marca
} from '../../../entities/index';

import {
    MarcaService
} from '../../../services/entity-services/index';

@Component({
    moduleId: module.id,
    selector: 'marcas-carga',
    templateUrl: './marcas-carga.component.html',
    providers: [
        MarcaService
    ]
})
export class MarcasCargaComponent implements OnInit {
    @BlockUI() blockUI: NgBlockUI;
    marcaProducto: Marca;

    constructor(
        public dialogRef: MdDialogRef<MarcasCargaComponent>,
        private marcaService: MarcaService,
        public toastr: ToastsManager
    ) {
    }

    ngOnInit() {
        this.marcaProducto = new Marca();
    }

    registrarMarca() {
        this.blockUI.start();
        this.marcaService.create(this.marcaProducto).subscribe(
            data => {
                this.blockUI.stop();
                this.dialogRef.close(true);
                this.toastr.success("La Marca fue creada correctamente", "Exito!");
            },
            error => {
                this.blockUI.stop();
                this.toastr.error("El nombre de esa marca ya existe", "Error!");
            });
    }
}