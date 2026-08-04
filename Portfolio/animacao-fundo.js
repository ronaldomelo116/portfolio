// Este comando avisa ao JavaScript para esperar o HTML carregar completamente
document.addEventListener("DOMContentLoaded", function() {
    
    function criarParticula() {
        const container = document.getElementById('particulas-fundo');
        
        // Se a div não existir na página, o código para aqui para não dar erro
        if (!container) return; 

        const particula = document.createElement('i');
        const icones = [
            'fa-brands fa-html5', 
            'fa-brands fa-css3-alt', 
            'fa-brands fa-js'
        ];
        
        const iconeSorteado = icones[Math.floor(Math.random() * icones.length)];
        particula.className = `particula-logo ${iconeSorteado}`;

        const tamanho = Math.random() * 20 + 15;
        particula.style.fontSize = `${tamanho}px`;
        particula.style.left = `${Math.random() * 100}vw`;

        const duracaoAnimacao = Math.random() * 5 + 5;
        particula.style.animationDuration = `${duracaoAnimacao}s`;

        container.appendChild(particula);

        setTimeout(() => {
            particula.remove();
        }, duracaoAnimacao * 1000);
    }

    // Liga a fábrica de partículas
    setInterval(criarParticula, 400);
});

gsap.registerPlugin(ScrollTrigger);

const fundoParallax = document.getElementById("particulas-fundo");

document.addEventListener("mousemove", (e) => {
    const movimentoX = (window.innerWidth / 2- e.pageX) / 40;
    const movimentoY = (window.innerHeight / 2- e.pageY) / 40;
    
    gsap.to(fundoParallax, {
        x: movimentoX,
        y: movimentoY,
        duration: 1,
        ease: "power2.out",
    });
})

gsap.to(fundoParallax, {
    yPercent: 10,
    ease: "none",
    scrollTrigger: {
        trigger: document.body,
        start: "top top",
        end: "bottom top",
        scrub: 1
    }
});