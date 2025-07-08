import {Request, Response} from "express";
import ItensVenda from "../classes/ItensVendido";
import ItensVendaRepository from "../repositories/ItensVendaRepository";

export default class ItensVendaService{
    itnRepository = new ItensVendaRepository();

    async cadastroItensVenda(req:Request, res:Response){
        const itn:ItensVenda = new ItensVenda();
        itn.venda = req.body.id_venda;
        itn.produto = req.body.id_produto;
        itn.quantidade = req.body.quantidade;
        try{
            const rs = await this.itnRepository.Cadastrar(itn);
            return res.status(201).json(rs);
        }
        catch(erro){
            return res.status(500).json(erro)
        }

    }

    async listarItensVendas(req:Request, res:Response){
        try{
            const rs = await this.itnRepository.Listar();
            return res.status(200).json(rs);
        }
        catch(erro){
            return res.status(500).json(erro)
        }
    }

}