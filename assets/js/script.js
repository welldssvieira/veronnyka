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

window.onload = function dataAtual() {
    diasSemana = ["Domingo", "Segunda-Feira", "Terça-Feira", "Quarta-Feira", "Quinta-Feira", "Sexta-Feira", "Sábado"]
    mesesAno = ["Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho", "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"]

    Diahoje = new Date()

    diasSemana = diasSemana[Diahoje.getDay()]

    dataHojeMes = Diahoje.getDate()

    nomeMesAtual = mesesAno[Diahoje.getMonth()]

    const dataInline = document.querySelector("#dia .dia_data");
    dataInline.innerHTML = `<span>${diasSemana} ,  ${dataHojeMes} de ${nomeMesAtual}</span>`
}


function obterHoraFormatada() {
    const horaAtual = new Date();

    // Obtém a hora e os minutos
    let horas = horaAtual.getHours();
    let minutos = horaAtual.getMinutes();

    // Adiciona zero à esquerda se a hora ou minutos forem menores que 10
    horas = horas < 10 ? '0' + horas : horas;
    minutos = minutos < 10 ? '0' + minutos : minutos;

    // Retorna a hora no formato 15:40
    return `${horas}:${minutos}`;
}

window.onload = function saudacaoHorario() {
    const saudacao = document.querySelector("#card_principal .animacao .saudacao .titulo_principal .titulo p");
    const horaAtual = new Date();

    // Obtém a hora e os minutos
    let horas = horaAtual.getHours();
    
    if (horas >= 5 && horas <= 12) {
        saudacao.innerHTML = "Bom dia, Wellington"
    } else if (horas >= 13 && horas <= 18){
        saudacao.innerHTML = "Boa tarde, Wellington"
    } else{
        saudacao.innerHTML = "Boa noite, Wellington"
    }
}

/*
window.onload = function tarefaAtual() {
    // Seleciona os elementos necessários
    var boxTarefaAtual = document.querySelector("#card_principal .atividade_atual .atividade");
    var iconeTarefaAtual = document.querySelector("#card_principal .atividade_atual .atividade .emoji img");
    const tituloTarefaAtual = document.querySelector("#card_principal .atividade_atual .atividade .titulos .titulo p");
    const subtituloTarefaAtual = document.querySelector("#atividades .atividades.util .atividade .titulos .subtitulo p");
    const horaTarefaAtual = document.querySelector("#atividades .atividades.folga .atividade .tempo .minutos span");
    const tempoTarefaAtual = document.querySelector("#card_principal .atividade_atual .atividade .tempo .texto span");
    const atividade = document.querySelector("#atividades .atividades.folga .atividade");
    const atividadeAcordar = document.querySelector("#atividades .atividades.folga .atividade.acordar");
    const iconeAtividadeAcordar = document.querySelector("#atividades .atividade_atual .atividade.acordar .emoji img");
    
    // Pega o horário de início da atividade
    const IntervaloInicio = document.querySelector("#atividades .atividades.folga .atividade .titulos .intervalo .intervalo_inicio p").textContent;

    // Verifica se a hora das atividades é igual à hora atual
    if (obterHoraFormatada() === IntervaloInicio) {
        boxTarefaAtual = atividadeAcordar
        iconeTarefaAtual.src = "media/icones/Icon_coração.png"
    } else {
        console.log("A hora das atividades NÃO é igual à hora atual.");
    }
};*/










