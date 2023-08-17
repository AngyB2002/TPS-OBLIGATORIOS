"use strict";
exports.__esModule = true;
var telefono_1 = require("./telefono");
var telefonoConCamara_1 = require("./telefonoConCamara");
var telefonoConRadio_1 = require("./telefonoConRadio");
function main() {
    var telefonoBasico = new telefono_1.Telefono();
    var telefonoCamara = new telefonoConCamara_1.TelefonoConCamara();
    var telefonoRadio = new telefonoConRadio_1.TelefonoConRadio();
    telefonoBasico.prenderApagar();
    telefonoBasico.mandarMensaje("Mamá", "¡Te extraño, besos al cielo <3!");
    telefonoBasico.hacerLlamada("2983-571540");
    telefonoCamara.prenderApagar();
    telefonoCamara.sacarFoto();
    telefonoCamara.sacarFoto();
    telefonoCamara.verFotos();
    telefonoRadio.prenderApagar();
    telefonoRadio.cambiarFrecuencia(101.5);
    console.log("Frecuencia actual: ".concat(telefonoRadio.verFrecuenciaActual()));
}
main();
