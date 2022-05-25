var lAdresse = [ encode("danselatitude11arobasgmailpointcom"),
                encode("cigbramarobasgmailpointcom"),
                encode("elizapointchohadzhievaarobaslizzarttiretproductionpointcom"),   
]

// Script pour remplir le champs 'href' avec 'mailto' après la création du DOM (masuqe les mail pour les robots)
document.addEventListener("DOMContentLoaded", function() {
    // Boucle toute les classes .courrier
    var oCourrier = document.getElementsByClassName("courrier");
    var i;
    for (i = 0; i < oCourrier.length; i++) {
        // récupère l'adresse codée
        var sCourrier = oCourrier[i].getAttribute("data-courriel");
        // Ajouter l'attribut « href » avec l'adresse
        oCourrier[i].setAttribute("href", "mailto:" + traduit_adresse(sCourrier, lAdresse) + "?subject=Renseignement(s)&body=Votre message ici");
    }
})

// Script pour affichage mail si l'utilisateur click (si l'utilisateur ne gère pas les mail avec son OS)
var courrier1 = document.getElementById("courrier1");
courrier1.addEventListener("click", () => {
    // récupère l'adresse codée
    var sCourrier = courrier1.getAttribute("data-courriel");
    // Ajouter l'adresse comme texte du lien 
    var old_innerHTML = courrier1.innerHTML
    if (old_innerHTML == '<i class="fas fa-at"></i>Courriel') {
        courrier1.innerHTML = old_innerHTML + " : " + traduit_adresse(sCourrier, lAdresse);
    }
})
var courrier2 = document.getElementById("courrier2");
courrier2.addEventListener("click", () => {
    // récupère l'adresse codée
    var sCourrier = courrier2.getAttribute("data-courriel");
    // Ajouter l'adresse comme texte du lien 
    var old_innerHTML = courrier2.innerHTML
    if (old_innerHTML == '<i class="fas fa-at"></i>Courriel') {
        courrier2.innerHTML = old_innerHTML + " : " + traduit_adresse(sCourrier, lAdresse);
    }
})
var courrier3 = document.getElementById("courrier3");
courrier3.addEventListener("click", () => {
    // récupère l'adresse codée
    var sCourrier = courrier3.getAttribute("data-courriel");
    // Ajouter l'adresse comme texte du lien
    var old_innerHTML = courrier3.innerHTML
    if (old_innerHTML == '<i class="fas fa-at"></i>Courriel') {
        courrier3.innerHTML = old_innerHTML + " : " + traduit_adresse(sCourrier, lAdresse);
    }
})

// Fonctions spécifiques pour cette partie de JavaScript
function traduit_adresse(my_adresse, list_Adresse) {
    // récupère l'adresse codée
    my_adresse = my_adresse.replace(my_adresse, decode(bonne_adresse(my_adresse, list_Adresse)));
    // Remplace le mot « point » par un point 
    my_adresse = my_adresse.replace("pointcom", ".com");
    my_adresse = my_adresse.replace("point", ".");
    // Remplacer le mot « arobas » par @
    my_adresse = my_adresse.replace("arobas", "@");
    // Remplacer le mot « tiret » par -
    my_adresse = my_adresse.replace("tiret", "-");
    return my_adresse;
}

function bonne_adresse(key_Courrier, list_Adresse) {
    // Affecte la bonne adresse en fonction du block
    for (var i=list_Adresse.length-1;i>=0;i--) {
        if ( key_Courrier == "adresse1") {
            return list_Adresse[0];
        } if ( key_Courrier == "adresse2") {
            return list_Adresse[1];
        } if ( key_Courrier == "adresse3") {
            return list_Adresse[2];
        } 
    }
}

function encode(str) {
    var buf = [];
    for (var i=str.length-1;i>=0;i--) {
        buf.unshift(["&#", str[i].charCodeAt(), ";"].join(""));
    }
    return buf.join("");
}

function decode(str) {
    return str.replace(/&#(\d+);/g, function(match, dec) {
        return String.fromCharCode(dec);
    });
}