import Carro from './Carro'
import Concessionaria from './Concessionaria'
import Pessoa from './Pessoa'

let carroA = new Carro("Celta", 4);
let carroB = new Carro("Veloster", 3);
let carroC = new Carro("Cerato", 4);

let listaDeCarros: Array<Carro> = [carroA, carroB, carroC];
let concessionaria = new Concessionaria("Av Paulista", listaDeCarros)
let cliente = new Pessoa("Jean", "Celta");

concessionaria.mostrarListaDeCarros().map(
    (carro: Carro, index: number, carros: Carro[]) => {
        if(carro['modelo'] == cliente.dizerCarroPreferido()){
            cliente.comprarCarro(carro);
        }
    })

    console.log(cliente.dizerCarroQueTem());