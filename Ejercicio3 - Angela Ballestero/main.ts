// Parte 1 - Diseño de Sistemas
//• Implementar un sistema de control de stock para un kiosco. Dicho sistema debe tener un listado de los elementos disponibles para vender, y un listado de los elementos vendidos.
//• Tener en cuenta que cada ítem o elemento tiene un costo asociado.
//• El sistema debe poder cargar de un arreglo los items a vender.
//• El sistema debe poder imprimir en consola los ítems vendidos.

import { Item } from "./item";
import { Kiosco } from "./kiosco";

let item1 = new Item("Chocolate", 50);
let item2 = new Item("Gaseosa", 300);
let item3 = new Item("Papas", 150);
let item4 = new Item("Chupetin", 20);
let item5 = new Item("Chicles", 100);

let itemsIniciales : Item[] = [item1, item2, item3, item4, item5];

let miKiosco = new Kiosco();
miKiosco.cargarItems(itemsIniciales);

miKiosco.venderItem("Gaseosa");
miKiosco.venderItem("Papas");
miKiosco.venderItem("Caramelo");

console.log("Items disponibles:", miKiosco.obtenerItemsDisponibles());
console.log("Items vendidos:", miKiosco.obtenerItemsVendidos());