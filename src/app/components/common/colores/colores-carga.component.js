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
var ng2_toastr_1 = require("ng2-toastr/ng2-toastr");
var index_1 = require("../../../entities/index");
var index_2 = require("../../../services/entity-services/index");
var ColoresCargaComponent = (function () {
    function ColoresCargaComponent(dialogRef, colorService, toastr) {
        this.dialogRef = dialogRef;
        this.colorService = colorService;
        this.toastr = toastr;
    }
    ColoresCargaComponent.prototype.ngOnInit = function () {
        this.color = new index_1.Color();
    };
    ColoresCargaComponent.prototype.registrarColor = function () {
        var _this = this;
        this.blockUI.start();
        this.colorService.create(this.color).subscribe(function (data) {
            _this.blockUI.stop();
            _this.dialogRef.close(true);
            _this.toastr.success("El color fue creado correctamente", "Exito!");
        }, function (error) {
            _this.blockUI.stop();
            _this.toastr.error("El nombre de ese color ya existe", "Error!");
        });
    };
    return ColoresCargaComponent;
}());
__decorate([
    ng_block_ui_1.BlockUI(),
    __metadata("design:type", Object)
], ColoresCargaComponent.prototype, "blockUI", void 0);
ColoresCargaComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        selector: 'colores-carga',
        templateUrl: './colores-carga.component.html',
        providers: [
            index_2.ColorService
        ]
    }),
    __metadata("design:paramtypes", [material_1.MdDialogRef,
        index_2.ColorService,
        ng2_toastr_1.ToastsManager])
], ColoresCargaComponent);
exports.ColoresCargaComponent = ColoresCargaComponent;
//# sourceMappingURL=colores-carga.component.js.map