const html = document.querySelector('html');
const focoBtn = document.querySelector('.app__card-button--foco');
const curtoBtn = document.querySelector('.app__card-button--curto');
const longoBtn = document.querySelector('.app__card-button--longo');
const image = document.querySelector('.app__image');
const text = document.querySelector('.app__title');
const botoes = document.querySelectorAll('.app__card-button');
const startPause = document.querySelector('#start-pause');
const musicaFocoInput = document.querySelector('#alternar-musica');
const musica = new Audio('/sons/luna-rise-part-one.mp3');
const timer = document.querySelector('#timer');

let tempoDecorridoEmSegundos = 5;
let intervaloId = null;

musica.loop = true;

musicaFocoInput.addEventListener('change', () => {
    if(musica.paused) {
        musica.play();
    } else {
        musica.pause();
    }
})


focoBtn.addEventListener('click', () => {
    alterarContexto('foco');
    focoBtn.classList.add('active');
})

curtoBtn.addEventListener('click', () => {
    alterarContexto('descanso-curto');
    curtoBtn.classList.add('active');
})

longoBtn.addEventListener('click', () => {
    alterarContexto('descanso-longo');
    longoBtn.classList.add('active');
})

function alterarContexto(contexto) {
    botoes.forEach(function(contexto) {
        contexto.classList.remove('active');
    })
    html.setAttribute('data-contexto', contexto);
    image.setAttribute('src', `/imagens/${contexto}.png`);

    switch (contexto) {
        case "foco":
            text.innerHTML = `
            Otimize sua produtividade,<br>
                <strong class="app__title-strong">mergulhe no que importa.</strong>
            `
            break;
        case "descanso-curto":
            text.innerHTML = `
            Que tal dar uma respirada? <strong class="app__title-strong">Faça uma pausa curta!</strong>
            `
            break;
        case "descanso-longo":
            text.innerHTML = `
            Hora de voltar à superfície. <strong class="app__title-strong">Faça uma pausa longa.</strong>
            `
        default:
            break;
    }
}

const contagemRegressiva = () => {
    if (tempoDecorridoEmSegundos <= 0) {
        zerar();
        alert('Tempo finalizado!');
        return;
    }
    tempoDecorridoEmSegundos -= 1;
    console.log('temporizador', + tempoDecorridoEmSegundos);
} 

startPause.addEventListener('click', iniciarOuPausar);

function iniciarOuPausar() {
    if (intervaloId) {
        zerar();
        return;
    }
    intervaloId = setInterval(contagemRegressiva, 1000);
}

function zerar() {
    clearInterval(intervaloId);
    intervaloId = null;
}
