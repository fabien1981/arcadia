//implémenter le JS de ma page pour la vérification des champs requis

const inputEmail = document.getElementById("EmailInput");
const inputPassword = document.getElementById("PasswordInput");
const btnValidation = document.getElementById("btn-validation-connexion");

//l'événement à écouter se déroule au moment du relachement de la touche du clavier
inputEmail.addEventListener("keyup", validateForm);
inputPassword.addEventListener("keyup", validateForm);
btnValidation.addEventListener("click", checkCredentials)

function validateForm(){
   const emailOk = validateMail(inputEmail);
   const passwordOk = validatePassword(inputPassword);
//activation du bouton    
   if(emailOk && passwordOk){
        btnValidation.disabled = false;
   }
   else{
        btnValidation.disabled = true;
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

//verification du format du password
function validatePassword(input){
    //definition du regex
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[\W_])[A-Za-z\d\W_]{8,}$/;
    const passwordUser = input.value;
    if(passwordUser.match(passwordRegex)){
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

function checkCredentials(){
    //ici il faudra l'api pour verifier les credentials en BDD
    if(inputEmail.value == "test@mail.com" && inputPassword.value =="Password1234!"){
        alert("vous êtes connecté");

    //il faudra récuérer le vrai token
    const token ="jjnsjnshhehkdksjyfyfncnsjzjqkdskk";
        setToken(token);
    //placer ce token en cookie
    

        setCookie("RoleCookieName", "admin", 7);
        window.location.replace("/");
    }
    else{
        inputEmail.classList.add("is-invalid");
        inputPassword.classList.add("is-invalid");
    }
}




