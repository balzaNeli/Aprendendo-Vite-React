# Aprendendo Vite + React

Repositório de estudos focado em React e Vite. A ideia é aprender construindo — componentes reutilizáveis, gerenciamento de estado, hooks e as práticas que fazem sentido no desenvolvimento frontend hoje.

---

## Tecnologias

![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![Vite](https://img.shields.io/badge/Vite-646CFF?style=for-the-badge&logo=Vite&logoColor=white)
![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)

---

## Como rodar

**Pré-requisitos:** [Node.js](https://nodejs.org/) instalado (versão 18 ou superior).

````bash
# Clone o repositório
git clone https://github.com/balzaNeli/Aprendendo-Vite-React.git

# Entre na pasta
cd Aprendendo-Vite-React

# Instale as dependências
npm install

# Rode em modo desenvolvimento
npm run dev
````

O servidor sobe em `http://localhost:5173` por padrão.

### Outros comandos

| Comando | O que faz |
|---|---|
| `npm run build` | Gera a build de produção na pasta `dist/` |
| `npm run preview` | Visualiza a build de produção localmente |

---

## 📁 Estrutura do Projeto

````text
├── public/              # Arquivos estáticos (ícones, imagens, etc.)
├── src/                 # Código-fonte
│   ├── assets/          # Recursos visuais dos componentes
│   ├── components/      # Componentes reutilizáveis
│   ├── App.css          # Estilos do componente principal
│   ├── App.jsx          # Componente raiz
│   ├── index.css        # Estilos globais
│   └── main.jsx         # Ponto de entrada — renderiza o React no DOM
├── .gitignore
├── index.html           # HTML base do Vite
├── package.json         # Dependências e scripts
└── vite.config.js       # Configurações do Vite
````

---

🔗 **Repositório:** [github.com/balzaNeli/Aprendendo-Vite-React](https://github.com/balzaNeli/Aprendendo-Vite-React)
