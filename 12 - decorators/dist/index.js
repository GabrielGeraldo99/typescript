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
function Decorator() {
    return function (target, key, descriptor) {
        console.log('Chamando Decorator');
    };
}
var Planet = /** @class */ (function () {
    function Planet(name) {
        this.name = name;
    }
    Planet.prototype.calculate = function (value) {
        console.log("Calculando ".concat(value, " * 2"));
        return value * 2;
    };
    __decorate([
        Decorator(),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Number]),
        __metadata("design:returntype", void 0)
    ], Planet.prototype, "calculate", null);
    return Planet;
}());
var planet = new Planet('Terra');
var result = planet.calculate(5);
console.log("Resultado: ".concat(result));
