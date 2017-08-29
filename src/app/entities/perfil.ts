export class Perfil {

    public id_perfil: number;
    public n_perfil: string;

    constructor(
        id_perfil?: number,
        n_perfil?: string
    ) {
        if (id_perfil) this.id_perfil = id_perfil;
        else this.id_perfil = null;

        if (n_perfil) this.n_perfil = n_perfil;
        else this.n_perfil = null;
    }
}