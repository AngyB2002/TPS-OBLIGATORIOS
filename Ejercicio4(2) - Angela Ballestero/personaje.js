"use strict";
/*class Personaje{
    private nombre: string;
    private vida: number;
    private daño: number;
    private energía: number;
  
    constructor(nombre: string, vida: number, daño: number, energía: number) {
      this.nombre = nombre;
      this.vida = vida;
      this.daño = daño;
      this.energía = energía;
    }
  
    getNombre(): string {
      return this.nombre;
    }
  
    getVida(): number {
      return this.vida;
    }
  
    getDaño(): number {
      return this.daño;
    }
  
    getEnergía(): number {
      return this.energía;
    }
  
    setEnergía(energía: number) {
      this.energía = energía;
    }
  
    atacar(objetivo: Personaje): void {
      if (this.energía >= 1) {
        objetivo.recibirAtaque(this.daño);
        this.energía -= 1;
        console.log(`${this.nombre} ataca a ${objetivo.nombre} por ${this.daño} de daño.`);
      } else {
        console.log(`${this.nombre} no tiene suficiente energía para atacar.`);
      }
    }
  
    recibirAtaque(cantidad: number): void {
      this.vida -= cantidad;
      if (this.vida < 0) {
        this.vida = 0;
      }
    }
  
    curar(): void {
      if (this.energía >= 1) {
        const cantidadACurar = Math.floor(this.vida * 0.1);
        this.vida += cantidadACurar;
        this.energía -= 1;
        console.log(`${this.nombre} se ha curado ${cantidadACurar} puntos de vida.`);
      } else {
        console.log(`${this.nombre} no tiene suficiente energía para curar.`);
      }
    }
  }
  
  export default Personaje;*/
exports.__esModule = true;
var Personaje = /** @class */ (function () {
    function Personaje(nombre, vida, daño, energía) {
        this.nombre = nombre;
        this.vida = vida;
        this.daño = daño;
        this.energía = energía;
    }
    Personaje.prototype.getNombre = function () {
        return this.nombre;
    };
    Personaje.prototype.getVida = function () {
        return this.vida;
    };
    Personaje.prototype.getDaño = function () {
        return this.daño;
    };
    Personaje.prototype.getEnergía = function () {
        return this.energía;
    };
    Personaje.prototype.setEnergía = function (energía) {
        this.energía = energía;
    };
    Personaje.prototype.atacar = function (objetivo) {
        if (this.energía >= 1) {
            objetivo.recibirAtaque(this.daño);
            this.energía -= 1;
            console.log("".concat(this.nombre, " ataca a ").concat(objetivo.getNombre(), " por ").concat(this.daño, " de da\u00F1o."));
        }
        else {
            console.log("".concat(this.nombre, " no tiene suficiente energ\u00EDa para atacar."));
        }
    };
    Personaje.prototype.recibirAtaque = function (cantidad) {
        this.vida -= cantidad;
        if (this.vida < 0) {
            this.vida = 0;
        }
    };
    Personaje.prototype.curar = function () {
        if (this.energía >= 1) {
            var cantidadACurar = Math.floor(this.vida * 0.1);
            this.vida += cantidadACurar;
            this.energía -= 1;
            console.log("".concat(this.nombre, " se ha curado ").concat(cantidadACurar, " puntos de vida."));
        }
        else {
            console.log("".concat(this.nombre, " no tiene suficiente energ\u00EDa para curar."));
        }
    };
    return Personaje;
}());
exports["default"] = Personaje;
