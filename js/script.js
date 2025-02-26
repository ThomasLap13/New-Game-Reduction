document.addEventListener("DOMContentLoaded", function () {
    const fadeElements = document.querySelectorAll(".fade-in");

    function checkScroll() {
        fadeElements.forEach(el => {
            const rect = el.getBoundingClientRect();
            if (rect.top < window.innerHeight * 0.9) { 
                el.classList.add("visible");
            }
        });
    }

    window.addEventListener("scroll", checkScroll);
    checkScroll(); // Vérifie au chargement
});

let lastScrollY = window.scrollY;
const welcomeScreen = document.getElementById("welcomeScreen");

// Fonction pour cacher le message de bienvenue
function hideWelcome() {
    welcomeScreen.classList.add("hidden");
}

// Détection du scroll pour afficher/masquer le message
window.addEventListener("scroll", function() {
    let currentScrollY = window.scrollY;

    if (currentScrollY === 0) {
        // Si l'utilisateur revient tout en haut, on affiche le message
        welcomeScreen.classList.remove("hidden");
    } else if (currentScrollY > lastScrollY) {
        // Si l'utilisateur descend, on cache le message
        welcomeScreen.classList.add("hidden");
    }

    lastScrollY = currentScrollY;
});
