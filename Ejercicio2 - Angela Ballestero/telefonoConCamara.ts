//-Implementar las clases y métodos que se muestran - Agregar variables/métodos adicionales - Implementar cada clase en un archivo diferente - Subir las cosas a GitHub y avisar por Slack.

import { Telefono } from './telefono';

export class TelefonoConCamara extends Telefono{
    private fotos: string[];

    constructor(){
        super();
        this.fotos = [];
    }

    sacarFoto(): void{
        if (this.estaPrendido && this.bateriaActual > 0){
            this.fotos.push(`Foto ${this.fotos.length + 1}`);
            this.bateriaActual -= 8;
            console.log("Foto tomada.");
        } else{
            console.log("El teléfono no está prendido o no tiene batería.");
        }
    }

    verFotos(): void{
        console.log("Fotos en el teléfono:");
        this.fotos.forEach((foto, index) =>{
            console.log(`${index + 1}: ${foto}`);
        });
    }
}