"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Dao = /** @class */ (function () {
    function Dao(nomeTabela) {
        this.nomeTabela = "";
        this.nomeTabela = nomeTabela;
        console.log(this.nomeTabela + " carregada");
    }
    Dao.prototype.inserir = function (object) {
        console.log("insert");
        return true;
    };
    Dao.prototype.atualizar = function (object) {
        console.log("atualizar");
        return true;
    };
    Dao.prototype.remover = function (id) {
        console.log("remover");
        return new Object();
    };
    Dao.prototype.selecionar = function (id) {
        console.log("select");
        return new Object();
    };
    Dao.prototype.selecionarTodos = function () {
        console.log("selectAll");
        return [new Object()];
    };
    return Dao;
}());
exports.Dao = Dao;
