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
var material_1 = require("@angular/material");
var core_1 = require("@angular/core");
var ng_block_ui_1 = require("ng-block-ui");
var index_1 = require("../../../entities/index");
var index_2 = require("../../../services/entity-services/index");
var TipoProductoCargaComponent = (function () {
    function TipoProductoCargaComponent(dialogRef, tipoProductoService) {
        this.dialogRef = dialogRef;
        this.tipoProductoService = tipoProductoService;
    }
    TipoProductoCargaComponent.prototype.ngOnInit = function () {
        this.tipoProducto = new index_1.TipoProducto();
    };
    TipoProductoCargaComponent.prototype.registrarTipoProducto = function () {
        var _this = this;
        this.blockUI.start();
        this.tipoProductoService.create(this.tipoProducto).subscribe(function (data) {
            _this.blockUI.stop();
            _this.dialogRef.close(true);
        }, function (error) {
            _this.blockUI.stop();
        });
    };
    return TipoProductoCargaComponent;
}());
__decorate([
    ng_block_ui_1.BlockUI(),
    __metadata("design:type", Object)
], TipoProductoCargaComponent.prototype, "blockUI", void 0);
TipoProductoCargaComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        selector: 'tipoProducto-carga',
        templateUrl: './tipoProducto-carga.component.html',
        providers: [
            index_2.ProvinciaService,
            index_2.TipoProductoService
        ]
    }),
    __metadata("design:paramtypes", [material_1.MdDialogRef,
        index_2.TipoProductoService])
], TipoProductoCargaComponent);
exports.TipoProductoCargaComponent = TipoProductoCargaComponent;
//# sourceMappingURL=tipoProducto-carga.component.js.map