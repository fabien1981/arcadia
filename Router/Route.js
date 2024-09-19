export default class Route {
    constructor(url, title, pathHtml, authorize, pathJS = "") {
      this.url = url;
      this.title = title;
      this.pathHtml = pathHtml;
      this.pathJS = pathJS;
      this.authorize = authorize;
    }
}

/*
[]-> Tout le monde peut y acceder
["disconnected"] -> Réservé aux utilisateurs deconnectés
["admin"] -> Réservé à l'administrateur
["veterinaire"] -> Réservé aux veterinaires
["employe"] -> Réservé aux employés
["admin","employe","veterinaire"] ->Réservé aux utilsateurs admin, employé et veterinaire
*/