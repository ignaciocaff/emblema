import {
    Component,
    EventEmitter,
    Input,
    Output
} from '@angular/core';

import {
    Domicilio,
    Provincia,
    Localidad
} from '../../../entities/index';

import {
    ProvinciaService,
    LocalidadService
} from '../../../services/entity-services/index';

@Component({
    moduleId: module.id,
    selector: 'domicilio',
    templateUrl: './domicilio.component.html',
    providers: [ProvinciaService, LocalidadService]
})
export class DomicilioComponent {
    @Output() getData = new EventEmitter();

    public domicilio: Domicilio;
    public provincia: Provincia;

    public lsProvincias = new Array<Provincia>();
    public lsLocalidades = new Array<Localidad>();

    constructor(
        private provinciaService: ProvinciaService,
        private localidadService: LocalidadService
    ) {
        this.domicilio = new Domicilio();
        this.cargarProvincias();
    }

    //METODOS-----------------------------------------------------------------------
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

    //EVENTOS-----------------------------------------------------------------------
    provincia_onChanged(provincia: Provincia) {
        this.localidadService.getByProvincia(provincia.id_provincia).subscribe(
            data => {
                for (var i = 0; i < data.json().length; i++) {
                    let localidad = new Localidad(
                        data.json()[i]["id_localidad"],
                        data.json()[i]["n_localidad"]
                    );
                    this.lsLocalidades.push(localidad);
                }
            },
            error => {
                this.lsLocalidades = new Array<Localidad>();
                error.json()["Message"];
            });
    }

    getDomicilio() {
        this.getData.emit(this.domicilio);
    }

    test() {
        this.getData.emit(this.domicilio);
        this.domicilio;
    }
}
