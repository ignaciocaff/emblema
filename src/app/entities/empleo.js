"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var index_1 = require("./index");
var Empleo = (function () {
    function Empleo(id_empleo, tipoEmpleo, subTipoEmpleo, razon_social, ramo, domicilio, contacto, antiguedad, cargo, ingreso, profesion) {
        if (id_empleo)
            this.id_empleo = id_empleo;
        else
            this.id_empleo = null;
        if (tipoEmpleo)
            this.tipoEmpleo = tipoEmpleo;
        else
            this.tipoEmpleo = new index_1.TipoEmpleo();
        if (subTipoEmpleo)
            this.subTipoEmpleo = subTipoEmpleo;
        else
            this.subTipoEmpleo = new index_1.SubTipoEmpleo();
        if (razon_social)
            this.razon_social = razon_social;
        else
            this.razon_social = null;
        if (ramo)
            this.ramo = ramo;
        else
            this.ramo = new index_1.Ramo();
        if (domicilio)
            this.domicilio = domicilio;
        else
            this.domicilio = new index_1.Domicilio();
        if (contacto)
            this.contacto = contacto;
        else
            this.contacto = new index_1.Contacto();
        if (antiguedad)
            this.antiguedad = antiguedad;
        else
            this.antiguedad = null;
        if (cargo)
            this.cargo = cargo;
        else
            this.cargo = null;
        if (ingreso)
            this.ingreso = ingreso;
        else
            this.ingreso = null;
        if (profesion)
            this.profesion = profesion;
        else
            this.profesion = null;
    }
    return Empleo;
}());
exports.Empleo = Empleo;
//# sourceMappingURL=Empleo.js.map