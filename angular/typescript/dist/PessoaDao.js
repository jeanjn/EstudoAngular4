"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
}
Object.defineProperty(exports, "__esModule", { value: true });
var Pessoa_1 = __importDefault(require("./Pessoa"));
var PessoaDao = /** @class */ (function () {
    function PessoaDao() {
        this.nomeTabela = "tb_pessoa";
        console.log("obj pessoaDao");
    }
    PessoaDao.prototype.inserir = function (object) {
        console.log("insert");
        return true;
    };
    PessoaDao.prototype.atualizar = function (object) {
        console.log("atualizar");
        return true;
    };
    PessoaDao.prototype.remover = function (id) {
        console.log("remover");
        return new Pessoa_1.default('', '');
    };
    PessoaDao.prototype.selecionar = function (id) {
        console.log("select");
        return new Pessoa_1.default('', '');
    };
    PessoaDao.prototype.selecionarTodos = function () {
        console.log("selectAll");
        return [new Pessoa_1.default('', '')];
    };
    return PessoaDao;
}());
exports.PessoaDao = PessoaDao;
