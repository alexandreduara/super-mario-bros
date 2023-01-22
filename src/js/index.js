const botaoTrailer = document.querySelector('.botao__trailer');
const modal = document.querySelector(".modal");
const botaoFecharModal = document.querySelector('.fechar__modal');
const video = document.getElementById("video");
const linkDoVideo = video.scr;

function alternarModal(){
    modal.classList.toggle("aberto");
}

botaoTrailer.addEventListener("click", () => {
    alternarModal();
    video.setAttribute("src", linkDoVideo);
    // modal.classList.add("aberto");
})

botaoFecharModal.addEventListener("click", () => {
    // modal.classList.remove("aberto");

    alternarModal();
    video.setAttribute("src", "");
})
