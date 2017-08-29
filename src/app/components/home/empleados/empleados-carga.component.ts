import {
    Component,
    OnInit,
    ViewContainerRef,
    ViewChild
} from '@angular/core';
import { FormGroup } from '@angular/forms';
import { BlockUI, NgBlockUI } from 'ng-block-ui';
import { DialogService } from '../../../services/common-services/index';
import { ToastsManager } from 'ng2-toastr/ng2-toastr';

import {
    Empleado,
    TipoDocumento,
    Nacionalidad,
    EstadoCivil,
    Provincia,
    Localidad,
    Cargo
} from '../../../entities/index';

import {
    EmpleadoService,
    TipoDocumentoService,
    NacionalidadService,
    EstadoCivilService,
    ProvinciaService,
    LocalidadService,
    PersonaService,
    CargoService
} from '../../../services/entity-services/index';

@Component({
    moduleId: module.id,
    selector: 'empleados-carga',
    styleUrls: [
        './empleados-carga.component.css'
    ],
    templateUrl: './empleados-carga.component.html',
    providers: [EmpleadoService,
        TipoDocumentoService,
        NacionalidadService,
        EstadoCivilService,
        ProvinciaService,
        LocalidadService,
        PersonaService,
        CargoService,
        DialogService
    ]
})
export class EmpleadosCargaComponent {
    @BlockUI() blockUI: NgBlockUI;
    @ViewChild('empleadoForm') empleadoForm: FormGroup;

    public existeEmpleado: Boolean;
    public existeSupervisor: Boolean;
    public esEditable: Boolean;
    public empleado = new Empleado();
    public tipoDocumento: TipoDocumento;
    public provincia: Provincia;
    public nombreCompleto: String;

    public lsProvincias = new Array<Provincia>();
    public lsLocalidades = new Array<Localidad>();
    public lsTiposDocumento = new Array<TipoDocumento>();
    public lsNacionalidades = new Array<Nacionalidad>();
    public lsEstadosCivil = new Array<EstadoCivil>();
    public lsCargos = new Array<Cargo>();
    public lsEmpleados = new Array<Empleado>();
    constructor(
        private empleadoService: EmpleadoService,
        private tipoDocumentoService: TipoDocumentoService,
        private nacionalidadService: NacionalidadService,
        private estadoCivilService: EstadoCivilService,
        private provinciaService: ProvinciaService,
        private localidadService: LocalidadService,
        private personaService: PersonaService,
        private dialogService: DialogService,
        private cargoService: CargoService,
        public toastr: ToastsManager
    ) {
        this.existeEmpleado = false;
        this.esEditable = false;
        this.cargarTiposDocumento();
        this.cargarNacionalidades();
        this.cargarEstadosCivil();
        this.cargarProvincias();
        this.cargarCargos();
        this.getSupervisores();

    }

    //METODOS-----------------------------------------------------------------------
    cargarTiposDocumento() {
        this.tipoDocumentoService.getAll().subscribe(
            data => {
                for (var i = 0; i < data.json().length; i++) {
                    let tipoDocumento = new TipoDocumento(
                        data.json()[i]["id_tipo_documento"],
                        data.json()[i]["n_tipo_documento"]
                    );
                    this.lsTiposDocumento.push(tipoDocumento);
                }
            },
            error => {
                this.lsTiposDocumento = new Array<TipoDocumento>();
                error.json()["Message"];
            });
    }

    cargarNacionalidades() {
        this.nacionalidadService.getAll().subscribe(
            data => {
                for (var i = 0; i < data.json().length; i++) {
                    let nacionalidad = new Nacionalidad(
                        data.json()[i]["id_nacionalidad"],
                        data.json()[i]["n_nacionalidad"]
                    );
                    this.lsNacionalidades.push(nacionalidad);
                }
            },
            error => {
                this.lsNacionalidades = new Array<Nacionalidad>();
                error.json()["Message"];
            });
    }

    cargarEstadosCivil() {
        this.estadoCivilService.getAll().subscribe(
            data => {
                for (var i = 0; i < data.json().length; i++) {
                    let estadoCivil = new EstadoCivil(
                        data.json()[i]["id_estado_civil"],
                        data.json()[i]["n_estado_civil"]
                    );
                    this.lsEstadosCivil.push(estadoCivil);
                }
            },
            error => {
                this.lsEstadosCivil = new Array<EstadoCivil>();
                error.json()["Message"];
            });
    }

    cargarProvincias() {
        this.provinciaService.getAll().subscribe(
            data => {
                for (var i = 0; i < data.json().length; i++) {
                    let provincia = new Provincia(
                        data.json()[i]["id_provincia"],
                        data.json()[i]["n_provincia"]
                    );
                    this.lsProvincias.push(provincia);
                }
            },
            error => {
                this.lsProvincias = new Array<Provincia>();
                error.json()["Message"];
            });
    }

    cargarCargos() {
        this.cargoService.getAll().subscribe(
            data => {
                for (var i = 0; i < data.json().length; i++) {
                    let cargo = new Cargo(
                        data.json()[i]["id_cargo"],
                        data.json()[i]["n_cargo"]
                    );
                    this.lsCargos.push(cargo);
                }
            },
            error => {
                this.lsCargos = new Array<Cargo>();
                error.json()["Message"];
            });
    }
    consultarDatosEmpleado() {
        if (this.empleado.nro_documento) {

            let nroDoc = this.empleado.nro_documento;

            this.blockUI.start("Consultando empleados...");
            this.personaService.getEmpByDoc(this.empleado.nro_documento).subscribe(
                data => {
                    if (data[0]) {
                        this.empleado.id_persona = data[0]["id_persona"];
                        this.empleado.nombre = data[0]["nombre"];
                        this.empleado.apellido = data[0]["apellido"];
                        this.empleado.fecha_nacimiento = data[0]["fecha_nacimiento"];
                        this.empleado.nro_documento = data[0]["nro_documento"];
                        this.empleado.tipoDocumento.id_tipo_documento = data[0]["tipoDocumento"]["id_tipo_documento"];
                        this.empleado.tipoDocumento.n_tipo_documento = data[0]["tipoDocumento"]["n_tipo_documento"];

                        this.empleado.estadoCivil.id_estado_civil = data[0]["estadoCivil"]["id_estado_civil"];
                        this.empleado.estadoCivil.n_estado_civil = data[0]["estadoCivil"]["n_estado_civil"];

                        this.empleado.nacionalidad.id_nacionalidad = data[0]["nacionalidad"]["id_nacionalidad"];
                        this.empleado.nacionalidad.n_nacionalidad = data[0]["nacionalidad"]["n_nacionalidad"];


                        this.empleado.domicilio.calle = data[0]["domicilio"]["calle"];
                        this.empleado.domicilio.codigo_postal = data[0]["domicilio"]["codigo_postal"];
                        this.empleado.domicilio.dpto = data[0]["domicilio"]["dpto"];
                        this.empleado.domicilio.id_domicilio = data[0]["domicilio"]["id_domicilio"];
                        this.empleado.domicilio.numeracion = data[0]["domicilio"]["numeracion"];
                        this.empleado.domicilio.piso = data[0]["domicilio"]["piso"];
                        this.empleado.domicilio.torre = data[0]["domicilio"]["torre"];
                        this.empleado.domicilio.localidad = data[0]["domicilio"]["localidad"];
                        this.empleado.domicilio.localidad.id_localidad = data[0]["domicilio"]["localidad"]["id_localidad"];
                        this.empleado.domicilio.localidad.n_localidad = data[0]["domicilio"]["localidad"]["n_localidad"];
                        this.empleado.domicilio.localidad.provincia = data[0]["domicilio"]["localidad"]["provincia"];
                        this.empleado.domicilio.localidad.provincia.id_provincia = data[0]["domicilio"]["localidad"]["provincia"]["id_provincia"];
                        this.empleado.domicilio.localidad.provincia.n_provincia = data[0]["domicilio"]["localidad"]["provincia"]["n_provincia"];

                        this.empleado.contacto.email = data[0]["contacto"]["email"];
                        this.empleado.contacto.id_contacto = data[0]["contacto"]["id_contacto"];
                        this.empleado.contacto.telefono_fijo = data[0]["contacto"]["telefono_fijo"];
                        this.empleado.contacto.telefono_movil = data[0]["contacto"]["telefono_movil"];

                        this.empleado.cargo.id_cargo = data[0]["cargo"]["id_cargo"];
                        this.empleado.cargo.n_cargo = data[0]["cargo"]["n_cargo"];
                        this.empleado.supervisor = data[0]["supervisor"];

                        if (this.empleado.supervisor != null) {
                            this.empleado.supervisor.nombre = data[0]["supervisor"]["nombre"];
                            this.empleado.supervisor.apellido = data[0]["supervisor"]["apellido"];
                            this.nombreCompleto = this.empleado.supervisor.apellido + "," + this.empleado.supervisor.nombre;
                            this.existeSupervisor = true;
                        } else {
                            this.nombreCompleto = "";
                        }
                        this.existeEmpleado = true;

                    }
                    this.blockUI.stop();
                },
                error => {
                    this.empleado = new Empleado();
                    this.empleado.nro_documento = nroDoc;
                    this.existeEmpleado = false;
                    this.existeSupervisor = false;
                    this.blockUI.stop();
                });
        } else {
            this.empleado = new Empleado();
            this.existeEmpleado = false;
            this.existeSupervisor = false;
        }
    }

    //EVENTOS-----------------------------------------------------------------------
    provincia_onChanged(provincia: Provincia) {
        this.blockUI.start();
        this.provincia = provincia;
        this.localidadService.getByProvincia(provincia.id_provincia).subscribe(
            data => {
                this.lsLocalidades = [];
                for (var i = 0; i < data.json().length; i++) {
                    let localidad = new Localidad(
                        data.json()[i]["id_localidad"],
                        data.json()[i]["n_localidad"]
                    );
                    this.lsLocalidades.push(localidad);
                }
                this.blockUI.stop();
            },
            error => {
                this.lsLocalidades = new Array<Localidad>();
                error.json()["Message"];
                this.blockUI.stop();
            });
    }

    test() {
        this.empleado;
    }

    agregarLocalidad() {
        if (this.provincia.id_provincia != null) {
            this.dialogService.agregarLocalidad(this.provincia).subscribe(
                result => {
                    this.provincia_onChanged(this.provincia);
                });
        }
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
                        this.existeSupervisor == true;
                        this.lsEmpleados.push(empleado);
                    }
                }
            },
            error => {

            }
        )
    }

    registrarEmpleado() {
        this.blockUI.start(); // Start blocking
        this.empleadoService.create(this.empleado).subscribe(
            data => {
                this.toastr.success("El empleado se registro correctamente", "Exito!")
                this.blockUI.stop();
            },
            error => {
                this.toastr.error("El empleado no se ha creado, intente nuevamente más tarde", "Error!")
                this.blockUI.stop();
            });
    }

    modificarEmpleado() {
        this.esEditable = true;
    }
}
