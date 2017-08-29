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
var ng2_toastr_1 = require("ng2-toastr/ng2-toastr");
var index_1 = require("../../../entities/index");
var index_2 = require("../../../services/entity-services/index");
var ModelosCargaComponent = (function () {
    function ModelosCargaComponent(dialogRef, marcaService, modeloService, toastr, data) {
        this.dialogRef = dialogRef;
        this.marcaService = marcaService;
        this.modeloService = modeloService;
        this.toastr = toastr;
        this.data = data;
    }
    ModelosCargaComponent.prototype.ngOnInit = function () {
        this.modelo = new index_1.Modelo();
        this.modelo.marca = this.data;
    };
    ModelosCargaComponent.prototype.registrarModelo = function () {
        var _this = this;
        this.blockUI.start();
        this.modeloService.create(this.modelo).subscribe(function (data) {
            _this.blockUI.stop();
            _this.dialogRef.close(true);
            _this.toastr.success("El modelo fue creado correctamente", "Exito!");
        }, function (error) {
            _this.blockUI.stop();
            _this.toastr.error("El nombre de modelo para esa marca ya existe", "Error!");
        });
    };
    return ModelosCargaComponent;
}());
__decorate([
    ng_block_ui_1.BlockUI(),
    __metadata("design:type", Object)
], ModelosCargaComponent.prototype, "blockUI", void 0);
ModelosCargaComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        selector: 'modelos-carga',
        templateUrl: './modelos-carga.component.html',
        providers: [
            index_2.MarcaService,
            index_2.ModeloService
        ]
    }),
    __param(4, core_1.Inject(material_1.MD_DIALOG_DATA)),
    __metadata("design:paramtypes", [material_1.MdDialogRef,
        index_2.MarcaService,
        index_2.ModeloService,
        ng2_toastr_1.ToastsManager,
        index_1.Marca])
], ModelosCargaComponent);
exports.ModelosCargaComponent = ModelosCargaComponent;
//# sourceMappingURL=modelos-carga.component.js.map