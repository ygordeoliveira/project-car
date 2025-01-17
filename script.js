let listaCarros = [
    {
        "nome": "Drako GTE",
        "img": "img/drako_gte.jpeg",
        "descricao": "O Drako GTE é um super sedã em todos os sentidos. Com 1.217 cv e nada menos que 905 kgfm de torque, este esportivo elétrico acelera de 0 a 100 km/h em cerca de 2 segundos e tem uma velocidade máxima de 331 km/h. O custo para ter este foguete elétrico na sua garagem é de US$ 1,2 milhão (R$ 6.118.920)."
    },
    {
        "nome": "De Tomaso P72",
        "img": "img/de-tomaso-p72.jpg",
        "descricao": "O De Tomaso P72 é basicamente a definição da beleza. O supercarro estiloso foi revelado no festival de Goodwood de 2019 com um motor V8 supercharged da Ford, com 700 cv de potência. O P72 marcou o retorno da marca De Tomaso depois de quase 30 anos sem lançar um veículo. E, se você quiser um, custará no mínimo US$ 1,3 milhão (R$ 6.628.830)."
    },
    {
        "nome": "Ferrari LaFerrari",
        "img": "img/ferrari-laferrari.webp",
        "descricao": "Custando nada menos que US$ 1,4 milhão (R$ 7.138.740), a Ferrari LaFerrari é um dos supercarros mais baratos desta lista, por conta da sua idade - está em um momento em que não é antigo o suficiente para virar raridade, mas também já não é um dos modelos mais atuais da marca italiana. Apresentado em 2013 com 963 cv e velocidade máxima de 354 km/h, ainda é a Ferrari mais rápida e potente já produzida até agora. Teve somente 499 unidades produzidas até 2016."
    },
    {
        "nome": "Pagani Huayra",
        "img": "img/pagani-huayra.jpeg",
        "descricao": "Sem dúvidas um dos carros mais bonitos da lista, o Pagani Huayra custa US$ 1,4 milhão (R$ 7.138.740) e tem o mesmo problema que a LaFerrari, sendo um modelo de mais idade. Produzido manualmente, o hipercarro teve 100 unidades montadas na versão cupê entre 2012 e 2018, com mais 20 unidades feitas da versão BC (que aparece mais abaixo) entre 2017 e 2019. Todas usam o mesmo motor V12 da Mercedes-AMG, entregando 730 cv."
    },
    {
        "nome": "McLaren Elva",
        "img": "img/mclaren-elva.jpg",
        "descricao": "O McLaren Elva é um dos últimos esportivos lançados pela marca britânica. Mesmo sem o para-brisa (que são opcionais) ou teto, o Elva ainda tem bom motivos para conquistar os clientes ,com 815 cv vindos de seu motor 4.0 V8 biturbo. Em um primeiro momento, a McLaren anunciou apenas 399 unidades, mas este número acabou reduzido para somente 249 veículos. Ou seja, mais um motivo para poucos conseguirem comprar esta máquina que custa US$ 1,7 milhão (R$ 8.668.470)."
    },
    {
        "nome": "Czinger 21C",
        "img": "img/czinger-21c.webp",
        "descricao": "Você pode não ter ouvido o nome Czinger antes, mas esta fabricante de esportivos da Califórnia (EUA) é responsável pelo 21C, um supercarro que custa US$ 1,7 milhão (R$ 8.668.470). São 1.268 cv gerados pelo motor 2.9 V8 biturbo híbrido, podendo subir para 1.369 cv por um custo extra. A fabricante diz que o C21 acelera de 0 a 100 km/h em 1,9 segundos e que tem velocidade máxima de 452 km/h."
    }
]

listaCarros.map((carro, posicao) => {
    let cardCarro = document.getElementById("cards");
    cardCarro.innerHTML += `
        <div class="col-md-4" style="display: flex; align-items: center;" >
            <div class="card m-4" style="width: 100%;">
                <img src="${carro.img}" class="card-img-top" alt="...">
                <div class="card-body">
                    <h5 class="card-title">${carro.nome}</h5>
                    <a href="#" class="btn btn-secondary" onClick="zoomImg('${posicao}')"><i class="bi bi-zoom-in"></i></a>
                </div>
            </div>
        </div>
    `
})

// Função que será responsável por abrir o modal e mostrar as informações do carro que foi selecionado
function zoomImg(posicao) {
    let carroSelecionado = listaCarros[posicao]
    document.getElementById("nomeCarro").innerHTML = carroSelecionado.nome;
    document.getElementById("descricaoCarro").innerHTML = carroSelecionado.descricao;
    document.getElementById("imgModal").src = carroSelecionado.img;

    // Mostra o modal na tela
    new bootstrap.Modal("#zoomImg").show();
}

function alterarTemaSite() {
    let tema = document.querySelector("html").getAttribute("data-bs-theme");

    if (tema === "dark") {
        document.querySelector("html").setAttribute("data-bs-theme", "light");
        document.querySelector("#alterarTemaSite").innerHTML = `<i class="bi bi-moon-fill"></i>`
    } else {
        document.querySelector("html").setAttribute("data-bs-theme", "dark");
        document.querySelector("#alterarTemaSite").innerHTML = `<i class="bi bi-brightness-high-fill"></i>`
    }
}