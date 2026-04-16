// 1. Contador Regresivo al 25 de abril
const targetDate = new Date("April 25, 2026 14:00:00").getTime();

const x = setInterval(function() {
    const now = new Date().getTime();
    const distance = targetDate - now;

    if (distance < 0) {
        clearInterval(x);
        document.getElementById("days").innerHTML = "00";
        document.getElementById("hours").innerHTML = "00";
        document.getElementById("minutes").innerHTML = "00";
        document.getElementById("seconds").innerHTML = "00";
        document.querySelector(".countdown").style.display = "none";
        return;
    }

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    document.getElementById("days").innerHTML = days.toString().padStart(2, '0');
    document.getElementById("hours").innerHTML = hours.toString().padStart(2, '0');
    document.getElementById("minutes").innerHTML = minutes.toString().padStart(2, '0');
    document.getElementById("seconds").innerHTML = seconds.toString().padStart(2, '0');
}, 1000);

// 2. Animaciones al hacer Scroll (Reveal)
function reveal() {
    const reveals = document.querySelectorAll(".reveal");
    const normas = document.querySelector(".normas-list");
    const windowHeight = window.innerHeight;

    // Elementos normales
    reveals.forEach(element => {
        const elementTop = element.getBoundingClientRect().top;
        const elementVisible = 100;
        if (elementTop < windowHeight - elementVisible) {
            element.classList.add("active");
        }
    });

    // Lista escalonada de normas
    if(normas) {
        const listTop = normas.getBoundingClientRect().top;
        if (listTop < windowHeight - 100) {
            normas.classList.add("active");
        }
    }
}

window.addEventListener("scroll", reveal);
// Ejecutar una vez al inicio
reveal();
