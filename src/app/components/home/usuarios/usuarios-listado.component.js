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
var angular_2_data_table_1 = require("angular-2-data-table");
var data_1 = require("./data");
var UsuariosListadoComponent = (function () {
    function UsuariosListadoComponent() {
        var _this = this;
        this.itemResource = new angular_2_data_table_1.DataTableResource(data_1.default);
        this.items = [];
        this.itemCount = 0;
        this.itemResource.count().then(function (count) { return _this.itemCount = count; });
    }
    UsuariosListadoComponent.prototype.reloadItems = function (params) {
        var _this = this;
        this.itemResource.query(params).then(function (items) { return _this.items = items; });
    };
    // special properties:
    UsuariosListadoComponent.prototype.rowClick = function (rowEvent) {
        console.log('Clicked: ' + rowEvent.row.item.name);
    };
    UsuariosListadoComponent.prototype.rowDoubleClick = function (rowEvent) {
        alert('Double clicked: ' + rowEvent.row.item.name);
    };
    UsuariosListadoComponent.prototype.rowTooltip = function (item) { return item.jobTitle; };
    return UsuariosListadoComponent;
}());
UsuariosListadoComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        selector: 'usuarios-listado',
        providers: [],
        templateUrl: './usuarios-listado.component.html',
        styleUrls: ['usuarios-listado.component.css']
    }),
    __metadata("design:paramtypes", [])
], UsuariosListadoComponent);
exports.UsuariosListadoComponent = UsuariosListadoComponent;
//# sourceMappingURL=usuarios-listado.component.js.map