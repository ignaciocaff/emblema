import {
    Domicilio,
    Contacto,
    TipoEmpleo,
    SubTipoEmpleo,
    Ramo
} from './index';

export class Empleo {

    //Atributos Comunes
    public id_empleo: number;
    public tipoEmpleo: TipoEmpleo;
    public subTipoEmpleo: SubTipoEmpleo;
    public razon_social: string;
    public ramo: Ramo;
    public domicilio: Domicilio;
    public antiguedad: number;
    public cargo: string;
    public contacto: Contacto;
    public ingreso: number;
    public profesion: string;

    constructor(
        id_empleo?: number,
        tipoEmpleo?: TipoEmpleo,
        subTipoEmpleo?: SubTipoEmpleo,
        razon_social?: string,
        ramo?: Ramo,
        domicilio?: Domicilio,
        contacto?: Contacto,
        antiguedad?: number,
        cargo?: string,
        ingreso?: number,
        profesion?: string
    ) {
        if (id_empleo) this.id_empleo = id_empleo;
        else this.id_empleo = null;

        if (tipoEmpleo) this.tipoEmpleo = tipoEmpleo;
        else this.tipoEmpleo = new TipoEmpleo();

        if (subTipoEmpleo) this.subTipoEmpleo = subTipoEmpleo;
        else this.subTipoEmpleo = new SubTipoEmpleo();

        if (razon_social) this.razon_social = razon_social;
        else this.razon_social = null;

        if (ramo) this.ramo = ramo;
        else this.ramo = new Ramo();

        if (domicilio) this.domicilio = domicilio;
        else this.domicilio = new Domicilio();

        if (contacto) this.contacto = contacto;
        else this.contacto = new Contacto();

        if (antiguedad) this.antiguedad = antiguedad;
        else this.antiguedad = null;

        if (cargo) this.cargo = cargo;
        else this.cargo = null;

        if (ingreso) this.ingreso = ingreso;
        else this.ingreso = null;

        if (profesion) this.profesion = profesion;
        else this.profesion = null;

    }
}