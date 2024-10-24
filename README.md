# E-Descart Front-End

### Funcionalidade
Este é o front-end do projeto **E-Descart**, utilizado no meu TCC de Engenharia de Software pela Unicesumar. A aplicação visa facilitar o descarte consciente de resíduos na região de Campinas - SP, promovendo práticas sustentáveis e localizando pontos de coleta próximos.

---

## Tecnologias Utilizadas
- **Linguagem:** TypeScript
- **Framework:** React (Vite)
- **Estilização:** CSS
- **Gerenciamento de Estado:** React Hooks
- **Ferramentas:** Yarn, ESLint, Vite

---

## Como Rodar o Projeto

### Requisitos
- **Node.js** versão 16.x ou superior
- **Yarn**

### Passos para rodar localmente:

1. Clone o repositório:
   ```bash
   git clone https://github.com/anderson-aguiar/edescart-frontend.git
   cd edescart-frontend
   ```

2. Instale as dependências:
   ```bash
   yarn install
   ```

3. Inicie o servidor de desenvolvimento:
   ```bash
   yarn dev
   ```

A aplicação estará disponível em `http://localhost:3000`.

---

## Estrutura de Pastas

- **/src**: Contém o código principal do front-end, com os componentes React e arquivos de configuração.
- **/public**: Arquivos estáticos e o arquivo `index.html`.

---

## Variáveis de Ambiente

Certifique-se de configurar as variáveis de ambiente no arquivo `.env` antes de rodar o projeto:

- `VITE_API_URL`: URL da API do back-end

Exemplo:
```bash
VITE_API_URL=http://localhost:8080/api
```

---

[Back-end do Projeto](https://github.com/anderson-aguiar/edescart-backend)

