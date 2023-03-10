import PanelSnap from "./panelsnap.js";

document.addEventListener("DOMContentLoaded", function () {
    const snap = new PanelSnap({
        container: document.querySelector("main"),
        panelSelector: "section",
        directionThreshold: 50,
        delay: 0,
        duration: 500,
    });

    const sections = document.querySelectorAll("section");
    const navLinks = document.querySelectorAll("nav a");

    function navListenerFactory(section) {
        return function (e) {
            e.preventDefault();
            snap.snapToPanel(section);
        };
    }

    navLinks.forEach((link, i) => {
        link.addEventListener("click", navListenerFactory(sections[i]));
    });

    snap.on("activatePanel", (section) => {
        const index = Array.from(sections).indexOf(section);
        navLinks.forEach((link) => link.classList.remove("selected"));
        navLinks[index].classList.add("selected");
    });
});
