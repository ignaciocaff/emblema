"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var EstadoCivil = (function () {
    function EstadoCivil(id_estado_civil, n_estado_civil) {
        if (id_estado_civil)
            this.id_estado_civil = id_estado_civil;
        else
            this.id_estado_civil = null;
        if (n_estado_civil)
            this.n_estado_civil = n_estado_civil;
        else
            this.n_estado_civil = null;
    }
    return EstadoCivil;
}());
exports.EstadoCivil = EstadoCivil;
//# sourceMappingURL=estadoCivil.js.map