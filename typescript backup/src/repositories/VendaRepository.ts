import Venda from "../classes/Venda";
import { conexao } from "../database/Config";
import CommandsVenda from "../Interfaces/commandsVenda";

export default  class VendaRepository implements CommandsVenda<Venda>{
    PesquisarPorData(data: Date): Promise<Venda[]> {
        throw new Error("Method not implemented.");
    }
    PesquisarPorIntervalo(data_inicial: Date, data_final: Date): Promise<Venda[]> {
        throw new Error("Method not implemented.");
    }
    Cadastrar(obj: Venda): Promise<Venda> {
        return new Promise((resolve,reject)=>{
           
            conexao.query("INSERT INTO vendas(id_cliente,id_produto,data_hora) Values (?,?,?)",
                [obj.cliente,
                obj.produto,
                obj.data_hora
                ],
                (erro,end:any)=>{
              
            
            
                if(erro){
                    return reject(erro);
                }
                else{
                    return resolve(obj)
                }                    
            })
        })
       
    }
    Listar(): Promise<Venda[]> {
        return new Promise((resolve,reject)=>{
            conexao.query("Select * from vendas",(erro, result)=>{
                if(erro){
                    return reject(erro)
                }
                else{
                    return resolve(result as Venda[])
                }
            })
        })
    }
    Apagar(id: number): Promise<string> {
        throw new Error("Method not implemented.");
    }
    Atualizar(obj: Venda): Promise<Venda> {
        throw new Error("Method not implemented.");
    }
    PesquisarId(id: number): Promise<Venda> {
        throw new Error("Method not implemented.");
    }
    
}