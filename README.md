# Resposta do teste técnico da DASA

## O Teste

Divido em 2 (duas) partes o teste consiste em criar uma API e um Frontend para consumir essa API.

As especificações e fixtures pode ser vistas [aqui](documents/README.md).

## Planejamento do teste

### Estrutura

| Pasta     | Função                                            |
| --------- | ------------------------------------------------- |
| documents | Arquivos com fixtures e especificações do projeto |
| backend   | Todos os arquivos da API em Koa                   |
| frontend  | Todos os arquivos de frontend                     |

### Ferramentas

| Backend | Frontend  | DevOps         |
| ------- | --------- | -------------- |
| Koa.js  | Angular   | Docker         |
| MySQL   | Bootstrap | Docker Compose |
| Knex    |           | Makefile       |


### Como rodar o projeto

#### Os testes

A camada de backend conta com testes do tipo integração, testando as respostas das API e se o retorno é válido.

Criei um arquivo `Makefile` na raiz com alguns comandos, só rodar `make` eles serão exibidos.

##### Rodando

- Executar `docker-compose up -d` ou `make up`
  - Obs. o MySQL pode demorar para iniciar, pode ser preciso rodar duas vezes o `up`
- Criar a estrutura de banco de dados `make backend-start-database`
- Acessando:
  - Frontend: http://localhost:4200
  - Backend: http://localhost:4100
- Rodando os testes
  - `make backend-test`
- Obs. Pode correr algum problema e precisar rodar um `npm install` no diretório backend e/our frontend

