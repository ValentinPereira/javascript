function changeColor() {
    var password = document.getElementById("password").value; // Déclare une variable password qui récupére la valeur de l'utilisateur
    var confirmPassword = document.getElementById("confirmPassword").value;
    if (password == confirmPassword) { // j'ajoute une condition qui vérifie si le mot de passe est égal à la confirmation du mot de passe 
        document.getElementById("password").style.borderColor = "green"; // Colore la bordure en vert si la valeur est bonne
        document.getElementById("confirmPassword").style.borderColor = "green";
    }
    else {
        document.getElementById("password").style.borderColor = "red"; // Colore la bordure en rouge si la valeur est mauvaise
        document.getElementById("confirmPassword").style.borderColor = "red";
    }
}