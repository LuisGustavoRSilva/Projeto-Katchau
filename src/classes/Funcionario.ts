import Pessoa from "./Pessoa";

export default class Funcionario extends Pessoa{
    cargo!:string;
    salario!:number;
}