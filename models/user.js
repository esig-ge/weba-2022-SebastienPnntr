let user = class User{
    constructor(id, nom, prenom, email, telephone){
        this.id = id;
        this.nom = nom;
        this.prenom = prenom;
        this.email = email;
        this.telephone = telephone;
    }
}

module.exports = {
    user
}