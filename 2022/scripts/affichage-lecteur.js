// Script pour affichage film adéquat dans zone de Visionnage
let btn_vendredi_large = document.getElementById("btn_vendredi_large");
let btn_vendredi_serre = document.getElementById("btn_vendredi_serre");
let btn_samedi_large = document.getElementById("btn_samedi_large");
let btn_samedi_serre = document.getElementById("btn_samedi_serre");
let fermeture = document.getElementById("fermeture");

let ecran = document.getElementById("visionnage");
var player = document.getElementById('video');
var mp4Vid = document.getElementById('src_mp4');
var webmVid = document.getElementById('src_webm');
var download = document.getElementById('download');

ecran.style.height = "0";

btn_vendredi_large.addEventListener("click", () => {
    changeSource("videos/film_presentation_de_saison_21_22_new.mp4");
    window.location = "#film";
})

btn_vendredi_serre.addEventListener("click", () => {
    changeSource("videos/edit3-vendredi.mp4");
    window.location = "#film";
})

btn_samedi_large.addEventListener("click", () => {
    changeSource("videos/Voyage_Intro_2.mp4");
    window.location = "#film";
})

btn_samedi_serre.addEventListener("click", () => {
    changeSource("videos/Voyage_VisagesChoregraphes.mp4");
    window.location = "#film";
})

fermeture.addEventListener("click", () => {
    changeSource(mp4Vid.getAttribute('src'));
    window.location = "#film";
})

// Fonctions spécifiques pour cette partie de JavaScript
function changeSource(url_src) {
    player.pause();
    download.setAttribute('href', url_src);
    download.setAttribute('download',url_src);
    if(getComputedStyle(ecran).height != "0" && mp4Vid.getAttribute('src') == url_src ){
        ecran.style.height = "0"
        mp4Vid.src = "";
        src_webm.src = "";
    } else {
        mp4Vid.src = url_src;
        src_webm.src = "";
        ecran.style.height = calcul_height() + "px"
        player.load();
        // player.play();
    }
}

function calcul_height() {
    let vw = window.innerWidth;
    let vh = window.innerHeight;
    let telechargement = document.querySelector('.telechargement');
    let offsetHeight = telechargement.offsetHeight;
    let style = getComputedStyle(telechargement);
    let topMargin = parseInt(style.marginTop);
    let botMargin = parseInt(style.marginBottom);
    let telechargement_height = offsetHeight + topMargin + botMargin;
    let video_height = vw * ( 42.2 / 100 );
    return telechargement_height + video_height
}