"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var TipoProducto = (function () {
    function TipoProducto(id_tipo_producto, n_tipo_producto) {
        if (id_tipo_producto)
            this.id_tipo_producto = id_tipo_producto;
        else
            this.id_tipo_producto = null;
        if (n_tipo_producto)
            this.n_tipo_producto = n_tipo_producto;
        else
            this.n_tipo_producto = null;
    }
    return TipoProducto;
}());
exports.TipoProducto = TipoProducto;
//# sourceMappingURL=tipoProducto.js.map