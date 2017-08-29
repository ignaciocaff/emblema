export class Color {

    public id_color: number;
    public n_color: string;

    constructor(
        id_color?: number,
        n_color?: string
    ) {
        if (id_color) this.id_color = id_color;
        else this.id_color = null;

        if (n_color) this.n_color = n_color;
        else this.n_color = null;
    }
}