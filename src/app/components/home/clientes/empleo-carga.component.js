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
var ng_block_ui_1 = require("ng-block-ui");
var forms_1 = require("@angular/forms");
var index_1 = require("../../../entities/index");
var index_2 = require("../../../services/entity-services/index");
var EmpleoCargaComponent = (function () {
    function EmpleoCargaComponent(tipoEmpleoService, subTipoEmpleoServie, ramoService) {
        this.tipoEmpleoService = tipoEmpleoService;
        this.subTipoEmpleoServie = subTipoEmpleoServie;
        this.ramoService = ramoService;
        this.lsTiposEmpleo = new Array();
        this.lsSubTiposEmpleo = new Array();
        this.lsRamos = new Array();
        this.empleo = new index_1.Empleo();
        this.cargarTiposEmpleo();
        this.cargarRamos();
    }
    EmpleoCargaComponent.prototype.cargarTiposEmpleo = function () {
        var _this = this;
        this.tipoEmpleoService.getAll().subscribe(function (data) {
            for (var i = 0; i < data.json().length; i++) {
                var tipoEmpleo = new index_1.TipoEmpleo(data.json()[i]["id_tipo_empleo"], data.json()[i]["n_tipo_empleo"]);
                _this.lsTiposEmpleo.push(tipoEmpleo);
            }
        }, function (error) {
            _this.lsTiposEmpleo = new Array();
            error.json()["Message"];
        });
    };
    EmpleoCargaComponent.prototype.tipoEmpleo_onChange = function (tipoEmpleo) {
        var _this = this;
        this.blockUI.start();
        this.lsSubTiposEmpleo = new Array();
        this.empleo.subTipoEmpleo = new index_1.SubTipoEmpleo();
        this.subTipoEmpleoServie.getByTipo(tipoEmpleo.id_tipo_empleo).subscribe(function (data) {
            for (var i = 0; i < data.json().length; i++) {
                var subTipoEmpleo = new index_1.SubTipoEmpleo(data.json()[i]["id_subtipo_empleo"], data.json()[i]["n_subtipo_empleo"]);
                _this.lsSubTiposEmpleo.push(subTipoEmpleo);
            }
            _this.blockUI.stop();
        }, function (error) {
            _this.lsSubTiposEmpleo = new Array();
            error.json()["Message"];
            _this.blockUI.stop();
        });
    };
    EmpleoCargaComponent.prototype.subTipoEmpleo_onChange = function (subTipoEmpleo) {
    };
    EmpleoCargaComponent.prototype.cargarRamos = function () {
        var _this = this;
        this.ramoService.getAll().subscribe(function (data) {
            for (var i = 0; i < data.json().length; i++) {
                var ramo = new index_1.Ramo(data.json()[i]["id_ramo"], data.json()[i]["n_ramo"]);
                _this.lsRamos.push(ramo);
            }
        }, function (error) {
            _this.lsRamos = new Array();
            error.json()["Message"];
        });
    };
    EmpleoCargaComponent.prototype.test = function () {
        this.empleo;
    };
    return EmpleoCargaComponent;
}());
__decorate([
    ng_block_ui_1.BlockUI(),
    __metadata("design:type", Object)
], EmpleoCargaComponent.prototype, "blockUI", void 0);
__decorate([
    core_1.ViewChild('empleoForm'),
    __metadata("design:type", forms_1.FormGroup)
], EmpleoCargaComponent.prototype, "empleoForm", void 0);
EmpleoCargaComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        selector: 'empleo-carga',
        templateUrl: './empleo-carga.component.html',
        providers: [index_2.TipoEmpleoService, index_2.SubTipoEmpleoService, index_2.RamoService]
    }),
    __metadata("design:paramtypes", [index_2.TipoEmpleoService,
        index_2.SubTipoEmpleoService,
        index_2.RamoService])
], EmpleoCargaComponent);
exports.EmpleoCargaComponent = EmpleoCargaComponent;
//# sourceMappingURL=empleo-carga.component.js.map