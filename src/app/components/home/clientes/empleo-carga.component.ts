import { Component, ViewChild } from '@angular/core';

import { BlockUI, NgBlockUI } from 'ng-block-ui';
import { FormGroup } from '@angular/forms';
import {
    Empleo,
    TipoEmpleo,
    SubTipoEmpleo,
    Ramo
} from '../../../entities/index';

import {
    TipoEmpleoService,
    SubTipoEmpleoService,
    RamoService
} from '../../../services/entity-services/index';

@Component({
    moduleId: module.id,
    selector: 'empleo-carga',
    templateUrl: './empleo-carga.component.html',
    providers: [TipoEmpleoService, SubTipoEmpleoService, RamoService]
})
export class EmpleoCargaComponent {
    @BlockUI() blockUI: NgBlockUI;
    @ViewChild('empleoForm') empleoForm: FormGroup;
    
    public empleo: Empleo;

    public lsTiposEmpleo = new Array<TipoEmpleo>();
    public lsSubTiposEmpleo = new Array<SubTipoEmpleo>();
    public lsRamos = new Array<Ramo>();

    constructor(
        private tipoEmpleoService: TipoEmpleoService,
        private subTipoEmpleoServie: SubTipoEmpleoService,
        private ramoService: RamoService
    ) {
        this.empleo = new Empleo();

        this.cargarTiposEmpleo();
        this.cargarRamos();
    }

    cargarTiposEmpleo() {
        this.tipoEmpleoService.getAll().subscribe(
            data => {
                for (var i = 0; i < data.json().length; i++) {
                    let tipoEmpleo = new TipoEmpleo(
                        data.json()[i]["id_tipo_empleo"],
                        data.json()[i]["n_tipo_empleo"]
                    );
                    this.lsTiposEmpleo.push(tipoEmpleo);
                }
            },
            error => {
                this.lsTiposEmpleo = new Array<TipoEmpleo>();
                error.json()["Message"];
            });
    }

    tipoEmpleo_onChange(tipoEmpleo: TipoEmpleo) {
        this.blockUI.start();
        this.lsSubTiposEmpleo = new Array<SubTipoEmpleo>();
        this.empleo.subTipoEmpleo = new SubTipoEmpleo();
        this.subTipoEmpleoServie.getByTipo(tipoEmpleo.id_tipo_empleo).subscribe(
            data => {
                for (var i = 0; i < data.json().length; i++) {
                    let subTipoEmpleo = new SubTipoEmpleo(
                        data.json()[i]["id_subtipo_empleo"],
                        data.json()[i]["n_subtipo_empleo"]
                    );
                    this.lsSubTiposEmpleo.push(subTipoEmpleo);
                }
                this.blockUI.stop();
            },
            error => {
                this.lsSubTiposEmpleo = new Array<SubTipoEmpleo>();
                error.json()["Message"];
                this.blockUI.stop();
            });
    }

    subTipoEmpleo_onChange(subTipoEmpleo: SubTipoEmpleo) {

    }

    cargarRamos() {
        this.ramoService.getAll().subscribe(
            data => {
                for (var i = 0; i < data.json().length; i++) {
                    let ramo = new Ramo(
                        data.json()[i]["id_ramo"],
                        data.json()[i]["n_ramo"]
                    );
                    this.lsRamos.push(ramo);
                }
            },
            error => {
                this.lsRamos = new Array<Ramo>();
                error.json()["Message"];
            });
    }

    limpiar() {
        this.empleo = new Empleo();
    }

    test() {
        this.empleo;
    }
}
