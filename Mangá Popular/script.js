document.addEventListener("DOMContentLoaded", function () {
    const carrossel = document.querySelector(".carrossel");
    const slides = carrossel.querySelectorAll(".slide");
    const botaoPrev = document.getElementById("prev");
    const botaoNext = document.getElementById("next");
    let indexAtual = 0;

    function mostrarSlide(index) {
        slides.forEach((slide, i) => {
            if (i === index) {
                slide.style.display = "block";
            } else {
                slide.style.display = "none";
            }
        });
    }

    botaoPrev.addEventListener("click", () => {
        indexAtual = (indexAtual - 1 + slides.length) % slides.length;
        mostrarSlide(indexAtual);
    });

    botaoNext.addEventListener("click", () => {
        indexAtual = (indexAtual + 1) % slides.length;
        mostrarSlide(indexAtual);
    });

    mostrarSlide(indexAtual);
});
