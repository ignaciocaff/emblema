"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var EstadoSolicitud = (function () {
    function EstadoSolicitud(id_estado_solicitud, n_estado_solicitud) {
        if (id_estado_solicitud)
            this.id_estado_solicitud = id_estado_solicitud;
        else
            this.id_estado_solicitud = null;
        if (n_estado_solicitud)
            this.n_estado_solicitud = n_estado_solicitud;
        else
            this.n_estado_solicitud = null;
    }
    return EstadoSolicitud;
}());
exports.EstadoSolicitud = EstadoSolicitud;
//# sourceMappingURL=estadoSolicitud.js.map