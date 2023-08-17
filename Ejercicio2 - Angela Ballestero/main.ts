//-Implementar las clases y métodos que se muestran - Agregar variables/métodos adicionales - Implementar cada clase en un archivo diferente - Subir las cosas a GitHub y avisar por Slack. 

import { Telefono } from './telefono';
import { TelefonoConCamara } from './telefonoConCamara';
import { TelefonoConRadio } from './telefonoConRadio';

function main(){
    let telefonoBasico = new Telefono();
    let telefonoCamara = new TelefonoConCamara();
    let telefonoRadio = new TelefonoConRadio();

    telefonoBasico.prenderApagar();
    telefonoBasico.mandarMensaje("Mamá", "¡Te extraño, besos al cielo <3!");
    telefonoBasico.hacerLlamada("2983-571540");

    telefonoCamara.prenderApagar();
    telefonoCamara.sacarFoto();
    telefonoCamara.sacarFoto();
    telefonoCamara.verFotos();

    telefonoRadio.prenderApagar();
    telefonoRadio.cambiarFrecuencia(101.5);
    console.log(`Frecuencia actual: ${telefonoRadio.verFrecuenciaActual()}`);
}

main();