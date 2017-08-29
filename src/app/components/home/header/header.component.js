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
var index_1 = require("../../../services/index");
var index_2 = require("../../../services/common-services/index");
var ng_block_ui_1 = require("ng-block-ui");
var ng2_toastr_1 = require("ng2-toastr/ng2-toastr");
var HeaderComponent = (function () {
    function HeaderComponent(userService, authenticationService, toastr) {
        this.userService = userService;
        this.authenticationService = authenticationService;
        this.toastr = toastr;
        this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
    }
    HeaderComponent.prototype.logOut = function () {
        this.blockUI.start();
        this.authenticationService.logout();
        this.blockUI.stop();
        this.toastr.info("Hasta pronto!", "Info");
    };
    return HeaderComponent;
}());
__decorate([
    ng_block_ui_1.BlockUI(),
    __metadata("design:type", Object)
], HeaderComponent.prototype, "blockUI", void 0);
HeaderComponent = __decorate([
    core_1.Component({
        selector: 'app-header',
        moduleId: module.id,
        templateUrl: './header.component.html',
        styleUrls: ['./header.component.css'],
        providers: [index_1.UserService, index_2.AuthenticationService]
    }),
    __metadata("design:paramtypes", [index_1.UserService,
        index_2.AuthenticationService,
        ng2_toastr_1.ToastsManager])
], HeaderComponent);
exports.HeaderComponent = HeaderComponent;
//# sourceMappingURL=header.component.js.map