import { MdDialogRef, MD_DIALOG_DATA } from '@angular/material';
import { Component, OnInit, Inject, ViewContainerRef } from '@angular/core';
import { BlockUI, NgBlockUI } from 'ng-block-ui';
import { ToastsManager } from 'ng2-toastr/ng2-toastr';

import {
    Color
} from '../../../entities/index';

import {
    ColorService
} from '../../../services/entity-services/index';

@Component({
    moduleId: module.id,
    selector: 'colores-carga',
    templateUrl: './colores-carga.component.html',
    providers: [
        ColorService
    ]
})
export class ColoresCargaComponent implements OnInit {
    @BlockUI() blockUI: NgBlockUI;
    color: Color;

    constructor(
        public dialogRef: MdDialogRef<ColoresCargaComponent>,
        private colorService: ColorService,
        public toastr: ToastsManager
    ) {
    }

    ngOnInit() {
        this.color = new Color();
    }

    registrarColor() {
        this.blockUI.start();
        this.colorService.create(this.color).subscribe(
            data => {
                this.blockUI.stop();
                this.dialogRef.close(true);
                this.toastr.success("El color fue creado correctamente", "Exito!");
            },
            error => {
                this.blockUI.stop();
                this.toastr.error("El nombre de ese color ya existe", "Error!");
            });
    }
}