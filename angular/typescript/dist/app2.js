"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
}
Object.defineProperty(exports, "__esModule", { value: true });
var Carro_1 = __importDefault(require("./Carro"));
var Concessionaria_1 = __importDefault(require("./Concessionaria"));
var Pessoa_1 = __importDefault(require("./Pessoa"));
var carroA = new Carro_1.default("Celta", 4);
var carroB = new Carro_1.default("Veloster", 3);
var carroC = new Carro_1.default("Cerato", 4);
var listaDeCarros = [carroA, carroB, carroC];
var concessionaria = new Concessionaria_1.default("Av Paulista", listaDeCarros);
var cliente = new Pessoa_1.default("Jean", "Celta");
concessionaria.mostrarListaDeCarros().map(function (carro, index, carros) {
    if (carro['modelo'] == cliente.dizerCarroPreferido()) {
        cliente.comprarCarro(carro);
    }
});
console.log(cliente.dizerCarroQueTem());
