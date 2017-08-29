import { MdDialogRef, MD_DIALOG_DATA } from '@angular/material';
import { Component, OnInit, Inject, ViewContainerRef } from '@angular/core';
import { BlockUI, NgBlockUI } from 'ng-block-ui';
import { ToastsManager } from 'ng2-toastr/ng2-toastr';

import {
    Combustible
} from '../../../entities/index';

import {
    CombustibleService
} from '../../../services/entity-services/index';

@Component({
    moduleId: module.id,
    selector: 'combustibles-carga',
    templateUrl: './combustibles-carga.component.html',
    providers: [
        CombustibleService
    ]
})
export class CombustiblesCargaComponent implements OnInit {
    @BlockUI() blockUI: NgBlockUI;
    combustible: Combustible;

    constructor(
        public dialogRef: MdDialogRef<CombustiblesCargaComponent>,
        private combustibleService: CombustibleService,
        public toastr: ToastsManager
    ) {
    }

    ngOnInit() {
        this.combustible = new Combustible();
    }

    registrarCombustible() {
        this.blockUI.start();
        this.combustibleService.create(this.combustible).subscribe(
            data => {
                this.blockUI.stop();
                this.dialogRef.close(true);
                this.toastr.success("El tipo de combustible fue creado correctamente", "Exito!");
            },
            error => {
                this.blockUI.stop();
                this.toastr.error("El nombre de ese tipo de combustible ya existe", "Error!");
            });
    }
}