document.addEventListener("DOMContentLoaded", function () {
    const horasElement = document.getElementById("horas");
    const minutosElement = document.getElementById("minutos");
    const segundosElement = document.getElementById("segundos");


    let totalTimeInSeconds = 2 * 60 * 60; 

    function updateTimer() {
        const hours = Math.floor(totalTimeInSeconds / 3600);
        const minutes = Math.floor((totalTimeInSeconds % 3600) / 60);
        const seconds = totalTimeInSeconds % 60;

        horasElement.textContent = String(hours).padStart(2, '0');
        minutosElement.textContent = String(minutes).padStart(2, '0');
        segundosElement.textContent = String(seconds).padStart(2, '0');

        if (totalTimeInSeconds > 0) {
            totalTimeInSeconds--;
        }
    }

    setInterval(updateTimer, 1000); 
});