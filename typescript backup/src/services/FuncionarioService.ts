import {Request, Response} from "express";
import Funcionario from "../classes/Funcionario";
import FuncionarioRepository from "../repositories/FuncionarioRepository";

export default class FuncionarioService{
    funRepository = new FuncionarioRepository();

    async cadastroFuncionario(req:Request, res:Response){
        const fun:Funcionario = new Funcionario();
        fun.nome = req.body.nome
        fun.email = req.body.email;
        fun.cpf = req.body.cpf;
        fun.telefone = req.body.telefone;
        fun.cargo = req.body.cargo;
        fun.salario = req.body.salario;
        fun.endereco = req.body.endereco;
        try{
            const rs = await this.funRepository.Cadastrar(fun);
            return res.status(201).json(rs);
        }
        catch(erro){
            return res.status(500).json(erro)
        }

    }

    async listarFuncionarios(req:Request, res:Response){
        try{
            const rs = await this.funRepository.Listar();
            return res.status(200).json(rs);
        }
        catch(erro){
            return res.status(500).json(erro)
        }
    }

}