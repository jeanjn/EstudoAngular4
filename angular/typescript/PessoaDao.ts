import { DaoInterface } from './DaoInterface'
import Pessoa from './Pessoa'

export class PessoaDao implements DaoInterface {

    nomeTabela: string = "tb_pessoa"

    constructor() {
        console.log("obj pessoaDao");

    }

    public inserir(object: Pessoa): boolean {
        console.log("insert")
        return true;
    }
    public atualizar(object: Pessoa): boolean {
        console.log("atualizar")
        return true;
    }
    public remover(id: number): Pessoa {
        console.log("remover")
        return new Pessoa('', '');
    }
    public selecionar(id: number): Pessoa {
        console.log("select")
        return new Pessoa('', '');
    }

    public selecionarTodos(): [Pessoa] {
        console.log("selectAll")
        return [new Pessoa('', '')];
    }
}