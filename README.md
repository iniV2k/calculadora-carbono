# 🌳 Calculadora de Pegada de Carbono (Front-end)

Este é o repositório do front-end para o projeto de Calculadora de Pegada de Carbono, desenvolvido como Atividade Prática Supervisionada (APS).

A aplicação é um *Single Page Application* (SPA) interativo construído com React e TypeScript, permitindo que os usuários calculem sua pegada de carbono anual.

**Site no Ar:** `https://app-calculadora-carbono.vercel.app`

---

## ✨ Funcionalidades

* Formulário dinâmico dividido em 3 seções: Transporte, Moradia e Alimentação.
* Cálculo em tempo real da pegada de carbono (kg CO₂e / ano).
* Exibição dos 3 principais vilões de emissão do usuário.
* Modal com dicas de como compensar a pegada de carbono.
* Páginas educacionais:
    * **O que é CO₂?:** Explicação sobre o efeito estufa.
    * **Metodologia:** Detalhamento dos fatores de emissão (buscados da API) e como os cálculos são feitos.

---

## 🛠️ Tecnologias Utilizadas

* **React**
* **TypeScript**
* **Vite:** Como ferramenta de build e servidor de desenvolvimento.
* **React Router DOM:** Para a navegação entre as páginas.
* **Axios:** Para fazer as requisições à API do back-end.
* **CSS Padrão:** Para estilização.

---

## 🚀 Como Rodar Localmente

1.  **Clone o repositório:**
    ```bash
    git clone https://github.com/iniV2k/api-calculadora-carbono.git
    ```

2.  **Instale as dependências:**
    ```bash
    npm install
    ```

3.  **Crie o arquivo `.env.local`:**
    Crie um arquivo chamado `.env.local` na raiz do projeto. Ele deve apontar para a sua API **local** (o back-end rodando na porta 5000).
    ```.env.local
    VITE_API_URL=http://localhost:5000
    ```

4.  **Rode o servidor de desenvolvimento:**
    ```bash
    npm run dev
    ```
    O site estará disponível em `http://localhost:5173`.