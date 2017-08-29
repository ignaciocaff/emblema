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
var angular_2_data_table_1 = require("angular-2-data-table");
var ng_block_ui_1 = require("ng-block-ui");
var ng2_toastr_1 = require("ng2-toastr/ng2-toastr");
//import persons from './data';
var index_1 = require("../../../entities/index");
var solicitud_service_1 = require("../../../services/entity-services/solicitud.service");
var index_2 = require("../../../services/common-services/index");
var SolicitudesListadoComponent = (function () {
    function SolicitudesListadoComponent(solicitudService, dialogService, toastr) {
        this.solicitudService = solicitudService;
        this.dialogService = dialogService;
        this.toastr = toastr;
        this.solJSONArray = new Array();
        this.itemResource = new angular_2_data_table_1.DataTableResource(this.solJSON);
        this.items = [];
        this.itemCount = 0;
    }
    SolicitudesListadoComponent.prototype.ngOnInit = function () {
        this.lsSolicitudes = new Array();
        this.solJSON = new Array();
        this.items = null;
        this.cliente = new index_1.Cliente();
    };
    SolicitudesListadoComponent.prototype.cargarListado = function (params) {
        var _this = this;
        this.blockUI.start();
        this.solicitudService.getByCliente(this.cliente.nro_documento).subscribe(function (data) {
            if (data) {
                _this.solJSONArray = [];
                for (var i = 0; i < data.length; i++) {
                    var solJSON = new Array();
                    solJSON["nro_contrato"] = data[i]["nro_contrato"];
                    solJSON["nombre"] = data[i]["cliente"]["nombre"];
                    solJSON["apellido"] = data[i]["cliente"]["apellido"];
                    solJSON["nro_documento"] = data[i]["cliente"]["nro_documento"];
                    solJSON["anio"] = data[i]["producto"]["año"];
                    solJSON["n_modelo"] = data[i]["producto"]["modelo"]["n_modelo"];
                    solJSON["n_marca"] = data[i]["producto"]["modelo"]["marca"]["n_marca"];
                    solJSON["n_estado_solicitud"] = data[i]["estado_solicitud"]["n_estado_solicitud"];
                    solJSON["monto_mensual"] = data[i]["monto_mensual"];
                    _this.solJSONArray.push(solJSON);
                }
                var itemResource = new angular_2_data_table_1.DataTableResource(_this.solJSONArray);
                _this.items = null;
                itemResource.query(params).then(function (items) { return _this.items = items; });
                itemResource.count().then(function (count) {
                    _this.itemCount = count;
                    if (_this.itemCount == 0) {
                        _this.items = null;
                        _this.toastr.info("No se han encontrado solicitudes para el cliente ingresado", "Info");
                    }
                });
                _this.blockUI.stop();
            }
        }, function (error) {
            _this.items = null;
            _this.blockUI.stop();
            if (_this.cliente.nro_documento == null || _this.cliente.nro_documento.toString() == "") {
                _this.toastr.info("Ingrese un numero de documento para realizar la consulta", "Info");
            }
            else {
                _this.toastr.error("Intente más tarde", "Error");
            }
        });
    };
    SolicitudesListadoComponent.prototype.reloadItems = function (params) {
        /*this.cargarListado();*/
        //this.itemResource.query(params).then(items => this.items = items);
    };
    // special properties:
    SolicitudesListadoComponent.prototype.rowClick = function (rowEvent) {
        console.log('Clicked: ' + rowEvent.row.item.name);
    };
    SolicitudesListadoComponent.prototype.rowDoubleClick = function (rowEvent) {
        alert('Double clicked: ' + rowEvent.row.item.name);
    };
    SolicitudesListadoComponent.prototype.rowTooltip = function (item) { return item.jobTitle; };
    return SolicitudesListadoComponent;
}());
__decorate([
    ng_block_ui_1.BlockUI(),
    __metadata("design:type", Object)
], SolicitudesListadoComponent.prototype, "blockUI", void 0);
SolicitudesListadoComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        selector: 'solicitudes-listado',
        templateUrl: 'solicitudes-listado.component.html',
        styleUrls: [
            './solicitudes-listado.component.css'
        ],
        providers: [solicitud_service_1.SolicitudService, index_2.DialogService]
    }),
    __metadata("design:paramtypes", [solicitud_service_1.SolicitudService,
        index_2.DialogService,
        ng2_toastr_1.ToastsManager])
], SolicitudesListadoComponent);
exports.SolicitudesListadoComponent = SolicitudesListadoComponent;
//# sourceMappingURL=solicitudes-listado.component.js.map