/* Esta função lista todos os livros novos */
function carregar_novidades() {
    const produtos_novidades = document.getElementById("produtosnovidades");
    let saida = "";
    fetch("http://10.26.45.40:5000/api/v1/produto/listarindex")
        .then((res) => res.json())
        .then((dados) => {
            dados.forEach((liv) => {
                saida += `
                <div class="grid">
                    <a href="detalhes.html?id=${liv.id}" class="card">
                        <div class="card">
                            <div class="topo-card">
                                <img src="${liv.foto1}" alt="Capa ${liv.nome}">
                                <strong><p class="produto">${liv.nome}</p></strong>
                            </div>
                            <div class="rodape-card">
                                <p class="preco">R$ ${liv.preco}</p>
                            </div>
                        </div>
                    </a>
                </div>`;
            });
            produtos_novidades.innerHTML = saida;
        })
        .catch((erro) => console.error("Erro ao carregar novidades:", erro));
    carregar_maisvendidos(); // Corrigido: nome da função
}

/* Essa função carrega os livros mais vendidos */
function carregar_maisvendidos() {
    const produtos_maisvendidos = document.getElementById("produtosmaisvendidos");
    let saida = "";
    fetch("http://10.26.45.40:5000/api/v1/Produto/listarmaisvendidos")
        .then((res) => res.json())
        .then((dados) => {
            dados.forEach((liv) => {
                saida += `
                <div class="grid">
                    <a href="detalhes.html?id=${liv.id}" class="card">
                        <div class="card">
                            <div class="topo-card">
                                <img src="${liv.foto1}" alt="Capa ${liv.nome}">
                                <strong><p class="produto">${liv.nome}</p></strong>
                            </div>
                            <div class="rodape-card">
                                <p class="preco">R$ ${liv.preco}</p>
                            </div>
                        </div>
                    </a>
                </div>`;
            });
            produtos_maisvendidos.innerHTML = saida;
        })
        .catch((erro) => console.error("Erro ao carregar mais vendidos:", erro));
    carregar_autores();
}

/* Essa função carrega os autores */
function carregar_autores() {
    const livros_autores = document.getElementById("livrosautores");
    let saida = "";
    fetch("http://10.26.45.40:5000/api/v1/autor/listar") // Corrigido: mesmo servidor
        .then((res) => res.json())
        .then((dados) => {
            dados.forEach((liv) => {
                saida += `
                <div class="autor">
                    <img src="${liv.foto}" alt="Autor ${liv.nome}">
                    <h3>${liv.nome}</h3>
                </div>`;
            });
            livros_autores.innerHTML = saida;
        })
        .catch((erro) => console.error("Erro ao carregar autores:", erro));
}

/* Funções de rolagem */
let pe = 0;
function rolarnovidadesesquerda() {
    if (pe > -6700) {
        pe -= 200;
    }
    const livrosnovidades = document.getElementById("livrosnovidades");
    livrosnovidades.style.marginLeft = `${pe}px`;
}

function rolarnovidadesdireita() {
    if (pe < 0) {
        pe += 200;
    } else {
        pe = 0;
    }
    const livrosnovidades = document.getElementById("livrosnovidades");
    livrosnovidades.style.marginLeft = `${pe}px`;
}

/* Funções de carregamento por categoria */
function carregar_hardware() {
    const lsthardware = document.getElementById("lsthardware");
    let saida = "";
    fetch("http://10.26.45.40:5000/api/v1/Produto/listaporcategoria/hardware")
        .then((res) => res.json())
        .then((produtos) => {
            produtos.forEach((produto) => {
                saida += `
                <div class="grid">
                    <a href="detalhes.html?id=${produto.id}" class="card">
                        <div class="card">
                            <div class="topo-card">
                                <img src="${produto.foto1}" alt="Capa ${produto.nome}">
                                <strong><p class="produto">${produto.nome}</p></strong>
                            </div>
                            <div class="rodape-card">
                                <p class="preco">R$ ${produto.preco}</p>
                            </div>
                        </div>
                    </a>
                </div>`;
            });
            lsthardware.innerHTML = saida;
        })
        .catch((erro) => {
            console.error("Erro ao carregar hardware:", erro);
            lsthardware.innerHTML = "<p>Não foi possível carregar os produtos.</p>";
        });
}

function carregar_hardwareindex() {
    const lsthardware = document.getElementById("lsthardware");
    let saida = "";
    fetch("http://10.26.45.40:5000/api/v1/Produto/listaporcategoriaindex/hardware")
        .then((res) => res.json())
        .then((produtos) => {
            produtos.forEach((produto) => {
                saida += `
                <div class="grid">
                    <a href="detalhes.html?id=${produto.id}" class="card">
                        <div class="card">
                            <div class="topo-card">
                                <img src="${produto.foto1}" alt="Capa ${produto.nome}">
                                <strong><p class="produto">${produto.nome}</p></strong>
                            </div>
                            <div class="rodape-card">
                                <p class="preco">R$ ${produto.preco}</p>
                            </div>
                        </div>
                    </a>
                </div>`;
            });
            lsthardware.innerHTML = saida;
        })
        .catch((erro) => {
            console.error("Erro ao carregar hardware:", erro);
            lsthardware.innerHTML = "<p>Não foi possível carregar os produtos.</p>";
        });
}

function carregar_computador() {
    const lstcomputadores = document.getElementById("lstcomputador");
    let saida = "";
    fetch("http://10.26.45.40:5000/api/v1/Produto/listaporcategoria/computador")
        .then((res) => res.json())
        .then((produtos) => {
            produtos.forEach((produto) => {
                saida += `
                <div class="grid">
                    <a href="detalhes.html?id=${produto.id}" class="card">
                        <div class="card">
                            <div class="topo-card">
                                <img src="${produto.foto1}" alt="Capa ${produto.nome}">
                                <strong><p class="produto">${produto.nome}</p></strong>
                            </div>
                            <div class="rodape-card">
                                <p class="preco">R$ ${produto.preco}</p>
                            </div>
                        </div>
                    </a>
                </div>`;
            });
            lstcomputadores.innerHTML = saida;
        })
        .catch((erro) => {
            console.error("Erro ao carregar computadores:", erro);
            lstcomputadores.innerHTML = "<p>Não foi possível carregar os produtos.</p>";
        });
}

function carregar_console() {
    const lstconsole = document.getElementById("lstconsole");
    let saida = "";
    fetch("http://10.26.45.40:5000/api/v1/Produto/listaporcategoria/console")
        .then((res) => res.json())
        .then((produtos) => {
            produtos.forEach((produto) => {
                saida += `
                <div class="grid">
                    <a href="detalhes.html?id=${produto.id}" class="card">
                        <div class="card">
                            <div class="topo-card">
                                <img src="${produto.foto1}" alt="Capa ${produto.nome}">
                                <strong><p class="produto">${produto.nome}</p></strong>
                            </div>
                            <div class="rodape-card">
                                <p class="preco">R$ ${produto.preco}</p>
                            </div>
                        </div>
                    </a>
                </div>`;
            });
            lstconsole.innerHTML = saida;
        })
        .catch((erro) => {
            console.error("Erro ao carregar consoles:", erro);
            lstconsole.innerHTML = "<p>Não foi possível carregar os produtos.</p>";
        });
}

function carregar_periferico() {
    const lstperifericos = document.getElementById("lstperifericos");
    let saida = "";
    fetch("http://10.26.45.40:5000/api/v1/Produto/listaporcategoria/periferico")
        .then((res) => res.json())
        .then((produtos) => {
            produtos.forEach((produto) => {
                saida += `
                <div class="grid">
                    <a href="detalhes.html?id=${produto.id}" class="card">
                        <div class="card">
                            <div class="topo-card">
                                <img src="${produto.foto1}" alt="Capa ${produto.nome}">
                                <strong><p class="produto">${produto.nome}</p></strong>
                            </div>
                            <div class="rodape-card">
                                <p class="preco">R$ ${produto.preco}</p>
                            </div>
                        </div>
                    </a>
                </div>`;
            });
            lstperifericos.innerHTML = saida;
        })
        .catch((erro) => {
            console.error("Erro ao carregar periféricos:", erro);
            lstperifericos.innerHTML = "<p>Não foi possível carregar os produtos.</p>";
        });
}

function carregar_perifericoindex() {
    const lstperifericos = document.getElementById("lstperifericos");
    let saida = "";
    fetch("http://10.26.45.40:5000/api/v1/Produto/listaporcategoriaindex/periferico")
        .then((res) => res.json())
        .then((produtos) => {
            produtos.forEach((produto) => {
                saida += `
                <div class="grid">
                    <a href="detalhes.html?id=${produto.id}" class="card">
                        <div class="card">
                            <div class="topo-card">
                                <img src="${produto.foto1}" alt="Capa ${produto.nome}">
                                <strong><p class="produto">${produto.nome}</p></strong>
                            </div>
                            <div class="rodape-card">
                                <p class="preco">R$ ${produto.preco}</p>
                            </div>
                        </div>
                    </a>
                </div>`;
            });
            lstperifericos.innerHTML = saida;
        })
        .catch((erro) => {
            console.error("Erro ao carregar periféricos:", erro);
            lstperifericos.innerHTML = "<p>Não foi possível carregar os produtos.</p>";
        });
}

function carregar_jogos() {
    const lstjogosdigitais = document.getElementById("lstjogosdigitais");
    let saida = "";
    fetch("http://10.26.45.40:5000/api/v1/Produto/listaporcategoria/jogosdigitais")
        .then((res) => res.json())
        .then((produtos) => {
            produtos.forEach((produto) => {
                saida += `
                <div class="grid">
                    <a href="detalhes.html?id=${produto.id}" class="card">
                        <div class="card">
                            <div class="topo-card">
                                <img src="${produto.foto1}" alt="Capa ${produto.nome}">
                                <strong><p class="produto">${produto.nome}</p></strong>
                            </div>
                            <div class="rodape-card">
                                <p class="preco">R$ ${produto.preco}</p>
                            </div>
                        </div>
                    </a>
                </div>`;
            });
            lstjogosdigitais.innerHTML = saida;
        })
        .catch((erro) => {
            console.error("Erro ao carregar jogos digitais:", erro);
            lstjogosdigitais.innerHTML = "<p>Não foi possível carregar os produtos.</p>";
        });
}

function carregar_jogosindex() {
    const lstjogosdigitais = document.getElementById("lstjogosdigitais");
    let saida = "";
    fetch("http://10.26.45.40:5000/api/v1/Produto/listaporcategoriaindex/jogosdigitais")
        .then((res) => res.json())
        .then((produtos) => {
            produtos.forEach((produto) => {
                saida += `
                <div class="grid">
                    <a href="detalhes.html?id=${produto.id}" class="card">
                        <div class="card">
                            <div class="topo-card">
                                <img src="${produto.foto1}" alt="Capa ${produto.nome}">
                                <strong><p class="produto">${produto.nome}</p></strong>
                            </div>
                            <div class="rodape-card">
                                <p class="preco">R$ ${produto.preco}</p>
                            </div>
                        </div>
                    </a>
                </div>`;
            });
            lstjogosdigitais.innerHTML = saida;
        })
        .catch((erro) => {
            console.error("Erro ao carregar jogos digitais:", erro);
            lstjogosdigitais.innerHTML = "<p>Não foi possível carregar os produtos.</p>";
        });
}

/* Carregar detalhes do produto */
function carregardetalhes() {
    const idlivro = new URLSearchParams(window.location.search).get("id");
    const div_detalhes = document.getElementById("detalhes");
    if (!idlivro) {
        div_detalhes.innerHTML = "<p>Produto não encontrado.</p>";
        return;
    }

    fetch(`http://10.26.45.40:5000/api/v1/Produto/listaporid/${idlivro}`)
        .then((res) => res.json())
        .then((dt) => {
            if (!dt || dt.length === 0) {
                div_detalhes.innerHTML = "<p>Produto não encontrado.</p>";
                return;
            }
            const produto = dt[0];

            let div_img = document.createElement("div");
            div_img.id = "div_img";

            let div_capa = document.createElement("div");
            div_capa.id = "div_capa";
            let img_capa = document.createElement("img");
            img_capa.src = produto.foto1;
            img_capa.alt = produto.nome;
            div_capa.appendChild(img_capa);
            div_img.appendChild(div_capa);

            let div_miniatura = document.createElement("div");
            div_miniatura.id = "div_miniatura";
            ["foto1", "foto2", "foto3"].forEach(foto => {
                if (produto[foto]) {
                    let img = document.createElement("img");
                    img.src = produto[foto];
                    img.alt = "Miniatura";
                    div_miniatura.appendChild(img);
                }
            });
            div_img.appendChild(div_miniatura);
            div_detalhes.appendChild(div_img);

            let div_titulo_descricao = document.createElement("div");
            div_titulo_descricao.id = "div_titulo_descricao";
            let h3 = document.createElement("h3");
            h3.textContent = produto.nome;
            let p_desc = document.createElement("p");
            p_desc.textContent = produto.descricao;
            div_titulo_descricao.appendChild(h3);
            div_titulo_descricao.appendChild(p_desc);
            div_detalhes.appendChild(div_titulo_descricao);

            let div_carrinho = document.createElement("div");
            div_carrinho.id = "div_carrinho";
            let p_preco = document.createElement("p");
            p_preco.textContent = `R$ ${produto.preco}`;
            let btn = document.createElement("button");
            btn.textContent = "Adicionar ao carrinho";
            btn.onclick = () => {
                adicionar_carrinho(produto.id, produto.foto1, produto.nome, produto.preco, 1);
                alert("Produto adicionado ao carrinho!");
            };
            div_carrinho.appendChild(p_preco);
            div_carrinho.appendChild(btn);
            div_detalhes.appendChild(div_carrinho);
        })
        .catch((erro) => {
            console.error("Erro ao carregar detalhes:", erro);
            div_detalhes.innerHTML = "<p>Erro ao carregar produto.</p>";
        });
}

/* Carrinho de compras */
let nome_carrinho = "carrinho";
let produtos_no_carrinho = localStorage.getItem(nome_carrinho)
    ? JSON.parse(localStorage.getItem(nome_carrinho))
    : [];

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
                alert("Produto adicionado ao seu carrinho!")
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

/* Login de usuário */
let usuario_logado = "usuario_logado";

if (localStorage.getItem(usuario_logado)) {
    const user = JSON.parse(localStorage.getItem(usuario_logado));
    const img_usuario = `<img src="${user.payload.fotousuario}" class="img_usuario">`;
    const nome_us = user.payload.nomeusuario;
    const usuarioElement = document.querySelector(".usuario_e_carinho img[src='img/usuario.png']").parentElement;
    usuarioElement.innerHTML = img_usuario + nome_us;
    usuarioElement.style.padding = "15px";
}

function efetuarlogin() {
    const usuario = document.getElementById("txtusuario");
    const senha = document.getElementById("txtpassword");

    if (!usuario || !senha) {
        alert("Campos de login não encontrados.");
        return;
    }

    if (!usuario.value || !senha.value) {
        alert("Por favor, preencha todos os campos.");
        return;
    }

    fetch("http://10.26.45.40:5000/api/v1/usuario/login", {
        method: "POST",
        headers: {
            "accept": "application/json",
            "content-type": "application/json"
        },
        body: JSON.stringify({
            usuario: usuario.value,
            senha: senha.value
        })
    })
    .then(res => res.json())
    .then(dados => {
        localStorage.setItem(usuario_logado, JSON.stringify(dados));
        usuario.value = "";
        senha.value = "";
        window.location.reload();
    })
    .catch(erro => {
        console.error("Erro no login:", erro);
        alert("Erro ao fazer login. Tente novamente.");
    });
  
}