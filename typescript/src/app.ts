import express from "express";
import cors from "cors";
import ClienteService from "./services/ClienteService";
import EstoqueService from "./services/EstoqueService";
import FuncionarioService from "./services/FuncionarioService";
import ProdutoService from "./services/ProdutoService";
import VendaService from "./services/VendaService";
import ItemVendido from "./classes/ItensVendido";
import ItensVendaService from "./services/ItensVendaService";
import PagamentoService from "./services/PagamentoService";
import UsuarioService from "./services/UsuarioService";




const app = express();
app.use(express.json());
app.use(cors());

const cli = new ClienteService();
const est = new EstoqueService();
const fun = new FuncionarioService();
const prod = new ProdutoService();
const ven = new VendaService();
const itn = new ItensVendaService();
const pag = new PagamentoService();
const us = new UsuarioService();

app.get("/api/v1/cliente/listar",(req,res)=>{
    cli.listarClientes(req,res);
});

app.post("/api/v1/cliente/cadastro",(req,res)=>{
    cli.cadastroCliente(req,res);
})

// #################################################### ESTOQUE #################################################################
app.get('/api/v1/estoque/listar', (req,res)=>{
    est.listarEstoque(req,res);
})

app.post("/api/v1/estoque/cadastro",(req,res)=>{
    est.cadastroEstoque(req,res);
})


// #################################################### Funcionario #################################################################
app.get('/api/v1/funcionario/listar', (req,res)=>{
    fun.listarFuncionarios(req,res);
})

app.post("/api/v1/funcionario/cadastro",(req,res)=>{
    fun.cadastroFuncionario(req,res);
})

// #################################################### Produto #################################################################
app.get('/api/v1/Produto/listar', (req,res)=>{
    prod.listarProdutos(req,res);
})

app.get('/api/v1/Produto/listarmaisvendidos', (req,res)=>{
    prod.listarProdutosmaisvendidos(req,res);
})

app.get('/api/v1/Produto/listaporcategoria/:categoria', (req,res)=>{
    prod.listarProdutosCategoria(req,res);
})

app.get('/api/v1/Produto/listaporid/:id', (req,res)=>{
    prod.listarProdutosId(req,res);
})

app.post("/api/v1/Produto/cadastro",(req,res)=>{
    prod.cadastroProduto(req,res);
})

// #################################################### Venda #################################################################
app.get('/api/v1/Venda/listar', (req,res)=>{
    ven.listarVendas(req,res);
})

app.post("/api/v1/Venda/cadastro",(req,res)=>{
    ven.cadastroVenda(req,res);
})

// #################################################### ItensVenda #################################################################
app.get('/api/v1/ItensVenda/listar', (req,res)=>{
    itn.listarItensVendas(req,res);
})

app.post("/api/v1/ItensVenda/cadastro",(req,res)=>{
    itn.cadastroItensVenda(req,res);
})

// #################################################### Pagamento #################################################################
app.get('/api/v1/Pagamento/listar', (req,res)=>{
    pag.listarPagamentos(req,res);
})

app.post("/api/v1/Pagamento/cadastro",(req,res)=>{
    pag.cadastroPagamento(req,res);
})

// #################################################### Usuario #################################################################
app.post('/api/v1/usuario/listar',(req,res)=>{

})


app.post("/api/v1/usuario/cadastro",(req,res)=>{
    us.cadastrarUsuario(req,res);

})

app.listen(5000,()=>{
    console.log(`Online em: http://10.26.45.40:5000`)
});


