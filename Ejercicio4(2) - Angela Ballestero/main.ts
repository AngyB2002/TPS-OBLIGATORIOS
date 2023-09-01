import Guerrero from './guerrero';
import Mago from './mago';
import Batalla from './batalla';

let guerrero = new Guerrero("Guerrero1");
let mago = new Mago("Mago1");

let batalla = new Batalla();
batalla.enfrentamiento(guerrero, mago);