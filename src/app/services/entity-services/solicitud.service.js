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
var SolicitudService = (function () {
    function SolicitudService(http, config) {
        this.http = http;
        this.config = config;
        //Definimos los Subjects para cada objeto de la solicitud
        this.producto = new Subject_1.Subject();
        this.producto$ = this.producto.asObservable();
        this.solicitud = new Subject_1.Subject();
        this.solicitud$ = this.solicitud.asObservable();
    }
    //Comando de servicio de mensajes
    SolicitudService.prototype.setProducto = function (producto) {
        this.producto.next(producto);
    };
    SolicitudService.prototype.getAll = function () {
        return this.http.get(this.config.apiUrl + 'users', function (response) { return response.json(); });
    };
    SolicitudService.prototype.getById = function (id) {
        return this.http.get(this.config.apiUrl + 'users/' + id, this.jwt()).map(function (response) { return response.json(); });
    };
    SolicitudService.prototype.getByCliente = function (nroDocumentoCliente) {
        return this.http.get(this.config.apiUrl + 'solicitudes/clientes/' + nroDocumentoCliente).map(function (response) { return response.json(); });
    };
    SolicitudService.prototype.create = function (obj) {
        return this.http.post(this.config.apiUrl + 'solicitudes/rsolicitud', obj);
    };
    SolicitudService.prototype.update = function (obj) {
        return this.http.put(this.config.apiUrl + 'users/' + obj.id, obj, this.jwt());
    };
    SolicitudService.prototype.delete = function (id) {
        return this.http.delete(this.config.apiUrl + 'users/' + id, this.jwt());
    };
    SolicitudService.prototype.getInstance = function (solicitud) {
        this.solicitud.next(solicitud);
    };
    // private helper methods
    SolicitudService.prototype.jwt = function () {
        var currentUser = JSON.parse(localStorage.getItem('currentUser'));
        if (currentUser && currentUser.token) {
            var headers = new http_1.Headers({ 'Authorization': 'Bearer ' + currentUser.token });
            return new http_1.RequestOptions({ headers: headers });
        }
    };
    return SolicitudService;
}());
SolicitudService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [http_1.Http,
        app_config_1.AppConfig])
], SolicitudService);
exports.SolicitudService = SolicitudService;
//# sourceMappingURL=solicitud.service.js.map