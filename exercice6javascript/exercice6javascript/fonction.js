
function modulo() {
    var regNumber = /[0-9].*/; //Déclare une variable regex pour que l'utilisateur ne tape que des chiffres
    var firstNumber = document.getElementById('firstNumber').value; // Déclare une variable firstNumber et enregistre les informations de l'id
    var secondNumber = document.getElementById('secondNumber').value; // Déclare une variable secondNumber
    if (regNumber.test(firstNumber) && regNumber.test(secondNumber)) { // demande de tester les deux variables first et second avec une condition si ce n'est pas un nombre on affichera une erreur
        var module = (firstNumber % secondNumber); // déclare une variable module et calcul avec un modulo
        alert(module); //Affiche la valeur de module
    }
    else {
        alert('Veuillez entrer un chiffre');
    }
};