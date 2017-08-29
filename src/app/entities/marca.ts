export class Marca {

    public id_marca: number;
    public n_marca: string;

    constructor(
        id_marca?: number,
        n_marca?: string
    ) {
        if (id_marca) this.id_marca = id_marca;
        else this.id_marca = null;

        if (n_marca) this.n_marca = n_marca;
        else this.n_marca = null;
    }
}