function formatarCEP(input) {
    let cep = input.value.replace(/\D/g, '');
    
    if (cep.length >= 5) {
    cep = cep.substring(0, 5) + '-' + cep.substring(5, 8);
    }
    
    input.value = cep;
    }

    const cepInput = document.getElementById('cepInput');
    cepInput.addEventListener('input', function() {
    formatarCEP(cepInput);
    }); 

    function calcularFrete() {
        const frete = "O frete para o CEP informado é R$ 10,00.";

        const resultadoFreteDiv = document.getElementById("resultadoFrete");
        resultadoFreteDiv.textContent = frete;
    }

    function calcularPrazo() {
        const prazo = "6 Dias úteis";

        const resultadoFreteDiv = document.getElementById("resultadoPrazo");
        resultadoFreteDiv.textContent = prazo;
    }

    function calcular() {
        calcularFrete();
        calcularPrazo();
    }

    const calcularFreteButton = document.getElementById("calcularFreteButton");
    calcularFreteButton.addEventListener("click", calcular);


    const divs = document.querySelectorAll(".togle-size");

    divs.forEach(function(div) {
        div.addEventListener("click", function() {
            this.classList.toggle("preenchida");
        });
    });

const searchButton = document.getElementById('search-button');
const searchBar = document.querySelector('.search-bar');
        
    searchButton.addEventListener('click', () => {
            searchBar.style.display = 'block';
    });



document.addEventListener('DOMContentLoaded', function() {
    console.log('Script compra.js executado.');

    var imagemPrincipal = document.querySelector('.img-principal');
    var imagensMiniatura = document.querySelectorAll('.box');

    imagensMiniatura.forEach(function(imagem) {
        imagem.addEventListener('click', function() {
            console.log('Imagem clicada:', imagem.getAttribute('src'));
            imagemPrincipal.src = imagem.getAttribute('src');
        });
    });
});

function redirecionarParaOutraPagina() {
    // Adicione o código para redirecionar para a página desejada
    alert('Redirecionando para outra página...');
}



