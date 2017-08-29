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
var index_1 = require("../../components/common/dialog/index");
var index_2 = require("../../components/common/localidades/index");
var index_3 = require("../../components/common/tipoProducto/index");
var index_4 = require("../../components/common/marcas/index");
var index_5 = require("../../components/common/modelos/index");
var index_6 = require("../../components/common/segmentos/index");
var index_7 = require("../../components/common/colores/index");
var index_8 = require("../../components/common/combustibles/index");
var material_1 = require("@angular/material");
var core_1 = require("@angular/core");
var DialogService = (function () {
    function DialogService(dialog) {
        this.dialog = dialog;
    }
    DialogService.prototype.confirm = function (title, message) {
        var confirmDialogRef;
        confirmDialogRef = this.dialog.open(index_1.ConfirmDialogComponent);
        confirmDialogRef.componentInstance.title = title;
        confirmDialogRef.componentInstance.message = message;
        return confirmDialogRef.afterClosed();
    };
    DialogService.prototype.agregarLocalidad = function (provincia) {
        var localidadesCargaRef;
        localidadesCargaRef = this.dialog.open(index_2.LocalidadesCargaComponent, {
            width: '50%',
            data: provincia
        });
        return localidadesCargaRef.afterClosed();
    };
    DialogService.prototype.agregarTipoProducto = function () {
        var tipoProductoCargaRef;
        tipoProductoCargaRef = this.dialog.open(index_3.TipoProductoCargaComponent, {
            width: '50%'
        });
        return tipoProductoCargaRef.afterClosed();
    };
    DialogService.prototype.agregarSegmento = function (tipoProducto) {
        var segmentosCargaRef;
        segmentosCargaRef = this.dialog.open(index_6.SegmentosCargaComponent, {
            width: '50%',
            data: tipoProducto
        });
        return segmentosCargaRef.afterClosed();
    };
    DialogService.prototype.agregarMarca = function () {
        var marcaCargaRef;
        marcaCargaRef = this.dialog.open(index_4.MarcasCargaComponent, {
            width: '50%'
        });
        return marcaCargaRef.afterClosed();
    };
    DialogService.prototype.agregarModelo = function (marca) {
        var modeloCargaRef;
        modeloCargaRef = this.dialog.open(index_5.ModelosCargaComponent, {
            width: '50%',
            data: marca
        });
        return modeloCargaRef.afterClosed();
    };
    DialogService.prototype.agregarCombustible = function () {
        var combustibleCargaRef;
        combustibleCargaRef = this.dialog.open(index_8.CombustiblesCargaComponent, {
            width: '50%'
        });
        return combustibleCargaRef.afterClosed();
    };
    DialogService.prototype.agregarColor = function () {
        var colorCargaRef;
        colorCargaRef = this.dialog.open(index_7.ColoresCargaComponent, {
            width: '50%'
        });
        return colorCargaRef.afterClosed();
    };
    return DialogService;
}());
DialogService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [material_1.MdDialog])
], DialogService);
exports.DialogService = DialogService;
//# sourceMappingURL=dialog.service.js.map