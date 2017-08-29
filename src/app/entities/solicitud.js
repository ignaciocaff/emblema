"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var index_1 = require("./index");
var Solicitud = (function () {
    function Solicitud(id_solicitud, estado, cliente, producto, senia, monto_mensual, vendedor, usuarioAlta) {
        /* if (id_cargo) this.id_cargo = id_cargo;
        else this.id_cargo = null;

        if (n_cargo) this.n_cargo = n_cargo;
        else this.n_cargo = null;*/
        //this.numero 
        this.estado = new index_1.EstadoSolicitud();
        this.cliente = new index_1.Cliente();
        this.producto = new index_1.Producto();
        this.vendedor = new index_1.Empleado();
        this.usuarioAlta = new index_1.Usuario();
    }
    return Solicitud;
}());
exports.Solicitud = Solicitud;
//# sourceMappingURL=solicitud.js.map