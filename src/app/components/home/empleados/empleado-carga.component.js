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
var EmpleadoCargaComponent = (function () {
    function EmpleadoCargaComponent(empleadoService, tipoDocumentoService, nacionalidadService, estadoCivilService, provinciaService, localidadService, personaService, dialogService, cargoService, toastr) {
        this.empleadoService = empleadoService;
        this.tipoDocumentoService = tipoDocumentoService;
        this.nacionalidadService = nacionalidadService;
        this.estadoCivilService = estadoCivilService;
        this.provinciaService = provinciaService;
        this.localidadService = localidadService;
        this.personaService = personaService;
        this.dialogService = dialogService;
        this.cargoService = cargoService;
        this.toastr = toastr;
        this.empleado = new index_2.Empleado();
        this.lsProvincias = new Array();
        this.lsLocalidades = new Array();
        this.lsTiposDocumento = new Array();
        this.lsNacionalidades = new Array();
        this.lsEstadosCivil = new Array();
        this.lsCargos = new Array();
        this.existeEmpleado = false;
        this.cargarTiposDocumento();
        this.cargarNacionalidades();
        this.cargarEstadosCivil();
        this.cargarProvincias();
        this.cargarCargos();
    }
    //METODOS-----------------------------------------------------------------------
    EmpleadoCargaComponent.prototype.cargarTiposDocumento = function () {
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
    EmpleadoCargaComponent.prototype.cargarNacionalidades = function () {
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
    EmpleadoCargaComponent.prototype.cargarEstadosCivil = function () {
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
    EmpleadoCargaComponent.prototype.cargarProvincias = function () {
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
    EmpleadoCargaComponent.prototype.cargarCargos = function () {
        var _this = this;
        this.cargoService.getAll().subscribe(function (data) {
            for (var i = 0; i < data.json().length; i++) {
                var cargo = new index_2.Cargo(data.json()[i]["id_cargo"], data.json()[i]["n_cargo"]);
                _this.lsCargos.push(cargo);
            }
        }, function (error) {
            _this.lsCargos = new Array();
            error.json()["Message"];
        });
    };
    EmpleadoCargaComponent.prototype.consultarDatosEmpleado = function () {
        var _this = this;
        if (this.empleado.nro_documento) {
            var nroDoc_1 = this.empleado.nro_documento;
            this.blockUI.start("Consultando empleados...");
            this.personaService.getByDoc(this.empleado.nro_documento).subscribe(function (data) {
                if (data[0]) {
                    _this.empleado.id_persona = data[0]["id_persona"];
                    _this.empleado.nombre = data[0]["nombre"];
                    _this.empleado.apellido = data[0]["apellido"];
                    _this.empleado.fecha_nacimiento = data[0]["fecha_nacimiento"];
                    _this.empleado.nro_documento = data[0]["nro_documento"];
                    _this.empleado.tipoDocumento.id_tipo_documento = data[0]["tipoDocumento"]["id_tipo_documento"];
                    _this.empleado.tipoDocumento.n_tipo_documento = data[0]["tipoDocumento"]["n_tipo_documento"];
                    _this.empleado.estadoCivil.id_estado_civil = data[0]["estadoCivil"]["id_estado_civil"];
                    _this.empleado.estadoCivil.n_estado_civil = data[0]["estadoCivil"]["n_estado_civil"];
                    _this.empleado.nacionalidad.id_nacionalidad = data[0]["nacionalidad"]["id_nacionalidad"];
                    _this.empleado.nacionalidad.n_nacionalidad = data[0]["nacionalidad"]["n_nacionalidad"];
                    _this.empleado.domicilio.calle = data[0]["domicilio"]["calle"];
                    _this.empleado.domicilio.codigo_postal = data[0]["domicilio"]["codigo_postal"];
                    _this.empleado.domicilio.dpto = data[0]["domicilio"]["dpto"];
                    _this.empleado.domicilio.id_domicilio = data[0]["domicilio"]["id_domicilio"];
                    _this.empleado.domicilio.numeracion = data[0]["domicilio"]["numeracion"];
                    _this.empleado.domicilio.piso = data[0]["domicilio"]["piso"];
                    _this.empleado.domicilio.torre = data[0]["domicilio"]["torre"];
                    _this.empleado.domicilio.localidad = data[0]["domicilio"]["localidad"];
                    _this.empleado.domicilio.localidad.id_localidad = data[0]["domicilio"]["localidad"]["id_localidad"];
                    _this.empleado.domicilio.localidad.n_localidad = data[0]["domicilio"]["localidad"]["n_localidad"];
                    _this.empleado.domicilio.localidad.provincia = data[0]["domicilio"]["localidad"]["provincia"];
                    _this.empleado.domicilio.localidad.provincia.id_provincia = data[0]["domicilio"]["localidad"]["provincia"]["id_provincia"];
                    _this.empleado.domicilio.localidad.provincia.n_provincia = data[0]["domicilio"]["localidad"]["provincia"]["n_provincia"];
                    _this.empleado.contacto.email = data[0]["contacto"]["email"];
                    _this.empleado.contacto.id_contacto = data[0]["contacto"]["id_contacto"];
                    _this.empleado.contacto.telefono_fijo = data[0]["contacto"]["telefono_fijo"];
                    _this.empleado.contacto.telefono_movil = data[0]["contacto"]["telefono_movil"];
                    _this.existeEmpleado = true;
                }
                _this.blockUI.stop();
            }, function (error) {
                _this.empleado = new index_2.Empleado();
                _this.empleado.nro_documento = nroDoc_1;
                _this.existeEmpleado = false;
                _this.blockUI.stop();
            });
        }
        else {
            this.empleado = new index_2.Empleado();
            this.existeEmpleado = false;
        }
    };
    //EVENTOS-----------------------------------------------------------------------
    EmpleadoCargaComponent.prototype.provincia_onChanged = function (provincia) {
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
    EmpleadoCargaComponent.prototype.test = function () {
        this.empleado;
    };
    EmpleadoCargaComponent.prototype.agregarLocalidad = function () {
        var _this = this;
        if (this.provincia.id_provincia != null) {
            this.dialogService.agregarLocalidad(this.provincia).subscribe(function (result) {
                _this.provincia_onChanged(_this.provincia);
            });
        }
    };
    EmpleadoCargaComponent.prototype.registrarEmpleado = function () {
        var _this = this;
        this.blockUI.start(); // Start blocking
        this.empleadoService.create(this.empleado).subscribe(function (data) {
            _this.toastr.success("El empleado se registro correctamente", "Exito!");
            _this.blockUI.stop();
        }, function (error) {
            _this.toastr.error("El empleado no se ha creado, intente nuevamente más tarde", "Error!");
            _this.blockUI.stop();
        });
    };
    return EmpleadoCargaComponent;
}());
__decorate([
    ng_block_ui_1.BlockUI(),
    __metadata("design:type", Object)
], EmpleadoCargaComponent.prototype, "blockUI", void 0);
__decorate([
    core_1.ViewChild('empleadoForm'),
    __metadata("design:type", forms_1.FormGroup)
], EmpleadoCargaComponent.prototype, "empleadoForm", void 0);
EmpleadoCargaComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        selector: 'empleado-carga',
        styleUrls: [
            './empleados-carga.component.css'
        ],
        templateUrl: './empleados-carga.component.html',
        providers: [index_3.EmpleadoService,
            index_3.TipoDocumentoService,
            index_3.NacionalidadService,
            index_3.EstadoCivilService,
            index_3.ProvinciaService,
            index_3.LocalidadService,
            index_3.PersonaService,
            index_3.CargoService,
            index_1.DialogService
        ]
    }),
    __metadata("design:paramtypes", [index_3.EmpleadoService,
        index_3.TipoDocumentoService,
        index_3.NacionalidadService,
        index_3.EstadoCivilService,
        index_3.ProvinciaService,
        index_3.LocalidadService,
        index_3.PersonaService,
        index_1.DialogService,
        index_3.CargoService,
        ng2_toastr_1.ToastsManager])
], EmpleadoCargaComponent);
exports.EmpleadoCargaComponent = EmpleadoCargaComponent;
//# sourceMappingURL=empleado-carga.component.js.map