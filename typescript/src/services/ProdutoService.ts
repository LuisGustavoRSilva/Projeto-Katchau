import {Request, Response} from "express";
import produto from "../classes/Produto";
import ProdutoRepository from "../repositories/ProdutoRepository";

export default class ProdutoService{
    [x: string]: any;
    prodRepository = new ProdutoRepository();

    async cadastroProduto(req:Request, res:Response){
        const prod:produto = new produto();
        prod.nome = req.body.nome
        prod.descricao = req.body.descricao;
        prod.preco = req.body.preco;
        prod.foto1 = req.body.foto1;
        prod.foto2 = req.body.foto2;
        prod.foto3 = req.body.foto3;
        try{
            const rs = await this.prodRepository.Cadastrar(prod);
            return res.status(201).json(rs);
        }
        catch(erro){
            return res.status(500).json(erro)
        }

    }

    async listarProdutos(req:Request, res:Response){
        try{
            const rs = await this.prodRepository.Listar();
            return res.status(200).json(rs);
        }
        catch(erro){
            return res.status(500).json(erro)
        }
    }

    async listarProdutosmaisvendidos(req:Request, res:Response){
        try{
            const rs = await this.prodRepository.Listarmaisvendidos();
            return res.status(200).json(rs);
        }
        catch(erro){
            return res.status(500).json(erro)
        }
    }

    async listarProdutosCategoria(req:Request, res:Response){
        let categoria = req.params.categoria
        categoria = ` '%${categoria}%'  `
        try{
            const rs = await this.prodRepository.ListarPorCategoria(categoria);
            return res.status(200).json(rs);
        }
        catch(erro){
            return res.status(500).json(erro)
        }
    }

    async listarProdutosId(req:Request, res:Response){
        let id = req.params.id;
        try{
            const rs = await this.prodRepository.ListarPorId(parseInt(id));
            return res.status(200).json(rs);
        }
        catch(erro){
            return res.status(500).json(erro)
        }
    }
}