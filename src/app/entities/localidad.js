"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var index_1 = require("./index");
var Localidad = (function () {
    function Localidad(id_localidad, n_localidad, provincia) {
        if (id_localidad)
            this.id_localidad = id_localidad;
        else
            this.id_localidad = null;
        if (n_localidad)
            this.n_localidad = n_localidad;
        else
            this.n_localidad = null;
        if (provincia)
            this.provincia = provincia;
        else
            this.provincia = new index_1.Provincia();
    }
    return Localidad;
}());
exports.Localidad = Localidad;
//# sourceMappingURL=localidad.js.map