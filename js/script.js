//methode pour appeler les methodes de gestion de cookie
const tokenCookieName = "accesstoken";

//recuperation du bouton de deconnexion
const signoutBtn = document.getElementById("signout-btn");
signoutBtn.addEventListener("click", signout);

//methode pour récuperer le role de l'utilisateur
function getRole(){
    return getCookie(RoleCookieName);
}

//creation d'une variable pour pouvoir supprimer le cookie role
const RoleCookieName = "role";

//methode pour effacer le cookie de connexion et actualiser la page
function signout(){
    eraseCookie(tokenCookieName);
    eraseCookie("RoleCookieName");
    window.location.reload();
}




function setToken(token){
    setCookie(tokenCookieName, token, 7)
}

function getToken(){
    return getCookie(tokenCookieName);
}


//methode de gestion des tokens
function setCookie(name,value,days) {
    var expires = "";
    if (days) {
        var date = new Date();
        date.setTime(date.getTime() + (days*24*60*60*1000));
        expires = "; expires=" + date.toUTCString();
    }
    document.cookie = name + "=" + (value || "")  + expires + "; path=/";
}

function getCookie(name) {
    var nameEQ = name + "=";
    var ca = document.cookie.split(';');
    for(var i=0;i < ca.length;i++) {
        var c = ca[i];
        while (c.charAt(0)==' ') c = c.substring(1,c.length);
        if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length,c.length);
    }
    return null;
}

function eraseCookie(name) {   
    document.cookie = name +'=; Path=/; Expires=Thu, 01 Jan 1970 00:00:01 GMT;';
}
//methode pour savoir si l'on est connecté
function isConnected(){
    if(getToken() == null || getToken ==undefined){
        return false;
    }
    else{
        return true;
    }
}



/* affichage des éléments en fonction du role 
disconnected
connected (admin , veterinaire ou employe)
    -admin
    -veterinaire
    -employe
*/

function showAndHideElementsForRoles(){
    const userConnected = isConnected();
    const role = getRole();
//recuperation et affichage des elements de la page en fonction de leur data-show
    let allElementsToEdit = document.querySelectorAll('[data-show');

    allElementsToEdit.forEach(element =>{
        switch(element.dataset.show){
            case 'disconnected':
                if(userConnected){
                    element.classList.add("d-none");
                }
                break;
            case 'connected':
                if(!userConnected){
                    element.classList.add("d-none");
                }
                    break;
            case 'admin':
                if(!userConnected || role != "admin"){
                    element.classList.add("d-none");
                }
                break;
            case 'veterinaire':
                if(!userConnected || role != "veterinaire"){
                    element.classList.add("d-none");
                }
                break;
            case 'employe':
                if(!userConnected || role != "employe"){
                    element.classList.add("d-none");
                }
                break;
        }
    })
}