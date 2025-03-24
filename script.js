const html = document.querySelector('html');
const focoBtn = document.querySelector('.app__card-button--foco');
const curtoBtn = document.querySelector('.app__card-button--curto');
const longoBtn = document.querySelector('.app__card-button--longo');
const image = document.querySelector('.app__image');
const text = document.querySelector('.app__title');
const timer = document.querySelector('#timer');
const startPause = document.querySelector('.app__card-primary-button');
const tempoDeFoco = 1500;
const tempoCurto = 300;
const tempoLongo = 900;


focoBtn.addEventListener('click', () => {
    alterarContexto('foco');
})

curtoBtn.addEventListener('click', () => {
    alterarContexto('descanso-curto');
})

longoBtn.addEventListener('click', () => {
    alterarContexto('descanso-longo');
})

function alterarContexto(contexto) {
    html.setAttribute('data-contexto', contexto);
    image.setAttribute('src', `/imagens/${contexto}.png`);
}