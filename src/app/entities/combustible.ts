export class Combustible {

    public id_combustible: number;
    public n_combustible: string;

    constructor(
        id_combustible?: number,
        n_combustible?: string
    ) {
        if (id_combustible) this.id_combustible = id_combustible;
        else this.id_combustible = null;

        if (n_combustible) this.n_combustible = n_combustible;
        else this.n_combustible = null;
    }
}