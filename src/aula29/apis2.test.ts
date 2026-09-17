//GET /posts/1/coment
import{test, expect} from 'vitest';

const BASE_URL = 'https://jsonplaceholder.typicode.com';

test('Metodo POST para criar um novo post', async () => {
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
test('Metodo PUT para atualizar um post existente', async () => {
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


//Método PATCH para atualizar parcialmente um post existente
test('Metodo PATCH para atualizar parcialmente um post existente', async () => {
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
test('Metodo DELETE para excluir um post existente', async () => {
   const res = await fetch(`${BASE_URL}/posts/1`, {
      method: 'DELETE'
   });
   // Testar status code
   expect(res.status).toBe(200);
});


