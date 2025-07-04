import Cliente from "./Cliente";
import Produto from "./Produto";

export default class Venda{
    id!:number;
    produto!:Produto;
    cliente!:Cliente;
    data_hora!:Date
}