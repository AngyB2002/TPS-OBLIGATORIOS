"use strict";
//Ejercicio 1: - Plantear una clase a elección mediante un diagrama. - Implementar en TypeScript.
exports.__esModule = true;
var empleado_1 = require("./empleado");
var cliente_1 = require("./cliente");
/*import Empleado from './empleado';
import Cliente from './cliente';*/ //Otras formas de importar 
var empleado = new empleado_1.Empleado('Azu', 75000);
var cliente = new cliente_1.Cliente('Eva', '123-4567');
console.log("Empleada:");
console.log(empleado.getNombre());
console.log(empleado.getSalario());
empleado.aumentarSalario(10);
console.log(empleado.getSalario());
console.log(empleado.toString());
console.log("Clienta:");
console.log(cliente.getNombre());
console.log(cliente.getTelefono());
cliente.cambiarTelefono('123-6789');
console.log(cliente.getTelefono());
console.log(cliente.toString());
