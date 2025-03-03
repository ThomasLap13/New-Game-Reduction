document.addEventListener("DOMContentLoaded", function () {
    const welcomeScreen = document.getElementById("welcomeScreen");
    let isFadingOut = false;
    let isHidden = false;
    let lastScrollY = window.scrollY;

    function startFadeOut() {
        if (!isFadingOut && !isHidden) {
            isFadingOut = true;
            welcomeScreen.style.transition = "opacity 0.5s ease-out";
            welcomeScreen.style.opacity = "0"; // Animation de disparition

            setTimeout(() => {
                welcomeScreen.style.display = "none"; // Cache totalement
                document.body.style.overflow = "auto"; // Réactive le scroll
                isHidden = true;
                isFadingOut = false;
            }, 500);
        }
    }

    function handleScroll() {
        let currentScrollY = window.scrollY;

        if (currentScrollY > lastScrollY && !isHidden) {
            startFadeOut(); // Masquer en descendant
        } else if (currentScrollY === 0 && isHidden) {
            // Réaffichage en remontant
            welcomeScreen.style.display = "flex";
            setTimeout(() => {
                welcomeScreen.style.opacity = "1";
                document.body.style.overflow = "hidden"; // Bloque le scroll
                isHidden = false;
            }, 10);
        }

        lastScrollY = currentScrollY;
    }

    // Bloque le scroll au début
    document.body.style.overflow = "hidden";

    // Détection du scroll et des interactions
    document.addEventListener("wheel", startFadeOut);
    document.addEventListener("touchmove", startFadeOut);
    window.addEventListener("scroll", handleScroll);
});

