//Desarrolla una clase Cafetera con atributos capacidadMaxima (la cantidad máxima de café que puede contener la cafetera) y cantidadActual (la cantidad actual de café que hay en la cafetera).
//Implementa, al menos, los siguientes métodos:
//-Constructor predeterminado: donde se establece la capacidad máxima en 1000 (c.c.) y la actual en cero (cafetera vacía).
//-Constructor con la capacidad máxima de la cafetera: Se inicializa la cantidad actual de café igual a la capacidad máxima. (cafetera llena)
//-Constructor con la capacidad máxima y la cantidad actual. Si la cantidad actual es mayor que la capacidad máxima de la cafetera, la ajustará al máximo.
//-Getters y Setters
//-llenarCafetera(): hace que la cantidad actual sea igual a la capacidad.
//-servirTaza(int): simula la acción de servir una taza con la capacidad indicada.
//Si la cantidad actual de café “no alcanza” para llenar la taza, se sirve lo que quede.
//-vaciarCafetera(): poné la cantidad de café actual en cero.
//-agregarCafe(int): añade a la cafetera la cantidad de café indicada. ¿Qué pasaría si sobrepasamos la cantidad máxima?

class Cafetera{
    private capacidadMaxima: number;
    private cantidadActual: number;

    constructor(){
        this.capacidadMaxima = 1000; 
        this.cantidadActual = 0;   
    }

    constructorConCapacidad(capacidadMaxima : number){
        this.capacidadMaxima = capacidadMaxima;
        this.cantidadActual = capacidadMaxima;
    }

    constructorConCapacidadYCantidad(capacidadMaxima : number, cantidadActual : number){
        this.capacidadMaxima = capacidadMaxima;
        this.cantidadActual = cantidadActual > capacidadMaxima ? capacidadMaxima : cantidadActual;
    }

    getCapacidadMaxima() : number{
        return this.capacidadMaxima;
    }

    getCantidadActual() : number{
        return this.cantidadActual;
    }

    setCapacidadMaxima(nuevaCapacidad : number){
        this.capacidadMaxima = nuevaCapacidad;
        if (this.cantidadActual > nuevaCapacidad){
            this.cantidadActual = nuevaCapacidad;
        }
    }

    setCantidadActual(nuevaCantidad : number){
        if (nuevaCantidad < 0){
            console.log("La cantidad no puede ser negativa.");
            return;
        }
        if (nuevaCantidad > this.capacidadMaxima){
            console.log("La cantidad no puede ser mayor que la capacidad máxima.");
            return;
        }
        this.cantidadActual = nuevaCantidad;
    }

    llenarCafetera() : void{
        this.cantidadActual = this.capacidadMaxima;
    }

    servirTaza(cantidad : number) : void{
        if (this.cantidadActual >= cantidad){
            this.cantidadActual -= cantidad;
            console.log(`Sirviendo una taza de ${cantidad} c.c. de café.`);
        } else{
            console.log("No queda suficiente café para llenar la taza.");
            this.cantidadActual = 0;
        }
    }

    vaciarCafetera() : void{
        this.cantidadActual = 0;
    }

    agregarCafe(cantidad : number) : void{
        this.cantidadActual += cantidad;
        if (this.cantidadActual > this.capacidadMaxima){
            console.log("Se ha excedido la capacidad máxima de la cafetera.");
            this.cantidadActual = this.capacidadMaxima;
        }
    }
}

export default Cafetera;