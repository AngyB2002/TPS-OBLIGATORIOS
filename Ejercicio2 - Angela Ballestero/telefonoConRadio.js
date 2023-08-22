"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
exports.TelefonoConRadio = void 0;
var telefono_1 = require("./telefono");
var TelefonoConRadio = /** @class */ (function (_super) {
    __extends(TelefonoConRadio, _super);
    function TelefonoConRadio() {
        var _this = _super.call(this) || this;
        _this.frecuenciaActual = 100.0;
        return _this;
    }
    TelefonoConRadio.prototype.cambiarFrecuencia = function (nuevaFrecuencia) {
        if (this.estaPrendido && this.bateriaActual > 0) {
            this.frecuenciaActual = nuevaFrecuencia;
            console.log("Frecuencia cambiada a ".concat(nuevaFrecuencia));
        }
        else {
            console.log("El teléfono no está prendido o no tiene batería.");
        }
    };
    TelefonoConRadio.prototype.verFrecuenciaActual = function () {
        if (this.estaPrendido && this.bateriaActual > 0) {
            return this.frecuenciaActual;
        }
        else {
            console.log("El teléfono no está prendido o no tiene batería.");
            return 0;
        }
    };
    return TelefonoConRadio;
}(telefono_1.Telefono));
exports.TelefonoConRadio = TelefonoConRadio;
