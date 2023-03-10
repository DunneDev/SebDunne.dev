import PanelSnap from "./panelsnap.js";

document.addEventListener("DOMContentLoaded", function () {
    const snap = new PanelSnap({
        container: document.querySelector("main"),
        panelSelector: "section",
        directionThreshold: 50,
        delay: 0,
        duration: 500,
    });
});
