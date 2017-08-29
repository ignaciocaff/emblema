export class TipoProducto {

    public id_tipo_producto: number;
    public n_tipo_producto: string;

    constructor(
        id_tipo_producto?: number,
        n_tipo_producto?: string
    ) {
        if (id_tipo_producto) this.id_tipo_producto = id_tipo_producto;
        else this.id_tipo_producto = null;

        if (n_tipo_producto) this.n_tipo_producto = n_tipo_producto;
        else this.n_tipo_producto = null;
    }
}