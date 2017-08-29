"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var index_1 = require("./index");
var Segmento = (function () {
    function Segmento(id_segmento, n_segmento, tipoProducto) {
        if (id_segmento)
            this.id_segmento = id_segmento;
        else
            this.id_segmento = null;
        if (n_segmento)
            this.n_segmento = n_segmento;
        else
            this.n_segmento = null;
        if (tipoProducto)
            this.tipoProducto = tipoProducto;
        else
            this.tipoProducto = new index_1.TipoProducto();
    }
    return Segmento;
}());
exports.Segmento = Segmento;
//# sourceMappingURL=segmento.js.map