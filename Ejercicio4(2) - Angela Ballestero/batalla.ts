import Personaje from './personaje';
import Guerrero from './guerrero';
import Mago from './mago';

class Batalla{
    enfrentamiento(personaje1 : Personaje, personaje2 : Personaje) : void{
        while (personaje1.getVida() > 0 && personaje2.getVida() > 0 && personaje1.getEnergía() > 0 && personaje2.getEnergía() > 0){
            let turno = Math.random() < 0.5 ? personaje1 : personaje2;
            let otro = turno === personaje1 ? personaje2 : personaje1;

            console.log(`Es el turno de ${turno.getNombre()}.`);

            if (turno instanceof Guerrero){
                (turno as Guerrero).ataqueNormal(otro);
            }else if (turno instanceof Mago){
                (turno as Mago).ataqueDistancia(otro);
            }else{
                turno.atacar(otro);
            }

            if (otro.getVida() <= 0){
                console.log(`${otro.getNombre()} ha sido derrotado.`);
                break;
            }

            if (turno.getEnergía() > 0){
                turno.curar();
            }

            console.log(`${turno.getNombre()} tiene ${turno.getVida()} puntos de vida y ${turno.getEnergía()} puntos de energía.`);
            console.log(`${otro.getNombre()} tiene ${otro.getVida()} puntos de vida y ${otro.getEnergía()} puntos de energía.`);
        }

        if (personaje1.getVida() > personaje2.getVida()){
            console.log(`${personaje1.getNombre()} ha ganado la batalla.`);
        }else if (personaje2.getVida() > personaje1.getVida()){
            console.log(`${personaje2.getNombre()} ha ganado la batalla.`);
        }else{
            console.log("La batalla ha terminado en empate.");
        }
    }
}

export default Batalla;