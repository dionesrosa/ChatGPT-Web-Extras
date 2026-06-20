# ChatGPT Web Extras 🎧

Extensão userscript para o ChatGPT que adiciona reprodução automática de voz ao finalizar cada resposta do assistente.

Sempre que o ChatGPT termina de gerar uma mensagem, o script detecta o fim da resposta e automaticamente ativa a leitura em voz alta da última mensagem.

---

## 🚀 Funcionalidades

- Detecta automaticamente quando o ChatGPT termina de gerar uma resposta
- Abre o menu de ações da última mensagem
- Ativa a reprodução de voz automaticamente
- Evita múltiplos disparos com controle de estado interno
- Sistema de fallback para garantir funcionamento mesmo com atrasos da interface
- Proteção contra loops e falhas com timeout de segurança

---

## ⚙️ Como funciona

O script monitora a interface do ChatGPT em tempo real.  
Quando o botão de "parar geração" desaparece, ele entende que a resposta terminou e executa automaticamente:

1. Abre o menu de ações da última mensagem
2. Localiza o botão de leitura em voz alta
3. Inicia a reprodução automaticamente
4. Foca de volta no campo de texto

---

## 🧠 Tecnologias

- JavaScript puro
- Tampermonkey / Userscript API
- Mutation + DOM polling (monitoramento leve da UI)

---

## 📦 Instalação

1. Instale uma extensão userscript (ex: Tampermonkey)
2. Adicione o script `script.js`
3. Acesse o ChatGPT normalmente

---

## 📌 Compatibilidade

- ChatGPT Web (https://chatgpt.com)
- Interface atual baseada em mensagens com `data-message-author-role`


---

## 📄 Licença

MIT