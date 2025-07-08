import Commands from "./Commands";

export default interface CommandsPessoa<T> extends Commands<T>{
    PesquisarCPF(cpf:string):Promise<T>;
    PesquisarEmail(email:string):Promise<T>;
   

}