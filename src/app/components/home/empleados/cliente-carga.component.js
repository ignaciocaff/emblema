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
var forms_1 = require("@angular/forms");
var ng_block_ui_1 = require("ng-block-ui");
var index_1 = require("../../../services/common-services/index");
var ng2_toastr_1 = require("ng2-toastr/ng2-toastr");
var index_2 = require("../../../entities/index");
var index_3 = require("../../../services/entity-services/index");
var ClienteCargaComponent = (function () {
    function ClienteCargaComponent(clienteService, tipoDocumentoService, nacionalidadService, estadoCivilService, provinciaService, localidadService, personaService, dialogService, toastr) {
        this.clienteService = clienteService;
        this.tipoDocumentoService = tipoDocumentoService;
        this.nacionalidadService = nacionalidadService;
        this.estadoCivilService = estadoCivilService;
        this.provinciaService = provinciaService;
        this.localidadService = localidadService;
        this.personaService = personaService;
        this.dialogService = dialogService;
        this.toastr = toastr;
        this.cliente = new index_2.Cliente();
        this.lsProvincias = new Array();
        this.lsLocalidades = new Array();
        this.lsTiposDocumento = new Array();
        this.lsNacionalidades = new Array();
        this.lsEstadosCivil = new Array();
        this.existeCliente = false;
        this.cargarTiposDocumento();
        this.cargarNacionalidades();
        this.cargarEstadosCivil();
        this.cargarProvincias();
    }
    //METODOS-----------------------------------------------------------------------
    ClienteCargaComponent.prototype.cargarTiposDocumento = function () {
        var _this = this;
        this.tipoDocumentoService.getAll().subscribe(function (data) {
            for (var i = 0; i < data.json().length; i++) {
                var tipoDocumento = new index_2.TipoDocumento(data.json()[i]["id_tipo_documento"], data.json()[i]["n_tipo_documento"]);
                _this.lsTiposDocumento.push(tipoDocumento);
            }
        }, function (error) {
            _this.lsTiposDocumento = new Array();
            error.json()["Message"];
        });
    };
    ClienteCargaComponent.prototype.cargarNacionalidades = function () {
        var _this = this;
        this.nacionalidadService.getAll().subscribe(function (data) {
            for (var i = 0; i < data.json().length; i++) {
                var nacionalidad = new index_2.Nacionalidad(data.json()[i]["id_nacionalidad"], data.json()[i]["n_nacionalidad"]);
                _this.lsNacionalidades.push(nacionalidad);
            }
        }, function (error) {
            _this.lsNacionalidades = new Array();
            error.json()["Message"];
        });
    };
    ClienteCargaComponent.prototype.cargarEstadosCivil = function () {
        var _this = this;
        this.estadoCivilService.getAll().subscribe(function (data) {
            for (var i = 0; i < data.json().length; i++) {
                var estadoCivil = new index_2.EstadoCivil(data.json()[i]["id_estado_civil"], data.json()[i]["n_estado_civil"]);
                _this.lsEstadosCivil.push(estadoCivil);
            }
        }, function (error) {
            _this.lsEstadosCivil = new Array();
            error.json()["Message"];
        });
    };
    ClienteCargaComponent.prototype.cargarProvincias = function () {
        var _this = this;
        this.provinciaService.getAll().subscribe(function (data) {
            for (var i = 0; i < data.json().length; i++) {
                var provincia = new index_2.Provincia(data.json()[i]["id_provincia"], data.json()[i]["n_provincia"]);
                _this.lsProvincias.push(provincia);
            }
        }, function (error) {
            _this.lsProvincias = new Array();
            error.json()["Message"];
        });
    };
    ClienteCargaComponent.prototype.consultarDatosCliente = function () {
        var _this = this;
        if (this.cliente.nro_documento) {
            var nroDoc_1 = this.cliente.nro_documento;
            this.blockUI.start("Consultando clientes...");
            this.personaService.getByDoc(this.cliente.nro_documento).subscribe(function (data) {
                if (data[0]) {
                    _this.cliente.id_persona = data[0]["id_persona"];
                    _this.cliente.nombre = data[0]["nombre"];
                    _this.cliente.apellido = data[0]["apellido"];
                    _this.cliente.fecha_nacimiento = data[0]["fecha_nacimiento"];
                    _this.cliente.nro_documento = data[0]["nro_documento"];
                    _this.cliente.tipoDocumento.id_tipo_documento = data[0]["tipoDocumento"]["id_tipo_documento"];
                    _this.cliente.tipoDocumento.n_tipo_documento = data[0]["tipoDocumento"]["n_tipo_documento"];
                    _this.cliente.estadoCivil.id_estado_civil = data[0]["estadoCivil"]["id_estado_civil"];
                    _this.cliente.estadoCivil.n_estado_civil = data[0]["estadoCivil"]["n_estado_civil"];
                    _this.cliente.nacionalidad.id_nacionalidad = data[0]["nacionalidad"]["id_nacionalidad"];
                    _this.cliente.nacionalidad.n_nacionalidad = data[0]["nacionalidad"]["n_nacionalidad"];
                    _this.cliente.domicilio.calle = data[0]["domicilio"]["calle"];
                    _this.cliente.domicilio.codigo_postal = data[0]["domicilio"]["codigo_postal"];
                    _this.cliente.domicilio.dpto = data[0]["domicilio"]["dpto"];
                    _this.cliente.domicilio.id_domicilio = data[0]["domicilio"]["id_domicilio"];
                    _this.cliente.domicilio.numeracion = data[0]["domicilio"]["numeracion"];
                    _this.cliente.domicilio.piso = data[0]["domicilio"]["piso"];
                    _this.cliente.domicilio.torre = data[0]["domicilio"]["torre"];
                    _this.cliente.domicilio.localidad = data[0]["domicilio"]["localidad"];
                    _this.cliente.domicilio.localidad.id_localidad = data[0]["domicilio"]["localidad"]["id_localidad"];
                    _this.cliente.domicilio.localidad.n_localidad = data[0]["domicilio"]["localidad"]["n_localidad"];
                    _this.cliente.domicilio.localidad.provincia = data[0]["domicilio"]["localidad"]["provincia"];
                    _this.cliente.domicilio.localidad.provincia.id_provincia = data[0]["domicilio"]["localidad"]["provincia"]["id_provincia"];
                    _this.cliente.domicilio.localidad.provincia.n_provincia = data[0]["domicilio"]["localidad"]["provincia"]["n_provincia"];
                    _this.cliente.contacto.email = data[0]["contacto"]["email"];
                    _this.cliente.contacto.id_contacto = data[0]["contacto"]["id_contacto"];
                    _this.cliente.contacto.telefono_fijo = data[0]["contacto"]["telefono_fijo"];
                    _this.cliente.contacto.telefono_movil = data[0]["contacto"]["telefono_movil"];
                    _this.existeCliente = true;
                }
                _this.blockUI.stop();
            }, function (error) {
                _this.cliente = new index_2.Cliente();
                _this.cliente.nro_documento = nroDoc_1;
                _this.existeCliente = false;
                _this.blockUI.stop();
            });
        }
        else {
            this.cliente = new index_2.Cliente();
            this.existeCliente = false;
        }
    };
    //EVENTOS-----------------------------------------------------------------------
    ClienteCargaComponent.prototype.provincia_onChanged = function (provincia) {
        var _this = this;
        this.blockUI.start();
        this.provincia = provincia;
        this.localidadService.getByProvincia(provincia.id_provincia).subscribe(function (data) {
            _this.lsLocalidades = [];
            for (var i = 0; i < data.json().length; i++) {
                var localidad = new index_2.Localidad(data.json()[i]["id_localidad"], data.json()[i]["n_localidad"]);
                _this.lsLocalidades.push(localidad);
            }
            _this.blockUI.stop();
        }, function (error) {
            _this.lsLocalidades = new Array();
            error.json()["Message"];
            _this.blockUI.stop();
        });
    };
    ClienteCargaComponent.prototype.test = function () {
        this.cliente;
    };
    ClienteCargaComponent.prototype.agregarLocalidad = function () {
        var _this = this;
        if (this.provincia.id_provincia != null) {
            this.dialogService.agregarLocalidad(this.provincia).subscribe(function (result) {
                _this.provincia_onChanged(_this.provincia);
                _this.toastr.success("La localidad fue creada correctamente", "Exito!");
            });
        }
    };
    return ClienteCargaComponent;
}());
__decorate([
    ng_block_ui_1.BlockUI(),
    __metadata("design:type", Object)
], ClienteCargaComponent.prototype, "blockUI", void 0);
__decorate([
    core_1.ViewChild('clientForm'),
    __metadata("design:type", forms_1.FormGroup)
], ClienteCargaComponent.prototype, "clienteForm", void 0);
ClienteCargaComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        selector: 'cliente-carga',
        styleUrls: [
            './cliente-carga.component.css'
        ],
        templateUrl: './cliente-carga.component.html',
        providers: [index_3.ClienteService,
            index_3.TipoDocumentoService,
            index_3.NacionalidadService,
            index_3.EstadoCivilService,
            index_3.ProvinciaService,
            index_3.LocalidadService,
            index_3.PersonaService,
            index_1.DialogService
        ]
    }),
    __metadata("design:paramtypes", [index_3.ClienteService,
        index_3.TipoDocumentoService,
        index_3.NacionalidadService,
        index_3.EstadoCivilService,
        index_3.ProvinciaService,
        index_3.LocalidadService,
        index_3.PersonaService,
        index_1.DialogService,
        ng2_toastr_1.ToastsManager])
], ClienteCargaComponent);
exports.ClienteCargaComponent = ClienteCargaComponent;
//# sourceMappingURL=cliente-carga.component.js.map