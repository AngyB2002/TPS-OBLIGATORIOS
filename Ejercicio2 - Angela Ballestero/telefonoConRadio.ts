//-Implementar las clases y métodos que se muestran - Agregar variables/métodos adicionales - Implementar cada clase en un archivo diferente - Subir las cosas a GitHub y avisar por Slack.

import { Telefono } from './telefono';

export class TelefonoConRadio extends Telefono{
    private frecuenciaActual: number;

    constructor(){
        super();
        this.frecuenciaActual = 100.0;
    }

    cambiarFrecuencia(nuevaFrecuencia: number): void{
        if (this.estaPrendido && this.bateriaActual > 0){
            this.frecuenciaActual = nuevaFrecuencia;
            console.log(`Frecuencia cambiada a ${nuevaFrecuencia}`);
        } else{
            console.log("El teléfono no está prendido o no tiene batería.");
        }
    }

    verFrecuenciaActual(): number{
        if (this.estaPrendido && this.bateriaActual > 0){
            return this.frecuenciaActual;
        } else {
            console.log("El teléfono no está prendido o no tiene batería.");
            return 0;
        }
    }
}