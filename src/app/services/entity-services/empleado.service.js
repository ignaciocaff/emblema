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
var EmpleadoService = (function () {
    function EmpleadoService(http, config) {
        this.http = http;
        this.config = config;
    }
    EmpleadoService.prototype.getAll = function () {
        return this.http.get(this.config.apiUrl + 'clientes', function (response) { return response.json(); });
    };
    EmpleadoService.prototype.getById = function (id) {
        return this.http.get(this.config.apiUrl + 'clientes/' + id, this.jwt()).map(function (response) { return response.json(); });
    };
    EmpleadoService.prototype.getByCargo = function (id_cargo) {
        return this.http.get(this.config.apiUrl + 'personas/empleados/' + id_cargo, function (response) { return response.json(); });
    };
    EmpleadoService.prototype.create = function (obj) {
        return this.http.post(this.config.apiUrl + 'personas/empleado/rempleado', obj);
    };
    EmpleadoService.prototype.update = function (obj) {
        return this.http.put(this.config.apiUrl + 'clientes/' + obj.id, obj, this.jwt());
    };
    EmpleadoService.prototype.delete = function (id) {
        return this.http.delete(this.config.apiUrl + 'clientes/' + id, this.jwt());
    };
    // private helper methods
    EmpleadoService.prototype.jwt = function () {
        var currentUser = JSON.parse(localStorage.getItem('currentUser'));
        if (currentUser && currentUser.token) {
            var headers = new http_1.Headers({ 'Authorization': 'Bearer ' + currentUser.token });
            return new http_1.RequestOptions({ headers: headers });
        }
    };
    return EmpleadoService;
}());
EmpleadoService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [http_1.Http, app_config_1.AppConfig])
], EmpleadoService);
exports.EmpleadoService = EmpleadoService;
//# sourceMappingURL=empleado.service.js.map