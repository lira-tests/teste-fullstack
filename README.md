# Teste fullstack

Estimar as horas para o desenvolvimento e colocar tudo no seu Github.


## Missão backend

Desenvolver uma **API JSON RESTful** em **Python** ou **Go** ou **Node** ou **PHP**, que utilize todos os métodos (`GET`, `POST`, `PUT`, `PATCH`, `DELETE`).  
E faça o teste unitário da **API**.

### Especificação

Monte um catálogo de veículo com a seguinte estrutura:

```
veiculo:   string
marca:     string
ano:       integer
descricao: text
vendido:   bool
created:   datetime
updated:   datetime
```

Utilize **MongoDB** ou **MySQL** para armazenar os dados que a **API** irá consumir.

### API endpoints

`GET /veiculos`

Retorna todos os veículos

---

`GET /veiculos/find`

Retorna os veículos de acordo com o termo passado parâmetro `q`

---

`GET /veiculos/{id}`

Retorna os detalhes do veículo

---

`POST /veiculos`

Adiciona um novo veículo

---

`PUT /veiculos/{id}`

Atualiza os dados de um veículo

---

`PATCH /veiculos/{id}`

Atualiza apenas alguns dados do veículo

---

`DELETE /veiculos/{id}`

Apaga o veículo


## Missão frontend

Desenvolver uma **UI (User Interface)**.

### Especificação

- Cross browser support (IE11+)
- Consumir **API** criada acima
- Criar uma tela que tenha...
    - Listagem de veículos
    - Formulário de criação ou edição de veículos
    - Detalhe do veículo
    - Busca
    
O desenho está na pasta [layout](https://github.com/TExTecnologia/teste-fullstack/tree/master/layout)

### Dica

Utilize algum framework para auxiliar no desenvolvimento da interface, por exemplo:

- https://getmdl.io/
- http://getbootstrap.com/css/
- http://foundation.zurb.com/

## Dúvida

Se tiver qualquer dúvida sobre esse teste, envie um email com o título `[Teste Fullstack] O assunto que vc deseja` para lagden@textecnologia.com.br
