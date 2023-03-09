const main = document.querySelector("main");
const sectionHeight = window.innerHeight - convertRemToPixels(4.5);

toggleSelectedSection();

main.addEventListener("scroll", (e) => {
    toggleSelectedSection();
});

function toggleSelectedSection() {
    const sections = document.querySelectorAll("nav a");
    sections.forEach((section, i) => {
        if (i === Math.floor(main.scrollTop / sectionHeight + 0.5)) {
            section.classList.add("selected");
            console.log(section);
        } else section.classList.remove("selected");
    });
}

function convertRemToPixels(rem) {
    return (
        rem * parseFloat(getComputedStyle(document.documentElement).fontSize)
    );
}
