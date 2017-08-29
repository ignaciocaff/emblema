"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var platform_browser_1 = require("@angular/platform-browser");
var core_1 = require("@angular/core");
var forms_1 = require("@angular/forms");
var angular_2_data_table_1 = require("angular-2-data-table");
var index_1 = require("../common/index");
var home_routing_module_1 = require("./home-routing.module");
var index_2 = require("../common/domicilio/index");
var index_3 = require("./clientes/index");
var index_4 = require("./empleados/index");
var index_5 = require("./solicitudes/index");
var index_6 = require("./usuarios/index");
var index_7 = require("../../services/entity-services/index");
var index_8 = require("./header/index");
var index_9 = require("./index");
var HomeModule = (function () {
    function HomeModule() {
    }
    return HomeModule;
}());
HomeModule = __decorate([
    core_1.NgModule({
        imports: [
            platform_browser_1.BrowserModule,
            index_1.AppCommonModule,
            forms_1.FormsModule,
            home_routing_module_1.HomeRoutingModule,
            angular_2_data_table_1.DataTableModule
        ],
        declarations: [
            index_8.HeaderComponent,
            index_5.SolicitudesCargaComponent,
            index_3.ClienteCargaComponent,
            index_3.ConyugeCargaComponent,
            index_3.CotitularCargaComponent,
            index_3.ClientesListadoComponent,
            index_3.EmpleoCargaComponent,
            index_5.ProductoSeleccionComponent,
            index_5.SeniaCargaComponent,
            index_9.HomeComponent,
            index_6.UsuariosListadoComponent,
            index_2.DomicilioComponent,
            index_5.SolicitudesListadoComponent,
            index_4.EmpleadoCargaComponent
        ],
        providers: [
            index_7.SolicitudService,
            index_7.TipoEmpleoService,
            index_7.PersonaService
        ],
        exports: [
            index_9.HomeComponent,
            index_8.HeaderComponent
        ]
    })
], HomeModule);
exports.HomeModule = HomeModule;
//# sourceMappingURL=home.module.js.map