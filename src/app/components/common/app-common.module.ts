import { NgModule } from '@angular/core';

import { PersonasCargaComponent } from './personas/index';
//import { ProductosCargaComponent } from './productos/index';

@NgModule({
    imports: [

    ],
    declarations: [
        PersonasCargaComponent,
        //ProductosCargaComponent
    ],
    providers: [
        
    ],
    exports: [
        PersonasCargaComponent,
        //ProductosCargaComponent
    ]
})

export class AppCommonModule {

}