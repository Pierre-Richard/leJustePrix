// Etape 1 - Sélectionner nos éléments
let input = document.querySelector('#prix');
let error = document.querySelector('small');
let formulaire = document.querySelector('#formulaire');


// Etape 2 - Cacher l'erreur
error.style.display = "none";

// Etape 3 - Générer un nombre aléatoire
// Math.random est la fonction qui me genere aleatoirement
// Math.floor me donne le nombre entier
let nombreAleatoire = Math.floor(Math.random() * 1001);
let coups = 0;
let nombreChoisi;


// Etape 6 - Créer la fonction vérifier

function verifier(nombre){
    let instruction = document.createElement('div');
    if(nombre < nombreAleatoire){
        // C'est plus
        // Ajouter un contenu  " #1 (4) c'est plus !";
        instruction.textContent = "#" + coups + " (" + nombre +  ") c'est plus !";
        // Ajouter les classes  instructions et plus
        instruction.className = "instruction plus";

    } else if (nombre > nombreAleatoire){
        // C'est moins
        // Ajouter un contenu  " #1 (4) c'est moins !";
        instruction.textContent = "#" + coups + " (" + nombre +  ") c'est moins !";
        // Ajouter les classes  instructions et moins
        instruction.className = "instruction moins";
    } else {
        // Féliciations vous avez trouvé le juste prix
        instruction.textContent = "#" + coups + " (" + nombre +  ") Félicitations vous avez trouvé le juste prix !";
        // Ajouter les classes  instructions et fini
        instruction.className = "instruction fini";
        input.disabled = true;
    }

    // Ajouter l'element devant les autres
    document.querySelector('#instructions').prepend(instruction);

     
}


// Etape 4 - Vérifier que l'utilisateur donne bien un nombre
input.addEventListener('keyup', () => {
//Afficher le message d'erreur
//isNaN est une fonction de JS qui me permet de connaitre si la valeur rentré dans mon input est un chiffre ou pas.
    if(isNaN(input.value)){
        error.style.display = "inline";
    }else {
        error.style.display = "none";
    }
});
// Etape 5 - Agir à l'envoi du formulaire

formulaire.addEventListener('submit', (e) => {
    e.preventDefault();
    if(isNaN(input.value) || input.value == ""){
         // Mettre notre bordure de formluaire en rouge(red)
        input.style.borderColor = "red";
    } else {
        coups++;
        input.style.borderColor = "silver";
        nombreChoisi = input.value;
        input.value = '';
        verifier(nombreChoisi);
    }
   
});



