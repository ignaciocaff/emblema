import {
    Component,
    OnInit,
    ViewChild,
    AfterViewInit
} from '@angular/core';

import { BlockUI, BlockUIService, NgBlockUI } from 'ng-block-ui';
import {
    AlertService,
    AuthenticationService
} from '../../../services/common-services/index';

import { FormGroupDirective } from '@angular/forms';
import {
    SolicitudService
} from '../../../services/entity-services/index';

import {
    Solicitud,
    Usuario
} from '../../../entities/index';

import { ProductoSeleccionComponent } from './producto-seleccion.component';
import { ClienteCargaComponent } from '../clientes/cliente-carga.component';
import { ConyugeCargaComponent } from '../clientes/conyuge-carga.component';
import { CotitularCargaComponent } from '../clientes/cotitular-carga.component';
import { EmpleoCargaComponent } from '../clientes/empleo-carga.component';
import { SeniaCargaComponent } from '../solicitudes/senia-carga.component';
import { ToastsManager } from 'ng2-toastr/ng2-toastr';
import { DialogService } from '../../../services/common-services/index';

@Component({
    moduleId: module.id,
    selector: 'solicitudes-carga',
    templateUrl: './solicitudes-carga.component.html',
    styleUrls: [
        './solicitudes-carga.component.css'
    ],
    providers: [
        SolicitudService,
        DialogService
    ]
})
export class SolicitudesCargaComponent implements AfterViewInit {
    @ViewChild('productoComponent') productoSeleccion: ProductoSeleccionComponent;
    @ViewChild('clienteComponent') clienteCarga: ClienteCargaComponent;
    @ViewChild('conyugeComponent') conyugeCarga: ConyugeCargaComponent;
    @ViewChild('cotitularComponent') cotitularCarga: CotitularCargaComponent;
    @ViewChild('empleoComponent') empleoCarga: EmpleoCargaComponent;
    @ViewChild('seniaComponent') seniaCarga: SeniaCargaComponent;
    @ViewChild('clientForm') clientForm: FormGroupDirective;
    @BlockUI() blockUI: NgBlockUI;


    loading = false;
    public solicitud: Solicitud;
    public usuario: Usuario;

    constructor(
        private alertService: AlertService,
        private solicitudService: SolicitudService,
        public toastr: ToastsManager,
        public dialogService: DialogService
    ) {

    }

    ngOnInit() {

    }

    ngAfterViewInit() {
        this.solicitud = new Solicitud();
    }

    confirmDialogSolicitud() {
        this.solicitud.producto = this.productoSeleccion.producto;
        this.solicitud.cliente = this.clienteCarga.cliente;
        this.solicitud.cliente.conyuge = this.conyugeCarga.conyuge;
        this.solicitud.cliente.coTitular = this.cotitularCarga.cotitular;

        if (this.empleoCarga.empleo.tipoEmpleo.id_tipo_empleo == null) {
            this.solicitud.cliente.empleo = null;
        } else {
            this.solicitud.cliente.empleo = this.empleoCarga.empleo;
        }

        this.solicitud.senia = this.seniaCarga.senia;
        this.solicitud.monto_mensual = this.seniaCarga.monto_mensual;
        this.solicitud.nro_contrato = this.seniaCarga.nro_contrato;
        this.solicitud.fecha_solicitud = this.seniaCarga.fecha_solicitud;
        this.solicitud.vendedor = this.seniaCarga.vendedor;

        //NotaSolicitud
        if (this.seniaCarga.notaSolicitud.nota != '') {
            //Declaramos variables para agregar la nota
            this.usuario = JSON.parse(localStorage.getItem('currentUser'));
            this.seniaCarga.notaSolicitud.idUsuarioAlta = this.usuario.id_usuario;

            //Agregamos la nota a la lista
            this.solicitud.lsNotasSolicitud.push(this.seniaCarga.notaSolicitud);
        }

        this.dialogService.confirm("Solicitud", "¿Desea confirmar el alta de solicitud?").subscribe(
            result => {
                if (result) {
                    this.confirmarSolicitud();
                }
            }
        );
    }

    confirmarSolicitud() {
        this.blockUI.start(); // Start blocking
        this.solicitudService.create(this.solicitud).subscribe(
            data => {
                this.toastr.success("La solicitud ha sido dada de alta correctamente", "Exito!")
                this.limpiar();
                this.blockUI.stop();
            },
            error => {
                this.toastr.error("La solicitud no se ha creado, intente nuevamente más tarde", "Error!")
                this.blockUI.stop();
            });
    }

    guardarNota() {

    }

    validacion() {
        if (this.clienteCarga.clienteForm.valid && /*this.productoSeleccion.productoForm.valid  &&*/
            this.empleoCarga.empleoForm.valid && this.seniaCarga.seniaForm.valid) {
            return true;
        } else {
            return false;
        }
    }

    limpiar() {
        this.productoSeleccion.limpiar();
        this.clienteCarga.limpiar();
        this.conyugeCarga.limpiar();
        this.cotitularCarga.limpiar();
        this.empleoCarga.limpiar();
        this.seniaCarga.limpiar();
    }

    test() {

    }
}