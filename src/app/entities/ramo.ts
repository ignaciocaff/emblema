export class Ramo {

    public id_ramo: number;
    public n_ramo: string;

    constructor(
        id_ramo?: number,
        n_ramo?: string
    ) {
        if (id_ramo) this.id_ramo = id_ramo;
        else this.id_ramo = null;

        if (n_ramo) this.n_ramo = n_ramo;
        else this.n_ramo = null;
    }
}