const menu = document.querySelector(".menu");
const menuBtn = document.querySelector(".menu-btn");
const closeBtn = document.querySelector(".close-btn");

menuBtn.addEventListener("click", () => {
  menu.classList.add("active");
});

closeBtn.addEventListener("click", () => {
  menu.classList.remove("active");
});

let timeoutId; // Variável global para armazenar o ID do timeout

document.querySelectorAll(".menu-item").forEach((item) => {

  document.querySelectorAll(".menu-item .submenu a").forEach((link) => {
    link.addEventListener("click", function () {
      // Fecha todos os submenus
      document.querySelectorAll(".menu-item").forEach((menuItem) => {
        menuItem.classList.remove("active");
      });

      // Fecha o menu principal em telas menores
      const menu = document.querySelector(".menu");
      if (window.innerWidth <= 1060) {
        menu.classList.remove("active");
      }

      // Remove a classe que aumenta o tamanho do header
      const header = document.querySelector("header");
      header.classList.remove("submenu-open");
    });
  });




  const arrow = item.querySelector(".arrow"); // Seleciona o span que contém a imagem SVG

  // Evento de clique para abrir/fechar o submenu
  arrow.addEventListener("click", function (e) {
    e.preventDefault(); // Impede o comportamento padrão do link
    e.stopPropagation(); // Impede a propagação do evento para o link pai

    // Fecha outros submenus abertos
    document.querySelectorAll(".menu-item").forEach((menuItem) => {
      if (menuItem !== item) {
        menuItem.classList.remove("active");
      }
    });

    // Alterna a classe 'active' no item clicado
    item.classList.toggle("active");

    // Adiciona ou remove a classe 'submenu-open' no header
    const header = document.querySelector("header");
    if (item.classList.contains("active")) {
      header.classList.add("submenu-open");
    } else {
      header.classList.remove("submenu-open");
    }
  });

  // Evento de mouseenter para abrir o submenu em telas maiores
  item.addEventListener("mouseenter", function () {
    if (window.innerWidth > 1060) {
      // Verifica se a tela é maior que 1060px
      clearTimeout(timeoutId); // Cancela o timeout se o mouse voltar ao item

      // Fecha outros submenus abertos
      document.querySelectorAll(".menu-item").forEach((menuItem) => {
        if (menuItem !== item) {
          menuItem.classList.remove("active");
        }
      });

      // Abre o submenu do item atual
      item.classList.add("active");

      // Aumenta o tamanho do header
      const header = document.querySelector("header");
      header.classList.add("submenu-open");
    }
  });

  // Evento de mouseleave para fechar o submenu em telas maiores
  item.addEventListener("mouseleave", function () {
    if (window.innerWidth > 1060) {
      timeoutId = setTimeout(() => {
        item.classList.remove("active");
        const header = document.querySelector("header");
        header.classList.remove("submenu-open");
      }, 300);
    }
  });

  // Permite navegação padrão se o link principal for clicado
  item.querySelector("a").addEventListener("click", function (e) {
    if (!item.classList.contains("active")) {
      // Se o submenu não estiver aberto, permite a navegação
      return;
    }
    // Se o submenu estiver aberto, fecha o submenu e permite a navegação
    item.classList.remove("active");
    const header = document.querySelector("header");
    header.classList.remove("submenu-open");
  });
});

document.addEventListener("DOMContentLoaded", function () {
  const menu = document.querySelector(".menu");
  const header = document.querySelector("header");

  if (menu && header) {
    menu.addEventListener("mouseleave", function () {
      if (window.innerWidth > 1060) {
        clearTimeout(timeoutId); // Cancela qualquer timeout ativo
        timeoutId = setTimeout(() => {
          // Remove a classe que aumenta o tamanho do header
          header.classList.remove("submenu-open");

          // Fecha todos os submenus
          document.querySelectorAll(".menu-item").forEach((menuItem) => {
            menuItem.classList.remove("active");
          });
        }, 300); // Tempo de atraso antes de fechar
      }
    });
  }
});


// Js para definir qual página tem Nav transparent ou Branco
const currentPage = window.location.pathname;
const transparentPages = ["/index.html"]; // Adicione as URLs das páginas aqui
const nav = document.getElementById("main-nav");

if (transparentPages.includes(currentPage)) {
  nav.classList.add("nav-transparent");
} else {
  nav.classList.add("nav-white");
}
