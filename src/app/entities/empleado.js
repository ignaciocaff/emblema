"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var index_1 = require("./index");
var Empleado = (function (_super) {
    __extends(Empleado, _super);
    function Empleado(id_empleado, cargo, supervisor, usuario) {
        var _this = _super.call(this) || this;
        if (id_empleado)
            _this.id_empleado = id_empleado;
        else
            _this.id_empleado = null;
        if (cargo)
            _this.cargo = cargo;
        else
            _this.cargo = new index_1.Cargo();
        if (supervisor)
            _this.supervisor = supervisor;
        else
            _this.supervisor = null;
        if (usuario)
            _this.usuario = usuario;
        else
            _this.usuario = new index_1.Usuario();
        return _this;
    }
    return Empleado;
}(index_1.Persona));
exports.Empleado = Empleado;
//# sourceMappingURL=empleado.js.map