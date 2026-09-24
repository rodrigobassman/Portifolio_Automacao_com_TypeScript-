# Documento Técnico: APIs e Testes de Integração

---

## 1. Diferença entre PUT, PATCH e DELETE

| Método | Finalidade | Comportamento no Body |
| :--- | :--- | :--- | :--- |
| **`PUT`** | Substituição / Atualização completa | Envia o objeto **completo**. Campos não enviados podem ser sobrescritos ou apagados no servidor. |
| **`PATCH`** | Modificação parcial | Envia **apenas os campos** que serão alterados. Os demais dados continuam intactos. |
| **`DELETE`** | Remoção de recurso | Geralmente **não envia body**. Remove o recurso indicado pela URL. | 

---

## 2. Principais Status Codes e seus Significados

### Respostas de Sucesso (`2xx`)
* **`200 OK`**: Requisição processada com sucesso (padrão em `GET`, `PUT`, `PATCH`).
* **`201 Created`**: Recurso criado com sucesso (padrão em `POST`).
* **`204 No Content`**: Requisição concluída com sucesso, mas sem corpo na resposta (comum em `DELETE`).

### Erros do Cliente (`4xx`)
* **`400 Bad Request`**: Requisição inválida (sintaxe JSON errada ou campos obrigatórios ausentes).
* **`401 Unauthorized`**: Falha na autenticação (token ausente ou inválido).
* **`403 Forbidden`**: Cliente autenticado, mas sem permissão para acessar o recurso.
* **`404 Not Found`**: Endereço ou recurso não encontrado no servidor.

### Erros do Servidor (`5xx`)
* **`500 Internal Server Error`**: Erro interno inesperado no servidor.
* **`503 Service Unavailable`**: Serviço temporariamente indisponível.

---

## 3. Exemplo de Payload JSON Bem Estruturado

Exemplo de um objeto JSON formatado e válido enviando dados de criação para a API:

```json
{
  "userId": 1,
  "title": "Meu novo post",
  "body": "Conteúdo do meu novo post"
}
