document.addEventListener("DOMContentLoaded", function () {
    let currentIndex = 0;
    const itemsToShow = 4;
    const itemWidth = document.querySelector(".carousel-item").offsetWidth;
    const itemCount = document.querySelectorAll(".carousel-item").length;
    const carousel = document.getElementById("productCarousel");

    // Define a largura do carrossel baseada no número de itens para mostrar
    carousel.style.width = itemWidth * itemsToShow + "px";

    // Adiciona event listeners aos botões de navegação
    document.querySelector(".prev-btn").addEventListener("click", prevSlide);
    document.querySelector(".next-btn").addEventListener("click", nextSlide);

    // Inicialmente, oculta os produtos além do limite
    for (let i = itemsToShow; i < itemCount; i++) {
        document.querySelectorAll(".carousel-item")[i].style.opacity = 0;
        document.querySelectorAll(".carousel-item")[i].style.transition = "opacity 0.5s";
    }

    function nextSlide() {
        if (currentIndex < itemCount - itemsToShow) {
            currentIndex += itemsToShow;
            updateCarousel();
        }
    }

    function prevSlide() {
        if (currentIndex >= itemsToShow) {
            currentIndex -= itemsToShow;
            updateCarousel();
        }
    }

    function updateCarousel() {
        const translateValue = -currentIndex * itemWidth;
        carousel.style.transform = "translateX(" + translateValue + "px)";

        // Oculta os produtos além do limite
        for (let i = 0; i < itemCount; i++) {
            if (i < currentIndex || i >= currentIndex + itemsToShow) {
                document.querySelectorAll(".carousel-item")[i].style.opacity = 0;
            } else {
                document.querySelectorAll(".carousel-item")[i].style.opacity = 1;
            }
        }
    }

    // Chama a função de atualizar o carrossel ao carregar a página
    updateCarousel();
});

