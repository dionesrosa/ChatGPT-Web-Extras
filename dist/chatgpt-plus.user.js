// ==UserScript==
// @name         ChatGPT Plus
// @namespace    https://github.com/dionesrosa
// @version      0.2.3
// @description  Reprodução automática de voz ao finalizar resposta no chat do ChatGPT.
// @author       Diones Souza
// @license      MIT
// @icon         data:image/png;base64,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
// @homepageURL  https://github.com/dionesrosa/ChatGPT-Plus
// @supportURL   https://github.com/dionesrosa/ChatGPT-Plus/issues
// @updateURL    https://raw.githubusercontent.com/dionesrosa/ChatGPT-Plus/main/dist/chatgpt-plus.user.js
// @downloadURL  https://raw.githubusercontent.com/dionesrosa/ChatGPT-Plus/main/dist/chatgpt-plus.user.js
// @match        *://chatgpt.com/*
// @grant        GM_getValue
// @grant        GM_setValue
// @run-at       document-idle
// @noframes
// ==/UserScript==

(function() {
    'use strict';

    // ============================
    //  Configurações do script
    // ============================
    const SCRIPT_NAME    = 'ChatGPT Plus';
    const SCRIPT_VERSION = '0.2.1';
    
    // ============================
    //  Estado interno
    // ============================
    let isReading = false;          // Indica se a leitura está em andamento (evita disparos repetidos)
    let lastState = null;           // Último estado observado ('gerando' ou 'idle')
    let monitorInterval = null;     // Referência ao setInterval do monitor
    let resetTimeout = null;        // Timeout de segurança para desbloquear isReading
    
    // ============================
    //  Funções auxiliares de log
    // ============================
    function logInfo(...args) {
        console.log(`[${SCRIPT_NAME} v${SCRIPT_VERSION}]`, ...args);
    }
    function logWarn(...args) {
        console.warn(`[${SCRIPT_NAME} v${SCRIPT_VERSION}]`, ...args);
    }
    
    // ============================
    //  Gerenciamento do bloqueio (isReading)
    // ============================
    
    /** Reseta o bloqueio de forma segura (limpa timeout e libera a flag) */
    function resetReadingLock() {
        clearTimeout(resetTimeout);
        isReading = false;
    }
    
    /**
     * Agenda um timeout de segurança para desbloquear isReading
     * @param {number} ms - tempo em milissegundos (padrão 15000)
     */
    function scheduleSafetyReset(ms = 15000) {
        resetTimeout = setTimeout(() => {
            logWarn('Timeout de segurança – resetando isReading');
            resetReadingLock();
        }, ms);
    }
    
    // ============================
    //  Lógica principal de interação com a UI
    // ============================
    
    /** Chamado quando a resposta termina de ser gerada */
    function onResponseFinished() {
        if (isReading) return;              // já está processando
        isReading = true;
        scheduleSafetyReset(15000);         // trava por até 15s, caso algo falhe
    
        // Pequena pausa para garantir que o menu de ações esteja disponível
        setTimeout(() => openLastMessageMenu(), 400);
    }
    
    /** Abre o menu de "Mais ações" da última mensagem do assistente */
    function openLastMessageMenu() {
        // Localiza todas as mensagens do assistente
        const assistantMessages = document.querySelectorAll('[data-message-author-role="assistant"]');
        const lastMessage = assistantMessages[assistantMessages.length - 1];
    
        // Tenta obter o botão "Mais ações" dentro da última mensagem
        let moreActionsBtn = lastMessage?.querySelector('button[aria-label="Mais ações"]');
        // Fallback: se não encontrou, pega o último botão "Mais ações" da página
        if (!moreActionsBtn) {
            const allButtons = document.querySelectorAll('button[aria-label="Mais ações"]');
            moreActionsBtn = allButtons[allButtons.length - 1];
        }
    
        if (!moreActionsBtn) {
            logWarn('Nenhum botão "Mais ações" encontrado');
            resetReadingLock();
            return;
        }
    
        // Abre o menu
        moreActionsBtn.click();
    
        // Aguarda o botão de leitura aparecer no menu (com tentativas)
        const attemptToFindPlayButton = (retries = 0) => {
            const playBtn = document.querySelector('[data-testid="voice-play-turn-action-button"]');
            if (playBtn) {
                clickPlayButton();
            } else if (retries < 5) {
                setTimeout(() => attemptToFindPlayButton(retries + 1), 250);
            } else {
                logWarn('Botão de leitura não apareceu após abrir o menu');
                resetReadingLock();
            }
        };
    
        // Espera um pouco antes de começar a procurar
        setTimeout(() => attemptToFindPlayButton(), 300);
    }
    
    /** Gerencia o clique no botão de leitura, tratando o estado "Parar" */
    function clickPlayButton() {
        const playBtn = document.querySelector('[data-testid="voice-play-turn-action-button"]');
        if (!playBtn) {
            logWarn('Botão de leitura sumiu');
            resetReadingLock();
            return;
        }
    
        const currentState = playBtn.textContent?.trim();
    
        // Se estiver tocando ("Parar"), interrompe para poder reiniciar
        if (currentState === 'Parar') {
            playBtn.click(); // para a reprodução
    
            // Aguarda a transição e tenta novamente (máximo 2 tentativas)
            setTimeout(() => {
                const btnAfterStop = document.querySelector('[data-testid="voice-play-turn-action-button"]');
                if (btnAfterStop && btnAfterStop.textContent?.trim() !== 'Parar') {
                    startReading(btnAfterStop);
                } else {
                    // Segunda tentativa
                    setTimeout(() => {
                        const btnAfterSecond = document.querySelector('[data-testid="voice-play-turn-action-button"]');
                        if (btnAfterSecond && btnAfterSecond.textContent?.trim() !== 'Parar') {
                            startReading(btnAfterSecond);
                        } else {
                            logWarn('Não foi possível iniciar leitura após parar');
                            resetReadingLock();
                        }
                    }, 500);
                }
            }, 500);
            return;
        }
    
        // Estado já pronto para tocar
        startReading(playBtn);
    }
    
    /** Executa o clique no botão de leitura e foca no campo de texto */
    function startReading(button) {
        button.click();
        setTimeout(() => {
            document.querySelector('#prompt-textarea')?.focus();
        }, 500);
        resetReadingLock(); // libera o bloqueio após iniciar
    }
    
    // ============================
    //  Monitoramento do estado de geração
    // ============================
    
    /** Verifica se a resposta terminou de ser gerada */
    function checkGenerationState() {
        const stopButton = document.querySelector('[data-testid="stop-button"]');
        const currentState = stopButton ? 'gerando' : 'idle';
    
        // Se mudou de 'gerando' para 'idle', a resposta finalizou
        if (lastState === 'gerando' && currentState === 'idle') {
            logInfo('Resposta finalizada – iniciando reprodução automática');
            onResponseFinished();
        }
    
        lastState = currentState;
    }
    
    /** Inicia o monitoramento periódico do estado */
    function startMonitoring() {
        if (monitorInterval) return; // evita múltiplos intervalos
        monitorInterval = setInterval(checkGenerationState, 700);
        logInfo('Monitoramento iniciado');
    }
    
    // ============================
    //  Inicialização
    // ============================
    
    // Garante que o monitoramento comece quando o DOM estiver pronto
    if (document.readyState === 'complete' || document.readyState === 'interactive') {
        startMonitoring();
    } else {
        window.addEventListener('DOMContentLoaded', startMonitoring);
    }
    
    logInfo('Script carregado');
})();