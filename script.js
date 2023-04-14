const paragraphe = document.getElementById('paragraphe');
  const boutonAfficher = document.getElementById('afficher');

  boutonAfficher.addEventListener('click', () => {
    paragraphe.classList.toggle('full'); /* ajoute ou retire la classe full */
    boutonAfficher.innerHTML = paragraphe.classList.contains('full') ? '<strong>Afficher moins</strong>' : '<strong>Afficher plus</strong>'; /* change le texte du bouton en fonction de l'état du paragraphe */
  });