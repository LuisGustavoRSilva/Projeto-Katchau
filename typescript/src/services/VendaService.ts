import {Request, Response} from "express";
import Venda from "../classes/Venda";
import VendaRepository from "../repositories/VendaRepository";

export default class VendaService{
    VendRepository = new VendaRepository();

    async cadastroVenda(req:Request, res:Response){
        const ven:Venda = new Venda();
        ven.cliente = req.body.id_cliente;
        ven.produto = req.body.id_produto;
        ven.data_hora = req.body.data_hora;
    
        try{
            const rs = await this.VendRepository.Cadastrar(ven);
            return res.status(201).json(rs);
        }
        catch(erro){
            return res.status(500).json(erro)
        }

    }

    async listarVendas(req:Request, res:Response){
        try{
            const rs = await this.VendRepository.Listar();
            return res.status(200).json(rs);
        }
        catch(erro){
            return res.status(500).json(erro)
        }
    }

}