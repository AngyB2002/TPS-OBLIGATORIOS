"use strict";
/*import Guerrero from './guerrero';
import Mago from './mago';
import Batalla from './batalla';

const guerrero = new Guerrero("Guerrero1");
const mago = new Mago("Mago1");

const batalla = new Batalla();
batalla.enfrentamiento(guerrero, mago);*/
exports.__esModule = true;
var guerrero_1 = require("./guerrero");
var mago_1 = require("./mago");
var batalla_1 = require("./batalla");
var guerrero = new guerrero_1["default"]("Guerrero1");
var mago = new mago_1["default"]("Mago1");
var batalla = new batalla_1["default"]();
batalla.enfrentamiento(guerrero, mago);
