# Documento Técnico: APIs e Testes de Integração

---

## 1. Diferença entre PUT, PATCH e DELETE

| Método | Finalidade | Comportamento |
| :--- | :--- | :--- |
| **`PUT`** | Substituição / Atualização completa | Envia o objeto completo para substituir ou atualizar o recurso. |
| **`PATCH`** | Modificação parcial | Envia apenas os campos que serão alterados. Os demais dados do recurso permanecem. |
| **`DELETE`** | Remoção de recurso | Remove o recurso indicado. |

---

## 2. Principais Status Codes e seus Significados

### Respostas de Sucesso (`2xx`)

* **`200 OK`**: Requisição processada com sucesso.
* **`201 Created`**: Recurso criado com sucesso.
* **`204 No Content`**: Requisição concluída com sucesso, mas sem corpo na resposta.

### Erros do Cliente (`4xx`)

* **`400 Bad Request`**: Requisição inválida ou malformada.
* **`401 Unauthorized`**: Autenticação ausente, inválida ou necessária.
* **`403 Forbidden`**: Cliente autenticado, mas sem permissão para acessar o recurso.
* **`404 Not Found`**: Recurso solicitado não foi encontrado no servidor.

### Erros do Servidor (`5xx`)

* **`500 Internal Server Error`**: Erro interno inesperado no servidor.
* **`503 Service Unavailable`**: Serviço temporariamente indisponível.

---

## 3. Exemplo de Payload JSON Bem Estruturado

Exemplo de um objeto JSON formatado e válido, enviando dados para criação de um novo recurso na API:

```json
{
  "userId": 1,
  "title": "Meu novo post",
  "body": "Conteúdo do meu novo post"
}
```

---

## 4. Criação de Teste de Integração

```typescript
import { test, expect } from 'vitest';

const BASE_URL = 'https://jsonplaceholder.typicode.com';

// Método POST para criar um novo post
test('Método POST para criar um novo post', async () => {
   const res = await fetch(`${BASE_URL}/posts`, {
      method: 'POST',
      headers: {
         'content-type': 'application/json'
      },
      body: JSON.stringify({
         userId: 1,
         title: 'Meu novo post',
         body: 'conteudo do meu novo post'
      })
   });

   // Testar status code
   expect(res.status).toBe(201);

   // Testar se o retorno é um objeto JSON
   const dados = await res.json();

   expect(dados.title).toBe('Meu novo post');
   expect(dados.body).toBe('conteudo do meu novo post');
});

// Método PUT para atualizar um post existente
test('Método PUT para atualizar um post existente', async () => {
   const res = await fetch(`${BASE_URL}/posts/1`, {
      method: 'PUT',
      headers: {
         'content-type': 'application/json'
      },
      body: JSON.stringify({
         userId: 1,
         title: 'Post atualizado',
         body: 'conteudo do post atualizado'
      })
   });

   // Testar status code
   expect(res.status).toBe(200);

   // Testar se o retorno é um objeto JSON
   const dados = await res.json();

   expect(dados.title).toBe('Post atualizado');
   expect(dados.body).toBe('conteudo do post atualizado');
});

// Método PATCH para atualizar parcialmente um post existente
test('Método PATCH para atualizar parcialmente um post existente', async () => {
   const res = await fetch(`${BASE_URL}/posts/1`, {
      method: 'PATCH',
      headers: {
         'content-type': 'application/json'
      },
      body: JSON.stringify({
         title: 'Post atualizado parcialmente'
      })
   });

   // Testar status code
   expect(res.status).toBe(200);

   // Testar se o retorno é um objeto JSON
   const dados = await res.json();

   expect(dados.title).toBe('Post atualizado parcialmente');
});

// Método DELETE para excluir um post existente
test('Método DELETE para excluir um post existente', async () => {
   const res = await fetch(`${BASE_URL}/posts/1`, {
      method: 'DELETE'
   });

   // Testar status code
   expect(res.status).toBe(200);
});
```
