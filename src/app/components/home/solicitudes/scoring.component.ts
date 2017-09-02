import { Component, ViewChild } from '@angular/core';
import { CompleterService, CompleterData } from 'ng2-completer';
import {
    Empleado,
    Persona,
    NotaSolicitud
} from '../../../entities/index';
import { EmpleadoService, PersonaService } from '../../../services/entity-services/index';
import { FormGroup } from '@angular/forms';

@Component({
    moduleId: module.id,
    selector: 'scoring-carga',
    templateUrl: './scoring.component.html',
    providers: [EmpleadoService, PersonaService]
})
export class ScoringComponent {
    @ViewChild('scoringForm') scoringForm: FormGroup;

    public senia: number;
    public monto_mensual: number;
    public vendedor: Empleado;
    public persona: Persona;
    public fecha_solicitud: Date;
    public nro_contrato: number;
    public notaSolicitud: NotaSolicitud;

    private lsEmpleados = new Array<Empleado>();

    constructor(
        private empleadoService: EmpleadoService, private personaService: PersonaService
    ) {
        this.vendedor = new Empleado();
        this.persona = new Persona();
        this.notaSolicitud = new NotaSolicitud();
        this.getVendedores();
    }

    getVendedores() {
        this.empleadoService.getAll().subscribe(
            data => {
                if (data != null) {
                    for (var i = 0; i < data.json().length; i++) {
                        let empleado = new Empleado();
                        empleado.id_empleado = data.json()[i]["id_empleado"];
                        empleado.nombre = data.json()[i]["nombre"];
                        empleado.apellido = data.json()[i]["apellido"];
                        empleado.cargo.n_cargo = data.json()[i]["cargo"]["n_cargo"];
                        empleado.cargo.id_cargo = data.json()[i]["cargo"]["id_cargo"];
                        //Agregamos solo los Vendedores en este caso
                        if (empleado.cargo.n_cargo == "Vendedor") {
                            this.lsEmpleados.push(empleado);
                        }
                    }
                }
            },
            error => {
                
            }
        )
    }

    limpiar() {
        this.senia = null;
        this.monto_mensual = null;
        this.vendedor = new Empleado();
        this.persona = new Persona();
        this.fecha_solicitud = new Date();
        this.nro_contrato = 0;
        this.notaSolicitud = new NotaSolicitud();
    }

}
