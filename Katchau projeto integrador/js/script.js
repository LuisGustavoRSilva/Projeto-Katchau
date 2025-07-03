// esta função lista todos os livros cadastrados no banco de dados
function carregar_novidades(){
    const livros_novidades = document.getElementById("livrosnovidades")
    let saida = "";
    // esta função realiza a chamada da url do servidor backend com o resultado de uma consulta select pata exibir todos os lvros cadastrados no banco de dados
    fetch("http://127.0.0.1:5000/api/v1/produto/listar")
    .then((res)=>res.json())
    .then((dados)=>{
        // o retorno dos dados da chamada da url e quando retorna dados, eles são mapeados, portanto cada um dos livros é passado para a variavel live, então realizamos a montagem de uma saida estruturada dos livros em divs html
        dados.map((liv)=>{
            saida += `<div class="livro">
                <img src="${liv.foto1}" alt="Capa ${liv.nome}">
                <h3>${liv.nome}</h3>
                <p class="preco">R$ ${liv.preco}</p>
                <button>
                   <img src="img/carrinho1.png">
                   <p>Adicionar ao carrinho</p>
                </button>
            </div>`
        })
        // com a saida de divs montada adicionamos a uma div livros que está na tela 
        livros_novidades.innerHTML = saida;
    })
    carregar_maisvendidos();

}

function carregar_maisvendidos(){
    const livros_maisvendidos = document.getElementById("livrosmaisvendidos")
    let saida = "";
    fetch("http://127.0.0.1:5000/api/v1/produto/listarmaisvendidos")
    .then((res)=>res.json())
    .then((dados)=>{
        dados.map((liv)=>{
            saida += `<div class="livro">
                <img src="${liv.foto1}" alt="Capa ${liv.nome}">
                <h3>${liv.nome}</h3>
                <p class="quantidade">Qtd ${liv.quantidade}</p>
            </div>`
        })
     livros_maisvendidos.innerHTML = saida;
    })
    carregar_autores()
}

function carregar_autores(){
    const livros_autores = document.getElementById("livrosautores")
    let saida = "";
    fetch("http://127.0.0.1:5000/api/v1/autor/listar")
    .then((res)=>res.json())
    .then((dados)=>{
        dados.map((liv)=>{
            saida += `<div class="Autor">
                <img src="${liv.foto}" alt="Autor ${liv.nome}">
                <h3>${liv.nome}</h3>
            </div>`
        })
     livros_autores.innerHTML = saida;
    })
}

// Aqui estamos criando uma extrutura para realizar uma rolagem das fotos dos livros, a variavel pe está sendo usada para armazenar a posição da caixa de fotos. Ela tambem é usada para realizar o ponto de parada do lado esquerdo e direito

let pe = 0;
function rolarNovidadesEsquerda(){
    if(pe < -950){
        pe = -1000
    } else {
    pe-=200;
    }
    let livrosnovidades = document.getElementById("livrosnovidades")
    livrosnovidades.style.marginLeft=`${pe}px`;

}

function rolarNovidadesDireita(){
    if(pe < 50){
        pe = 0
    } else {
    pe-=200;
    }
    let livrosnovidades = document.getElementById("livrosnovidades")
    livrosnovidades.style.marginLeft=`${pe}px`;
}

function carregarlivrosesporte(){
    const lstlivros = document.getElementById("lstlivros");
    let saida = "";
    fetch("http://127.0.0.1:5000/api/v1/produto/listarPorCategoria/esporte")
    .then((res)=>res.json())
    .then((liv)=>{
        liv.map((li)=>{
            saida += `<div class=listaresporte>
            <img src="${li.foto1}">
            <h3>${li.nome}</h3>
            <p class=livpreco>R$ ${li.preco}</p>
            <a href=detalhes.html?id=${li.id}>
            Mais detalhes
            </a>
            </div>`  
        })
        lstlivros.innerHTML = saida;

    })
}

function carregarlivrosficcao(){
    const lstlivros = document.getElementById("lstlivros");
    let saida = "";
    fetch("http://127.0.0.1:5000/api/v1/produto/listarPorCategoria/ficcao")
    .then((res)=>res.json())
    .then((liv)=>{
        liv.map((li)=>{
            saida += `<div class=listarficcao>
            <img src="${li.foto1}">
            <h3>${li.nome}</h3>
            <p class=livpreco>R$ ${li.preco}</p>
            <a href=detalhes.html?id=${li.id}>
            Mais detalhes
            </a>
            </div>`  
        })
        lstlivros.innerHTML = saida;

    })
}

function carregarlivrosromance(){
    const lstlivros = document.getElementById("lstlivros");
    let saida = "";
    fetch("http://127.0.0.1:5000/api/v1/produto/listarPorCategoria/romance")
    .then((res)=>res.json())
    .then((liv)=>{
        liv.map((li)=>{
            saida += `<div class=listarromance>
            <img src="${li.foto1}">
            <h3>${li.nome}</h3>
            <p class=livpreco>R$ ${li.preco}</p>
            <a href=detalhes.html?id=${li.id}>
            Mais detalhes
            </a>
            </div>`  
        })
        lstlivros.innerHTML = saida;

    })
}

function carregarlivrosfantasia(){
    const lstlivros = document.getElementById("lstlivros");
    let saida = "";
    fetch("http://127.0.0.1:5000/api/v1/produto/listarPorCategoria/fantasia")
    .then((res)=>res.json())
    .then((liv)=>{
        liv.map((li)=>{
            saida += `<div class=listarfantasia>
            <img src="${li.foto1}">
            <h3>${li.nome}</h3>
            <p class=livpreco>R$ ${li.preco}</p>
            <a href=detalhes.html?id=${li.id}>
            Mais detalhes
            </a>
            </div>`  
        })
        lstlivros.innerHTML = saida;

    })
}

function carregarlivrosmanga(){
    const lstlivros = document.getElementById("lstlivros");
    let saida = "";
    fetch("http://127.0.0.1:5000/api/v1/produto/listarPorCategoria/manga")
    .then((res)=>res.json())
    .then((liv)=>{
        liv.map((li)=>{
            saida += `<div class=listarmanga>
            <img src="${li.foto1}">
            <h3>${li.nome}</h3>
            <p class=livpreco>R$ ${li.preco}</p>
            <a href=detalhes.html?id=${li.id}>
            Mais detalhes
            </a>
            </div>`  
        })
        lstlivros.innerHTML = saida;

    })
}

// criação da variavel que define o nome do carrinho de compras
let nome_carrinho = "carrinho"
// estamos criando uma variavel que irá guardar os produtos no carrinho de compras, temos uma verificação no banco de dados do navegador para saber se já existe algum produto no carrinho, caso exista, vamos colocar os produtos na variavel: produtos no carrinho. Caso contrario, criaremos uma lista completamente vazia.
let produtos_no_carrinho = localStorage.getItem(nome_carrinho) ? JSON.parse(localStorage.getItem(nome_carrinho)) : []
// A função adicionar_carrinho recebe 5 parametros para adicionar um novo produto no carrinho. Dentro da função, criamos um objeto que recebe os 5 dados passados sobre o produto que deseja adicionar ao carrinho.
function adicionar_carrinho(id,foto,nome,preco,quantidade){
// alert(`${foto} \n ${nome} \n ${preco} \n ${quantidade}`);
    let produto = {
        id: id,
        nome_produto:nome,
        foto_produto:foto,
        preco_produto:preco,
        quantidade:quantidade
    }
    // Adiciona um novo produto na lista de produtos
    produtos_no_carrinho.push(produto)
    console.log(produtos_no_carrinho)

    window.localStorage.setItem(nome_carrinho,JSON.stringify(produtos_no_carrinho)) 

}


function carregar_detalhes(){
    let idlivro = window.location.search.split('=');
    idlivro = idlivro[1];

    const div_detalhes = document.getElementById("detalhes");
    fetch(`http://127.0.0.1:5000/api/v1/produto/listarPorid/${idlivro}`)
    .then((res)=>res.json())
    .then((dt)=>{
        console.log(dt)
        let div_img = document.createElement("div");
        div_img.setAttribute("id","div_img");
        let div_capa = document.createElement("div");
        div_capa.setAttribute("id","div_capa");
        let img_capa = document.createElement("img")
        img_capa.src=dt[0].foto1;


        div_capa.appendChild(img_capa)
        div_img.appendChild(div_capa)


        let div_miniatura = document.createElement("div")
        div_miniatura.setAttribute("id","div_miniatura")
        let img_miniaruta1=document.createElement("img")
        let img_miniaruta2=document.createElement("img")
        let img_miniaruta3=document.createElement("img")
        img_miniaruta1.src=dt[0].foto1
        img_miniaruta2.src=dt[0].foto2
        img_miniaruta3.src=dt[0].foto3

        div_miniatura.appendChild(img_miniaruta1)
        div_miniatura.appendChild(img_miniaruta2)
        div_miniatura.appendChild(img_miniaruta3)

        div_img.appendChild(div_miniatura)

        // colocar a div de imagens dentro da div detalhes
        div_detalhes.appendChild(div_img)
        
        let div_titulo_descricao = document.createElement("div")
        div_titulo_descricao.setAttribute("id","titulo_descricao")

        let h3_titulo = document.createElement("h3")
        h3_titulo.innerHTML = dt[0].nome
        let p_descricao = document.createElement("p")
        p_descricao.innerHTML=dt[0].descricao

        div_titulo_descricao.appendChild(h3_titulo)
        div_titulo_descricao.appendChild(p_descricao)
        div_detalhes.appendChild(div_titulo_descricao)

        let div_carrinho = document.createElement("div")
        div_carrinho.setAttribute("id","div_carrinho")

        let p_preco = document.createElement("p")
        p_preco.innerHTML = dt[0].preco

        // Ao clicar no botão para adicionar ao carrinho, passamos como parametro os dados do livro naquele momento
        let btn_adicionar_carrinho = document.createElement("button")
        btn_adicionar_carrinho.innerHTML="Adicionar ao carrinho"
        btn_adicionar_carrinho.onclick = ()=>{
            adicionar_carrinho(dt[0].id,dt[0].foto1,dt[0].nome,dt[0].preco,1)
        }

        div_carrinho.appendChild(p_preco)
        div_carrinho.appendChild(btn_adicionar_carrinho)

        div_detalhes.appendChild(div_carrinho)
    })
}

// Icone do carrinho na barra de navegação
const area_carrinho = document.getElementsByClassName("carrinho")[0];
// area_carrinho.style.backgroundColor="red"
const div_qdt_itens = document.createElement("div")
div_qdt_itens.setAttribute("id","div_qtd_itens")
area_carrinho.appendChild(div_qdt_itens)

// Para remover um item do carrinho, faremos uso do comando filter que irá nos ajudar a fazer na lista de produtos no carrinho.
function remover_do_carrinho(id){
    // vamos filtrar todos os produtos diferentes (!==) do produto selecionado. Depois passamos para o carrinho apenas apenas os produtos que sobraram sem o produto removido
    produtos_no_carrinho = produtos_no_carrinho.filter(item => item.id !== id);
    window.localStorage.setItem(nome_carrinho,JSON.stringify(produtos_no_carrinho))
    // recarrega a pagina mostrando somente o produto restante do carrinho
    window.location.reload()

    }


function carregar_produtos_carrinho(){
    let produtos = window.localStorage.getItem("carrinho");
    if(produtos!=null){
        document.getElementById("div_qtd_itens").style.display="block";
    }
    console.log(produtos);
    console.log(JSON.parse(produtos))
    console.log(JSON.parse(produtos).length)     
    // Adiciona a qualtidade de elementos no carrinho ao icone do carrinho na barra de navegação
    div_qdt_itens.innerHTML = JSON.parse(produtos).length     
    
    const lista_produtos_carrinho = document.getElementById("lista_produtos_carrinho")
    JSON.parse(produtos).map((itens)=>{
        let mont = `<div> 
        <input type="checkbox" name="selecionado">
        <img src=${itens.foto_produto}>
        <h4> ${itens.nome_produto}</h4>
        <h5> ${itens.preco_produto}</h5> 
        <input type="number" value=1 min=1 max=10 id="qtd">
        <p class="valor_total">${itens.preco_produto}</p>
        <img src="img/excluir.png" class="btnexcluir" onclick="remover_do_carrinho(${itens.id})">
        </div>`;
        lista_produtos_carrinho.innerHTML+=mont
    })
}

if(window.localStorage.getElementById("textusuario")){

    let img_usuario = `<img src=${us.payload.fotousuario} width=32 height=32>`
    let nome_us = us.payload.nomeusuario

    document.getElementsByClassName("usuario")[0].innerHTML = us.payload.nomeusuario
}
