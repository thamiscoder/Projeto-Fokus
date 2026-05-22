# Projeto Fokus

Projeto desenvolvido como estudo de JavaScript na Alura, simulando um temporizador de produtividade inspirado na técnica Pomodoro.

A aplicação permite alternar entre períodos de **foco**, **descanso curto** e **descanso longo**, alterando textos, imagens, estilos visuais, contagem regressiva e sons da interface.

## Sobre o projeto

O **Projeto-Fokus** é uma página web interativa voltada para organização de ciclos de produtividade.

O usuário pode escolher um modo de uso, iniciar ou pausar o temporizador e ativar uma música de fundo. A interface muda conforme o contexto selecionado, criando uma experiência visual mais dinâmica.

## Funcionalidades

- Modo de foco com temporizador de 25 minutos;
- Modo de descanso curto com temporizador de 5 minutos;
- Modo de descanso longo com temporizador de 15 minutos;
- Botão para iniciar e pausar a contagem;
- Alteração de imagem conforme o contexto;
- Alteração do texto principal conforme o modo escolhido;
- Música de fundo opcional;
- Sons para iniciar, pausar e finalizar;
- Alerta ao final do tempo;
- Atualização do timer em tempo real.

## Tecnologias utilizadas

- HTML5;
- CSS3;
- JavaScript;
- Manipulação do DOM;
- Áudio no navegador.

## Estrutura do repositório

```text
Projeto-Fokus/
├── imagens/
│   └── Imagens utilizadas nos modos da aplicação
├── sons/
│   └── Arquivos de áudio usados na interface
├── index.html
├── script.js
├── styles.css
├── LICENSE
└── .gitattributes
```

## Como executar

1. Clone o repositório:

```bash
git clone https://github.com/thamiscoder/Projeto-Fokus.git
```

2. Acesse a pasta do projeto:

```bash
cd Projeto-Fokus
```

3. Abra o arquivo `index.html` no navegador.

Para uma experiência melhor, também é possível abrir com a extensão **Live Server** no VS Code.

## O que foi praticado

- Manipulação de elementos HTML com JavaScript;
- Uso de eventos de clique;
- Alteração de atributos com `setAttribute`;
- Alteração de textos com `innerHTML`;
- Controle de tempo com `setInterval`;
- Pausa e reinício de contagem com `clearInterval`;
- Formatação de tempo com `toLocaleTimeString`;
- Uso de objetos `Audio`;
- Troca de contexto visual usando atributo `data-contexto`.

## Objetivo de estudo

O objetivo deste projeto é praticar JavaScript em uma aplicação mais completa, trabalhando com interatividade, estados visuais, temporizador, áudio e atualização dinâmica da interface.

## Licença

Este projeto está sob a licença MIT.
