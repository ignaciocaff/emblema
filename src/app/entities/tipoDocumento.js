"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var TipoDocumento = (function () {
    function TipoDocumento(id_tipo_documento, n_tipo_documento) {
        if (id_tipo_documento)
            this.id_tipo_documento = id_tipo_documento;
        else
            this.id_tipo_documento = null;
        if (n_tipo_documento)
            this.n_tipo_documento = n_tipo_documento;
        else
            this.n_tipo_documento = null;
    }
    return TipoDocumento;
}());
exports.TipoDocumento = TipoDocumento;
//# sourceMappingURL=tipoDocumento.js.map