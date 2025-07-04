import { Request, Response } from "express-serve-static-core";
import { ParsedQs } from "qs";
import Produto from "./Produto";
import Venda from "./Venda";
export default class ItemVendido{
    listarItensVendas(req: Request<{}, any, any, ParsedQs, Record<string, any>>, res: Response<any, Record<string, any>, number>) {
        throw new Error("Method not implemented.");
    }
    cadastroItensVenda(req: Request<{}, any, any, ParsedQs, Record<string, any>>, res: Response<any, Record<string, any>, number>) {
        throw new Error("Method not implemented.");
    }
    id!:number;
    venda!:Venda;
    produto!:Produto;
    quantidade!:number;
}