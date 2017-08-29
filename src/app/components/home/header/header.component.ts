import { Component } from '@angular/core';
import { Router, NavigationExtras } from '@angular/router';
import { UserService } from '../../../services/index';
import { User } from '../../../models/index';
import { AuthenticationService } from '../../../services/common-services/index';
import { BlockUI, NgBlockUI } from 'ng-block-ui';
import { ToastsManager } from 'ng2-toastr/ng2-toastr';
import { Empleado } from '../../../entities/empleado';

@Component({
    selector: 'app-header',
    moduleId: module.id,
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.css'],
    providers: [UserService, AuthenticationService]
})
export class HeaderComponent {
    @BlockUI() blockUI: NgBlockUI;

    currentUser: User;
    empleado: Empleado;

    constructor(private userService: UserService,
        private authenticationService: AuthenticationService,
        public toastr: ToastsManager
    ) {
        this.empleado = JSON.parse(localStorage.getItem('currentUser'));
    }

    logOut() {
        this.blockUI.start();
        this.authenticationService.logout();
        this.blockUI.stop();
        this.toastr.info("Hasta pronto!", "Info");
    }

}
