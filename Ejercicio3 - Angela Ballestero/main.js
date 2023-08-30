"use strict";
// Parte 1 - Diseño de Sistemas
//• Implementar un sistema de control de stock para un kiosco. Dicho sistema debe tener un listado de los elementos disponibles para vender, y un listado de los elementos vendidos.
//• Tener en cuenta que cada ítem o elemento tiene un costo asociado.
//• El sistema debe poder cargar de un arreglo los items a vender.
//• El sistema debe poder imprimir en consola los ítems vendidos.
exports.__esModule = true;
var item_1 = require("./item");
var kiosco_1 = require("./kiosco");
var item1 = new item_1.Item("Chocolate", 50);
var item2 = new item_1.Item("Gaseosa", 300);
var item3 = new item_1.Item("Papas", 150);
var item4 = new item_1.Item("Chupetin", 20);
var item5 = new item_1.Item("Chicles", 100);
var itemsIniciales = [item1, item2, item3, item4, item5];
var miKiosco = new kiosco_1.Kiosco();
miKiosco.cargarItems(itemsIniciales);
miKiosco.venderItem("Gaseosa");
miKiosco.venderItem("Papas");
miKiosco.venderItem("Caramelo");
console.log("Items disponibles:", miKiosco.obtenerItemsDisponibles());
console.log("Items vendidos:", miKiosco.obtenerItemsVendidos());
