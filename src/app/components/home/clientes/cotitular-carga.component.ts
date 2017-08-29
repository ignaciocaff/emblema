import { Component } from '@angular/core';

import { BlockUI, NgBlockUI } from 'ng-block-ui';

import {
    TipoDocumento,
    Provincia,
    Localidad,
    Persona
} from '../../../entities/index';

import {
    TipoDocumentoService,
    ProvinciaService,
    LocalidadService,
    PersonaService
} from '../../../services/entity-services/index';

@Component({
    moduleId: module.id,
    selector: 'cotitular-carga',
    templateUrl: './cotitular-carga.component.html',
    providers: [TipoDocumentoService, ProvinciaService, LocalidadService, PersonaService]
})
export class CotitularCargaComponent {
    @BlockUI() blockUI: NgBlockUI;

    public cotitular: Persona = new Persona();
    public provincia: Provincia;
    public existeCotitular: boolean;

    public lsTiposDocumento = new Array<TipoDocumento>();
    public lsProvincias = new Array<Provincia>();
    public lsLocalidades = new Array<Localidad>();

    constructor(
        private tipoDocumentoService: TipoDocumentoService,
        private provinciaServie: ProvinciaService,
        private localidadService: LocalidadService,
        private personaService: PersonaService
    ) {
        this.cargarTiposDocumento();
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

    cargarProvincias() {
        this.provinciaServie.getAll().subscribe(
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

    consultarDatosCotitular() {
        if (this.cotitular.nro_documento) {

            let nroDoc = this.cotitular.nro_documento;

            this.blockUI.start("Consultando personas...");
            this.personaService.getByDoc(this.cotitular.nro_documento).subscribe(
                data => {
                    if (data[0]) {
                        this.cotitular = data[0];
                        this.cotitular.tipoDocumento = data[0]["tipoDocumento"];
                        this.cotitular.estadoCivil = data[0]["estadoCivil"];
                        this.cotitular.domicilio = data[0]["domicilio"];
                        this.cotitular.domicilio.localidad.provincia = data[0]["domicilio"]["localidad"]["provincia"];
                        this.existeCotitular = true;
                    }
                    this.blockUI.stop();
                },
                error => {
                    this.cotitular = new Persona();
                    this.cotitular.nro_documento = nroDoc;
                    this.existeCotitular = false;
                    this.blockUI.stop();
                });
        } else {
            this.cotitular = new Persona();
            this.existeCotitular = false;
        }
    }

    //EVENTOS-----------------------------------------------------------------------
    provincia_onChanged(provincia: Provincia) {
        this.blockUI.start();
        this.localidadService.getByProvincia(provincia.id_provincia).subscribe(
            data => {
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
        this.cotitular = new Persona();
        this.provincia = new Provincia();
        this.existeCotitular = false;
    }

test() {
    this.cotitular;
}
}
