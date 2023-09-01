import Personaje from './personaje';

class Mago extends Personaje{
    constructor(nombre : string){
        super(nombre, 100, 25, 5);
    }
    ataqueDistancia(objetivo : Personaje) : void{
        if (this.getEnergía() >= 1){
            objetivo.recibirAtaque(this.getDaño());
            this.setEnergía(this.getEnergía() - 1);
            console.log(`${this.getNombre()} ataca a distancia a ${objetivo.getNombre()} por ${this.getDaño()} de daño.`);
        }else{
            console.log(`${this.getNombre()} no tiene suficiente energía para atacar a distancia.`);
        }
    }
}

export default Mago;