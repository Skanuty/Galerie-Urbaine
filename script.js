const paragraphe = document.getElementById('paragraphe');
  const boutonAfficher = document.getElementById('afficher');

  boutonAfficher.addEventListener('click', () => {
    paragraphe.classList.toggle('full'); /* ajoute ou retire la classe full */
    boutonAfficher.innerHTML = paragraphe.classList.contains('full') ? '<strong>Afficher moins</strong>' : '<strong>Afficher plus</strong>'; /* change le texte du bouton en fonction de l'état du paragraphe */
  });

// Récupère la modal et le bouton qui l'ouvre
const modal = document.getElementById("mamodal");
const btn = document.getElementById("modal-button");

// Récupère l'élément pour fermer la modal
const close = document.getElementsByClassName("close")[0];

// Quand l'utilisateur clique sur le bouton, la modal s'ouvre
btn.onclick = function() {
  modal.style.display = "block";
  close.style.display ="block";
}

// Quand l'utilisateur clique sur le bouton pour fermer la modal, celle-ci se ferme
close.onclick = function() {
  modal.style.display = "none";
  close.style.display ="none";
}

// Si l'utilisateur clique n'importe où en dehors de la modal, celle-ci se ferme également
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
    close.style.display ="none";
  }
}