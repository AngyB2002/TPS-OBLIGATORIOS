//Ejercicio 1: - Plantear una clase a elección mediante un diagrama. - Implementar en TypeScript.

export class Empleado{
    private nombre: string;
    private salario: number;
  
    constructor(nombre: string, salario: number){
        this.nombre = nombre;
        this.salario = salario;
    }
  
    public getNombre(): string{
        return this.nombre;
    }
  
    public getSalario(): number{
        return this.salario;
    }

    public aumentarSalario(porcentaje: number): void{
        let aumento = (this.salario * porcentaje) / 100;
        this.salario += aumento;
    }
    public toString(): string {
        return `${this.nombre} tiene un salario de ${this.salario}`;
    }
}
/*export default Empleado;*/ //Otra forma de exportar