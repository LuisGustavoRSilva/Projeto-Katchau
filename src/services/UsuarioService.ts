import UsuarioRepository from "../repositories/UsuarioRepository";
import bcrypt from "bcrypt";
import { Request,Response } from "express";
import Usuario from "../classes/Usuario";

export default class UsuarioService{
    usuarioRepo = new UsuarioRepository()

     async criptgrafarSenha(senha:string) {
        let rs = bcrypt.hash(senha,12);
        return rs
    }
    async cadastrarUsuario(req:Request, res:Response){
        let us = new Usuario();
        us.nomeusuario = req.body.nomeusuario;
        us.senha = (await this.criptgrafarSenha(req.body.senha)).toString();
        us.fotousuario = req.body.fotousuario;


        try{
            let rs =  await this.usuarioRepo.Cadastrar(us);
            return res.status(201).json(rs);
        }
        catch(erro){
            return res.status(500).json(erro)
        }
    }
}