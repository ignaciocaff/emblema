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
var PersonaService = (function () {
    function PersonaService(http, config) {
        this.http = http;
        this.config = config;
    }
    PersonaService.prototype.getAll = function () {
        return this.http.get(this.config.apiUrl + 'users', function (response) { return response.json(); });
    };
    PersonaService.prototype.getById = function (id) {
        return this.http.get(this.config.apiUrl + 'personas/' + id, function (response) { return response.json(); });
    };
    PersonaService.prototype.getCbyIdPersona = function (id) {
        return this.http.get(this.config.apiUrl + 'personas/clientes/' + id).map(function (response) { return response.json(); });
    };
    PersonaService.prototype.getByDoc = function (nroDoc) {
        return this.http.get(this.config.apiUrl + 'personas/documento/' + nroDoc).map(function (response) { return response.json(); });
    };
    PersonaService.prototype.create = function (obj) {
        return this.http.post(this.config.apiUrl + 'register', obj);
    };
    PersonaService.prototype.update = function (obj) {
        return this.http.put(this.config.apiUrl + 'users/' + obj.id, obj, this.jwt());
    };
    PersonaService.prototype.delete = function (id) {
        return this.http.delete(this.config.apiUrl + 'users/' + id, this.jwt());
    };
    // private helper methods
    PersonaService.prototype.jwt = function () {
        var currentUser = JSON.parse(localStorage.getItem('currentUser'));
        if (currentUser && currentUser.token) {
            var headers = new http_1.Headers({ 'Authorization': 'Bearer ' + currentUser.token });
            return new http_1.RequestOptions({ headers: headers });
        }
    };
    return PersonaService;
}());
PersonaService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [http_1.Http, app_config_1.AppConfig])
], PersonaService);
exports.PersonaService = PersonaService;
//# sourceMappingURL=persona.service.js.map