const array_img = [
    "img/homem-home2.svg", 
    "img/mulher-home.svg", 
    "img/imagem-homem-banner-png.png"
]

const imgHome = document.querySelector(".img-secao-inicial");

window.onload = function() {

    let contador = 0;

    while (contador < array_img.length) {
        imgHome.src = array_img[contador];
        contador++;
    }
}
