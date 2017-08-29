import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { AlertService, AuthenticationService } from '../../services/common-services/index';
import { ToastsManager } from 'ng2-toastr/ng2-toastr';

import { BlockUI, NgBlockUI } from 'ng-block-ui';

@Component({
    moduleId: module.id,
    selector: 'login',
    templateUrl: 'login.component.html'
})

export class LoginComponent implements OnInit {
    @BlockUI() blockUI: NgBlockUI;

    model: any = {};
    loading = false;
    returnUrl: string;

    constructor(
        private route: ActivatedRoute,
        private router: Router,
        private authenticationService: AuthenticationService,
        public toastr: ToastsManager
    ) {

    }

    ngOnInit() {
        // reset login status
        this.authenticationService.logout();

        // get return url from route parameters or default to '/'
        this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/home';
    }

    login() {
        this.blockUI.start();
        this.authenticationService.login(this.model.username, this.model.password)
            .subscribe(
            data => {
                this.router.navigate([this.returnUrl]);
                this.blockUI.stop();
                this.toastr.info("Bienvenido a Emblema Automotores", "Info");
            },
            error => {
                this.blockUI.stop();
                this.toastr.error("El usuario o la contraseña son incorrectos", "Error!");
            });
    }
}
