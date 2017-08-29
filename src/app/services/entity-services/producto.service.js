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
var Subject_1 = require("rxjs/Subject");
var app_config_1 = require("../../app.config");
var ProductoService = (function () {
    function ProductoService(http, config) {
        this.http = http;
        this.config = config;
        this.producto = new Subject_1.Subject();
        this.producto$ = this.producto.asObservable();
    }
    ProductoService.prototype.getAll = function () {
        return this.http.get(this.config.apiUrl + 'marcamodelo', function (response) { return response.json(); });
    };
    ProductoService.prototype.getById = function (id) {
        return this.http.get(this.config.apiUrl + '' + id, this.jwt()).map(function (response) { return response.json(); });
    };
    /*reate(marca: Marca) {
        //return this.http.post(this.config.apiUrl + '/api/users/register', user);
    }

    update(marca: Marca) {
        //return this.http.put(this.config.apiUrl + '/users/' + user.id, user, this.jwt());
    }*/
    ProductoService.prototype.delete = function (id) {
        //return this.http.delete(this.config.apiUrl + '/users/' + id, this.jwt());
    };
    // private helper methods
    ProductoService.prototype.jwt = function () {
        var currentUser = JSON.parse(localStorage.getItem('currentUser'));
        if (currentUser && currentUser.token) {
            var headers = new http_1.Headers({ 'Authorization': 'Bearer ' + currentUser.token });
            return new http_1.RequestOptions({ headers: headers });
        }
    };
    return ProductoService;
}());
ProductoService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [http_1.Http, app_config_1.AppConfig])
], ProductoService);
exports.ProductoService = ProductoService;
//# sourceMappingURL=producto.service.js.map