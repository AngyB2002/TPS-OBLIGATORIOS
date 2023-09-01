import Personaje from './personaje';

class Guerrero extends Personaje{
    constructor(nombre : string){
        super(nombre, 150, 30, 3);
    }

    ataqueNormal(objetivo : Personaje) : void{
        if (this.getEnergía() >= 1){
            objetivo.recibirAtaque(this.getDaño());
            this.setEnergía(this.getEnergía() - 1);
            console.log(`${this.getNombre()} realiza un ataque normal a ${objetivo.getNombre()} por ${this.getDaño()} de daño.`);
        }else{
            console.log(`${this.getNombre()} no tiene suficiente energía para atacar.`);
        }
    }
}

export default Guerrero;