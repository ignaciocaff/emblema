import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { DataTableModule } from 'angular-2-data-table';

import { AppCommonModule } from '../common/index';
import { HomeRoutingModule } from './home-routing.module';

import {
    DomicilioComponent
} from '../common/domicilio/index';

import {
    ClienteCargaComponent,
    ConyugeCargaComponent,
    CotitularCargaComponent,
    ClientesListadoComponent,
    EmpleoCargaComponent
} from './clientes/index';

import { 
    EmpleadosCargaComponent,
    EmpleadosListadoComponent
 } from './empleados/index';
import {
    ProductoSeleccionComponent,
    SeniaCargaComponent,
    SolicitudesCargaComponent,
    SolicitudesListadoComponent,
    ScoringComponent,
    ContratosCargaComponent,
    ContratosListadoComponent,
    MisContratosListadoComponent

} from './solicitudes/index';

import {
    UsuariosListadoComponent
} from './usuarios/index';

import {
    SolicitudService,
    TipoEmpleoService,
    PersonaService
} from '../../services/entity-services/index';

import { HeaderComponent } from './header/index';
import { HomeComponent } from './index';

import {
    ProductosCargaComponent,
    ProductosListadoComponent
} from '../common/productos/index';

@NgModule({
    imports: [
        BrowserModule,
        AppCommonModule,
        FormsModule,
        DataTableModule,
        HomeRoutingModule,
    ],
    declarations: [
        HeaderComponent,
        SolicitudesCargaComponent,
        ClienteCargaComponent,
        ConyugeCargaComponent,
        CotitularCargaComponent,
        ClientesListadoComponent,
        EmpleoCargaComponent,
        ProductoSeleccionComponent,
        SeniaCargaComponent,
        HomeComponent,
        UsuariosListadoComponent,
        DomicilioComponent,
        SolicitudesListadoComponent,
        EmpleadosCargaComponent,
        EmpleadosListadoComponent,
        ProductosListadoComponent,
        ProductosCargaComponent,
        ScoringComponent,
        ContratosCargaComponent,
        ContratosListadoComponent,
        MisContratosListadoComponent,
    ],
    providers: [
        SolicitudService,
        TipoEmpleoService,
        PersonaService
    ],
    exports: [
        HeaderComponent
    ]
})

export class HomeModule {

}