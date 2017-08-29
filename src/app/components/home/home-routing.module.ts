import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './index';

import {
    SolicitudesCargaComponent,
    SolicitudesListadoComponent
} from './solicitudes/index';

import {
    ProductosCargaComponent,
    ProductosListadoComponent
} from '../common/productos/index';

import {
    EmpleadosCargaComponent,
    EmpleadosListadoComponent
} from './empleados/index';


import { HeaderComponent } from './header/header.component';

const homeRoutes: Routes = [
    { path: '', pathMatch: 'full', redirectTo: '/home' },
    {
        path: 'home', component: HomeComponent,
        children: [
            { path: 'solicitudes-carga', component: SolicitudesCargaComponent },
            { path: 'solicitudes-listado', component: SolicitudesListadoComponent },
            { path: 'productos-carga', component: ProductosCargaComponent },
            { path: 'productos-listado', component: ProductosListadoComponent },
            { path: 'empleados-carga', component: EmpleadosCargaComponent },
            { path: 'empleados-listado', component: EmpleadosListadoComponent },
        ]
    },
    //{ path: '**', component: HomeComponent }
];

@NgModule({
    imports: [
        RouterModule.forChild(homeRoutes)
    ],
    exports: [
        RouterModule
    ]
})
export class HomeRoutingModule { }