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
var ng_block_ui_1 = require("ng-block-ui");
var index_1 = require("../../../entities/index");
var index_2 = require("../../../services/entity-services/index");
var CotitularCargaComponent = (function () {
    function CotitularCargaComponent(tipoDocumentoService, provinciaServie, localidadService, personaService) {
        this.tipoDocumentoService = tipoDocumentoService;
        this.provinciaServie = provinciaServie;
        this.localidadService = localidadService;
        this.personaService = personaService;
        this.cotitular = new index_1.Persona();
        this.lsTiposDocumento = new Array();
        this.lsProvincias = new Array();
        this.lsLocalidades = new Array();
        this.cargarTiposDocumento();
        this.cargarProvincias();
    }
    //METODOS-----------------------------------------------------------------------
    CotitularCargaComponent.prototype.cargarTiposDocumento = function () {
        var _this = this;
        this.tipoDocumentoService.getAll().subscribe(function (data) {
            for (var i = 0; i < data.json().length; i++) {
                var tipoDocumento = new index_1.TipoDocumento(data.json()[i]["id_tipo_documento"], data.json()[i]["n_tipo_documento"]);
                _this.lsTiposDocumento.push(tipoDocumento);
            }
        }, function (error) {
            _this.lsTiposDocumento = new Array();
            error.json()["Message"];
        });
    };
    CotitularCargaComponent.prototype.cargarProvincias = function () {
        var _this = this;
        this.provinciaServie.getAll().subscribe(function (data) {
            for (var i = 0; i < data.json().length; i++) {
                var provincia = new index_1.Provincia(data.json()[i]["id_provincia"], data.json()[i]["n_provincia"]);
                _this.lsProvincias.push(provincia);
            }
        }, function (error) {
            _this.lsProvincias = new Array();
            error.json()["Message"];
        });
    };
    CotitularCargaComponent.prototype.consultarDatosCotitular = function () {
        var _this = this;
        if (this.cotitular.nro_documento) {
            var nroDoc_1 = this.cotitular.nro_documento;
            this.blockUI.start("Consultando personas...");
            this.personaService.getByDoc(this.cotitular.nro_documento).subscribe(function (data) {
                if (data[0]) {
                    _this.cotitular = data[0];
                    _this.cotitular.tipoDocumento = data[0]["tipoDocumento"];
                    _this.cotitular.estadoCivil = data[0]["estadoCivil"];
                    _this.cotitular.domicilio = data[0]["domicilio"];
                    _this.cotitular.domicilio.localidad.provincia = data[0]["domicilio"]["localidad"]["provincia"];
                    _this.existeCotitular = true;
                }
                _this.blockUI.stop();
            }, function (error) {
                _this.cotitular = new index_1.Persona();
                _this.cotitular.nro_documento = nroDoc_1;
                _this.existeCotitular = false;
                _this.blockUI.stop();
            });
        }
        else {
            this.cotitular = new index_1.Persona();
            this.existeCotitular = false;
        }
    };
    //EVENTOS-----------------------------------------------------------------------
    CotitularCargaComponent.prototype.provincia_onChanged = function (provincia) {
        var _this = this;
        this.blockUI.start();
        this.localidadService.getByProvincia(provincia.id_provincia).subscribe(function (data) {
            for (var i = 0; i < data.json().length; i++) {
                var localidad = new index_1.Localidad(data.json()[i]["id_localidad"], data.json()[i]["n_localidad"]);
                _this.lsLocalidades.push(localidad);
            }
            _this.blockUI.stop();
        }, function (error) {
            _this.lsLocalidades = new Array();
            error.json()["Message"];
            _this.blockUI.stop();
        });
    };
    CotitularCargaComponent.prototype.test = function () {
        this.cotitular;
    };
    return CotitularCargaComponent;
}());
__decorate([
    ng_block_ui_1.BlockUI(),
    __metadata("design:type", Object)
], CotitularCargaComponent.prototype, "blockUI", void 0);
CotitularCargaComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        selector: 'cotitular-carga',
        templateUrl: './cotitular-carga.component.html',
        providers: [index_2.TipoDocumentoService, index_2.ProvinciaService, index_2.LocalidadService, index_2.PersonaService]
    }),
    __metadata("design:paramtypes", [index_2.TipoDocumentoService,
        index_2.ProvinciaService,
        index_2.LocalidadService,
        index_2.PersonaService])
], CotitularCargaComponent);
exports.CotitularCargaComponent = CotitularCargaComponent;
//# sourceMappingURL=cotitular-carga.component.js.map