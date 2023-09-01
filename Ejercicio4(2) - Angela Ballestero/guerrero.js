"use strict";
/*import Personaje from './personaje';

class Guerrero extends Personaje {
  constructor(nombre: string) {
    super(nombre, 150, 30, 3);
  }

  ataqueNormal(objetivo: Personaje): void {
    if (this.getEnergía() >= 1) {
      objetivo.recibirAtaque(this.getDaño());
      this.setEnergía(this.getEnergía() - 1); // Corrección aquí
      console.log(`${this.getNombre()} realiza un ataque normal a ${objetivo.getNombre()} por ${this.getDaño()} de daño.`);
    } else {
      console.log(`${this.getNombre()} no tiene suficiente energía para atacar.`);
    }
  }
}

export default Guerrero;*/
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
var Guerrero = /** @class */ (function (_super) {
    __extends(Guerrero, _super);
    function Guerrero(nombre) {
        return _super.call(this, nombre, 150, 30, 3) || this;
    }
    Guerrero.prototype.ataqueNormal = function (objetivo) {
        if (this.getEnergía() >= 1) {
            objetivo.recibirAtaque(this.getDaño());
            this.setEnergía(this.getEnergía() - 1);
            console.log("".concat(this.getNombre(), " realiza un ataque normal a ").concat(objetivo.getNombre(), " por ").concat(this.getDaño(), " de da\u00F1o."));
        }
        else {
            console.log("".concat(this.getNombre(), " no tiene suficiente energ\u00EDa para atacar."));
        }
    };
    return Guerrero;
}(personaje_1["default"]));
exports["default"] = Guerrero;
