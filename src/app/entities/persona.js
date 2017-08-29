"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var index_1 = require("./index");
var Persona = (function () {
    function Persona(nombre, apellido, fecha_nacimiento, nro_documento, tipoDocumento, estadoCivil, nacionalidad, domicilio, contacto, id_persona) {
        if (id_persona)
            this.id_persona = id_persona;
        else
            this.id_persona = null;
        if (nombre)
            this.nombre = nombre;
        else
            this.nombre = null;
        if (apellido)
            this.apellido = apellido;
        else
            this.apellido = null;
        if (fecha_nacimiento)
            this.fecha_nacimiento = fecha_nacimiento;
        else
            this.fecha_nacimiento = null;
        if (nro_documento)
            this.nro_documento = nro_documento;
        else
            this.nro_documento = null;
        if (tipoDocumento)
            this.tipoDocumento = tipoDocumento;
        else
            this.tipoDocumento = new index_1.TipoDocumento();
        if (estadoCivil)
            this.estadoCivil = estadoCivil;
        else
            this.estadoCivil = new index_1.EstadoCivil();
        ;
        if (nacionalidad)
            this.nacionalidad = nacionalidad;
        else
            this.nacionalidad = new index_1.Nacionalidad();
        if (domicilio)
            this.domicilio = domicilio;
        else
            this.domicilio = new index_1.Domicilio();
        if (contacto)
            this.contacto = contacto;
        else
            this.contacto = new index_1.Contacto();
    }
    return Persona;
}());
exports.Persona = Persona;
//# sourceMappingURL=Persona.js.map