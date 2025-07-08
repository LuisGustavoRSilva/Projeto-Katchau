import Pagamento from "../classes/Pagamento";
import { conexao } from "../database/Config";
import CommandsVenda from "../Interfaces/commandsVenda";

export default class PagamentoRepository implements CommandsVenda<Pagamento>{
    PesquisarPorData(data: Date): Promise<Pagamento[]> {
        throw new Error("Method not implemented.");
    }
    PesquisarPorIntervalo(data_inicial: Date, data_final: Date): Promise<Pagamento[]> {
        throw new Error("Method not implemented.");
    }
    Cadastrar(obj: Pagamento): Promise<Pagamento> {
        
        return new Promise((resolve,reject)=>{
           
            conexao.query("INSERT INTO pagamento(id_venda,total_pagar) Values (?,?)",
            [
                obj.venda,
                obj.total_pagar],
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
    Listar(): Promise<Pagamento[]> {
        
        return new Promise((resolve,reject)=>{
            conexao.query("Select * from pagamento",(erro, result)=>{
                if(erro){
                    return reject(erro)
                }
                else{
                    return resolve(result as Pagamento[])
                }
            })
        })

    }
    Apagar(id: number): Promise<string> {
        throw new Error("Method not implemented.");
    }
    Atualizar(obj: Pagamento): Promise<Pagamento> {
        throw new Error("Method not implemented.");
    }
    PesquisarId(id: number): Promise<Pagamento> {
        throw new Error("Method not implemented.");
    }
    
}