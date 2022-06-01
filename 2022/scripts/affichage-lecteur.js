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
var chapters = document.getElementById('track_vtt');
var download = document.getElementById('download');

ecran.style.height = "0";

btn_vendredi_large.addEventListener("click", () => {
    changeSource("videos/edit-3-vendredi-larges-HB-logo.mp4", 
                 "videos/edit-3-vendredi-larges-HB-logo.webm",
                 "videos/edit-3-vendredi-chapters.vtt");
    window.location = "#film";
})

btn_vendredi_serre.addEventListener("click", () => {
    changeSource("videos/edit-3-vendredi-larges-serres-HB-logo.mp4",
                 "videos/edit-3-vendredi-larges-serres-HB-logo.webm",
                 "videos/edit-3-vendredi-chapters.vtt");
    window.location = "#film";
})

btn_samedi_large.addEventListener("click", () => {
    changeSource("videos/edit-3-samedi-larges-HB-logo.mp4",
                 "videos/edit-3-samedi-larges-HB-logo.webm",
                 "videos/edit-3-samedi-chapters.vtt");
    window.location = "#film";
})

btn_samedi_serre.addEventListener("click", () => {
    changeSource("videos/edit-3-samedi-larges-serres-HB-logo.mp4", 
                 "videos/edit-3-samedi-larges-serres-HB-logo.webm",
                 "videos/edit-3-samedi-chapters.vtt");
    window.location = "#film";
})

fermeture.addEventListener("click", () => {
    changeSource(mp4Vid.getAttribute('src'), chapters.getAttribute('src'));
    window.location = "#film";
})

// Fonctions spécifiques pour cette partie de JavaScript
function changeSource(url_src_mp4, url_src_webm, url_chapters) {
    player.pause();
    download.setAttribute('href', url_src_mp4);
    download.setAttribute('download',url_src_mp4);
    if (getComputedStyle(ecran).height != "0" && mp4Vid.getAttribute('src') == url_src_mp4 ){
        ecran.style.height = "0"
        mp4Vid.src = "";
        src_webm.src = "";
        chapters.src = "";
    } else {
        if (mp4Vid.getAttribute('src') != url_src_mp4 ) {
            // console.log("Affichage chapter (url modif) ?");
            chapters.src = "";
            displayChapters(chapters);
        }
        mp4Vid.src = url_src_mp4;
        src_webm.src = url_src_webm;
        chapters.src = url_chapters;
        // console.log("Affichage chapter ?")
        ecran.style.height = calcul_height() + "px"
        player.load();
        // player.play();
    }
}

function calcul_height() {
    let vw = window.innerWidth;
    let vh = window.innerHeight;
    let telechargement = document.querySelector('.telechargement.calcul-height');
    let offsetHeight = telechargement.offsetHeight;
    let style = getComputedStyle(telechargement);
    let topMargin = parseInt(style.marginTop);
    let botMargin = parseInt(style.marginBottom);
    let telechargement_height = offsetHeight + topMargin + botMargin;
    let video_height = vw * ( 42.2 / 100 );
    return telechargement_height + video_height
}