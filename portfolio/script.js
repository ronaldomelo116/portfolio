// Interatividade para o menu de navegação (Smooth Scroll)
document.querySelectorAll(".navbar a").forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();

    const targetId = this.getAttribute("href").substring(1);
    const targetSection = document.getElementById(targetId);

    if (targetSection) {
      window.scrollTo({
        top: targetSection.offsetTop - 70,
        behavior: "smooth",
      });
    }
  });
});

// Atualizar o link ativo no menu conforme a rolagem da página
window.addEventListener("scroll", () => {
  let current = "";
  const sections = document.querySelectorAll("section");
  const navLinks = document.querySelectorAll(".navbar a");

  sections.forEach((section) => {
    const sectionTop = section.offsetTop;
    const sectionHeight = section.clientHeight;

    if (pageYOffset >= sectionTop - 80) {
      current = section.getAttribute("id");
    }
  });

  navLinks.forEach((link) => {
    link.classList.remove("active");
    if (link.getAttribute("href").substring(1) === current) {
      link.classList.add("active");
    }
  });
});

// Lógica de envio do formulário de contato via WhatsApp
const contactForm = document.getElementById("form-contato");

if (contactForm) {
  contactForm.addEventListener("submit", function (e) {
    e.preventDefault();

    // Captura os dados inseridos
    const nome = document.getElementById("nome").value;
    const email = document.getElementById("email").value;
    const mensagem = document.getElementById("mensagem").value;

    const btn = this.querySelector("button");
    const originalText = btn.innerText;

    // Efeito visual
    btn.innerText = "Redirecionando...";
    btn.style.boxShadow = "0 0 25px var(--neon-green)";

    // Monta o texto formatado para o WhatsApp
    const textoWhatsApp = `Olá, Ronaldo! Vim pelo seu portfólio web.%0A%0A*Nome:* ${nome}%0A*E-mail:* ${email}%0A*Mensagem:* ${mensagem}`;
    const numeroWhatsApp = "5584987342322";
    const url = `https://api.whatsapp.com/send?phone=${numeroWhatsApp}&text=${textoWhatsApp}`;

    setTimeout(() => {
      // Abre a janela do WhatsApp
      window.open(url, "_blank");
      contactForm.reset();

      // Restaura o botão
      btn.innerText = originalText;
      btn.style.boxShadow = "";
    }, 800);
  });
}