    let Projetos = [
    {
        id: 1,
        nome: "Projeto Eccomerce",
        categoria: "javascript",
        imagem: "img/PROJETO (2).png",
        descricao:"Eccomerce de aparelhos tecnológicos como: Celular, Notebooks e outros acessórios."
    },
    {
        id: 2,
        nome: "Replica Spotify",
        categoria: "javascript",
        imagem: "img/PROJETO (1).png",
        descricao:"Uma replica do Spotify, um aplicativo de streaming de musicas e podcasts."
    },
    {
        id: 3,
        nome: "Exposição de Carros",
        categoria: "html,css",
        imagem: "img/PROJETO (3).png",
        descricao:"Uma vitrine para mostrar carros de luxo com informações sobre eles."
    },
];

let containerprojetos = document.querySelector(".projetos-container");
let todosBotoes = document.querySelectorAll(".botao-categorias")
let categoria = "todos"

        
function mostrarprojetos() {
    let htmlProjetos = ""

    Projetos.forEach(prd => {

        if (prd.categoria === categoria || categoria === "todos") {


            htmlProjetos = htmlProjetos + `
            <div class="cartao-projeto">
                <img src="${prd.imagem}" class="imagem-projeto">
                <div class="info-projeto">
                    <h3 class="nome-projeto">${prd.nome}</h3>
                    <p class="descricao-projeto">${prd.descricao}</p>
                </div>
            </div>
            `
            }
        })

        containerprojetos.innerHTML = htmlProjetos
}

mostrarprojetos()

todosBotoes.forEach(botao => {

    botao.addEventListener("click", function () {
        categoria = botao.getAttribute("data-categoria")

        todosBotoes.forEach(b => b.classList.remove("ativo"))

        botao.classList.add("ativo")

        mostrarprojetos()
    })
})

function menuShow() {
    let menuMobile = document.querySelector('.mobile-menu');
    if (menuMobile.classList.contains('open')) {
        menuMobile.classList.remove('open');
        document.querySelector('.icon').src = '/img/MENU.png';
    }
    else { 
        menuMobile.classList.add('open');
        document.querySelector('.icon').src = '/img/FECHAR.png';

    }
}
