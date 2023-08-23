"use strict";
//Ejercicio 1: - Plantear una clase a elección mediante un diagrama. - Implementar en TypeScript.
exports.__esModule = true;
exports.Empleado = void 0;
var Empleado = /** @class */ (function () {
    function Empleado(nombre, salario) {
        this.nombre = nombre;
        this.salario = salario;
    }
    Empleado.prototype.getNombre = function () {
        return this.nombre;
    };
    Empleado.prototype.getSalario = function () {
        return this.salario;
    };
    Empleado.prototype.aumentarSalario = function (porcentaje) {
        var aumento = (this.salario * porcentaje) / 100;
        this.salario += aumento;
    };
    Empleado.prototype.toString = function () {
        return "".concat(this.nombre, " tiene un salario de ").concat(this.salario);
    };
    return Empleado;
}());
exports.Empleado = Empleado;
/*export default Empleado;*/ //Otra forma de exportar
