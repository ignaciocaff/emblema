"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var TipoEmpleo = (function () {
    function TipoEmpleo(id_tipo_empleo, n_tipo_empleo) {
        if (id_tipo_empleo)
            this.id_tipo_empleo = id_tipo_empleo;
        else
            this.id_tipo_empleo = null;
        if (n_tipo_empleo)
            this.n_tipo_empleo = n_tipo_empleo;
        else
            this.n_tipo_empleo = null;
    }
    return TipoEmpleo;
}());
exports.TipoEmpleo = TipoEmpleo;
//# sourceMappingURL=tipoEmpleo.js.map