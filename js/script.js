// Apparition progressive des éléments lorsqu'ils entrent dans le viewport
document.addEventListener("DOMContentLoaded", () => {
    const elements = document.querySelectorAll(".hidden");

    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("visible");
            } else {
                entry.target.classList.remove("visible"); // Se recache en remontant
            }
        });
    }, { threshold: 0.2 }); // Se déclenche lorsque 20% de l'élément est visible

    elements.forEach(element => observer.observe(element));
});

// Fonction pour masquer l'écran de bienvenue et afficher la section principale
function hideWelcome() {
    const section = document.getElementById("hidden");
    const welcomeScreen = document.getElementById("welcomeScreen");

    if (!section || !welcomeScreen) return; // Sécurité si les éléments n'existent pas

    section.classList.remove("hidden"); // Affiche la section principale

    // Masque progressivement l'écran de bienvenue
    welcomeScreen.style.opacity = "0";
    setTimeout(() => {
        welcomeScreen.style.display = "none";
    }, 800); // 800ms pour correspondre à la transition CSS

    // Scroll fluide vers la section "À propos"
    section.scrollIntoView({ behavior: "smooth" });
}

// Gestion des dropdowns pour les menus déroulants
document.addEventListener("DOMContentLoaded", () => {
    document.querySelectorAll(".dropdown-toggle").forEach(dropdown => {
        dropdown.addEventListener("click", function (event) {
            event.stopPropagation(); // Empêche la propagation du clic
            const parentDropdown = this.closest(".dropdown");
            const isOpen = parentDropdown.classList.contains("show");

            // Fermer tous les menus ouverts
            document.querySelectorAll(".dropdown").forEach(el => {
                el.classList.remove("show");
                el.querySelector(".dropdown-menu").classList.remove("show");
            });

            // Basculer l'état du menu actuel
            if (!isOpen) {
                parentDropdown.classList.add("show");
                this.nextElementSibling.classList.add("show");
            }
        });
    });

    // Fermer le menu dropdown lorsqu'on clique ailleurs
    document.addEventListener("click", event => {
        if (!event.target.closest(".dropdown")) {
            document.querySelectorAll(".dropdown").forEach(el => {
                el.classList.remove("show");
                el.querySelector(".dropdown-menu").classList.remove("show");
            });
        }
    });
});