import { Component } from '@angular/core';

import { BlockUI, NgBlockUI } from 'ng-block-ui';

import {
    Persona,
    TipoDocumento,
} from '../../../entities/index';

import {
    PersonaService,
    TipoDocumentoService
} from '../../../services/entity-services/index';

@Component({
    moduleId: module.id,
    selector: 'conyuge-carga',
    templateUrl: './conyuge-carga.component.html',
    providers: [PersonaService, TipoDocumentoService]
})
export class ConyugeCargaComponent {
    @BlockUI() blockUI: NgBlockUI;

    public conyuge: Persona = new Persona();
    public tipoDocumento: TipoDocumento;
    public existeConyuge: boolean;

    public lsTiposDocumento = new Array<TipoDocumento>();

    constructor(
        private personaService: PersonaService,
        private tipoDocumentoService: TipoDocumentoService
    ) {

        this.cargarTiposDocumento();
    }

    consultarDatosConyuge() {
        if (this.conyuge.nro_documento) {
            let nroDoc = this.conyuge.nro_documento;

            this.blockUI.start("Consultando personas...")
            this.personaService.getByDoc(this.conyuge.nro_documento).subscribe(
                data => {
                    if (data[0]) {
                        this.conyuge = data[0];
                        this.conyuge.tipoDocumento = data[0]["tipoDocumento"];
                        this.conyuge.estadoCivil = data[0]["estadoCivil"];
                        this.conyuge.domicilio = data[0]["domicilio"];
                        this.conyuge.domicilio.localidad.provincia = data[0]["domicilio"]["localidad"]["provincia"];
                        this.existeConyuge = true;
                    }
                    this.blockUI.stop();
                },
                error => {
                    this.conyuge = new Persona();
                    this.existeConyuge = false;
                    this.conyuge.nro_documento = nroDoc;
                    this.blockUI.stop();
                });
        }
        else {
            this.conyuge = new Persona();
            this.existeConyuge = false;
        }
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

    limpiar() {
        this.conyuge = new Persona();
        this.tipoDocumento = new TipoDocumento();
        this.existeConyuge = false;
    }

    test() {
        this.conyuge;
    }
}
