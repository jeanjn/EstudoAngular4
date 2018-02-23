"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
}
Object.defineProperty(exports, "__esModule", { value: true });
//import {ConcessionariaDao} from './ConcessionariaDao'
var Dao_1 = require("./Dao");
var Concessionaria_1 = __importDefault(require("./Concessionaria"));
//import {PessoaDao} from './PessoaDao'
var Pessoa_1 = __importDefault(require("./Pessoa"));
var dao = new Dao_1.Dao("Concessionaria");
var concessionaria = new Concessionaria_1.default('', []);
dao.inserir(concessionaria);
var daoPessoa = new Dao_1.Dao("Pessoa");
var pessoa = new Pessoa_1.default('', '');
daoPessoa.inserir(pessoa);
