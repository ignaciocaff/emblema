import {
    Segmento,
    Modelo,
    Color,
    Combustible,
} from './index';

export class Producto {

    public id_producto: number;
    public segmento: Segmento;
    public modelo: Modelo;
    public color: Color;
    public combustible: Combustible;
    public precio: number;
    public anio: number;
    public dominio: string;

    constructor(
        id_producto?: number,
        segmento?: Segmento,
        modelo?: Modelo,
        color?: Color,
        combustible?: Combustible,
        precio?: number,
        anio?: number,
        dominio?: string
    ) {
        if (id_producto) this.id_producto = id_producto;
        else this.id_producto = null;

        if (segmento) this.segmento = segmento;
        else this.segmento = new Segmento();

        if (modelo) this.modelo = modelo;
        else this.modelo = new Modelo();

        if (color) this.color = color;
        else this.color = new Color();

        if (combustible) this.combustible = combustible;
        else this.combustible = new Combustible();
        
        if (precio) this.precio = precio;
        else this.precio = null;

        if (anio) this.anio = anio;
        else this.anio = null;

        if (dominio) this.dominio = dominio;
        else this.dominio = null;
    }
}