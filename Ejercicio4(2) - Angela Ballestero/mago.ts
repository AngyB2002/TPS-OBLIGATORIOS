import Personaje from './personaje';

class Mago extends Personaje{
    constructor(nombre : string){
        super(nombre, 100, 25, 5);
    }
    public ataqueDistancia(objetivo : Personaje) : void{
        if (super.getEnergía() >= 1){
            super.recibirAtaque(super.getDaño());
            super.setEnergía(super.getEnergía() - 1);
            console.log(`${super.getNombre()} ataca a distancia a ${objetivo.getNombre()} por ${super.getDaño()} de daño.`);
        }else{
            console.log(`${super.getNombre()} no tiene suficiente energía para atacar a distancia.`);
        }
    }
}

export default Mago;