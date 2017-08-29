"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var index_1 = require("./index");
var SubTipoEmpleo = (function () {
    function SubTipoEmpleo(id_subtipo_empleo, n_subtipo_empleo, tipoEmpleo) {
        if (id_subtipo_empleo)
            this.id_subtipo_empleo = id_subtipo_empleo;
        else
            this.id_subtipo_empleo = null;
        if (n_subtipo_empleo)
            this.n_subtipo_empleo = n_subtipo_empleo;
        else
            this.n_subtipo_empleo = null;
        if (tipoEmpleo)
            this.tipoEmpleo = tipoEmpleo;
        else
            this.tipoEmpleo = new index_1.TipoEmpleo();
    }
    return SubTipoEmpleo;
}());
exports.SubTipoEmpleo = SubTipoEmpleo;
//# sourceMappingURL=subTipoEmpleo.js.map