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

    venderItem(nombreItem : string){
        let itemEnStock = false;

        for (let i = 0; i < this.itemsDisponibles.length; i++){
            if (this.itemsDisponibles[i].getNombre() === nombreItem){
                itemEnStock = true;
                let itemVendido = this.itemsDisponibles.splice(i, 1)[0];
                this.itemsVendidos.push(itemVendido);
                console.log(`Se vendió ${itemVendido.getNombre()} por $${itemVendido.getCosto()}`);
                break;
            }
        }

        if (!itemEnStock){
            console.log(`El item ${nombreItem} no está disponible para vender.`);
        }
    }
}