import { conexao } from "../database/Config";
import Produto from "../classes/Produto";
import Commands from "../Interfaces/Commands";

export default class ProdutorRepository implements Commands<Produto>{
    Cadastrar(obj: Produto): Promise<Produto> {
        return new Promise((resolve,reject)=>{
           
            conexao.query("INSERT INTO produto(nome,descricao,preco,foto1,foto2,foto3) Values (?,?,?,?,?,?)",
            [obj.nome,
                obj.descricao,
                obj.preco,
                obj.foto1,
                obj.foto2,
                obj.foto3
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
    Listar(): Promise<Produto[]> {
        return new Promise((resolve,reject)=>{
            conexao.query("Select * from produto",(erro, result)=>{
                if(erro){
                    return reject(erro)
                }
                else{
                    return resolve(result as Produto[])
                }
            })
        })

    }
    Listarmaisvendidos(): Promise<Produto[]> {
        return new Promise((resolve,reject)=>{
            conexao.query(` select produto.nome, produto.foto1, itensvendidos.quantidade
from produto inner join itensvendidos
on produto.id = itensvendidos.id_produto
order by itensvendidos.quantidade desc
limit 0,10 ` ,(erro, result)=>{
                if(erro){
                    return reject(erro)
                }
                else{
                    return resolve(result as Produto[])
                }
            })
        })

    }

    ListarPorCategoria(categoria:string): Promise<Produto[]> {
        return new Promise((resolve,reject)=>{
            conexao.query(`Select * from produto where descricao like ${categoria}`,(erro, result)=>{
                if(erro){
                    return reject(erro)
                }
                else{
                    return resolve(result as Produto[])
                }
            })
        })

    }

    ListarPorId(id:number): Promise<Produto[]> {
        return new Promise((resolve,reject)=>{
            conexao.query(`Select * from produto where id=${id}`,(erro, result)=>{
                if(erro){
                    return reject(erro)
                }
                else{
                    return resolve(result as Produto[])
                }
            })
        })

    }
    Apagar(id: number): Promise<string> {
        throw new Error("Method not implemented.");
    }
    Atualizar(obj: Produto): Promise<Produto> {
        throw new Error("Method not implemented.");
    }
    PesquisarId(id: number): Promise<Produto> {
        throw new Error("Method not implemented.");
    }
    
}