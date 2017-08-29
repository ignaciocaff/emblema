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
require("rxjs/add/operator/map");
var app_config_1 = require("../app.config");
var ModelService = (function () {
    function ModelService(http, config) {
        this.http = http;
        this.config = config;
    }
    ModelService.prototype.getMarcas = function () {
        return this.http.get(this.config.apiUrl + '/api/marcas/getMarcas')
            .map(function (response) {
            var lsMarcas = response.json();
            if (lsMarcas) {
                localStorage.setItem('lsMarcas', JSON.stringify(lsMarcas));
            }
        });
    };
    ModelService.prototype.getTiposDocumento = function () {
        return this.http.get(this.config.apiUrl + '/api/tiposDocumento/getTiposDocumento')
            .map(function (response) {
            var lsTiposDocumento = response.json();
            if (lsTiposDocumento) {
                localStorage.setItem('lsTiposDocumento', JSON.stringify(lsTiposDocumento));
            }
        });
    };
    ModelService.prototype.getProductos = function () {
        return this.http.get(this.config.apiUrl + '/api/productos/getProductos')
            .map(function (response) {
            var lsProductos = response.json();
            if (lsProductos) {
                localStorage.setItem('lsProductos', JSON.stringify(lsProductos));
            }
        });
    };
    ModelService.prototype.getTiposProducto = function () {
        return this.http.get(this.config.apiUrl + '/api/tiposProducto/getTiposProducto')
            .map(function (response) {
            var lsTiposProducto = response.json();
            if (lsTiposProducto) {
                localStorage.setItem('lsTiposProducto', JSON.stringify(lsTiposProducto));
            }
        });
    };
    ModelService.prototype.getEstadosCivil = function () {
        return this.http.get(this.config.apiUrl + '/api/estadosCivil/getEstadosCivil')
            .map(function (response) {
            var lsEstadosCivil = response.json();
            if (lsEstadosCivil) {
                localStorage.setItem('lsEstadosCivil', JSON.stringify(lsEstadosCivil));
            }
        });
    };
    ModelService.prototype.getProvincias = function () {
        return this.http.get(this.config.apiUrl + '/api/provincias/getProvincias')
            .map(function (response) {
            var lsProvincias = response.json();
            if (lsProvincias) {
                localStorage.setItem('lsProvincias', JSON.stringify(lsProvincias));
            }
        });
    };
    ModelService.prototype.getLocalidades = function () {
        return this.http.get(this.config.apiUrl + '/api/localidades/getLocalidades')
            .map(function (response) {
            var lsLocalidades = response.json();
            if (lsLocalidades) {
                localStorage.setItem('lsLocalidades', JSON.stringify(lsLocalidades));
            }
        });
    };
    ModelService.prototype.getVendedores = function () {
        return this.http.get(this.config.apiUrl + '/api/localidades/getVendedores')
            .map(function (response) {
            var lsVendedores = response.json();
            if (lsVendedores) {
                localStorage.setItem('lsVendedores', JSON.stringify(lsVendedores));
            }
        });
    };
    return ModelService;
}());
ModelService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [http_1.Http, app_config_1.AppConfig])
], ModelService);
exports.ModelService = ModelService;
//# sourceMappingURL=model.service.js.map