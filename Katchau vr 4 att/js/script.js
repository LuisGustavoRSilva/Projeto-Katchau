/* Esta função lista todos os livros novos */
function carregar_novidades(){
    const produtos_novidades = document.getElementById("produtosnovidades")
    let saida = "";

    /* A Função fetch realiza a chamada da url do servidor do backend*/
    fetch("http://10.26.45.40:5000/api/v1/produto/listar")
    .then((res)=>res.json())
    .then((dados)=>{
        dados.map((liv)=>{
            saida+= ` <div class="grid"><div class="card">
            <div class="topo-card">
                <img src=" ${liv.foto1} " alt="Capa ${liv.nome}">
                <strong><p class="produto">${liv.nome}</p></strong>
            </div>
                <div class="rodape-card">
                <p class="preco">R$ ${liv.preco}</p>
                <a class ="btn-topo">
                    <nav>
                    <strong><p>Adicionar ao carrinho</p></strong></nav>
                </a>
                </div>
            </div>
            </div>`
        })
        produtos_novidades.innerHTML = saida;
    })
    carregar_maisvenvidos();
}

/** Essa Função carrega os livros mais vendidos */
function carregar_maisvenvidos(){
    const produtos_maisvenvidos = document.getElementById("produtosmaisvendidos")
    let saida = "";
    fetch("http://10.26.45.40:5000/api/v1/Produto/listarmaisvendidos")
    .then((res)=>res.json())
    .then((dados)=>{
        dados.map((liv)=>{
            saida+= ` <div class="grid"><div class="card">
            <div class="topo-card">
                <img src=" ${liv.foto1} " alt="Capa ${liv.nome}">
                <strong><p class="produto">${liv.nome}</p></strong>
            </div>
                <div class="rodape-card">
                <p class="preco">R$ ${liv.preco}</p>
                <a class ="btn-topo">
                    <nav>
                    <strong><p>Adicionar ao carrinho</p></strong></nav>
                </a>
                </div>
            </div> 
            </div>`
        })
        produtos_maisvenvidos.innerHTML = saida;
    })
    carregar_autores();
}

/** Essa função carrega os autores no banco de dados e mostra no site */
function carregar_autores(){
    const livros_autores = document.getElementById("livrosautores")
    let saida = "";
    fetch("http://127.0.0.1:5000/api/v1/autor/listar")
    .then((res)=>res.json())
    .then((dados)=>{
        dados.map((liv)=>{
            saida+= ` <div class="autor">
                <img src=" ${liv.foto} " alt="Autor ${liv.nome}">
                <h3>${liv.nome}</h3>
            </div> `
        })
        livros_autores.innerHTML = saida;
    })
}

/** Essa função é a funçõa da seta que ao clicar rola os livros para o lado e msotra mais livros. tanto para esquerda e tanto para  adireita */

let pe = 0;
let pd = 0;
function rolarnovidadesesquerda(){
    if(pe < -6500){
        pe = -6700;
    }
    else{
        pe-=200;
    }
    
    let livrosnovidades = document.getElementById("livrosnovidades")
    livrosnovidades.style.marginLeft=`${pe}px`

}

function rolarnovidadesdireita(){
    if(pe < 0){
        pe += 200;
    }
    else{
        pe=0;
    }
    
    let livrosnovidades = document.getElementById("livrosnovidades")
    livrosnovidades.style.marginLeft=`${pe}px`

}

/** Essa função carrega os livros de categoria esporte */
function carregar_hardware(){
    const lsthardware = document.getElementById("lsthardware")
    let saida = "";
    fetch("http://10.26.45.40:5000/api/v1/Produto/listaporcategoria/hardware")
    .then( (res)=>res.json())
    .then((liv)=>{
        liv.map((li)=>{
            saida += ` <div class="grid"><div class="card">
            <div class="topo-card">
                <img src=" ${li.foto1} " alt="Capa ${li.nome}">
                <strong><p class="produto">${li.nome}</p></strong>
            </div>
                <div class="rodape-card">
                <p class="preco">R$ ${li.preco}</p>
                <a class ="btn-topo">
                    <nav>
                    <strong><p>Adicionar ao carrinho</p></strong></nav>
                </a>
                </div>
            </div>
            </div>`
        })
        lsthardware.innerHTML = saida;
    })
}

/** Essa função carrega os livros de categoria ficção */
function carregar_computador() {
    const lstcomputadores = document.getElementById("lstcomputador");
    let saida = "";
  
    fetch("http://10.26.45.40:5000/api/v1/Produto/listaporcategoria/computador")
      .then((res) => res.json())
      .then((produtos) => {
        produtos.forEach((produto) => {
          saida += ` <div class="grid"><div class="card">
            <div class="topo-card">
                <img src=" ${produto.foto1} " alt="Capa ${produto.nome}">
                <strong><p class="produto">${produto.nome}</p></strong>
            </div>
                <div class="rodape-card">
                <p class="preco">R$ ${produto.preco}</p>
                <a class ="btn-topo">
                    <nav>
                    <strong><p>Adicionar ao carrinho</p></strong></nav>
                </a>
                </div>
            </div>
            </div>`;
        });
        lstcomputadores.innerHTML = saida;
      })
      .catch((erro) => {
        console.error("Erro ao carregar computadores:", erro);
        lstcomputadores.innerHTML = "<p>Não foi possível carregar os produtos.</p>";
      });
  }

/** Essa função carrega os livros de categoria romance */
function carregar_console() {
    const lstconsole = document.getElementById("lstconsole");
    let saida = "";
  
    fetch("http://10.26.45.40:5000/api/v1/Produto/listaporcategoria/console")
      .then((res) => res.json())
      .then((produtos) => {
        produtos.forEach((produto) => {
          saida += ` <div class="grid"><div class="card">
            <div class="topo-card">
                <img src=" ${produto.foto1} " alt="Capa ${produto.nome}">
                <strong><p class="produto">${produto.nome}</p></strong>
            </div>
                <div class="rodape-card">
                <p class="preco">R$ ${produto.preco}</p>
                <a class ="btn-topo">
                    <nav>
                    <strong><p>Adicionar ao carrinho</p></strong></nav>
                </a>
                </div>
            </div>
            </div>`
        });
        lstconsole.innerHTML = saida;
      })
      .catch((erro) => {
        console.error("Erro ao carregar console:", erro);
        lstconsole.innerHTML = "<p>Não foi possível carregar os produtos.</p>";
      });
  }

/** Essa função carrega os livros de categoria fantasia */
function carregar_periferico(){
    const lstperifericos = document.getElementById("lstperifericos")
    let saida = "";
    fetch("http://10.26.45.40:5000/api/v1/Produto/listaporcategoria/periferico")
    .then( (res)=>res.json())
    .then((liv)=>{
        liv.map((li)=>{
            saida += ` <div class="grid"><div class="card">
            <div class="topo-card">
                <img src=" ${li.foto1} " alt="Capa ${li.nome}">
                <strong><p class="produto">${li.nome}</p></strong>
            </div>
                <div class="rodape-card">
                <p class="preco">R$ ${li.preco}</p>
                <a class ="btn-topo">
                    <nav>
                    <strong><p>Adicionar ao carrinho</p></strong></nav>
                </a>
                </div>
            </div>
            </div>`
        })
        lstperifericos.innerHTML = saida;
    })
}

/** Essa função carrega os livros de categoria manga */
function carregar_jogos(){
    const lstjogosdigitais = document.getElementById("lstjogosdigitais")
    let saida = "";
    fetch("http://10.26.45.40:5000/api/v1/Produto/listaporcategoria/jogosdigitais")
    .then( (res)=>res.json())
    .then((liv)=>{
        liv.map((li)=>{
            saida += ` <div class="grid"><div class="games">
            <div class="fotogames">
                <img src=" ${li.foto1} " alt="Capa ${li.nome}">
                <strong><p class="produto">${li.nome}</p></strong>
            </div>
                <div class="rodape-card">
                <p class="preco">R$ ${li.preco}</p>
                <a class ="btn-topo">
                    <nav>
                    <strong><p>Adicionar ao carrinho</p></strong></nav>
                </a>
                </div>
            </div>
            </div>`
        })
        lstjogosdigitais.innerHTML = saida;
    })
}

/** Area do carrinho, com a parte de detalhes do livro e a pagina do carrinho com o sitens para comprar */

/** Criação da variavel que da o nome ao carrinho de compras */
let nome_carrinho = "carrinho"
/**
 * estamos criando uma nova variavel que ira guardar os produtos no carrinho de compras.
 * temos uma verificação no banco de dados no navegador para saber se ja existe algum produto no carrinho caso
 * exista vamos colocar os produtos na variavel produtos_no_carrinho, caso o contrario, criaremos uma lista completamente vazia.
 */
let produtos_no_carrinho = localStorage.getItem(nome_carrinho) ? JSON.parse(localStorage.getItem(nome_carrinho)) : [];

/**
 * A Função adicionar carrinho_carrinho coloca 5 parametros para um produto no carrinhodentro da função criamos um plano chamado produto
 * que lê os parametros e coloca na area do carrinho
 */
function adicionar_carrinho(id, foto,nome,preco,qtd){
    let produto = {
        id:id,
        nome_produto:nome,
        foto_produto:foto,
        preco_produto:preco,
        quantidade_produto:qtd
    }
    produtos_no_carrinho.push(produto);
    console.log(produtos_no_carrinho)
    //vamos adicionar a lista de produtos do carrinho ao 
    //banco de dados do navegador, usando o comando 
    //localstorage.
    window.localStorage.setItem(nome_carrinho,JSON.stringify(produtos_no_carrinho))

}

/**
 * Essa função pega os dados no banco de dados e no backend e coloca em uma rota por id, ou seja, cada livro tem seu id então cada livro tem u "site" diferente
 * ele pega com o id e joga na tela as informações listadas
 */
function carregardetalhes(){
    let idlivro = window.location.search.split('=')
    idlivro = idlivro[1];

    const div_detalhes = document.getElementById("detalhes")
    fetch(`http://127.0.0.1:5000/api/v1/Produto/listaporid/${idlivro}`)
    .then((res)=>res.json())
    .then((dt)=>{
        console.log(dt);
        let div_img = document.createElement("div");
        div_img.setAttribute("id", "div_img");
        let div_capa = document.createElement("div");
        div_capa.setAttribute("id", "div_capa");
        let img_capa = document.createElement("img");
        img_capa.src = dt[0].foto1;

        // adicionar a imagem da capa a div capa
        div_capa.appendChild(img_capa)

        // adicionar a div capa a div imagem
        div_img.appendChild(div_capa)

        let div_miniatura = document.createElement("div");
        div_miniatura.setAttribute("id", "div_miniatura");
        let img_minuatura1 = document.createElement("img");
        let img_minuatura2 = document.createElement("img")
        let img_minuatura3 = document.createElement("img");
        img_minuatura1.src=dt[0].foto1;
        img_minuatura2.src=dt[0].foto2;
        img_minuatura3.src=dt[0].foto3;

        // colocar as fotos de miniatura detro da div miniatura
        div_miniatura.appendChild(img_minuatura1);
        div_miniatura.appendChild(img_minuatura2);
        div_miniatura.appendChild(img_minuatura3);

        // colocar as div miniatura dentro da div imagem
        div_img.appendChild(div_miniatura);

        // colocar a div de imagem dentro da div detalhes
        div_detalhes.appendChild(div_img)

        let div_titulo_descricao = document.createElement("div")
        div_titulo_descricao.setAttribute("id","div_titulo_descricao")

        let h3_titulo = document.createElement("h3")
        h3_titulo.innerHTML = dt[0].nome

        let p_descricao = document.createElement("p")
        p_descricao.innerHTML = dt[0].descricao

        // Adicionar o titulo e a descrição dentro da div titulo detalhes
        div_titulo_descricao.appendChild(h3_titulo)
        div_titulo_descricao.appendChild(p_descricao)

        div_detalhes.appendChild(div_titulo_descricao)

        let div_carrinho = document.createElement("div")
        div_carrinho.setAttribute("id","div_carrinho")

        let p_preco = document.createElement("p")
        p_preco.innerHTML = dt[0].preco 

        let btn_adicionar_carrinho = document.createElement("button")
        btn_adicionar_carrinho.innerHTML = "Adicionar ao carrinho"
        
        btn_adicionar_carrinho.onclick = () =>{
            adicionar_carrinho(dt[0].id, dt[0].foto1, dt[0].nome, dt[0].preco, 1)
        }

        // Adicionar ao btn a div carrinho
        div_carrinho.appendChild(p_preco)
        div_carrinho.appendChild(btn_adicionar_carrinho)

        div_detalhes.appendChild(div_carrinho)
    })
    .catch((error)=>{
        console.error(error)
    })
}

/**
 * area do carrinho e a criação da quantidade
 */
const area_carrinho = document.getElementsByClassName("carrinho")[0];
const div_qtd_itens = document.createElement("div");
div_qtd_itens.setAttribute("id", "div_qtd_itens");
area_carrinho.appendChild(div_qtd_itens);

/** Remover os itens do carrinho ao clicar na lixeira */
function remover_do_carrinho(id){
    produtos_no_carrinho = produtos_no_carrinho.filter(item => item.id !== id)
    window.localStorage.setItem(nome_carrinho,JSON.stringify(produtos_no_carrinho))
    window.location.reload()
}

/** Mostrar os itens que o usuario adicionou no carrinho na area do produtos carrinho. ele pega os dados guardados no banco de dados
 * do navegador local (localstorage) e joga na tela as informações armezenadas
 */
function carregar_produtos_carrinho(){

    let produtos = window.localStorage.getItem("carrinho");
    if(produtos!=null){
        document.getElementById("div_qtd_itens").style.display="block";
    }
    console.log(produtos);
    console.log(JSON.parse(produtos));
    console.log(JSON.parse(produtos).length);
    div_qtd_itens.innerHTML = JSON.parse(produtos).length;

    const lista_produtos_carrinho = document.getElementById("lista_produtos_carrinho")
    JSON.parse(produtos).map((itens)=>{
        let mont = `<div>
        <input type="checkbox" name="selecionado">
        <img src=${itens.foto_produto}>
        <h4>${itens.nome_produto}</h4>
        <h5>${itens.preco_produto}</h5>
        <input type="number" value=1 min=1 max=10 class="qtd">
        <p class="valor_total">${itens.preco_produto}</p>
        <img src="img/excluir.png" class="btnexcluir" onclick="remover_do_carrinho(${itens.id})">
        </div>`;
        lista_produtos_carrinho.innerHTML+=mont; 
    })



    
}

let usuario_logado="usuario_logado"

if(window.localStorage.getItem(usuario_logado)){
    let us = window.localStorage.getItem(usuario_logado)
    us = JSON.parse(us)

    let img_usuario = `<img src=${us.payload.fotousuario} class= "img_usuario">`
    
    let nome_us = us.payload.nomeusuario

    document.getElementsByClassName("usuario")[0].style.padding="15px"
    
    document.getElementsByClassName("usuario")[0].innerHTML= img_usuario+nome_us
}

function efetuarlogin(){
    const usuario = document.getElementById("txtusuario")
    const senha = document.getElementById("txtpassword")

    fetch("http://127.0.0.1:5000/api/v1/usuario/login",{
        method:"POST",
        headers:{
            "accept":"application/json",
            "content-type":"application/json"
        },
        body:JSON.stringify({
            usuario:usuario.value,
            senha:senha.value
        })
    })
    .then((rs)=>rs.json())
    .then((dados)=>{
        window.localStorage.setItem(usuario_logado,JSON.stringify(dados))
        // Limpar o Formulário
        usuario.value = ""
        senha.value = ""

        // Atualizar a tela
        window.location.reload()

    })
    .catch((erro)=>console.error(erro))
}


