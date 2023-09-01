class Personaje{
    private nombre : string;
    private vida : number;
    private daño : number;
    private energía : number;
  
    constructor(nombre : string, vida : number, daño : number, energía : number){
        this.nombre = nombre;
        this.vida = vida;
        this.daño = daño;
        this.energía = energía;
    }
  
    getNombre() : string{
        return this.nombre;
    }
  
    getVida() : number{
        return this.vida;
    }
  
    getDaño() : number{
        return this.daño;
    }
  
    getEnergía() : number{
        return this.energía;
    }
  
    setEnergía(energía : number){
        this.energía = energía;
    }
  
    atacar(objetivo : Personaje) : void{
        if (this.energía >= 1){
            objetivo.recibirAtaque(this.daño);
            this.energía -= 1;
            console.log(`${this.nombre} ataca a ${objetivo.getNombre()} por ${this.daño} de daño.`);
        }else{
            console.log(`${this.nombre} no tiene suficiente energía para atacar.`);
        }
    }
  
    recibirAtaque(cantidad : number) : void{
        this.vida -= cantidad;
        if (this.vida < 0){
            this.vida = 0;
        }
    }
  
    curar() : void{
        if (this.energía >= 1){
            let cantidadACurar = Math.floor(this.vida * 0.1);
            this.vida += cantidadACurar;
            this.energía -= 1;
            console.log(`${this.nombre} se ha curado ${cantidadACurar} puntos de vida.`);
        }else{
            console.log(`${this.nombre} no tiene suficiente energía para curar.`);
        }
    }
}  

export default Personaje;  