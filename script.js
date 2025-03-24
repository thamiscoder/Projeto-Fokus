const html = document.querySelector('html');
const focoBtn = document.querySelector('.app__card-button--foco');
const curtoBtn = document.querySelector('.app__card-button--curto');
const longoBtn = document.querySelector('.app__card-button--longo');
const image = document.querySelector('.app__image');
const text = document.querySelector('.app__title');
const timer = document.getElementById('#timer');
const startPause = document.querySelector('.app__card-primary-button');
const tempoDeFoco = 1500;
const tempoCurto = 300;
const tempoLongo = 900;


focoBtn.addEventListener('click', () => {
    html.setAttribute('data-contexto', 'foco');
})

curtoBtn.addEventListener('click', () => {
    html.setAttribute('data-contexto', 'descanso-curto');
})

longoBtn.addEventListener('click', () => {
    html.setAttribute('data-contexto', 'descanso-longo');
})