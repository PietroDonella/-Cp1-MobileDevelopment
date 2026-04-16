# 📱 Checkpoint 02 - Mobile Application Development

Projeto desenvolvido como parte da avaliação (Checkpoint 02) da disciplina de Mobile Application Development, no curso de Tecnologia em Desenvolvimento de Sistemas (2TDS) da FIAP.

## 🎯 Objetivo do Projeto
Criar um aplicativo mobile focado na entrada de dados, persistência local e navegação fluida. O projeto garante que os dados do usuário não sejam perdidos ao fechar o app, otimizando a experiência através do preenchimento automático.

## ✨ Funcionalidades

* **Navegação Integrada:** Separação clara entre a entrada de dados (Cadastro) e a visualização (Perfil).
* **Validação de Formulário:** Bloqueio de submissões vazias com feedback via alertas.
* **Máscaras de Input:** Formatação automática e intuitiva para os campos de CPF e Telefone utilizando `react-native-mask-input`.
* **Persistência de Dados:** Uso do `AsyncStorage` para salvar as informações localmente.
* **Autopreenchimento:** O aplicativo recupera e preenche automaticamente os dados salvos sempre que é iniciado.

## 🛠️ Tecnologias Utilizadas

* React Native
* Expo
* React Navigation (`@react-navigation/native-stack`)
* Async Storage (`@react-native-async-storage/async-storage`)
* React Native Mask Input (`react-native-mask-input`)

## 📂 Estrutura do Projeto

```text
📦 src
 ┣ 📂 assets          # Imagens locais (ex: foto de perfil)
 ┣ 📂 screens
 ┃ ┣ 📜 Cadastro.js   # Lógica de formulário, validação e persistência
 ┃ ┗ 📜 Perfil.js     # Tela de destino com dados estáticos do aluno e dinâmicos do usuário
 📜 App.js            # Configuração e gerenciamento de rotas
```
## 🚀 Como Executar

1. Clone o repositório para sua máquina local.
2. Certifique-se de ter o Node.js instalado.
3. Instale as dependências do projeto executando o comando no terminal:
   `npm install`
4. Inicie o servidor do Expo:
   `npx expo start`
5. Escaneie o QR Code com o aplicativo **Expo Go** no seu celular ou pressione `a` para rodar no emulador Android / `i` para o simulador iOS.
