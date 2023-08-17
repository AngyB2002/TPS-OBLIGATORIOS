//-Implementar las clases y métodos que se muestran - Agregar variables/métodos adicionales - Implementar cada clase en un archivo diferente - Subir las cosas a GitHub y avisar por Slack.

export class Telefono{
    protected estaPrendido: boolean;
    protected bateriaActual: number;

    constructor(){
        this.estaPrendido = false;
        this.bateriaActual = 100;
    }

    mandarMensaje(destinatario: string, mensaje: string): void{
        if (this.estaPrendido && this.bateriaActual > 0){
            console.log(`Enviando mensaje a ${destinatario}: "${mensaje}"`);
            this.bateriaActual -= 5;
        } else{
            console.log("El teléfono no está prendido o no tiene batería.");
        }
    }

    hacerLlamada(numero: string): void{
        if (this.estaPrendido && this.bateriaActual > 0){
            console.log(`Llamando a ${numero}`);
            this.bateriaActual -= 10;
        } else{
            console.log("El teléfono no está prendido o no tiene batería.");
        }
    }

    prenderApagar(): void{
        this.estaPrendido = !this.estaPrendido;
        console.log(`Teléfono ${this.estaPrendido ? 'prendido' : 'apagado'}`);
    }
}