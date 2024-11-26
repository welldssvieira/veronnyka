window.onload = function() {
    mudarRotina();
};

function mudarRotina() {
    const rotinaFolga = document.querySelector("#atividades .atividades.folga");
    const rotinaUtil = document.querySelector("#atividades .atividades.util");
    const nomeRotina = document.querySelector("#dia .rotina_atual span");

    if (rotinaUtil.style.display === "none"){
        rotinaUtil.style.display = "flex";
        rotinaFolga.style.display = "none";
        nomeRotina.innerHTML = "Rotina útil"
    } else {
        rotinaUtil.style.display = "none";
        rotinaFolga.style.display = "flex";
         nomeRotina.innerHTML = "Rotina de folga"
    }

        const audio = document.getElementById('audio');
        audio.play().catch(error => {
            console.log('Erro ao reproduzir o som:', error);
        });
    };




