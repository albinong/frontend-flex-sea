document.addEventListener("DOMContentLoaded", () => {
  let isTransitioning = false;

  window.addEventListener("scroll", () => {
    const image1 = document.querySelector(".image1");
    const image2 = document.querySelector(".image2");
    const image1Height = image1.offsetHeight;
    const image1Offset = image1.offsetTop;
    const windowHeight = window.innerHeight;
    const scrollPosition = window.scrollY;

    const customOffset = 100; // Controle adicional para ajustar o ponto inicial da transição
    const triggerPoint = image1Offset + image1Height / 2 + customOffset; // Ponto inicial da transição
    const transitionSpeedFactor = 0.6; // Fator para acelerar a transição (menor = mais rápido)

    if (!isTransitioning) {
      // Calcula o progresso da transição
      if (scrollPosition + windowHeight >= triggerPoint) {
        const progress = Math.min(
          (scrollPosition + windowHeight - triggerPoint) /
            (windowHeight * transitionSpeedFactor),
          1
        );
        image2.style.opacity = progress;
        image1.style.opacity = 1 - progress;

        // Verifica se a transição atingiu o final
        if (progress === 1) {
          isTransitioning = true;

          // Define o timeout para retornar à imagem 1
          setTimeout(() => {
            image1.style.opacity = 1;
            image2.style.opacity = 0;
            isTransitioning = false;
          }, 5000); // Tempo total da transição
        }
      } else {
        // Antes do ponto de transição
        image2.style.opacity = 0;
        image1.style.opacity = 1;
      }

      if (scrollPosition === 0) {
        // Reseta as opacidades no topo da página
        image1.style.opacity = 1;
        image2.style.opacity = 0;
      }
    }
  });
});
