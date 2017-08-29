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
var index_1 = require("../../entities/index");
var CombustibleService = (function () {
    function CombustibleService(http, config) {
        this.http = http;
        this.config = config;
    }
    CombustibleService.prototype.getAll = function () {
        var lsCombustibles = new Array();
        var err;
        this.http.get(this.config.apiUrl + 'productos/combustible', function (response) { return response.json(); })
            .subscribe(function (data) {
            for (var i = 0; i < data.json().length; i++) {
                var combustible = new index_1.Combustible(data.json()[i]["id_combustible"], data.json()[i]["n_combustible"]);
                lsCombustibles.push(combustible);
            }
        }, function (error) {
            err = error;
        });
        if (lsCombustibles) {
            return lsCombustibles;
        }
        else {
            return err;
        }
    };
    CombustibleService.prototype.getById = function (id) {
        return this.http.get(this.config.apiUrl + 'users/' + id, this.jwt()).map(function (response) { return response.json(); });
    };
    CombustibleService.prototype.create = function (obj) {
        return this.http.post(this.config.apiUrl + 'productos/combustible/rtipocombustible', obj);
    };
    CombustibleService.prototype.update = function (obj) {
        return this.http.put(this.config.apiUrl + 'users/' + obj.id, obj, this.jwt());
    };
    CombustibleService.prototype.delete = function (id) {
        return this.http.delete(this.config.apiUrl + 'users/' + id, this.jwt());
    };
    // private helper methods
    CombustibleService.prototype.jwt = function () {
        var currentUser = JSON.parse(localStorage.getItem('currentUser'));
        if (currentUser && currentUser.token) {
            var headers = new http_1.Headers({ 'Authorization': 'Bearer ' + currentUser.token });
            return new http_1.RequestOptions({ headers: headers });
        }
    };
    return CombustibleService;
}());
CombustibleService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [http_1.Http, app_config_1.AppConfig])
], CombustibleService);
exports.CombustibleService = CombustibleService;
//# sourceMappingURL=combustible.service.js.map