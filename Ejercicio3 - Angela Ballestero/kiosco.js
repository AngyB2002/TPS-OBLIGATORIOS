"use strict";
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
    Kiosco.prototype.cargarItems = function (items) {
        this.itemsDisponibles = items;
    };
    Kiosco.prototype.venderItem = function (nombreItem) {
        var itemIndex = -1;
        for (var i = 0; i < this.itemsDisponibles.length; i++) {
            if (this.itemsDisponibles[i].nombre === nombreItem) {
                itemIndex = i;
                break;
            }
        }
        if (itemIndex !== -1) {
            var itemEnStock = this.itemsDisponibles[itemIndex];
            this.itemsVendidos.push(itemEnStock);
            this.itemsDisponibles.splice(itemIndex, 1);
            console.log("Se vendi\u00F3 ".concat(itemEnStock.nombre, " por $").concat(itemEnStock.costo));
        }
        else {
            console.log("El item ".concat(nombreItem, " no est\u00E1 disponible para vender."));
        }
    };
    return Kiosco;
}());
exports.Kiosco = Kiosco;
