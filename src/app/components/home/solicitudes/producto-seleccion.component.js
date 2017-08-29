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
var forms_1 = require("@angular/forms");
var index_1 = require("../../../services/common-services/index");
var ng2_toastr_1 = require("ng2-toastr/ng2-toastr");
var index_2 = require("../../../entities/index");
var index_3 = require("../../../services/entity-services/index");
var ProductoSeleccionComponent = (function () {
    function ProductoSeleccionComponent(colorService, combustibleService, marcaService, modeloService, tipoProductoService, segmentoService, solicitudService, blockUIService, dialogService, toastr) {
        this.colorService = colorService;
        this.combustibleService = combustibleService;
        this.marcaService = marcaService;
        this.modeloService = modeloService;
        this.tipoProductoService = tipoProductoService;
        this.segmentoService = segmentoService;
        this.solicitudService = solicitudService;
        this.blockUIService = blockUIService;
        this.dialogService = dialogService;
        this.toastr = toastr;
        this.lsTiposProducto = new Array();
        this.lsSegmentos = new Array();
        this.lsMarcas = new Array();
        this.lsModelos = new Array();
        this.lsColores = new Array();
        this.lsCombustibles = new Array();
        this.producto = new index_2.Producto();
        this.cargarTiposProducto();
        this.cargarMarcas();
        this.cargarCombustibles();
        this.cargarColores();
    }
    ProductoSeleccionComponent.prototype.ngOnInit = function () {
        this.producto = new index_2.Producto();
    };
    //METODOS-----------------------------------------------------------------------
    ProductoSeleccionComponent.prototype.cargarTiposProducto = function () {
        var _this = this;
        this.tipoProductoService.getAll().subscribe(function (data) {
            _this.lsTiposProducto = new Array();
            for (var i = 0; i < data.json().length; i++) {
                var tipoProducto = new index_2.TipoProducto(data.json()[i]["id_tipo_producto"], data.json()[i]["n_tipo_producto"]);
                _this.lsTiposProducto.push(tipoProducto);
            }
            _this.blockUIService.stop('producto-seleccion');
        }, function (error) {
            _this.lsTiposProducto = new Array();
            error.json()["Message"];
            _this.blockUIService.stop('producto-seleccion');
        });
    };
    ProductoSeleccionComponent.prototype.cargarMarcas = function () {
        var _this = this;
        this.marcaService.getAll().subscribe(function (data) {
            for (var i = 0; i < data.json().length; i++) {
                var marca = new index_2.Marca(data.json()[i]["id_marca"], data.json()[i]["n_marca"]);
                _this.lsMarcas.push(marca);
            }
        }, function (error) {
            _this.lsMarcas = new Array();
            error.json()["Message"];
        });
    };
    ProductoSeleccionComponent.prototype.cargarCombustibles = function () {
        this.lsCombustibles = this.combustibleService.getAll();
    };
    ProductoSeleccionComponent.prototype.cargarColores = function () {
        this.lsColores = this.colorService.getAll();
    };
    //EVENTOS-----------------------------------------------------------------------
    ProductoSeleccionComponent.prototype.tipoProducto_onChange = function (tipoProducto) {
        var _this = this;
        try {
            this.blockUI.start(); // Start blocking
            this.tipoProducto = tipoProducto;
            this.segmentoService.getByTipoProducto(tipoProducto.id_tipo_producto).subscribe(function (data) {
                _this.lsSegmentos = [];
                for (var i = 0; i < data.json().length; i++) {
                    var segmento = new index_2.Segmento(data.json()[i]["id_segmento"], data.json()[i]["n_segmento"]);
                    _this.lsSegmentos.push(segmento);
                }
                _this.blockUI.stop(); // Start blocking
            }, function (error) {
                _this.lsSegmentos = new Array();
                error.json()["Message"];
                _this.blockUI.stop(); // Start blocking
            });
        }
        catch (ex) {
        }
    };
    ProductoSeleccionComponent.prototype.segmento_onChange = function () {
        this.producto.segmento.tipoProducto = this.tipoProducto;
    };
    ProductoSeleccionComponent.prototype.marca_onChange = function (marca) {
        var _this = this;
        this.blockUI.start();
        this.modeloService.getByMarca(marca.id_marca).subscribe(function (data) {
            _this.lsModelos = [];
            for (var i = 0; i < data.json().length; i++) {
                var modelo = new index_2.Modelo(data.json()[i]["id_modelo"], data.json()[i]["n_modelo"]);
                _this.lsModelos.push(modelo);
            }
            _this.blockUI.stop();
        }, function (error) {
            _this.lsModelos = new Array();
            error.json()["Message"];
            _this.blockUI.stop();
        });
    };
    ProductoSeleccionComponent.prototype.modelo_onChange = function () {
        this.producto.modelo = this.modeloProducto;
        this.producto.modelo.marca = this.marcaProducto;
    };
    ProductoSeleccionComponent.prototype.getProducto = function () {
        //this.getData.emit(this.producto);
    };
    ProductoSeleccionComponent.prototype.getPoducto = function () {
        return this.producto;
    };
    ProductoSeleccionComponent.prototype.agregarTipoProducto = function () {
        var _this = this;
        this.dialogService.agregarTipoProducto().subscribe(function (result) {
            _this.cargarTiposProducto();
        });
    };
    ProductoSeleccionComponent.prototype.agregarSegmento = function () {
        var _this = this;
        try {
            if (this.tipoProducto.id_tipo_producto != null) {
                this.dialogService.agregarSegmento(this.tipoProducto).subscribe(function (result) {
                    _this.tipoProducto_onChange(_this.tipoProducto);
                }, function (error) {
                });
            }
        }
        catch (ex) {
            this.toastr.error("Debe seleccionar un tipo de producto antes", "Error!");
        }
    };
    ProductoSeleccionComponent.prototype.agregarMarca = function () {
        var _this = this;
        this.dialogService.agregarMarca().subscribe(function (result) {
            _this.cargarMarcas();
        });
    };
    ProductoSeleccionComponent.prototype.agregarModelo = function () {
        var _this = this;
        try {
            if (this.marcaProducto.id_marca) {
                this.dialogService.agregarModelo(this.marcaProducto).subscribe(function (result) {
                    _this.marca_onChange(_this.marcaProducto);
                }, function (error) {
                });
            }
        }
        catch (ex) {
            this.toastr.error("Debe seleccionar una marca antes", "Error!");
        }
    };
    ProductoSeleccionComponent.prototype.agregarCombustible = function () {
        var _this = this;
        this.dialogService.agregarCombustible().subscribe(function (result) {
            _this.cargarCombustibles();
        });
    };
    ProductoSeleccionComponent.prototype.agregarColor = function () {
        var _this = this;
        this.dialogService.agregarColor().subscribe(function (result) {
            _this.cargarColores();
        });
    };
    ProductoSeleccionComponent.prototype.test = function () {
        this.producto;
    };
    return ProductoSeleccionComponent;
}());
__decorate([
    ng_block_ui_1.BlockUI(),
    __metadata("design:type", Object)
], ProductoSeleccionComponent.prototype, "blockUI", void 0);
__decorate([
    core_1.ViewChild('productoForm'),
    __metadata("design:type", forms_1.FormGroup)
], ProductoSeleccionComponent.prototype, "productoForm", void 0);
ProductoSeleccionComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        selector: 'producto-seleccion',
        templateUrl: './producto-seleccion.component.html',
        providers: [
            index_3.ColorService,
            index_3.CombustibleService,
            index_3.MarcaService,
            index_3.ModeloService,
            index_3.TipoProductoService,
            index_3.SegmentoService,
            index_3.SolicitudService,
            ng_block_ui_1.BlockUIService,
            index_1.DialogService
        ]
    }),
    __metadata("design:paramtypes", [index_3.ColorService,
        index_3.CombustibleService,
        index_3.MarcaService,
        index_3.ModeloService,
        index_3.TipoProductoService,
        index_3.SegmentoService,
        index_3.SolicitudService,
        ng_block_ui_1.BlockUIService,
        index_1.DialogService,
        ng2_toastr_1.ToastsManager])
], ProductoSeleccionComponent);
exports.ProductoSeleccionComponent = ProductoSeleccionComponent;
//# sourceMappingURL=producto-seleccion.component.js.map