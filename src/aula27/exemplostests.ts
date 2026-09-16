import { describe, it, expect } from 'vitest';

describe('Testes da Aula 27', () => {

  it('deve verificar o uso de arrays e objetos', () => {
    const posts = [
      {
        id: 1,
        title: 'Primeiro post'
      },
      {
        id: 2,
        title: 'Segundo post'
      }
    ];

    expect(posts).toHaveLength(2);
    expect(posts[0].title).toBe('Primeiro post');
  });


  it('deve verificar uma Promise simulada', async () => {
    const resultado = await new Promise<string>((resolve) => {
      setTimeout(() => {
        resolve('Promise executada com sucesso!');
      }, 100);
    });

    expect(resultado).toBe('Promise executada com sucesso!');
  });


  it('deve verificar uma função assíncrona', async () => {
    const resposta = await fetch(
      'https://jsonplaceholder.typicode.com/posts/1'
    );

    const post = await resposta.json();

    expect(resposta.status).toBe(200);
    expect(post.id).toBe(1);
    expect(post.userId).toBe(1);
  });

});