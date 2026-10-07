🚀 Mapeamento do Contrato de Integração

1. Endpoint de Leitura (GET)

1. Identificação e Finalidade

Endpoint/Rota: /api/users/2

Objetivo de Negócio: Recuperar as informações de perfil de um usuário específico a partir do seu ID numérico para exibição de detalhes cadastrais na interface do sistema.

2. Estrutura do Request (O que o cliente envia)

Método HTTP: GET

URL Completa: https://reqres.in/api/users/2

Headers (Cabeçalhos):

Accept: application/json

Body (Corpo): N/A

3. Estrutura do Response (O que o servidor devolve)

Status Code Esperado: 200 OK

Payload de Retorno:

{
  "data": {
    "id": 2,
    "email": "janet.weaver@reqres.in",
    "first_name": "Janet",
    "last_name": "Weaver",
    "avatar": "https://reqres.in/img/faces/2-image.jpg"
  },
  "support": {
    "url": "https://reqres.in/#support-heading",
    "text": "To keep ReqRes free, contributions towards server costs are appreciated!"
  }
}


2. Endpoint de Criação (POST)

1. Identificação e Finalidade

Endpoint/Rota: /api/users

Objetivo de Negócio: Cadastrar um novo usuário no sistema enviando seu nome e cargo, retornando o ID único gerado e o registro de data/hora de criação.

2. Estrutura do Request (O que o cliente envia)

Método HTTP: POST

URL Completa: https://reqres.in/api/users

Headers (Cabeçalhos):

Content-Type: application/json

Accept: application/json

Body (Corpo):

{
  "name": "morpheus",
  "job": "leader"
}


3. Estrutura do Response (O que o servidor devolve)

Status Code Esperado: 201 Created

Payload de Retorno:

{
  "name": "morpheus",
  "job": "leader",
  "id": "843",
  "createdAt": "2026-09-22T03:30:00.000Z"
}

