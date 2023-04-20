const paragraphe = document.getElementById('paragraphe');
  const boutonAfficher = document.getElementById('afficher');

  boutonAfficher.addEventListener('click', () => {
    paragraphe.classList.toggle('full'); /* ajoute ou retire la classe full */
    boutonAfficher.innerHTML = paragraphe.classList.contains('full') ? '<strong>Afficher moins</strong>' : '<strong>Afficher plus</strong>'; /* change le texte du bouton en fonction de l'état du paragraphe */
  });

var modal = document.querySelector('.mamodal')

var button = document.querySelector('#modal-button')

var close = document.querySelector('.close')

button.onclick = function(){
    modal.style.display="block"
    close.style.display='block'
}

close.onclick = function(){
    modal.style.display='none'
}

close.onclick = function(){
    close.style.display='none'
    modal.style.display='none'
}