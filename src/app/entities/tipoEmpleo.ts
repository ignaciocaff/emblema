export class TipoEmpleo {
    public id_tipo_empleo: number;
    public n_tipo_empleo: string;

    constructor(
        id_tipo_empleo?: number,
        n_tipo_empleo?: string
    ) {
        if (id_tipo_empleo) this.id_tipo_empleo = id_tipo_empleo;
        else this.id_tipo_empleo = null;

        if (n_tipo_empleo) this.n_tipo_empleo = n_tipo_empleo;
        else this.n_tipo_empleo = null;
    }
}