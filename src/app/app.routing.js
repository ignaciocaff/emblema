"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var router_1 = require("@angular/router");
var index_1 = require("./components/home/index");
var index_2 = require("./components/login/index");
var appRoutes = [
    { path: '', component: index_1.HomeComponent /*, canActivate: [AuthGuard]*/ },
    { path: 'login', component: index_2.LoginComponent },
    // otherwise redirect to home
    { path: '**', redirectTo: '' }
];
exports.routing = router_1.RouterModule.forRoot(appRoutes);
//# sourceMappingURL=app.routing.js.map