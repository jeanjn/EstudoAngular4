//import {ConcessionariaDao} from './ConcessionariaDao'
import {Dao} from './Dao'
import Concessionaria from './Concessionaria'
//import {PessoaDao} from './PessoaDao'
import Pessoa from './Pessoa'

let dao: Dao<Concessionaria> = new Dao<Concessionaria>("Concessionaria");
let concessionaria = new Concessionaria('', []);

dao.inserir(concessionaria);


let daoPessoa: Dao<Pessoa> = new Dao<Pessoa>("Pessoa");
let pessoa = new Pessoa('', '');

daoPessoa.inserir(pessoa);