// --- Efeito Digitando na Seção Hero ---
const typedTextElement = document.querySelector('.typed-text');
const words = ["O campo do futuro é sustentável.", "Tecnologia e respeito ao solo.", "Agro forte, futuro sustentável."];
let wordIndex = 0;
let charIndex = 0;

function type() {
    if (charIndex < words[wordIndex].length) {
        typedTextElement.textContent += words[wordIndex].charAt(charIndex);
        charIndex++;
        setTimeout(type, 100);
    } else {
        setTimeout(erase, 2000);
    }
}

function erase() {
    if (charIndex > 0) {
        typedTextElement.textContent = words[wordIndex].substring(0, charIndex - 1);
        charIndex--;
        setTimeout(erase, 50);
    } else {
        wordIndex++;
        if (wordIndex >= words.length) wordIndex = 0;
        setTimeout(type, 500);
    }
}

// Inicia a animação quando a página carrega
document.addEventListener("DOMContentLoaded", type);


// --- Sistema Interativo do Quiz ---
function selectOption(isCorrect) {
    const feedbackElement = document.getElementById('result-feedback');
    
    if (isCorrect) {
        feedbackElement.textContent = "Correto! O Plantio Direto evita erosão e protege a terra. 🌱";
        feedbackElement.style.color = "var(--primary-color)";
    } else {
        feedbackElement.textContent = "Ops! Essa prática não é sustentável. Tente novamente!";
        feedbackElement.style.color = "red";
    }
}

// --- Menu Responsivo ---
const mobileMenu = document.getElementById('mobile-menu');
const navLinks = document.querySelector('.nav-links');

mobileMenu.addEventListener('click', () => {
    // Alterna a classe 'active' no menu para exibi-lo ou escondê-lo
    navLinks.classList.toggle('active');
});
