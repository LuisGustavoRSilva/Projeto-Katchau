import produto from "./Produto"

export default class Estoque {
    [x: string]: any;
    
    id!:number;
    id_produto!: number; // <- direto o id
    quantidade!: number;
    data_aquisicao!: Date;
    marca!: string;
    nome_produto!: string;
    tipo_produto!: string;
}