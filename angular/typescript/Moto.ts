import Veiculo from './Veiculo'
 class Moto extends Veiculo {

    constructor(modelo: string) {
        super(modelo)
    }


    public acelerar(): void {
        this.velocidade = this.velocidade + 20
    }

}

export default Moto