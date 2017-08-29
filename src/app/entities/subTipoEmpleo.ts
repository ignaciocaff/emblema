import {
    TipoEmpleo
} from './index';

export class SubTipoEmpleo {

    public id_subtipo_empleo: number;
    public n_subtipo_empleo: string;
    public tipoEmpleo: TipoEmpleo;

    constructor(
        id_subtipo_empleo?: number,
        n_subtipo_empleo?: string,
        tipoEmpleo?: TipoEmpleo
    ) {
        if (id_subtipo_empleo) this.id_subtipo_empleo = id_subtipo_empleo;
        else this.id_subtipo_empleo = null;

        if (n_subtipo_empleo) this.n_subtipo_empleo = n_subtipo_empleo;
        else this.n_subtipo_empleo = null;

        if (tipoEmpleo) this.tipoEmpleo = tipoEmpleo;
        else this.tipoEmpleo = new TipoEmpleo();
    }
}