"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var index_1 = require("../../../entities/index");
var index_2 = require("../../../services/entity-services/index");
var forms_1 = require("@angular/forms");
var SeniaCargaComponent = (function () {
    function SeniaCargaComponent(empleadoService, personaService) {
        this.empleadoService = empleadoService;
        this.personaService = personaService;
        this.lsEmpleados = new Array();
        this.vendedor = new index_1.Empleado();
        this.persona = new index_1.Persona();
        this.getVendedores();
    }
    SeniaCargaComponent.prototype.getVendedores = function () {
        var _this = this;
        this.empleadoService.getByCargo(2).subscribe(function (data) {
            var _loop_1 = function () {
                var empleado = new index_1.Empleado();
                empleado.id_empleado = data.json()[i]["id_empleado"];
                _this.personaService.getById(data.json()[i]["id_persona"]).subscribe(function (data2) {
                    for (var i = 0; i < data2.json().length; i++) {
                        empleado.nombre = data2.json()[i]["nombre"];
                        empleado.apellido = data2.json()[i]["apellido"];
                    }
                    _this.lsEmpleados.push(empleado);
                }, function (error) {
                });
            };
            for (var i = 0; i < data.json().length; i++) {
                _loop_1();
            }
        }, function (error) {
        });
    };
    return SeniaCargaComponent;
}());
__decorate([
    core_1.ViewChild('seniaForm'),
    __metadata("design:type", forms_1.FormGroup)
], SeniaCargaComponent.prototype, "seniaForm", void 0);
SeniaCargaComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        selector: 'sena-carga',
        templateUrl: './senia-carga.component.html',
        providers: [index_2.EmpleadoService, index_2.PersonaService]
    }),
    __metadata("design:paramtypes", [index_2.EmpleadoService, index_2.PersonaService])
], SeniaCargaComponent);
exports.SeniaCargaComponent = SeniaCargaComponent;
//# sourceMappingURL=senia-carga.component.js.map