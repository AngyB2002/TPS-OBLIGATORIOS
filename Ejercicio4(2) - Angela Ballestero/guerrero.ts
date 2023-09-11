import Personaje from './personaje';

class Guerrero extends Personaje{
    constructor(nombre : string){
        super(nombre, 150, 30, 3);
    }

    public ataqueNormal(objetivo : Personaje) : void{
        if (super.getEnergía() >= 1){
            super.recibirAtaque(super.getDaño());
            super.setEnergía(super.getEnergía() - 1);
            console.log(`${super.getNombre()} realiza un ataque normal a ${objetivo.getNombre()} por ${super.getDaño()} de daño.`);
        }else{
            console.log(`${super.getNombre()} no tiene suficiente energía para atacar.`);
        }
    }
}

export default Guerrero;