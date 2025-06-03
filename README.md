## Frontend E-commerce com React + Vite

Este projeto é uma interface simples de um sistema de e-commerce desenvolvida em **React** utilizando **Vite** como empacotador e ferramenta de desenvolvimento. A aplicação consome dados de uma **API REST criada com Flask**.

*Este projeto foi desenvolvido com fins de aprendizado e como demonstração prática de interesse por desenvolvimento frontend com React.*

## Tecnologias Utilizadas

- **React** (biblioteca de construção de interfaces)
- **Vite** (ferramenta de build e dev server moderno)
- **Axios** (requisições HTTP)
- **Flask** (API backend - disponível em outro repositório)
- **SQLite** (banco de dados do backend)
- **CSS simples** (estilização básica)

## Funcionalidades

- Listagem de produtos a partir de uma API
- Interface limpa e objetiva
- Conexão direta com o backend
- Separação clara entre frontend e backend

## Organização do Projeto

```
ecommerce-react/
├── public/
├── src/
│   ├── App.jsx        # Componente principal que exibe os produtos
│   ├── main.jsx       # Entrada do React
│   ├── App.css        # Estilos do App
│   └── ...            # Outros arquivos auxiliares
├── package.json
├── vite.config.js
└── README.md
```

**O backend está disponível no repositório abaixo e precisa estar rodando para que o frontend funcione corretamente:**

https://github.com/jotage-08/api_ecommerce

## Como rodar localmente:

Clone o repositorio
```
git clone https://github.com/jotage-08/ecommerce-react.git
cd ecommerce-react
```

Instale as dependencias
```
npm install
```
Inicie o servidor de desenvolvimento
```
npm run dev
```
Certifique-se de que o backend Flask esteja rodando localmente em http://127.0.0.1:5000.

Contribuições são bem-vindas! Se você quiser ajudar a melhorar o projeto, abra uma issue ou envie um pull request.
