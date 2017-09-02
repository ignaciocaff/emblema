import {
    Component,
    OnInit,
    ViewChild,
    AfterViewInit
} from '@angular/core';
import { FormGroup } from '@angular/forms';
import { BlockUI, BlockUIService, NgBlockUI } from 'ng-block-ui';
import {
    AlertService,
    AuthenticationService
} from '../../../services/common-services/index';

import { FormGroupDirective } from '@angular/forms';
import {
    ContratoService,
    EmpleadoService
} from '../../../services/entity-services/index';

import {
    Contrato,
    Usuario,
    Empleado,
    EstadoSolicitud
} from '../../../entities/index';
import { User } from '../../../models/index';
import { ToastsManager } from 'ng2-toastr/ng2-toastr';
import { DialogService } from '../../../services/common-services/index';

@Component({
    moduleId: module.id,
    selector: 'contratos-carga',
    templateUrl: './contratos-carga.component.html',
    styleUrls: [
        './contratos-carga.component.css'
    ],
    providers: [
        ContratoService,
        DialogService,
        EmpleadoService
    ]
})
export class ContratosCargaComponent implements AfterViewInit {
    @ViewChild('contratoForm') contratoForm: FormGroup;
    @BlockUI() blockUI: NgBlockUI;


    loading = false;
    public currentUser: User;
    public contrato: Contrato;
    public supervisor_venta: Empleado;
    public gerente: Empleado;
    public lsEmpleados = new Array<Empleado>();
    constructor(
        private empleadoService: EmpleadoService,
        private alertService: AlertService,
        public toastr: ToastsManager,
        public dialogService: DialogService,
        public contratoService : ContratoService
    ) {
        this.contrato = new Contrato();
        this.contrato.estado_contrato = new EstadoSolicitud();
        this.contrato.estado_contrato.id_estado_solicitud = 1;
        this.supervisor_venta = new Empleado();
        this.gerente = new Empleado();
        this.gerente = JSON.parse(localStorage.getItem('currentUser'));
        this.contrato.gerente = this.gerente;
        this.getSupervisores();
    }

    ngOnInit() {
    }

    ngAfterViewInit() {

    }

    getSupervisores() {
        this.empleadoService.getAll().subscribe(
            data => {
                for (var i = 0; i < data.json().length; i++) {
                    let empleado = new Empleado();
                    empleado.id_empleado = data.json()[i]["id_empleado"];
                    empleado.nombre = data.json()[i]["nombre"];
                    empleado.apellido = data.json()[i]["apellido"];
                    empleado.cargo.n_cargo = data.json()[i]["cargo"]["n_cargo"];
                    empleado.cargo.id_cargo = data.json()[i]["cargo"]["id_cargo"];

                    if (empleado.cargo.n_cargo == "Supervisor") {
                        this.lsEmpleados.push(empleado);
                    }
                }
            },
            error => {

            }
        )
    }

    confirmDialogContrato() {
        this.dialogService.confirm("Contrato", "¿Desea confirmar el alta de contrato?").subscribe(
            result => {
                if (result) {
                    this.confirmarContrato();
                }
            }
        );
    }

    confirmarContrato() {
        this.blockUI.start(); // Start blocking
        this.contratoService.create(this.contrato).subscribe(
            data => {
                this.toastr.success("El contrato se ha agregado correctamente", "Exito!")
                this.limpiar();
                this.blockUI.stop();
            },
            error => {
                this.toastr.error("El contrato no se ha creado, intente nuevamente más tarde", "Error!")
                this.blockUI.stop();
            });
    }

    validacion() {
        if (this.contratoForm.valid) {
            return true;
        } else {
            return false;
        }
    }

    limpiar() {
    }

}