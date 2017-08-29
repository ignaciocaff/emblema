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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
var material_1 = require("@angular/material");
var core_1 = require("@angular/core");
var ng_block_ui_1 = require("ng-block-ui");
var index_1 = require("../../../entities/index");
var index_2 = require("../../../services/entity-services/index");
var LocalidadesCargaComponent = (function () {
    function LocalidadesCargaComponent(dialogRef, provinciaService, localidadService, data) {
        this.dialogRef = dialogRef;
        this.provinciaService = provinciaService;
        this.localidadService = localidadService;
        this.data = data;
        this.lsProvincias = new Array();
    }
    LocalidadesCargaComponent.prototype.ngOnInit = function () {
        this.localidad = new index_1.Localidad();
        this.localidad.provincia = this.data;
    };
    LocalidadesCargaComponent.prototype.registrarLocalidad = function () {
        var _this = this;
        this.blockUI.start();
        this.localidadService.create(this.localidad).subscribe(function (data) {
            _this.blockUI.stop();
            _this.dialogRef.close(true);
        }, function (error) {
            _this.blockUI.stop();
        });
    };
    return LocalidadesCargaComponent;
}());
__decorate([
    ng_block_ui_1.BlockUI(),
    __metadata("design:type", Object)
], LocalidadesCargaComponent.prototype, "blockUI", void 0);
LocalidadesCargaComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        selector: 'localidades-carga',
        templateUrl: './localidades-carga.component.html',
        providers: [
            index_2.ProvinciaService,
            index_2.LocalidadService
        ]
    }),
    __param(3, core_1.Inject(material_1.MD_DIALOG_DATA)),
    __metadata("design:paramtypes", [material_1.MdDialogRef,
        index_2.ProvinciaService,
        index_2.LocalidadService,
        index_1.Provincia])
], LocalidadesCargaComponent);
exports.LocalidadesCargaComponent = LocalidadesCargaComponent;
//# sourceMappingURL=localidades-carga.component.js.map