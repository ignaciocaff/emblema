export class Cargo {
    public id_cargo: number;
    public n_cargo: string;

    constructor (
        id_cargo?: number,
        n_cargo?: string
    ) {
        if (id_cargo) this.id_cargo = id_cargo;
        else this.id_cargo = null;

        if (n_cargo) this.n_cargo = n_cargo;
        else this.n_cargo = null;
    }
}