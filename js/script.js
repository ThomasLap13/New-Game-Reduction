//system apparissions éléments

document.addEventListener("DOMContentLoaded", function () {
    const elements = document.querySelectorAll(".hidden");

    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("visible");
            } else {
                entry.target.classList.remove("visible"); // Se recache en remontant
            }
        });
    }, { threshold: 0.2 });

    elements.forEach(element => observer.observe(element));
});

function hideWelcome() {
    let section = document.getElementById("hidden");
    let welcomeScreen = document.getElementById("welcomeScreen");

    // Supprime la classe "hidden" pour afficher la section
    section.classList.remove("hidden");

    // Masque l'écran de bienvenue progressivement
    welcomeScreen.style.opacity = "0";
    setTimeout(() => {
        welcomeScreen.style.display = "none";
    }, 800); // 800ms pour correspondre à la transition CSS

    // Scroll fluide vers la section "À propos"
    section.scrollIntoView({ behavior: "smooth" });
}

document.addEventListener("DOMContentLoaded", function () {
    // Récupère l'élément Supercell dans le menu
    let supercellLink = document.querySelector('a.nav-link[href="#Supercell"]');

    if (supercellLink) {
        supercellLink.addEventListener("click", function (event) {
            event.preventDefault(); // Empêche le comportement par défaut

            let targetElement = document.getElementById("Supercell");
            if (targetElement) {
                targetElement.scrollIntoView({ behavior: "smooth" });
            }
        });
    }
});

