"use strict";
// Parte 1 - Diseño de Sistemas
//• Implementar un sistema de control de stock para un kiosco. Dicho sistema debe tener un listado de los elementos disponibles para vender, y un listado de los elementos vendidos.
//• Tener en cuenta que cada ítem o elemento tiene un costo asociado.
//• El sistema debe poder cargar de un arreglo los items a vender.
//• El sistema debe poder imprimir en consola los ítems vendidos.
exports.__esModule = true;
exports.Kiosco = void 0;
var Kiosco = /** @class */ (function () {
    function Kiosco() {
        this.itemsDisponibles = [];
        this.itemsVendidos = [];
    }
    Kiosco.prototype.obtenerItemsDisponibles = function () {
        return this.itemsDisponibles;
    };
    Kiosco.prototype.obtenerItemsVendidos = function () {
        return this.itemsVendidos;
    };
    Kiosco.prototype.cargarItems = function (items) {
        this.itemsDisponibles = items;
    };
    /*venderItem(nombreItem : string){
        let itemEnStock = null;

        for (let i = 0; i < this.itemsDisponibles.length; i++){
            if (this.itemsDisponibles[i].getNombre() === nombreItem){
                itemEnStock = this.itemsDisponibles[i];
                this.itemsVendidos.push(itemEnStock);
                this.itemsDisponibles.splice(i, 1);
                console.log(`Se vendió ${itemEnStock.getNombre()} por $${itemEnStock.getCosto()}`);
                break;
            }
        }

        if (itemEnStock === null) {
            console.log(`El item ${nombreItem} no está disponible para vender.`);
        }
    }*/
    Kiosco.prototype.venderItem = function (nombreItem) {
        var itemEnStock = false; // Usamos una bandera para indicar si se encuentra el item
        for (var i = 0; i < this.itemsDisponibles.length; i++) {
            if (this.itemsDisponibles[i].getNombre() === nombreItem) {
                itemEnStock = true;
                var itemVendido = this.itemsDisponibles.splice(i, 1)[0];
                this.itemsVendidos.push(itemVendido);
                console.log("Se vendi\u00F3 ".concat(itemVendido.getNombre(), " por $").concat(itemVendido.getCosto()));
                break;
            }
        }
        if (!itemEnStock) {
            console.log("El item ".concat(nombreItem, " no est\u00E1 disponible para vender."));
        }
    };
    return Kiosco;
}());
exports.Kiosco = Kiosco;
