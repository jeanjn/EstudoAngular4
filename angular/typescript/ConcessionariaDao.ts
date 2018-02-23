import {DaoInterface} from './DaoInterface'
import Concessionaria from './Concessionaria'

export class ConcessionariaDao implements DaoInterface {

    nomeTabela: string = "tb_concessionaria"

    public inserir(object: Concessionaria) : boolean{
        console.log("insert")
        return true;
    }
    public atualizar(object: Concessionaria): boolean{
        console.log("atualizar")
        return true;
    }
    public remover(id: number): Concessionaria{
        console.log("remover")
        return new Concessionaria('', []);
    }
    public selecionar(id: number): Concessionaria{
        console.log("select")
        return new Concessionaria('', []);
    }

    public selecionarTodos() : [Concessionaria]{
        console.log("selectAll")
        return [new Concessionaria('', [])];
    }
}