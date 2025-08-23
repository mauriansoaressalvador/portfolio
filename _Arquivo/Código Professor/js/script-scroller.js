document.addEventListener('DOMContentLoaded', function() {
  // Seleciona todos os links internos do menu que começam com #
  const links = document.querySelectorAll('#menuMobile a[href^="#"]');

  links.forEach(link => {
    link.addEventListener('click', function(e) {
      e.preventDefault(); // Evita o comportamento padrão de pular direto

      const alvo = document.querySelector(this.getAttribute('href'));
      if (alvo) {
        alvo.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
      }
    });
  });
});