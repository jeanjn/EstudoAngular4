import { DaoInterface } from "./DaoInterface";


export class Dao<T> implements DaoInterface<T> {

    nomeTabela: string = ""

    constructor(nomeTabela: string) {
        this.nomeTabela = nomeTabela;

        console.log(this.nomeTabela + " carregada")
        
    }

    public inserir(object: T) : boolean{
        console.log("insert")
        return true;
    }
    public atualizar(object: T): boolean{
        console.log("atualizar")
        return true;
    }
    public remover(id: number): any {
        console.log("remover")
        return  new Object();
    }
    public selecionar(id: number): any{
        console.log("select")
        return new Object();
    }

    public selecionarTodos() : [any]{
        console.log("selectAll")
        return [new Object()];
    }
}