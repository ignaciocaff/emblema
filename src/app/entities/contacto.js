"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Contacto = (function () {
    function Contacto(id_contacto, telefono_movil, telefono_fijo, email) {
        if (id_contacto)
            this.id_contacto = id_contacto;
        else
            this.id_contacto = null;
        if (telefono_movil)
            this.telefono_movil = telefono_movil;
        else
            this.telefono_movil = null;
        if (telefono_fijo)
            this.telefono_fijo = telefono_fijo;
        else
            this.telefono_fijo = null;
        if (email)
            this.email = email;
        else
            this.email = null;
    }
    return Contacto;
}());
exports.Contacto = Contacto;
//# sourceMappingURL=contacto.js.map