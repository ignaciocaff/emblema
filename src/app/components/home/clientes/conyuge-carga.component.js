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
var ConyugeCargaComponent = (function () {
    function ConyugeCargaComponent(personaService, tipoDocumentoService) {
        this.personaService = personaService;
        this.tipoDocumentoService = tipoDocumentoService;
        this.conyuge = new index_1.Persona();
        this.lsTiposDocumento = new Array();
        this.cargarTiposDocumento();
    }
    ConyugeCargaComponent.prototype.consultarDatosConyuge = function () {
        var _this = this;
        if (this.conyuge.nro_documento) {
            var nroDoc_1 = this.conyuge.nro_documento;
            this.blockUI.start("Consultando personas...");
            this.personaService.getByDoc(this.conyuge.nro_documento).subscribe(function (data) {
                if (data[0]) {
                    _this.conyuge = data[0];
                    _this.conyuge.tipoDocumento = data[0]["tipoDocumento"];
                    _this.conyuge.estadoCivil = data[0]["estadoCivil"];
                    _this.conyuge.domicilio = data[0]["domicilio"];
                    _this.conyuge.domicilio.localidad.provincia = data[0]["domicilio"]["localidad"]["provincia"];
                    _this.existeConyuge = true;
                }
                _this.blockUI.stop();
            }, function (error) {
                _this.conyuge = new index_1.Persona();
                _this.existeConyuge = false;
                _this.conyuge.nro_documento = nroDoc_1;
                _this.blockUI.stop();
            });
        }
        else {
            this.conyuge = new index_1.Persona();
            this.existeConyuge = false;
        }
    };
    //METODOS-----------------------------------------------------------------------
    ConyugeCargaComponent.prototype.cargarTiposDocumento = function () {
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
    ConyugeCargaComponent.prototype.test = function () {
        this.conyuge;
    };
    return ConyugeCargaComponent;
}());
__decorate([
    ng_block_ui_1.BlockUI(),
    __metadata("design:type", Object)
], ConyugeCargaComponent.prototype, "blockUI", void 0);
ConyugeCargaComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        selector: 'conyuge-carga',
        templateUrl: './conyuge-carga.component.html',
        providers: [index_2.PersonaService, index_2.TipoDocumentoService]
    }),
    __metadata("design:paramtypes", [index_2.PersonaService,
        index_2.TipoDocumentoService])
], ConyugeCargaComponent);
exports.ConyugeCargaComponent = ConyugeCargaComponent;
//# sourceMappingURL=conyuge-carga.component.js.map