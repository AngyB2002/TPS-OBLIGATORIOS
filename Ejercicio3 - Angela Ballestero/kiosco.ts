// Parte 1 - Diseño de Sistemas
//• Implementar un sistema de control de stock para un kiosco. Dicho sistema debe tener un listado de los elementos disponibles para vender, y un listado de los elementos vendidos.
//• Tener en cuenta que cada ítem o elemento tiene un costo asociado.
//• El sistema debe poder cargar de un arreglo los items a vender.
//• El sistema debe poder imprimir en consola los ítems vendidos.

import { Item } from "./item";

export class Kiosco{
    private itemsDisponibles : Item[] = [];
    private itemsVendidos : Item[] = [];

    public obtenerItemsDisponibles() : Item[]{
        return this.itemsDisponibles;
    }

    public obtenerItemsVendidos() : Item[]{
        return this.itemsVendidos;
    }

    cargarItems (items : Item[]){
        this.itemsDisponibles = items;
    }

    venderItem (nombreItem : string){
        let itemIndex = -1;

        for (let i = 0; i < this.itemsDisponibles.length; i++){
            if (this.itemsDisponibles[i].nombre === nombreItem){
                itemIndex = i;
                break;
            }
        }

        if (itemIndex !== -1){
            let itemEnStock = this.itemsDisponibles[itemIndex];
            this.itemsVendidos.push(itemEnStock);
            this.itemsDisponibles.splice(itemIndex, 1);
            console.log(`Se vendió ${itemEnStock.nombre} por $${itemEnStock.costo}`);
        } else{
            console.log(`El item ${nombreItem} no está disponible para vender.`);
        }
    }
}