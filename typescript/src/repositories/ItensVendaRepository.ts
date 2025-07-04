import ItensVenda from "../classes/ItensVendido";
import { conexao } from "../database/Config";
import CommandsVenda from "../Interfaces/commandsVenda";

export default class ItensVendaRepository implements CommandsVenda<ItensVenda>{
    PesquisarPorData(data: Date): Promise<ItensVenda[]> {
        throw new Error("Method not implemented.");
    }
    PesquisarPorIntervalo(data_inicial: Date, data_final: Date): Promise<ItensVenda[]> {
        throw new Error("Method not implemented.");
    }
    Cadastrar(obj: ItensVenda): Promise<ItensVenda> {
        
        return new Promise((resolve,reject)=>{
           
            conexao.query("INSERT INTO itensvendidos(id_venda,id_produto,quantidade) Values (?,?,?)",
            [
                obj.venda,
                obj.produto,
                obj.quantidade],
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
    Listar(): Promise<ItensVenda[]> {
        
        return new Promise((resolve,reject)=>{
            conexao.query("Select * from itensvendidos",(erro, result)=>{
                if(erro){
                    return reject(erro)
                }
                else{
                    return resolve(result as ItensVenda[])
                }
            })
        })

    }
    Apagar(id: number): Promise<string> {
        throw new Error("Method not implemented.");
    }
    Atualizar(obj: ItensVenda): Promise<ItensVenda> {
        throw new Error("Method not implemented.");
    }
    PesquisarId(id: number): Promise<ItensVenda> {
        throw new Error("Method not implemented.");
    }
    
}