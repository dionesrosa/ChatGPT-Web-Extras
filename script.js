// ==UserScript==
// @name         ChatGPT Web Extras
// @namespace    https://github.com/dionesrosa
// @version      0.1
// @description  Ajustes especificos para o ChatGPT Web, como reprodução de mensagens de voz e outras funcionalidades extras.
// @author       Diones Souza
// @license      MIT
// @icon         https://chatgpt.com/favicon.ico
// @homepageURL  https://github.com/dionesrosa/ChatGPT-Web-Extras
// @supportURL   https://github.com/dionesrosa/ChatGPT-Web-Extras/issues
// @updateURL    https://raw.githubusercontent.com/dionesrosa/ChatGPT-Web-Extras/master/script.js
// @downloadURL  https://raw.githubusercontent.com/dionesrosa/ChatGPT-Web-Extras/master/script.js
// @match        *://chatgpt.com/*
// @run-at       document-idle
// @grant        GM_addStyle
// @noframes
// @grant        GM_xmlhttpRequest
// @grant        GM_getValue
// @grant        GM_setValue
// @connect      localhost
// ==/UserScript==

(function() {
    'use strict';
    
    // Variáveis de controle de estado
    let statusSistema = true;
    let statusGerando = false;
    let statusLeitura = false;
    let listenerGeracao = null;

    console.log('ChatGPT Web Extras carregado!');

    // Função para lidar com a finalização da resposta
    function onRespostaFinalizada() {
        if (statusLeitura) return;

        statusLeitura = true;

        setTimeout(() => {
            abrirMenuUltimaMensagem();
        }, 400);
    }

    // Função para abrir o menu da última mensagem
    function abrirMenuUltimaMensagem() {
        const btnUltimo = document.querySelectorAll('button[aria-label="Mais ações"]')
            .item(document.querySelectorAll('button[aria-label="Mais ações"]').length - 1);

        if (!btnUltimo) {
            statusLeitura = false;
            return;
        }

        btnUltimo?.click();

        setTimeout(() => {
            clicarLeitura(btnUltimo);
        }, 400);
    }

    // Função para clicar no botão de leitura da mensagem
    function clicarLeitura(btn) {
        if (!btn) {
            statusLeitura = false;
            console.log('Botão de leitura não encontrado. Verifique se a funcionalidade de leitura está disponível para esta mensagem.');
            return;
        }

        console.log('Botão de leitura encontrado. Iniciando leitura...');
        let btnPlay = document.querySelector(
            '[data-testid="voice-play-turn-action-button"]'
        );

        if (btnPlay.textContent?.includes("Parar")) {
            btnPlay?.click();
            console.log('Parando a leitura atual. Tentando iniciar novamente...');

            setTimeout(clicarLeitura, 400);
            return;
        }

        btnPlay?.click();
        console.log('Iniciando a leitura da última mensagem.');

        setTimeout(() => {
            document.querySelector('#prompt-textarea')?.focus();
        }, 500);

        statusLeitura = false;
    }

    // Função de inicialização do script
    function initialize() {
        if (!statusSistema) {
            console.log('O sistema de extras está desativado. Ative para usar as funcionalidades extras.');
            return;
        }

        let ultimoEstado = null;

        listenerGeracao = setInterval(() => {
            const stopBtn = document.querySelector('[data-testid="stop-button"]');
            const sendBtn = document.querySelector('[data-testid="send-button"]');

            let estado = stopBtn ? "gerando" : "idle";

            if (ultimoEstado === "gerando" && estado === "idle") {
                console.log("TRANSIÇÃO: FINALIZOU");
                onRespostaFinalizada();
            }

            ultimoEstado = estado;

            //console.log(`Estado atual: ${estado}`);
        }, 800);
    }

    // Espera o DOM estar completamente carregado antes de inicializar
    if (document.readyState === 'complete' || document.readyState === 'interactive') {
        initialize();
    } else {
        window.addEventListener('DOMContentLoaded', initialize);
    }
})();