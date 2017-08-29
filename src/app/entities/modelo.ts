import {
    Marca
} from './index';

export class Modelo {

    public id_modelo: number;
    public n_modelo: string;
    public marca: Marca;

    constructor(
        id_modelo?: number,
        n_modelo?: string,
        marca?: Marca
    ) {
        if (id_modelo) this.id_modelo = id_modelo;
        else this.id_modelo = null;

        if (n_modelo) this.n_modelo = n_modelo;
        else this.n_modelo = null;

        if (marca) this.marca = marca;
        else this.marca = new Marca();
    }
}