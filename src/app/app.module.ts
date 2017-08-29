import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { BlockUIModule, BlockUIService } from 'ng-block-ui';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { AppConfig } from './app.config';

import { AlertComponent } from './directives/index';
import { AuthGuard } from './guards/index';
import { AlertService, AuthenticationService } from './services/common-services/index';

import { HomeModule } from './components/home/index';
import { LoginComponent } from './components/login/index';
import { Ng2CompleterModule } from "ng2-completer";

//Dialog imports
import { ConfirmDialogComponent } from './components/common/dialog/index';
import { LocalidadesCargaComponent } from './components/common/localidades/index';
import { TipoProductoCargaComponent } from './components/common/tipoProducto/index';
import { SegmentosCargaComponent } from './components/common/segmentos/index';
import { MarcasCargaComponent } from './components/common/marcas/index';
import { ModelosCargaComponent } from './components/common/modelos/index';
import { ColoresCargaComponent } from './components/common/colores/index';
import { CombustiblesCargaComponent } from './components/common/combustibles/index';
import { SolicitudesConfirmacionComponent } from './components/home/solicitudes/index';
//------------------------------------------------------------------
import { DialogService } from './services/common-services/index';
import { MdDialogModule, MdButtonModule } from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastModule, ToastOptions } from 'ng2-toastr/ng2-toastr';

export class CustomOption extends ToastOptions {
    animate = 'flyRight'; // you can override any options available
    newestOnTop = false;
    showCloseButton = true;
    positionClass = 'toast-bottom-right';
}


@NgModule({
    imports: [
        BrowserModule,
        FormsModule,
        HttpModule,
        HomeModule,
        AppRoutingModule,
        BlockUIModule,
        Ng2CompleterModule,
        BrowserAnimationsModule,
        MdDialogModule,
        MdButtonModule,
        ToastModule.forRoot(),
    ],
    declarations: [
        AppComponent,
        AlertComponent,
        LoginComponent,
        ConfirmDialogComponent,
        LocalidadesCargaComponent,
        TipoProductoCargaComponent,
        SegmentosCargaComponent,
        MarcasCargaComponent,
        ModelosCargaComponent,
        ColoresCargaComponent,
        CombustiblesCargaComponent,
        SolicitudesConfirmacionComponent
    ],
    providers: [
        AppConfig,
        AuthGuard,
        AlertService,
        AuthenticationService,
        BlockUIService,
        DialogService,
        { provide: ToastOptions, useClass: CustomOption },
    ],
    entryComponents: [
        ConfirmDialogComponent,
        LocalidadesCargaComponent,
        TipoProductoCargaComponent,
        SegmentosCargaComponent,
        MarcasCargaComponent,
        ModelosCargaComponent,
        ColoresCargaComponent,
        CombustiblesCargaComponent,
        SolicitudesConfirmacionComponent
    ],

    bootstrap: [AppComponent]
})

export class AppModule {

}