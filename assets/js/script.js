// Supondo que você tenha um botão ou elemento para alternar as rotinas


function mudarRotina() {
    const rotinaFolga = document.querySelector("#atividades .atividades.folga");
    const rotinaUtil = document.querySelector("#atividades .atividades.util");

    // Alterna entre as rotinas
    if (rotinaUtil.style.display === "none"){
        rotinaUtil.style.display = "flex";
        rotinaFolga.style.display = "none";
    } else {
        rotinaUtil.style.display = "none";
        rotinaFolga.style.display = "flex";
    }
}
