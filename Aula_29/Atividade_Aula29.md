# Documento Técnico: APIs e Testes de Integração

---

## 1. Diferença entre PUT, PATCH e DELETE

| Método | Finalidade | Comportamento |
| :--- | :--- | :--- |
| **`PUT`** | Substituição / Atualização completa | Envia o objeto completo. |
| **`PATCH`** | Modificação parcial | Envia apenas os campos que serão alterados. Os demais dados do recurso permanecem. |
| **`DELETE`** | Remoção de recurso | Remove os campos indicados. |

---

## 2. Principais Status Codes e seus Significados

### Respostas de Sucesso (`2xx`)
* **`200 `**: Requisição processada com sucesso.
* **`201 `**: Recurso criado com sucesso.
* **`204 `**: Requisição concluída com sucesso, mas sem corpo na resposta.

### Erros do Cliente (`4xx`)
* **`400 Bad Request`**: Requisição inválida.
* **`401 Unauthorized`**: Falha na autenticação.
* **`403 Forbidden`**: Cliente autenticado, mas sem permissão para acessar o recurso.
* **`404 Not Found`**: Endereço não encontrado no servidor.

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
