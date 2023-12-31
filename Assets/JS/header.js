//Função Barra de Pesquisar
const searchButton = document.getElementById('search-button');
        const searchBar = document.querySelector('.search-bar');
        
        searchButton.addEventListener('click', () => {
            searchBar.style.display = 'block';
        });