import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './components/home/index';
import { LoginComponent } from './components/login/index';
import { AuthGuard } from './guards/index';

const appRoutes: Routes = [
    { path: 'login', component: LoginComponent, /*canActivate: [AuthGuard]*/ },
    { path: 'home', component: HomeComponent },

    // otherwise redirect to home
    { path: '**', redirectTo: '/login' }
];

@NgModule({
    imports: [
        RouterModule.forRoot(appRoutes)
    ],
    exports: [
        RouterModule
    ]
})
export class AppRoutingModule {

}