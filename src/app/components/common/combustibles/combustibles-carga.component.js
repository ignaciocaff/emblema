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
var CombustiblesCargaComponent = (function () {
    function CombustiblesCargaComponent(dialogRef, combustibleService, toastr) {
        this.dialogRef = dialogRef;
        this.combustibleService = combustibleService;
        this.toastr = toastr;
    }
    CombustiblesCargaComponent.prototype.ngOnInit = function () {
        this.combustible = new index_1.Combustible();
    };
    CombustiblesCargaComponent.prototype.registrarCombustible = function () {
        var _this = this;
        this.blockUI.start();
        this.combustibleService.create(this.combustible).subscribe(function (data) {
            _this.blockUI.stop();
            _this.dialogRef.close(true);
            _this.toastr.success("El tipo de combustible fue creado correctamente", "Exito!");
        }, function (error) {
            _this.blockUI.stop();
            _this.toastr.error("El nombre de ese tipo de combustible ya existe", "Error!");
        });
    };
    return CombustiblesCargaComponent;
}());
__decorate([
    ng_block_ui_1.BlockUI(),
    __metadata("design:type", Object)
], CombustiblesCargaComponent.prototype, "blockUI", void 0);
CombustiblesCargaComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        selector: 'combustibles-carga',
        templateUrl: './combustibles-carga.component.html',
        providers: [
            index_2.CombustibleService
        ]
    }),
    __metadata("design:paramtypes", [material_1.MdDialogRef,
        index_2.CombustibleService,
        ng2_toastr_1.ToastsManager])
], CombustiblesCargaComponent);
exports.CombustiblesCargaComponent = CombustiblesCargaComponent;
//# sourceMappingURL=combustibles-carga.component.js.map