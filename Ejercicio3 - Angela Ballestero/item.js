"use strict";
//• Implementar un sistema de control de stock para un kiosco. Dicho sistema debe tener un listado de los elementos disponibles para vender, y un listado de los elementos vendidos.
//• Tener en cuenta que cada ítem o elemento tiene un costo asociado.
//• El sistema debe poder cargar de un arreglo los items a vender.
//• El sistema debe poder imprimir en consola los ítems vendidos.
exports.__esModule = true;
exports.Item = void 0;
var Item = /** @class */ (function () {
    function Item(nombre, costo) {
        this.nombre = nombre;
        this.costo = costo;
    }
    return Item;
}());
exports.Item = Item;
