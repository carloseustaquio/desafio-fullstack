# Desafio Fullstack 🔄

![Demo Gif](./profitfy-demo.gif)

A aplicação desenvolvida inclui API, tela de cadastro, tela de login e recuperação de senha. Os dados são salvos em banco de dados Postgres, e toda essa estrutura roda em containers Docker. O layout seguiu a sugestão proposta no [Figma](https://www.figma.com/file/XlARo5zdyBVeF3EFSkGSbr/Teste_Fullstack_Profitfy.me?node-id=0%3A1).

## Stack 📚
Backend | Frontend
------------ | -------------
TypeScript | JavaScript
Express + Overnight | React.js
PostgresSQL | StyledComponents + Polished
Jest | Formik + Yup
TypeORM | Axios

## Extras ➕
- Testes automatizados (unitários e de integração)
- Arquitetura em camadas
- Docker

## Como Rodar 🏎️

Pré-requisitos: Ter o Docker instalado e rodando.

1. Na pasta raiz rode o comando a seguir para inicializar o projeto:
```
docker-compose up
```

2. Para parar, rode um:
```
docker-compose stop
```

## Testes ️🧪
Pré-requisitos: O projeto deve estar rodando.

1. Entre no container *backend* através do Docker
```
docker exec -it backend bash
```

2. Execute os testes
```
yarn test  # run all tests
yarn test:unit 
yarn test:functional 
```