const title = document.getElementById("header-content");
const icons = document.getElementById("header-socials");

title.addEventListener("mouseenter", () => {
  icons.classList.add("visible"); // Ajoute la classe visible
});
