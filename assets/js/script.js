function mudarRotina() {
    const rotinaFolga = document.querySelector("#atividades .atividades.folga");
    const rotinaUtil = document.querySelector("#atividades .atividades.util");

    if (rotinaUtil.style.display === "none"){
        rotinaUtil.style.display = "flex";
        rotinaFolga.style.display = "none";
    } else {
        rotinaUtil.style.display = "none";
        rotinaFolga.style.display = "flex";
    }

        const audio = document.getElementById('audio');
        audio.play().catch(error => {
            console.log('Erro ao reproduzir o som:', error);
        });
    };


