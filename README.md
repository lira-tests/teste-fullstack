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

```bash
docker exec -it database mysql -proot -e 'DROP DATABASE vehicles_api_test;CREATE DATABASE vehicles_api_test'
```

Depois execute os testes:

```bash
docker exec -it backend npm run test
```
