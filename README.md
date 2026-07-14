# ChatGPT Plus

Userscript para o ChatGPT desenvolvido por Diones Souza com Tampermonkey.

[![Licença MIT](https://img.shields.io/badge/licença-MIT-green)](LICENSE)
[![Tampermonkey](https://img.shields.io/badge/Tampermonkey-suportado-orange)](https://www.tampermonkey.net/)

[![Instalar](https://img.shields.io/badge/Instalar-Userscript-blue?style=for-the-badge&logo=Tampermonkey)](https://raw.githubusercontent.com/dionesrosa/ChatGPT-Plus/main/dist/chatgpt-plus.user.js)

---

## ✨ O que o script faz

Este userscript detecta automaticamente o fim da geração de uma resposta no ChatGPT e inicia a reprodução de voz da última mensagem.

## 🔧 Funcionalidades

- Detecta o fim da resposta do assistente
- Abre o menu de ações da última mensagem
- Inicia a reprodução automática de voz
- Evita disparos duplicados com controle de estado interno
- Usa fallback para lidar com atrasos da interface

## 🚀 Instalação

1. Instale a extensão [Tampermonkey](https://www.tampermonkey.net/) no navegador.
2. Instale o userscript disponível no link acima.
3. Acesse o ChatGPT normalmente.

## 🖱️ Como usar

O script funciona automaticamente quando a resposta terminar de ser gerada. Não é necessário configurar nada manualmente.

## 🛠️ Compilação com userscript-builder

Esta seção é destinada a desenvolvedores que quiserem gerar e publicar o userscript localmente.

O [userscript-builder](https://github.com/dionesrosa/userscript-builder) lê os metadados do arquivo [userscript.config.json](userscript.config.json), usa a entrada principal em [src/index.js](src/index.js) e gera o arquivo final com o cabeçalho do Tampermonkey automaticamente.

### Comandos mais usados

- `usb build` — gera o arquivo final em `dist/`
- `usb release patch|minor|major` — atualiza a versão e cria um release
- `usb publish` — publica o build no GitHub Releases

```bash
usb build
```

> Para quem apenas vai usar o script, o fluxo mais simples é instalar o userscript diretamente pelo link de instalação acima.

## 🧩 Estrutura do projeto

- [src/index.js](src/index.js): lógica principal do userscript
- [userscript.config.json](userscript.config.json): metadados e configuração do build

## 👤 Autor

Diones Souza

## 📜 Licença

MIT