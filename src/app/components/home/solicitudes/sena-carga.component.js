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
var SenaCarga = (function () {
    function SenaCarga() {
        this.myOptions = {
            // other options...
            dateFormat: 'dd/mm/yyyy',
            dayLabels: { su: "Do", mo: "Lu", tu: "Ma", we: "Mi", th: "Ju", fr: "Vi", sa: "Sa" },
            monthLabels: { 1: "Ene", 2: "Feb", 3: "Mar", 4: "Abr", 5: "May", 6: "Jun", 7: "Jul", 8: "Ago", 9: "Sep", 10: "Oct", 11: "Nov", 12: "Dic" },
            todayBtnTxt: "Hoy",
            firstDayOfWeek: "mo",
            sunHighlight: true,
        };
    }
    // optional date changed callback
    SenaCarga.prototype.onDateChanged = function (event) {
        // date selected
    };
    return SenaCarga;
}());
SenaCarga = __decorate([
    core_1.Component({
        moduleId: module.id,
        selector: 'sena-carga',
        templateUrl: './sena-carga.component.html'
    }),
    __metadata("design:paramtypes", [])
], SenaCarga);
exports.SenaCarga = SenaCarga;
//# sourceMappingURL=sena-carga.component.js.map