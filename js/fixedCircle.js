  // Função para ocultar o elemento em telas menores
  function hideFixedCircleOnMobile() {
    const fixedCircle = document.querySelector('.fixed-circle');
    if (window.innerWidth <= 768) { // Se a largura da tela for menor ou igual a 768px
      fixedCircle.style.display = 'none'; // Oculta o elemento
    } else {
      fixedCircle.style.display = 'block'; // Mostra o elemento em telas maiores
    }
  }

  // Executa a função ao carregar a página e ao redimensionar a janela
  window.addEventListener('load', hideFixedCircleOnMobile);
  window.addEventListener('resize', hideFixedCircleOnMobile);