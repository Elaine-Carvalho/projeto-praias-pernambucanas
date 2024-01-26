
let listaPraias = [
    
    {
        "nome":"Praia dos Carneiros",
        "img": "img/praia-dos-carneiros.webp",
        "descricao": "A Praia dos Carneiros é um lugar paradisíaco, perfeito para uma viagem romântica, com a família ou em grupos de amigos. São 5 Km de coqueiros que margeiam toda a sua extensão, a água é límpida e morna e sua paisagem é moldada pelo estuário dos rios Formoso e Ariquindá e por um paredão de arrecifes de 1 Km de extensão."
    },
    {
        "nome": "Praia de Porto de Galinhas",
        "img": "img/porto-de-galinhas.webp",
        "descricao": "Porto de Galinhas é o nome do distrito e de sua praia principal, também chamada de Praia da Vila. Ela é a praia mais concorrida da região, reconhecida como uma das melhores e mais bonitas praias do Brasil, além de ser ponto de partida das jangadas que vão até as piscinas naturais."
    },
    {
        "nome": "Praia de Calhetas",
        "img": "img/praia-de-calhetas.webp",
        "descricao": "Uma das praias mais belas do litoral Sul pernambucano. Local reservado, com um mar sensacional e ambiente agradável, boa para quem quer relaxar, mar com ondas calmas para quem aprecia um bom banho ou fazer atividades como tirolesa, passeio de lancha ou catamarã."  
    },
    {
        "nome": "Praia de Maracaípe",
        "img" : "img/praia-de-maracaipe.webp",
        "descricao": "Praia de Maracaípe é uma praia do município de Ipojuca, no estado brasileiro de Pernambuco. É uma extensão do litoral de Porto de Galinhas. É muito procurada por surfistas, sediando importantes campeonatos de surf e longboard."
    },
    {
        "nome": "Praia de Boa Viagem",
        "img": "img/Praia-de-boa-viagem.webp",
        "descricao": "Na cidade de Recife está localizada uma das praias mais conhecidas do Brasil, a bela praia de Boa Viagem, onde em diversas áreas há extensos arrecifes, formando piscinas naturais na maré baixa, boas para banho de mar. Porém, na maré alta, a praia fica perigosa para mergulho, pois há mais de 20 anos ocorrem ataques de tubarão na região e infelizmente já foram registrados 58 ataques com 24 mortes."

    },
    {
        "nome": "Praia de Maria Farinha",
        "img": "img/praia-de-maria-farinha.webp",
        "descricao": "A Praia Maria Farinha é considerada um dos destinos turísticos mais belos do estado. É conhecida por sua tranquilidade e clima agradável. Conta com uma larga faixa de areia dourada, o mar é calmo, de águas cristalinas. Cercada por mata nativa preservada, as árvores e coqueiros enfeitam a já bela paisagem do lugar."

    }

]

listaPraias.map((praias, posicao)=>{
    let cardPraias = document.getElementById("cards");
    cardPraias.innerHTML += `
            <div class="col-md-4">
                <div class="card m-2">
                    <img src="${praias.img}" class="card-img-top" alt="...">
                    <div class="card-body">
                      <h5 class="card-title">${praias.nome}</h5>
                      <a href="#" class="btn btn-secundere"onclick = "zoomImg('${posicao}')"><i class= "bi bi-zoom-in" ></i></a>
                    </div>
                </div>
            </div>

    `
    
})
function zoomImg (posicao){
    let praiaSelecionada = listaPraias[posicao];
    document.getElementById("nomePraia").innerHTML = praiaSelecionada.nome;
    document.getElementById("descricaoPraia").innerHTML = praiaSelecionada.descricao;
    document.getElementById("imgModal").src = praiaSelecionada.img;

    new bootstrap.Modal('#zoomImg').show()
}


document.body.style.backgroundColor = "LightSkyBlue";








