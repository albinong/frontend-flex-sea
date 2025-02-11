window.onscroll = function () {
  handleScroll();
};

function handleScroll() {
  var scrollY = window.pageYOffset || document.documentElement.scrollTop;
  var stickyMenu = document.getElementById("sticky-menu");
  var mobileStickyMenu = document.getElementById("mobile-sticky-menu");
  var storyItem = document.getElementById("desktop-story");
  var approachItem = document.getElementById("desktop-approach");
  var teamItem = document.getElementById("desktop-team");

  if (window.innerWidth <= 767) {
    stickyMenu.style.display = "none";
    mobileStickyMenu.style.display = "block";
  } else {
    stickyMenu.style.display = "block";
    mobileStickyMenu.style.display = "none";

    if (scrollY < 450) {
      stickyMenu.style.display = "none";
      return;
    }

    // Limpa todas as classes ativas primeiro
    storyItem.classList.remove("active");
    approachItem.classList.remove("active");
    teamItem.classList.remove("active");

    // Ativa o item correspondente com base na posição do scroll
    if (scrollY >= 300 && scrollY < 1000) {
      storyItem.classList.add("active");
    } else if (scrollY >= 1000 && scrollY < 2380) {
      approachItem.classList.add("active");
    } else if (scrollY >= 2380 && scrollY < 3710) {
      teamItem.classList.add("active");
    }

    if (scrollY >= 3710) {
      stickyMenu.style.display = "none";
    }
  }
}

// Adiciona eventos de clique ao menu desktop
document.getElementById("desktop-story").addEventListener("click", function () {
  scrollToSection(605);
});

document
  .getElementById("desktop-approach")
  .addEventListener("click", function () {
    scrollToSection(1100);
  });

document.getElementById("desktop-team").addEventListener("click", function () {
  scrollToSection(2430);
});

function scrollToSection(scrollYPosition) {
  window.scrollTo({
    top: scrollYPosition,
    behavior: "smooth",
  });
}

// Adiciona eventos de clique ao menu mobile
document.getElementById("mobile-story").addEventListener("click", function () {
  scrollToSection(1300);
});

document
  .getElementById("mobile-approach")
  .addEventListener("click", function () {
    scrollToSection(1810);
  });

document.getElementById("mobile-team").addEventListener("click", function () {
  scrollToSection(3500);
});

// Adiciona hover manualmente
document.querySelectorAll(".menu-item").forEach((item) => {
  item.addEventListener("mouseenter", () => {
    if (!item.classList.contains("active")) {
      item.classList.add("hover");
    }
  });

  item.addEventListener("mouseleave", () => {
    item.classList.remove("hover");
  });
});
