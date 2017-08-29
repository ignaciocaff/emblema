"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var index_1 = require("./personas/index");
var index_2 = require("./productos/index");
var index_3 = require("./marcas/index");
var index_4 = require("./modelos/index");
var CommonModule = (function () {
    function CommonModule() {
    }
    return CommonModule;
}());
CommonModule = __decorate([
    core_1.NgModule({
        imports: [],
        declarations: [
            index_1.PersonasCargaComponent,
            index_2.ProductosCargaComponent,
            index_3.MarcasCargaComponent,
            index_4.ModelosCargaComponent
        ],
        providers: [],
        exports: [
            index_1.PersonasCargaComponent,
            index_2.ProductosCargaComponent,
            index_3.MarcasCargaComponent,
            index_4.ModelosCargaComponent
        ]
    })
], CommonModule);
exports.CommonModule = CommonModule;
//# sourceMappingURL=common.module.js.map