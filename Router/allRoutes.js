import Route from "./Route.js";

//Définir ici vos routes
export const allRoutes = [
    new Route("/", "Accueil", "/pages/home.html", []),
    new Route("/habitats", "Habitats", "/pages/habitats.html",[]),
    new Route("/signin", "Connexion", "/pages/signin.html",["disconnected"], "/js/signin.js"),
    new Route("/services", "Services", "/pages/services.html",[]),
    new Route("/contact", "Contact", "/pages/contact.html",[],"/js/contact.js"),
    new Route("/avis", "avis", "/pages/avis.html",[],"/js/avis.js"),
    new Route("/admin", "administrateur", "/pages/admin.html",["admin"],"/js/admin.js"),
    new Route("/veterinaire", "veterinaire", "/pages/veterinaire.html",[],"/js/veterinaire.js"),
    new Route("/employe", "employe", "/pages/employe.html",[],"/js/employe.js"),
];

//Le titre s'affiche comme ceci : Route.titre - websitename
export const websiteName = "Arcadia";