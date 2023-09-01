"use strict";
/*import Personaje from './personaje';

class Mago extends Personaje {
  constructor(nombre: string) {
    super(nombre, 100, 25, 5);
  }

  ataqueDistancia(objetivo: Personaje): void {
    if (this.getEnergía() >= 1) {
      objetivo.recibirAtaque(this.getDaño());
      this.setEnergía(this.getEnergía() - 1);
      console.log(`${this.getNombre()} ataca a distancia a ${objetivo.getNombre()} por ${this.getDaño()} de daño.`);
    } else {
      console.log(`${this.getNombre()} no tiene suficiente energía para atacar a distancia.`);
    }
  }
}

export default Mago;*/
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
var personaje_1 = require("./personaje");
var Mago = /** @class */ (function (_super) {
    __extends(Mago, _super);
    function Mago(nombre) {
        return _super.call(this, nombre, 100, 25, 5) || this;
    }
    Mago.prototype.ataqueDistancia = function (objetivo) {
        if (this.getEnergía() >= 1) {
            objetivo.recibirAtaque(this.getDaño());
            this.setEnergía(this.getEnergía() - 1);
            console.log("".concat(this.getNombre(), " ataca a distancia a ").concat(objetivo.getNombre(), " por ").concat(this.getDaño(), " de da\u00F1o."));
        }
        else {
            console.log("".concat(this.getNombre(), " no tiene suficiente energ\u00EDa para atacar a distancia."));
        }
    };
    return Mago;
}(personaje_1["default"]));
exports["default"] = Mago;
