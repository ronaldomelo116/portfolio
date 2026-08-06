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
    e.preventDefault(); // Impede o recarregamento da página atual

    // Captura os dados inseridos
    const nome = document.getElementById("nome").value;
    const email = document.getElementById("email").value;
    const mensagem = document.getElementById("mensagem").value;

    const btn = this.querySelector("button");
    const originalText = btn.innerText;

    // Efeito visual imediato no botão
    btn.innerText = "Redirecionando...";
    btn.style.boxShadow = "0 0 25px var(--neon-green)";

    // Monta o texto e codifica com segurança
    const textoOriginal = `Olá, Ronaldo! Vim pelo seu portfólio web.\n\n*Nome:* ${nome}\n*E-mail:* ${email}\n*Mensagem:* ${mensagem}`;
    const textoWhatsApp = encodeURIComponent(textoOriginal);
    
    const numeroWhatsApp = "5584987342322";
    const url = `https://api.whatsapp.com/send?phone=${numeroWhatsApp}&text=${textoWhatsApp}`;

    // A MÁGICA AQUI: Abre a nova aba IMEDIATAMENTE após o clique
    // Por estar fora do setTimeout, o celular permite abrir a nova aba tranquilamente
    window.open(url, "_blank");

    // O setTimeout de 1 segundo agora só tem a função de limpar os campos da sua página original
    setTimeout(() => {
      contactForm.reset();
      btn.innerText = originalText;
      btn.style.boxShadow = "";
    }, 1000);
  });
}
