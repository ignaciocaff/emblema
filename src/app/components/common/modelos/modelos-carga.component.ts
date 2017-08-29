import { MdDialogRef, MD_DIALOG_DATA } from '@angular/material';
import { Component, OnInit, Inject, ViewContainerRef } from '@angular/core';
import { BlockUI, NgBlockUI } from 'ng-block-ui';
import { ToastsManager } from 'ng2-toastr/ng2-toastr';

import {
    Modelo,
    Marca
} from '../../../entities/index';

import {
    MarcaService,
    ModeloService,
} from '../../../services/entity-services/index';

@Component({
    moduleId: module.id,
    selector: 'modelos-carga',
    templateUrl: './modelos-carga.component.html',
    providers: [
        MarcaService,
        ModeloService
    ]
})
export class ModelosCargaComponent implements OnInit {
    @BlockUI() blockUI: NgBlockUI;
    modelo: Modelo;

    constructor(
        public dialogRef: MdDialogRef<ModelosCargaComponent>,
        private marcaService: MarcaService,
        private modeloService: ModeloService,
        public toastr: ToastsManager,
        @Inject(MD_DIALOG_DATA) public data: Marca
    ) {

    }

    ngOnInit() {
        this.modelo = new Modelo();
        this.modelo.marca = this.data;
    }

    registrarModelo() {
        this.blockUI.start();
        this.modeloService.create(this.modelo).subscribe(
            data => {
                this.blockUI.stop();
                this.dialogRef.close(true);
                this.toastr.success("El modelo fue creado correctamente", "Exito!");
            },
            error => {
                 this.blockUI.stop();
                 this.toastr.error("El nombre de modelo para esa marca ya existe", "Error!");
            });
    }
}
