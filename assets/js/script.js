window.onload = function () {
    mudarRotina();
};

function mudarRotina() {
    const rotinaFolga = document.querySelector("#atividades .atividades.folga");
    const rotinaUtil = document.querySelector("#atividades .atividades.util");
    const nomeRotina = document.querySelector("#dia .rotina_atual span");

    if (rotinaUtil.style.display === "none" || rotinaUtil.style.display === "") {
        rotinaUtil.style.display = "flex";
        rotinaFolga.style.display = "none";
        nomeRotina.innerHTML = "Rotina Útil";
    } else {
        rotinaUtil.style.display = "none";
        rotinaFolga.style.display = "flex";
        nomeRotina.innerHTML = "Rotina Folga";
    }



    const audio = document.getElementById('audio');
    audio.play().catch(error => {
        console.log('Erro ao reproduzir o som:', error);
    });
};

window.onload = function dataAtual(){
    diasSemana = ["Domingo", "Segunda-Feira", "Terça-Feira", "Quarta-Feira", "Quinta-Feira", "Sexta-Feira", "Sábado"]
    mesesAno = ["Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho", "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"]
    
    Diahoje = new Date()
    
    diasSemana = diasSemana[Diahoje.getDay()]
    
    dataHojeMes = Diahoje.getDate()
    
    nomeMesAtual = mesesAno[Diahoje.getMonth()]

    const dataInline = document.querySelector("#dia .dia_data");
    dataInline.innerHTML = `<span>${diasSemana} ,  ${dataHojeMes} de ${nomeMesAtual}</span>`
}








