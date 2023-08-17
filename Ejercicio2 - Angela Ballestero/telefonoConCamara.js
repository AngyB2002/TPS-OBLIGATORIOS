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
exports.TelefonoConCamara = void 0;
var telefono_1 = require("./telefono");
var TelefonoConCamara = /** @class */ (function (_super) {
    __extends(TelefonoConCamara, _super);
    function TelefonoConCamara() {
        var _this = _super.call(this) || this;
        _this.fotos = [];
        return _this;
    }
    TelefonoConCamara.prototype.sacarFoto = function () {
        if (this.estaPrendido && this.bateriaActual > 0) {
            this.fotos.push("Foto ".concat(this.fotos.length + 1));
            this.bateriaActual -= 8;
            console.log("Foto tomada.");
        }
        else {
            console.log("El teléfono no está prendido o no tiene batería.");
        }
    };
    TelefonoConCamara.prototype.verFotos = function () {
        console.log("Fotos en el teléfono:");
        this.fotos.forEach(function (foto, index) {
            console.log("".concat(index + 1, ": ").concat(foto));
        });
    };
    return TelefonoConCamara;
}(telefono_1.Telefono));
exports.TelefonoConCamara = TelefonoConCamara;
