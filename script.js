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
    
    let statusSistema = true;
    let statusGerando = false;
    let statusLeitura = false;

    console.log('ChatGPT Web Extras carregado!');

    function initialize() {
        alert('ChatGPT Web Extras carregado!');
    }

    // Espera o DOM estar completamente carregado antes de inicializar
    if (document.readyState === 'complete' || document.readyState === 'interactive') {
        initialize();
    } else {
        window.addEventListener('DOMContentLoaded', initialize);
    }
})();