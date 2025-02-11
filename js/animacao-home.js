const section = document.getElementById("image-section");
const imagem1 = document.getElementById("imagem-1");
const imagem2 = document.getElementById("imagem-2");

let isTransitioning = false; 

// Configuração do Intersection Observer
const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
      
        handleTransition();
      } else {
       
        resetImages();
      }
    });
  },
  {
    threshold: 0.5, // Ativa quando 50% da seção está visível
  }
);

// Inicia o observador
observer.observe(section);

// Função para lidar com a transição entre as imagens
function handleTransition() {
  if (isTransitioning) return; 
  isTransitioning = true;

  // Transição para imagem 2
  imagem1.style.opacity = 0;
  imagem2.style.opacity = 1;

  // Retorno para imagem 1 após tempo definido
  setTimeout(() => {
    imagem1.style.opacity = 1;
    imagem2.style.opacity = 0;
    isTransitioning = false; 
  }, 8000); // Tempo total da transição
}

// Função para resetar as imagens
function resetImages() {
  imagem1.style.opacity = 1; 
  imagem2.style.opacity = 0; 
  isTransitioning = false; 
}
