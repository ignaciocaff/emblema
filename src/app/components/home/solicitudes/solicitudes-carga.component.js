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
var index_1 = require("../../../services/common-services/index");
var forms_1 = require("@angular/forms");
var index_2 = require("../../../services/entity-services/index");
var index_3 = require("../../../entities/index");
var producto_seleccion_component_1 = require("./producto-seleccion.component");
var cliente_carga_component_1 = require("../clientes/cliente-carga.component");
var conyuge_carga_component_1 = require("../clientes/conyuge-carga.component");
var cotitular_carga_component_1 = require("../clientes/cotitular-carga.component");
var empleo_carga_component_1 = require("../clientes/empleo-carga.component");
var senia_carga_component_1 = require("../solicitudes/senia-carga.component");
var ng2_toastr_1 = require("ng2-toastr/ng2-toastr");
var index_4 = require("../../../services/common-services/index");
var SolicitudesCargaComponent = (function () {
    function SolicitudesCargaComponent(alertService, solicitudService, toastr, dialogService) {
        this.alertService = alertService;
        this.solicitudService = solicitudService;
        this.toastr = toastr;
        this.dialogService = dialogService;
        this.loading = false;
    }
    SolicitudesCargaComponent.prototype.ngOnInit = function () {
    };
    SolicitudesCargaComponent.prototype.ngAfterViewInit = function () {
        this.solicitud = new index_3.Solicitud();
    };
    SolicitudesCargaComponent.prototype.confirmDialogSolicitud = function () {
        var _this = this;
        this.dialogService
            .confirm('Confirmar Solicitud', 'Esta seguro que desea confirmar?').subscribe(function (result) {
            if (result) {
                _this.confirmarSolicitud();
            }
        });
    };
    SolicitudesCargaComponent.prototype.confirmarSolicitud = function () {
        var _this = this;
        this.solicitud.producto = this.productoSeleccion.producto;
        this.solicitud.cliente = this.clienteCarga.cliente;
        this.solicitud.cliente.conyuge = this.conyugeCarga.conyuge;
        this.solicitud.cliente.coTitular = this.cotitularCarga.cotitular;
        if (this.empleoCarga.empleo.tipoEmpleo.id_tipo_empleo == null) {
            this.solicitud.cliente.empleo = null;
        }
        else {
            this.solicitud.cliente.empleo = this.empleoCarga.empleo;
        }
        this.solicitud.senia = this.seniaCarga.senia;
        this.solicitud.monto_mensual = this.seniaCarga.monto_mensual;
        this.solicitud.fecha_solicitud = this.seniaCarga.fecha_solicitud;
        this.solicitud.vendedor = this.seniaCarga.vendedor;
        this.blockUI.start(); // Start blocking
        this.solicitudService.create(this.solicitud).subscribe(function (data) {
            _this.toastr.success("La solicitud ha sido dada de alta correctamente", "Exito!");
            _this.blockUI.stop();
        }, function (error) {
            _this.toastr.error("La solicitud no se ha creado, intente nuevamente más tarde", "Error!");
            _this.blockUI.stop();
        });
    };
    SolicitudesCargaComponent.prototype.validacion = function () {
        if (this.clienteCarga.clienteForm.valid && this.productoSeleccion.productoForm.valid &&
            this.empleoCarga.empleoForm.valid && this.seniaCarga.seniaForm.valid) {
            return true;
        }
        else {
            return false;
        }
    };
    SolicitudesCargaComponent.prototype.test = function () {
    };
    return SolicitudesCargaComponent;
}());
__decorate([
    core_1.ViewChild('productoComponent'),
    __metadata("design:type", producto_seleccion_component_1.ProductoSeleccionComponent)
], SolicitudesCargaComponent.prototype, "productoSeleccion", void 0);
__decorate([
    core_1.ViewChild('clienteComponent'),
    __metadata("design:type", cliente_carga_component_1.ClienteCargaComponent)
], SolicitudesCargaComponent.prototype, "clienteCarga", void 0);
__decorate([
    core_1.ViewChild('conyugeComponent'),
    __metadata("design:type", conyuge_carga_component_1.ConyugeCargaComponent)
], SolicitudesCargaComponent.prototype, "conyugeCarga", void 0);
__decorate([
    core_1.ViewChild('cotitularComponent'),
    __metadata("design:type", cotitular_carga_component_1.CotitularCargaComponent)
], SolicitudesCargaComponent.prototype, "cotitularCarga", void 0);
__decorate([
    core_1.ViewChild('empleoComponent'),
    __metadata("design:type", empleo_carga_component_1.EmpleoCargaComponent)
], SolicitudesCargaComponent.prototype, "empleoCarga", void 0);
__decorate([
    core_1.ViewChild('seniaComponent'),
    __metadata("design:type", senia_carga_component_1.SeniaCargaComponent)
], SolicitudesCargaComponent.prototype, "seniaCarga", void 0);
__decorate([
    core_1.ViewChild('clientForm'),
    __metadata("design:type", forms_1.FormGroupDirective)
], SolicitudesCargaComponent.prototype, "clientForm", void 0);
__decorate([
    ng_block_ui_1.BlockUI(),
    __metadata("design:type", Object)
], SolicitudesCargaComponent.prototype, "blockUI", void 0);
SolicitudesCargaComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        selector: 'solicitudes-carga',
        templateUrl: './solicitudes-carga.component.html',
        styleUrls: [
            './solicitudes-carga.component.css'
        ],
        providers: [
            index_2.SolicitudService,
            index_4.DialogService
        ]
    }),
    __metadata("design:paramtypes", [index_1.AlertService,
        index_2.SolicitudService,
        ng2_toastr_1.ToastsManager,
        index_4.DialogService])
], SolicitudesCargaComponent);
exports.SolicitudesCargaComponent = SolicitudesCargaComponent;
//# sourceMappingURL=solicitudes-carga.component.js.map