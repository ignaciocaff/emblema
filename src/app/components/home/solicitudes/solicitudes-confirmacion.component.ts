import { MdDialogRef } from '@angular/material';
import { Component, OnInit, Inject, ViewContainerRef } from '@angular/core';
import { BlockUI, NgBlockUI } from 'ng-block-ui';
import { ToastsManager } from 'ng2-toastr/ng2-toastr';

import {
    Solicitud
} from '../../../entities/index';

@Component({
    moduleId: module.id,
    selector: 'solicitudes-confirmacion',
    templateUrl: './solicitudes-confirmacion.component.html'
})
export class SolicitudesConfirmacionComponent implements OnInit {
    solicitud: Solicitud;

    constructor(
        public dialogRef: MdDialogRef<SolicitudesConfirmacionComponent>
    ) {
    }

    ngOnInit() {
        this.solicitud = new Solicitud();
    }
}