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
})
