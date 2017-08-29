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
var Persona_1 = require("./Persona");
var Empleo_1 = require("./Empleo");
var Cliente = (function (_super) {
    __extends(Cliente, _super);
    function Cliente(conyuge, coTitular, empleo) {
        var _this = _super.call(this) || this;
        _this.conyuge = new Persona_1.Persona();
        _this.coTitular = new Persona_1.Persona();
        _this.empleo = new Empleo_1.Empleo();
        return _this;
    }
    return Cliente;
}(Persona_1.Persona));
exports.Cliente = Cliente;
//# sourceMappingURL=cliente.js.map