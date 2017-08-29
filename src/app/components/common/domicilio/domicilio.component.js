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
var DomicilioComponent = (function () {
    function DomicilioComponent(provinciaService, localidadService) {
        this.provinciaService = provinciaService;
        this.localidadService = localidadService;
        this.getData = new core_1.EventEmitter();
        this.lsProvincias = new Array();
        this.lsLocalidades = new Array();
        this.domicilio = new index_1.Domicilio();
        this.cargarProvincias();
    }
    //METODOS-----------------------------------------------------------------------
    DomicilioComponent.prototype.cargarProvincias = function () {
        var _this = this;
        this.provinciaService.getAll().subscribe(function (data) {
            for (var i = 0; i < data.json().length; i++) {
                var provincia = new index_1.Provincia(data.json()[i]["id_provincia"], data.json()[i]["n_provincia"]);
                _this.lsProvincias.push(provincia);
            }
        }, function (error) {
            _this.lsProvincias = new Array();
            error.json()["Message"];
        });
    };
    //EVENTOS-----------------------------------------------------------------------
    DomicilioComponent.prototype.provincia_onChanged = function (provincia) {
        var _this = this;
        this.localidadService.getByProvincia(provincia.id_provincia).subscribe(function (data) {
            for (var i = 0; i < data.json().length; i++) {
                var localidad = new index_1.Localidad(data.json()[i]["id_localidad"], data.json()[i]["n_localidad"]);
                _this.lsLocalidades.push(localidad);
            }
        }, function (error) {
            _this.lsLocalidades = new Array();
            error.json()["Message"];
        });
    };
    DomicilioComponent.prototype.getDomicilio = function () {
        this.getData.emit(this.domicilio);
    };
    DomicilioComponent.prototype.test = function () {
        this.getData.emit(this.domicilio);
        this.domicilio;
    };
    return DomicilioComponent;
}());
__decorate([
    core_1.Output(),
    __metadata("design:type", Object)
], DomicilioComponent.prototype, "getData", void 0);
DomicilioComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        selector: 'domicilio',
        templateUrl: './domicilio.component.html',
        providers: [index_2.ProvinciaService, index_2.LocalidadService]
    }),
    __metadata("design:paramtypes", [index_2.ProvinciaService,
        index_2.LocalidadService])
], DomicilioComponent);
exports.DomicilioComponent = DomicilioComponent;
//# sourceMappingURL=domicilio.component.js.map