const emails = document.getElementsByClassName("user-li");
const searchBar = document.getElementById("searchBar");
const listUser = document.getElementById("listUser");

searchBar.addEventListener("input", searchUser);

async function searchUser() {
    let searchParam = await searchBar.value.toUpperCase();
    let nbHide = 0;
    Array.from(emails).forEach(element => {
        if (element.textContent.toUpperCase().includes(searchParam)) {
            element.classList.remove('d-none');
        }
        else {
            element.classList.add('d-none');
            nbHide += 1;
        }
    });

    let liError = document.getElementById('msgError');
    if (nbHide == emails.length) {
        if (!liError) {
            let msgErreur = document.createElement("li");
            msgErreur.setAttribute('id', 'msgError')
            msgErreur.textContent = "Aucun utilisateur trouvé";
            listUser.append(msgErreur);
        }
    }
    else {
        if (liError) {
            liError.remove();
        }
    }
}

let showInfo = idUser => {
    $('#infoModal').modal('toggle');

    // Création de l'objet xml truc
    let rqte = new XMLHttpRequest();
    // Config de la requete
    rqte.open("GET", "getInfoUser?idUser="+idUser, true);
    // Envoi de la requete
    rqte.send();

    // Reponse
    rqte.onload = () => {
        if(rqte.status == 200){
            let infoUser = JSON.parse(rqte.responseText);
            console.log(infoUser);
        }else{
            console.log("erreur");
        }
    }
}