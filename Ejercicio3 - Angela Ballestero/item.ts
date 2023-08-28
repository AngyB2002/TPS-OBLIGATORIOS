// Parte 1 - Diseño de Sistemas
//• Implementar un sistema de control de stock para un kiosco. Dicho sistema debe tener un listado de los elementos disponibles para vender, y un listado de los elementos vendidos.
//• Tener en cuenta que cada ítem o elemento tiene un costo asociado.
//• El sistema debe poder cargar de un arreglo los items a vender.
//• El sistema debe poder imprimir en consola los ítems vendidos.

export class Item{
    nombre : string;
    costo : number;
  
    constructor (nombre : string, costo : number){
        this.nombre = nombre;
        this.costo = costo;
    }
}