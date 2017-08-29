"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var index_1 = require("./index");
var Producto = (function () {
    function Producto(id_producto, segmento, modelo, color, combustible, precio, anio, dominio) {
        if (id_producto)
            this.id_producto = id_producto;
        else
            this.id_producto = null;
        if (segmento)
            this.segmento = segmento;
        else
            this.segmento = new index_1.Segmento();
        if (modelo)
            this.modelo = modelo;
        else
            this.modelo = new index_1.Modelo();
        if (color)
            this.color = color;
        else
            this.color = new index_1.Color();
        if (combustible)
            this.combustible = combustible;
        else
            this.combustible = new index_1.Combustible();
        if (precio)
            this.precio = precio;
        else
            this.precio = null;
        if (anio)
            this.anio = anio;
        else
            this.anio = null;
        if (dominio)
            this.dominio = dominio;
        else
            this.dominio = null;
    }
    return Producto;
}());
exports.Producto = Producto;
//# sourceMappingURL=producto.js.map