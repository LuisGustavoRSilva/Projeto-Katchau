import {Request, Response} from "express";
import EstoqueRepository from "../repositories/EstoqueRepository";
import Estoque from "../classes/Estoque";

export default class EstoqueService{
    estRepository = new EstoqueRepository();
    EstoqueRepository: any;

    async cadastroEstoque(req:Request, res:Response){
        const est:Estoque = new Estoque();
        est.produto = req.body.produto;
        est.quantidade = req.body.quantidade;
        est.data_aquisicao = req.body.data_aquisicao;
        est.marca = req.body.marca;
        est.nome_produto = req.body.nome_produto;
        est.tipo_produto = req.body.tipo_produto;
        try{
            const rs = await this.estRepository.Cadastrar(est);
            return res.status(201).json(rs);
        }
        catch(erro){
            return res.status(500).json(erro)
        }

    }

    async listarEstoque(req:Request, res:Response){
        try{
            const rs = await this.estRepository.Listar();
            return res.status(200).json(rs);
        }
        catch(erro){
            return res.status(500).json(erro)
        }
    }

}