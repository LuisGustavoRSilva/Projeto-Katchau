import Estoque from "../classes/Estoque";
import { conexao } from "../database/Config";
import Commands from "../Interfaces/Commands";

export default  class EstoqueRepository implements Commands<Estoque>{
    PesquisarPorData(data: Date): Promise<Estoque[]> {
        throw new Error("Method not implemented.");
    }
    PesquisarPorIntervalo(data_inicial: Date, data_final: Date): Promise<Estoque[]> {
        throw new Error("Method not implemented.");
    }
    Cadastrar(obj: Estoque): Promise<Estoque> {
        return new Promise((resolve,reject)=>{
           
            conexao.query("INSERT  INTO estoque(id_produto,quantidade,data_aquisicao,marca,nome_produto,tipo_produto) Values (?,?,?,?,?,?)",
                [obj.produto,
                obj.quantidade,
                obj.data_aquisicao,
                obj.marca,
                obj.nome_produto,
                obj.tipo_produto
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
    Listar(): Promise<Estoque[]> {
        return new Promise((resolve,reject)=>{
            conexao.query("Select * from estoque",(erro, result)=>{
                if(erro){
                    return reject(erro)
                }
                else{
                    return resolve(result as Estoque[])
                }
            })
        })
    }
    Apagar(id: number): Promise<string> {
        throw new Error("Method not implemented.");
    }
    Atualizar(obj: Estoque): Promise<Estoque> {
        throw new Error("Method not implemented.");
    }
    PesquisarId(id: number): Promise<Estoque> {
        throw new Error("Method not implemented.");
    }
    
}