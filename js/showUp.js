// Fonction pour créer l'effet d'écriture
function typeText(element, text, delay = 100, callback) {
  let index = 0;

  function type() {
    if (index < text.length) {
      element.textContent += text[index];
      index++;
      setTimeout(type, delay);
    } else if (callback) {
      callback();
    }
  }
  type();
}

// Récupération des éléments
const title1 = document.getElementById("title1");
const title2 = document.getElementById("title2");

// Texte à écrire
const text1 = "Paszkiewicz Damien";
const text2 = "Développeur Full-Stack";

// Lancement de l'effet d'écriture
typeText(title1, text1, 100, () => {
  // Une fois le premier titre terminé, on écrit le second
  typeText(title2, text2, 100);
});
