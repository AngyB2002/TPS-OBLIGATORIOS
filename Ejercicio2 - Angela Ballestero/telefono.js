"use strict";
exports.__esModule = true;
exports.Telefono = void 0;
var Telefono = /** @class */ (function () {
    function Telefono() {
        this.estaPrendido = false;
        this.bateriaActual = 100;
    }
    Telefono.prototype.mandarMensaje = function (destinatario, mensaje) {
        if (this.estaPrendido && this.bateriaActual > 0) {
            console.log("Enviando mensaje a ".concat(destinatario, ": \"").concat(mensaje, "\""));
            this.bateriaActual -= 5;
        }
        else {
            console.log("El teléfono no está prendido o no tiene batería.");
        }
    };
    Telefono.prototype.hacerLlamada = function (numero) {
        if (this.estaPrendido && this.bateriaActual > 0) {
            console.log("Llamando a ".concat(numero));
            this.bateriaActual -= 10;
        }
        else {
            console.log("El teléfono no está prendido o no tiene batería.");
        }
    };
    Telefono.prototype.prenderApagar = function () {
        this.estaPrendido = !this.estaPrendido;
        console.log("Tel\u00E9fono ".concat(this.estaPrendido ? 'prendido' : 'apagado'));
    };
    return Telefono;
}());
exports.Telefono = Telefono;
