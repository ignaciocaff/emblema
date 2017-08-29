import {
    Component,
    AfterViewInit,
    ViewChild,
    ViewContainerRef
} from '@angular/core';

import { MdDialogRef, MD_DIALOG_DATA } from '@angular/material';
import { BlockUI, BlockUIService, NgBlockUI } from 'ng-block-ui';
import { FormGroup } from '@angular/forms';
import { Subscription } from 'rxjs/Subscription';
import { DialogService } from '../../../services/common-services/index';
import { ToastsManager } from 'ng2-toastr/ng2-toastr';
import { DataTableResource } from 'angular-2-data-table';

import {
    Producto,
    Color,
    Combustible,
    Marca,
    Modelo,
    TipoProducto,
    Segmento
} from '../../../entities/index';

import {
    ColorService,
    CombustibleService,
    MarcaService,
    ModeloService,
    TipoProductoService,
    SegmentoService,
    SolicitudService,
    ProductoService
} from '../../../services/entity-services/index';

@Component({
    moduleId: module.id,
    selector: 'productos-carga',
    templateUrl: './productos-carga.component.html',
    providers: [
        ColorService,
        CombustibleService,
        MarcaService,
        ModeloService,
        TipoProductoService,
        SegmentoService,
        SolicitudService,
        BlockUIService,
        DialogService,
        ProductoService]
})
export class ProductosCargaComponent implements AfterViewInit {
    @BlockUI() blockUI: NgBlockUI;
    @ViewChild('productoForm') productoForm: FormGroup;
    subsciption: Subscription;

    public producto: Producto;
    public tipoProducto: TipoProducto;
    public marcaProducto: Marca;
    public modeloProducto: Modelo;
    public anio: number;

    public lsTiposProducto = new Array<TipoProducto>();
    public lsSegmentos = new Array<Segmento>();

    public lsMarcas = new Array<Marca>();
    public lsModelos = new Array<Modelo>();

    public lsColores = new Array<Color>();
    public lsCombustibles = new Array<Combustible>();

    lsProductos: Array<Producto>;

    productosJSONArray = new Array();
    itemResource = new DataTableResource(this.productosJSONArray);
    items: any = [];
    itemCount = 0;

    constructor(
        private colorService: ColorService,
        private combustibleService: CombustibleService,
        private marcaService: MarcaService,
        private modeloService: ModeloService,
        private tipoProductoService: TipoProductoService,
        private segmentoService: SegmentoService,
        private solicitudService: SolicitudService,
        private blockUIService: BlockUIService,
        private dialogService: DialogService,
        private productoService: ProductoService,
        public toastr: ToastsManager
    ) {
        this.producto = new Producto()
        this.cargarTiposProducto();
        this.cargarMarcas();
        this.cargarCombustibles();
        this.cargarColores();
    }

    ngAfterViewInit() {
    }

    //METODOS-----------------------------------------------------------------------
    cargarTiposProducto() {
        this.tipoProductoService.getAll().subscribe(
            data => {
                this.lsTiposProducto = new Array<TipoProducto>();
                for (var i = 0; i < data.json().length; i++) {
                    let tipoProducto = new TipoProducto(
                        data.json()[i]["id_tipo_producto"],
                        data.json()[i]["n_tipo_producto"]
                    );
                    this.lsTiposProducto.push(tipoProducto);
                }
                this.blockUIService.stop('producto-seleccion');
            },
            error => {
                this.lsTiposProducto = new Array<TipoProducto>();
                error.json()["Message"];
                this.blockUIService.stop('producto-seleccion');
            });
    }

    cargarMarcas() {
        this.marcaService.getAll().subscribe(
            data => {
                for (var i = 0; i < data.json().length; i++) {
                    let marca = new Marca(
                        data.json()[i]["id_marca"],
                        data.json()[i]["n_marca"]
                    );
                    this.lsMarcas.push(marca);
                }
            },
            error => {
                this.lsMarcas = new Array<Marca>()
                error.json()["Message"];
            });
    }

    cargarCombustibles() {
        this.lsCombustibles = this.combustibleService.getAll();
    }

    cargarColores() {
        this.lsColores = this.colorService.getAll();
    }


    //EVENTOS-----------------------------------------------------------------------
    tipoProducto_onChange(tipoProducto: TipoProducto) {
        try {
            this.blockUI.start(); // Start blocking
            this.tipoProducto = tipoProducto;
            this.segmentoService.getByTipoProducto(tipoProducto.id_tipo_producto).subscribe(
                data => {
                    this.lsSegmentos = [];
                    for (var i = 0; i < data.json().length; i++) {
                        let segmento = new Segmento(
                            data.json()[i]["id_segmento"],
                            data.json()[i]["n_segmento"]
                        );
                        this.lsSegmentos.push(segmento);
                    }
                    this.blockUI.stop(); // Start blocking
                },
                error => {
                    this.lsSegmentos = new Array<Segmento>();
                    error.json()["Message"];
                    this.blockUI.stop(); // Start blocking
                });
        } catch (ex) {

        }

    }

    segmento_onChange() {
        this.producto.segmento.tipoProducto = this.tipoProducto;
    }

    marca_onChange(marca: Marca) {
        this.blockUI.start();
        this.modeloService.getByMarca(marca.id_marca).subscribe(
            data => {
                this.lsModelos = [];
                for (var i = 0; i < data.json().length; i++) {
                    let modelo = new Modelo(
                        data.json()[i]["id_modelo"],
                        data.json()[i]["n_modelo"]
                    );
                    this.lsModelos.push(modelo);
                }
                this.blockUI.stop();
            },
            error => {
                this.lsModelos = new Array<Modelo>();
                error.json()["Message"];
                this.blockUI.stop();
            });
    }

    modelo_onChange() {
        this.producto.modelo = this.modeloProducto;
        this.producto.modelo.marca = this.marcaProducto;
    }

    public getProducto() {
        //this.getData.emit(this.producto);
    }

    getPoducto() {
        return this.producto;
    }

    agregarTipoProducto() {
        this.dialogService.agregarTipoProducto().subscribe(
            result => {
                this.cargarTiposProducto();
            });
    }

    agregarSegmento() {
        try {
            if (this.tipoProducto.id_tipo_producto != null) {
                this.dialogService.agregarSegmento(this.tipoProducto).subscribe(
                    result => {
                        this.tipoProducto_onChange(this.tipoProducto);
                    }, error => {
                    });
            }
        } catch (ex) {
            this.toastr.error("Debe seleccionar un tipo de producto antes", "Error!");
        }
    }

    agregarMarca() {
        this.dialogService.agregarMarca().subscribe(
            result => {
                this.cargarMarcas();
            });
    }

    agregarModelo() {
        try {
            if (this.marcaProducto.id_marca) {
                this.dialogService.agregarModelo(this.marcaProducto).subscribe(
                    result => {
                        this.marca_onChange(this.marcaProducto);
                    },
                    error => {
                    });
            }
        } catch (ex) {
            this.toastr.error("Debe seleccionar una marca antes", "Error!");
        }
    }

    agregarCombustible() {
        this.dialogService.agregarCombustible().subscribe(
            result => {
                this.cargarCombustibles();
            });
    }
    agregarColor() {
        this.dialogService.agregarColor().subscribe(
            result => {
                this.cargarColores();
            });
    }

    cargarListado(params: any) {
        this.blockUI.start();
        this.items = null;
        //Si se ingresa un documento, traemos las solicitudes del cliente correspondiente
        this.productoService.getAll().subscribe(
            data => {
                if (data) {
                    this.productosJSONArray = [];
                    for (var i = 0; i < data.length; i++) {
                        let prodJSON = new Array<{
                            id_producto: number,
                            modelo: string,
                            marca: string,
                            color: string,
                            anio: number,
                            segmento: string,
                            combustible: string,
                            precio: number
                        }>();

                        prodJSON["id_producto"] = data[i]["id_producto"];
                        prodJSON["modelo"] = data[i]["modelo"]["n_modelo"];
                        prodJSON["marca"] = data[i]["modelo"]["marca"]["n_marca"];
                        prodJSON["color"] = data[i]["color"]["n_color"];
                        prodJSON["anio"] = data[i]["anio"];
                        prodJSON["segmento"] = data[i]["segmento"]["n_segmento"];
                        prodJSON["combustible"] = data[i]["combustible"]["n_combustible"];
                        prodJSON["precio"] = data[i]["precio"];

                        this.productosJSONArray.push(prodJSON);
                    }

                    let itemResource = new DataTableResource(this.productosJSONArray);
                    itemResource.query(params).then(items => this.items = items);
                    itemResource.count().then(count => {
                        this.itemCount = count;
                        if (this.itemCount == 0) {
                            this.items = null;
                            this.toastr.info("No se han encontrado productos", "Info");
                        }
                    });

                    this.blockUI.stop();
                }
            },
            error => {
                this.items = null;
                this.blockUI.stop();
                this.toastr.info("Ha ocurrido un error al intentar consultar los productos, por favor intente nuevamente mas tarde", "Error");
            }
        );
    }

    agregarProducto() {
        this.blockUI.start();
        this.producto.anio = this.anio;
        this.productoService.create(this.producto).subscribe(
            data => {
                if (data) {
                    this.blockUI.stop();
                    this.limpiar();
                    this.toastr.success("El producto fue agregado correctamente", "Exito");
                }
            },
            error => {
                this.blockUI.stop();
                let mensajeError: String = error["_body"];
                if (mensajeError.includes("El dominio ya existe")) {
                    this.toastr.error("El dominio ingresado ya se encuentra registrado para otro vehiculo", "Error");
                } else {
                    this.toastr.error("Ha ocurrido un error inesperado. Por favor intente mas tarde", "Error");
                }
            }
        )
    }

    limpiar() {
        this.producto = new Producto();
        this.tipoProducto = new TipoProducto();
        this.marcaProducto = new Marca();
        this.modeloProducto = new Modelo();
        this.anio = null;
    }

    test() {
        this.producto;
    }
}
