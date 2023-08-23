//Ejercicio 1: - Plantear una clase a elección mediante un diagrama. - Implementar en TypeScript.

export class Cliente{
    private nombre: string;
    private telefono: string;
  
    constructor(nombre: string, telefono: string){
        this.nombre = nombre;
        this.telefono = telefono;
    }
  
    public getNombre(): string{
        return this.nombre;
    }
  
    public getTelefono(): string{
        return this.telefono;
    }
  
    public cambiarTelefono(nuevoTelefono: string): void{
        this.telefono = nuevoTelefono;
    }
    public toString(): string{
        return `El numero de teléfono de ${this.nombre} es: ${this.telefono}`;
    }
}
/*export default Cliente;*/ //Otra forma de exportar