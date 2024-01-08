const inputArquivos = document.getElementById("arquivos");
const iconePreview = document.getElementById("icone-preview");

inputArquivos.addEventListener("change", function () {
  if (inputArquivos.files && inputArquivos.files[0]) {
    const reader = new FileReader();

    reader.onload = function (e) {
      iconePreview.src = e.target.result;
    };
    reader.readAsDataURL(inputArquivos.files[0]);

    iconePreview.id = "inputImagemConf";
  }
});

function mostrarConteudo(conteudo) {
    document.querySelectorAll(".cardConteiner").forEach((card) => {
        card.style.display = "none";
    });
    document.getElementById(conteudo).style.display = "block";
}

function setActiveLink(clickedLink) {
    const links = document.querySelectorAll('.headerConteiner ul li ');
    links.forEach(link => link.classList.remove('selected'));
    clickedLink.classList.add('selected');
}