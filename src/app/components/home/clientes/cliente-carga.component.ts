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
    Cliente,
    TipoDocumento,
    Nacionalidad,
    EstadoCivil,
    Provincia,
    Localidad
} from '../../../entities/index';

import {
    ClienteService,
    TipoDocumentoService,
    NacionalidadService,
    EstadoCivilService,
    ProvinciaService,
    LocalidadService,
    PersonaService
} from '../../../services/entity-services/index';

@Component({
    moduleId: module.id,
    selector: 'cliente-carga',
    styleUrls: [
        './cliente-carga.component.css'
    ],
    templateUrl: './cliente-carga.component.html',
    providers: [ClienteService,
        TipoDocumentoService,
        NacionalidadService,
        EstadoCivilService,
        ProvinciaService,
        LocalidadService,
        PersonaService,
        DialogService
    ]
})
export class ClienteCargaComponent {
    @BlockUI() blockUI: NgBlockUI;
    @ViewChild('clientForm') clienteForm: FormGroup;

    public existeCliente: Boolean;
    public cliente = new Cliente();
    public tipoDocumento: TipoDocumento;
    public provincia: Provincia;

    public lsProvincias = new Array<Provincia>();
    public lsLocalidades = new Array<Localidad>();
    public lsTiposDocumento = new Array<TipoDocumento>();
    public lsNacionalidades = new Array<Nacionalidad>();
    public lsEstadosCivil = new Array<EstadoCivil>();
    constructor(
        private clienteService: ClienteService,
        private tipoDocumentoService: TipoDocumentoService,
        private nacionalidadService: NacionalidadService,
        private estadoCivilService: EstadoCivilService,
        private provinciaService: ProvinciaService,
        private localidadService: LocalidadService,
        private personaService: PersonaService,
        private dialogService: DialogService,
        public toastr: ToastsManager
    ) {
        this.existeCliente = false;
        this.cargarTiposDocumento();
        this.cargarNacionalidades();
        this.cargarEstadosCivil();
        this.cargarProvincias();

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

    consultarDatosCliente() {
        if (this.cliente.nro_documento) {

            let nroDoc = this.cliente.nro_documento;

            this.blockUI.start("Consultando clientes...");
            this.personaService.getByDoc(this.cliente.nro_documento).subscribe(
                data => {
                    if (data[0]) {
                        this.cliente.id_persona = data[0]["id_persona"];
                        this.cliente.nombre = data[0]["nombre"];
                        this.cliente.apellido = data[0]["apellido"];
                        this.cliente.fecha_nacimiento = data[0]["fecha_nacimiento"];
                        this.cliente.nro_documento = data[0]["nro_documento"];
                        this.cliente.tipoDocumento.id_tipo_documento = data[0]["tipoDocumento"]["id_tipo_documento"];
                        this.cliente.tipoDocumento.n_tipo_documento = data[0]["tipoDocumento"]["n_tipo_documento"];

                        this.cliente.estadoCivil.id_estado_civil = data[0]["estadoCivil"]["id_estado_civil"];
                        this.cliente.estadoCivil.n_estado_civil = data[0]["estadoCivil"]["n_estado_civil"];

                        this.cliente.nacionalidad.id_nacionalidad = data[0]["nacionalidad"]["id_nacionalidad"];
                        this.cliente.nacionalidad.n_nacionalidad = data[0]["nacionalidad"]["n_nacionalidad"];


                        this.cliente.domicilio.calle = data[0]["domicilio"]["calle"];
                        this.cliente.domicilio.codigo_postal = data[0]["domicilio"]["codigo_postal"];
                        this.cliente.domicilio.dpto = data[0]["domicilio"]["dpto"];
                        this.cliente.domicilio.id_domicilio = data[0]["domicilio"]["id_domicilio"];
                        this.cliente.domicilio.numeracion = data[0]["domicilio"]["numeracion"];
                        this.cliente.domicilio.piso = data[0]["domicilio"]["piso"];
                        this.cliente.domicilio.torre = data[0]["domicilio"]["torre"];
                        this.cliente.domicilio.localidad = data[0]["domicilio"]["localidad"];
                        this.cliente.domicilio.localidad.id_localidad = data[0]["domicilio"]["localidad"]["id_localidad"];
                        this.cliente.domicilio.localidad.n_localidad = data[0]["domicilio"]["localidad"]["n_localidad"];
                        this.cliente.domicilio.localidad.provincia = data[0]["domicilio"]["localidad"]["provincia"];
                        this.cliente.domicilio.localidad.provincia.id_provincia = data[0]["domicilio"]["localidad"]["provincia"]["id_provincia"];
                        this.cliente.domicilio.localidad.provincia.n_provincia = data[0]["domicilio"]["localidad"]["provincia"]["n_provincia"];

                        this.cliente.contacto.email = data[0]["contacto"]["email"];
                        this.cliente.contacto.id_contacto = data[0]["contacto"]["id_contacto"];
                        this.cliente.contacto.telefono_fijo = data[0]["contacto"]["telefono_fijo"];
                        this.cliente.contacto.telefono_movil = data[0]["contacto"]["telefono_movil"];

                        this.existeCliente = true;

                    }
                    this.blockUI.stop();
                },
                error => {
                    this.cliente = new Cliente();
                    this.cliente.nro_documento = nroDoc;
                    this.existeCliente = false;
                    this.blockUI.stop();
                });
        } else {
            this.cliente = new Cliente();
            this.existeCliente = false;
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

    limpiar() {
        this.existeCliente = false;
        this.cliente = new Cliente();
        this.tipoDocumento = new TipoDocumento();
        this.provincia = new Provincia();
    }

    test() {
        this.cliente;
    }

    agregarLocalidad() {
        if (this.provincia.id_provincia != null) {
            this.dialogService.agregarLocalidad(this.provincia).subscribe(
                result => {
                    this.provincia_onChanged(this.provincia);
                });
        }
    }
}
