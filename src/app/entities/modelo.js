"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var index_1 = require("./index");
var Modelo = (function () {
    function Modelo(id_modelo, n_modelo, marca) {
        if (id_modelo)
            this.id_modelo = id_modelo;
        else
            this.id_modelo = null;
        if (n_modelo)
            this.n_modelo = n_modelo;
        else
            this.n_modelo = null;
        if (marca)
            this.marca = marca;
        else
            this.marca = new index_1.Marca();
    }
    return Modelo;
}());
exports.Modelo = Modelo;
//# sourceMappingURL=modelo.js.map