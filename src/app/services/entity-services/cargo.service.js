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
var http_1 = require("@angular/http");
var app_config_1 = require("../../app.config");
var CargoService = (function () {
    function CargoService(http, config) {
        this.http = http;
        this.config = config;
    }
    CargoService.prototype.getAll = function () {
        return this.http.get(this.config.apiUrl + 'personas/cargos', function (response) { return response.json(); });
    };
    CargoService.prototype.getById = function (id) {
        return this.http.get(this.config.apiUrl + '' + id).map(function (response) { return response.json(); });
    };
    CargoService.prototype.create = function (obj) {
        return this.http.post(this.config.apiUrl + '', obj);
    };
    CargoService.prototype.update = function (obj) {
        return this.http.put(this.config.apiUrl + '' + obj.id, obj);
    };
    CargoService.prototype.delete = function (id) {
        return this.http.delete(this.config.apiUrl + '' + id);
    };
    return CargoService;
}());
CargoService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [http_1.Http, app_config_1.AppConfig])
], CargoService);
exports.CargoService = CargoService;
//# sourceMappingURL=cargo.service.js.map