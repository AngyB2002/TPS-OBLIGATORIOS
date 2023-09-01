"use strict";
/*import Personaje from './personaje';
import Guerrero from './guerrero';
import Mago from './mago';

class Batalla {
  enfrentamiento(personaje1: Personaje, personaje2: Personaje): void {
    while (personaje1.getVida() > 0 && personaje2.getVida() > 0 && personaje1.getEnergía() > 0 && personaje2.getEnergía() > 0) {
      const turno = Math.random() < 0.5 ? personaje1 : personaje2;
      const otro = turno === personaje1 ? personaje2 : personaje1;

      console.log(`Es el turno de ${turno.getNombre}.`);

      if (turno instanceof Guerrero) {
        (turno as Guerrero).ataqueNormal(otro);
      } else if (turno instanceof Mago) {
        (turno as Mago).ataqueDistancia(otro);
      } else {
        turno.atacar(otro);
      }

      if (otro.getVida() <= 0) {
        console.log(`${otro.getNombre} ha sido derrotado.`);
        break;
      }

      if (turno.getEnergía() > 0) {
        turno.curar();
      }

      console.log(`${turno.getNombre} tiene ${turno.getVida} puntos de vida y ${turno.getEnergía} puntos de energía.`);
      console.log(`${otro.getNombre} tiene ${otro.getVida} puntos de vida y ${otro.getEnergía} puntos de energía.`);
    }

    if (personaje1.getVida() > personaje2.getVida()) {
      console.log(`${personaje1.getNombre} ha ganado la batalla.`);
    } else if (personaje2.getVida() > personaje1.getVida()) {
      console.log(`${personaje2.getNombre} ha ganado la batalla.`);
    } else {
      console.log("La batalla ha terminado en empate.");
    }
  }
}

export default Batalla;*/
exports.__esModule = true;
var guerrero_1 = require("./guerrero");
var mago_1 = require("./mago");
var Batalla = /** @class */ (function () {
    function Batalla() {
    }
    Batalla.prototype.enfrentamiento = function (personaje1, personaje2) {
        while (personaje1.getVida() > 0 && personaje2.getVida() > 0 && personaje1.getEnergía() > 0 && personaje2.getEnergía() > 0) {
            var turno = Math.random() < 0.5 ? personaje1 : personaje2;
            var otro = turno === personaje1 ? personaje2 : personaje1;
            console.log("Es el turno de ".concat(turno.getNombre(), "."));
            if (turno instanceof guerrero_1["default"]) {
                turno.ataqueNormal(otro);
            }
            else if (turno instanceof mago_1["default"]) {
                turno.ataqueDistancia(otro);
            }
            else {
                turno.atacar(otro);
            }
            if (otro.getVida() <= 0) {
                console.log("".concat(otro.getNombre(), " ha sido derrotado."));
                break;
            }
            if (turno.getEnergía() > 0) {
                turno.curar();
            }
            console.log("".concat(turno.getNombre(), " tiene ").concat(turno.getVida(), " puntos de vida y ").concat(turno.getEnergía(), " puntos de energ\u00EDa."));
            console.log("".concat(otro.getNombre(), " tiene ").concat(otro.getVida(), " puntos de vida y ").concat(otro.getEnergía(), " puntos de energ\u00EDa."));
        }
        if (personaje1.getVida() > personaje2.getVida()) {
            console.log("".concat(personaje1.getNombre(), " ha ganado la batalla."));
        }
        else if (personaje2.getVida() > personaje1.getVida()) {
            console.log("".concat(personaje2.getNombre(), " ha ganado la batalla."));
        }
        else {
            console.log("La batalla ha terminado en empate.");
        }
    };
    return Batalla;
}());
exports["default"] = Batalla;
