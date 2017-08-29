"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var index_1 = require("../../services/common-services/index");
var ng2_toastr_1 = require("ng2-toastr/ng2-toastr");
var ng_block_ui_1 = require("ng-block-ui");
var LoginComponent = (function () {
    function LoginComponent(route, router, authenticationService, toastr) {
        this.route = route;
        this.router = router;
        this.authenticationService = authenticationService;
        this.toastr = toastr;
        this.model = {};
        this.loading = false;
    }
    LoginComponent.prototype.ngOnInit = function () {
        // reset login status
        this.authenticationService.logout();
        // get return url from route parameters or default to '/'
        this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/home';
    };
    LoginComponent.prototype.login = function () {
        var _this = this;
        this.blockUI.start();
        this.authenticationService.login(this.model.username, this.model.password)
            .subscribe(function (data) {
            _this.router.navigate([_this.returnUrl]);
            _this.blockUI.stop();
            _this.toastr.info("Bienvenido a Emblema Automotores", "Info");
        }, function (error) {
            _this.blockUI.stop();
            _this.toastr.error("El usuario o la contraseña son incorrectos", "Error!");
        });
    };
    return LoginComponent;
}());
__decorate([
    ng_block_ui_1.BlockUI(),
    __metadata("design:type", Object)
], LoginComponent.prototype, "blockUI", void 0);
LoginComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        selector: 'login',
        templateUrl: 'login.component.html'
    }),
    __metadata("design:paramtypes", [router_1.ActivatedRoute,
        router_1.Router,
        index_1.AuthenticationService,
        ng2_toastr_1.ToastsManager])
], LoginComponent);
exports.LoginComponent = LoginComponent;
//# sourceMappingURL=login.component.js.map