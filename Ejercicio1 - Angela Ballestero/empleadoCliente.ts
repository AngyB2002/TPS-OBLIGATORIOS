//Ejercicio 1: - Plantear una clase a elección mediante un diagrama. - Implementar en TypeScript.

import { Empleado } from './empleado';
import { Cliente } from './cliente';

/*import Empleado from './empleado';
import Cliente from './cliente';*/ //Otras formas de importar 

let empleado = new Empleado('Azu', 75000);
let cliente = new Cliente('Eva', '123-4567');

console.log("Empleada:")
console.log(empleado.getNombre());
console.log(empleado.getSalario());
empleado.aumentarSalario(10);
console.log(empleado.getSalario());
console.log(empleado.toString());

console.log("Clienta:")
console.log(cliente.getNombre());
console.log(cliente.getTelefono());
cliente.cambiarTelefono('123-6789');
console.log(cliente.getTelefono());
console.log(cliente.toString()); 