import { TipoProducto } from './index';

export class Segmento {

    public id_segmento: number;
    public n_segmento: string;
    public tipoProducto: TipoProducto;

    constructor(
        id_segmento?: number,
        n_segmento?: string,
        tipoProducto?: TipoProducto
    ) {
        if (id_segmento) this.id_segmento = id_segmento;
        else this.id_segmento = null;

        if (n_segmento) this.n_segmento = n_segmento;
        else this.n_segmento = null;
        
        if (tipoProducto) this.tipoProducto = tipoProducto;
        else this.tipoProducto = new TipoProducto();
    }
}