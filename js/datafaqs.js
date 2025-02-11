document.addEventListener("DOMContentLoaded", function () {
    const dateElement = document.getElementById("date-faqs");
    
    // Obter a data atual do sistema
    const today = new Date();
    
    // Formatar a data como "OCT 01, 2024"
    const options = { year: 'numeric', month: 'short', day: '2-digit' };
    const formattedDate = today.toLocaleDateString('en-US', options).toUpperCase();
  
    // Atualizar o elemento com a data formatada
    dateElement.textContent = formattedDate;
  });
  