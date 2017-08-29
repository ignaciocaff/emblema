"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var index_1 = require("./index");
var Domicilio = (function () {
    function Domicilio(id_domicilio, calle, numeracion, piso, dpto, torre, localidad, codigo_postal) {
        if (id_domicilio)
            this.id_domicilio = id_domicilio;
        else
            this.id_domicilio = null;
        if (calle)
            this.calle = calle;
        else
            this.calle = null;
        if (numeracion)
            this.numeracion = numeracion;
        else
            this.numeracion = null;
        if (piso)
            this.piso = piso;
        else
            this.piso = null;
        if (dpto)
            this.dpto = dpto;
        else
            this.dpto = null;
        if (torre)
            this.torre = torre;
        else
            this.torre = null;
        if (localidad)
            this.localidad = localidad;
        else
            this.localidad = new index_1.Localidad();
        if (codigo_postal)
            this.codigo_postal = codigo_postal;
        else
            this.codigo_postal = null;
    }
    return Domicilio;
}());
exports.Domicilio = Domicilio;
//# sourceMappingURL=domicilio.js.map