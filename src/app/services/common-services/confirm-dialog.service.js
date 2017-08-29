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
var material_1 = require("@angular/material");
var core_1 = require("@angular/core");
var ConfirmDialogService = (function () {
    function ConfirmDialogService(dialog) {
        this.dialog = dialog;
    }
    ConfirmDialogService.prototype.confirm = function (title, message) {
        var confirmDialogRef;
        confirmDialogRef = this.dialog.open(index_1.ConfirmDialogComponent);
        confirmDialogRef.componentInstance.title = title;
        confirmDialogRef.componentInstance.message = message;
        return confirmDialogRef.afterClosed();
    };
    ConfirmDialogService.prototype.addLocalidad = function () {
        var localidadesCargaRef;
        localidadesCargaRef = this.dialog.open(index_1.ConfirmDialogComponent);
        return localidadesCargaRef.afterClosed();
    };
    return ConfirmDialogService;
}());
ConfirmDialogService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [material_1.MdDialog])
], ConfirmDialogService);
exports.ConfirmDialogService = ConfirmDialogService;
//# sourceMappingURL=confirm-dialog.service.js.map