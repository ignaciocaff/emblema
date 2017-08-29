"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var platform_browser_1 = require("@angular/platform-browser");
var forms_1 = require("@angular/forms");
var http_1 = require("@angular/http");
var ng_block_ui_1 = require("ng-block-ui");
var app_component_1 = require("./app.component");
var app_routing_module_1 = require("./app-routing.module");
var app_config_1 = require("./app.config");
var index_1 = require("./directives/index");
var index_2 = require("./guards/index");
var index_3 = require("./services/common-services/index");
var index_4 = require("./components/home/index");
var index_5 = require("./components/login/index");
var ng2_completer_1 = require("ng2-completer");
//Dialog imports
var index_6 = require("./components/common/dialog/index");
var index_7 = require("./components/common/localidades/index");
var index_8 = require("./components/common/tipoProducto/index");
var index_9 = require("./components/common/segmentos/index");
var index_10 = require("./components/common/marcas/index");
var index_11 = require("./components/common/modelos/index");
var index_12 = require("./components/common/colores/index");
var index_13 = require("./components/common/combustibles/index");
//------------------------------------------------------------------
var index_14 = require("./services/common-services/index");
var material_1 = require("@angular/material");
var animations_1 = require("@angular/platform-browser/animations");
var ng2_toastr_1 = require("ng2-toastr/ng2-toastr");
var CustomOption = (function (_super) {
    __extends(CustomOption, _super);
    function CustomOption() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.animate = 'flyRight'; // you can override any options available
        _this.newestOnTop = false;
        _this.showCloseButton = true;
        _this.positionClass = 'toast-bottom-right';
        return _this;
    }
    return CustomOption;
}(ng2_toastr_1.ToastOptions));
exports.CustomOption = CustomOption;
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    core_1.NgModule({
        imports: [
            platform_browser_1.BrowserModule,
            forms_1.FormsModule,
            http_1.HttpModule,
            app_routing_module_1.AppRoutingModule,
            index_4.HomeModule,
            ng_block_ui_1.BlockUIModule,
            ng2_completer_1.Ng2CompleterModule,
            animations_1.BrowserAnimationsModule,
            material_1.MdDialogModule,
            material_1.MdButtonModule,
            ng2_toastr_1.ToastModule.forRoot()
        ],
        declarations: [
            app_component_1.AppComponent,
            index_1.AlertComponent,
            index_5.LoginComponent,
            index_6.ConfirmDialogComponent,
            index_7.LocalidadesCargaComponent,
            index_8.TipoProductoCargaComponent,
            index_9.SegmentosCargaComponent,
            index_10.MarcasCargaComponent,
            index_11.ModelosCargaComponent,
            index_12.ColoresCargaComponent,
            index_13.CombustiblesCargaComponent
        ],
        providers: [
            app_config_1.AppConfig,
            index_2.AuthGuard,
            index_3.AlertService,
            index_3.AuthenticationService,
            ng_block_ui_1.BlockUIService,
            index_14.DialogService,
            { provide: ng2_toastr_1.ToastOptions, useClass: CustomOption },
        ],
        entryComponents: [
            index_6.ConfirmDialogComponent,
            index_7.LocalidadesCargaComponent,
            index_8.TipoProductoCargaComponent,
            index_9.SegmentosCargaComponent,
            index_10.MarcasCargaComponent,
            index_11.ModelosCargaComponent,
            index_12.ColoresCargaComponent,
            index_13.CombustiblesCargaComponent
        ],
        bootstrap: [app_component_1.AppComponent]
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map