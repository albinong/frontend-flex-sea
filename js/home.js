// Seleciona o elemento <hr> e o pai .section-main
const hrElement = document.querySelector('.content hr');
const sectionMain = document.querySelector('.section-main');

// Função para ajustar a largura do <hr>
function adjustHrWidth() {
    if (hrElement && sectionMain) {
        // Calcula a largura do pai
        const parentWidth = sectionMain.offsetWidth;

        // Aplica a largura ao <hr>
        hrElement.style.width = `${parentWidth}px`;
    }
}

// Ajusta a largura ao carregar a página
window.addEventListener('load', adjustHrWidth);

// Ajusta a largura ao redimensionar a janela
window.addEventListener('resize', adjustHrWidth);
