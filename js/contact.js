//implémenter le JS de ma page pour la vérification des champs requis

const inputTitre= document.getElementById("TitreInput");
const inputEmail = document.getElementById("EmailInput");
const inputDescription = document.getElementById("DescriptionInput");
const btnValidation = document.getElementById("btn-validation-contact");

//l'événement à écouter se déroule au moment du relachement de la touche du clavier

inputTitre.addEventListener("keyup", validateForm);
inputEmail.addEventListener("keyup", validateForm);
inputDescription.addEventListener("keyup", validateForm);

function validateForm(){
    const titreOk = validateRequired(inputTitre);
    const emailOk = validateMail(inputEmail);
    const descriptionOk = validateRequired(inputDescription);
//activation du bouton
if(titreOk && emailOk && descriptionOk){
    btnValidation.disabled = false;
}
else{
    btnValidation.disabled = true;
}
}

function validateRequired(input){
    if(input.value != ''){
        input.classList.add("is-valid");
        input.classList.remove("is-invalid");
        return true;
    //si le champ n'est pas vide le champs est validé
}
else{
    input.classList.remove("is-valid");
    input.classList.add("is-invalid");
    return false;
    
}
}

//verification du format du mail
function validateMail(input){
    //definition du regex
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const mailUser = input.value;
    if(mailUser.match(emailRegex)){
        input.classList.add("is-valid");
    input.classList.remove("is-invalid");
    return true;
    //si le champ n'est pas vide le champs est validé
}
else{
    input.classList.remove("is-valid");
    input.classList.add("is-invalid");
    return false;
}   
    }