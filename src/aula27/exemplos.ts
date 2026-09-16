// ==========================================
// 1. USO DE ARRAYS E OBJETOS
// ==========================================

type Post = {
  id: number;
  title: string;
  body: string;
};

const posts: Post[] = [
  {
    id: 1,
    title: 'Primeiro post',
    body: 'Conteúdo do primeiro post'
  },
  {
    id: 2,
    title: 'Segundo post',
    body: 'Conteúdo do segundo post'
  }
];

console.log('--- 1. ARRAYS E OBJETOS ---');
console.log('Quantidade de posts:', posts.length);
console.log('Título do primeiro post:', posts[0].title);


// ==========================================
// 2. FUNÇÃO ASSÍNCRONA COM ASYNC/AWAIT
// ==========================================

async function buscarPost(): Promise<Post> {
  console.log('\n--- 2. ASYNC/AWAIT ---');

  const resposta = await fetch(
    'https://jsonplaceholder.typicode.com/posts/1'
  );

  const post: Post = await resposta.json();

  console.log('Status:', resposta.status);
  console.log('Título recebido:', post.title);

  return post;
}


// ==========================================
// 3. SIMULAÇÃO DE UMA PROMISE
// ==========================================

function simularPromise(): Promise<string> {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve('Promise executada com sucesso!');
    }, 1000);
  });
}


// ==========================================
// 4. FLUXO ASSÍNCRONO
// ==========================================

// A função abaixo é assíncrona porque utiliza async.
//
// O await faz o código aguardar o resultado de uma Promise
// antes de continuar para a próxima instrução.
//
// Fluxo:
// 1. A função buscarPost() é chamada.
// 2. O fetch inicia a requisição.
// 3. O await aguarda a resposta.
// 4. Quando a resposta chega, o código continua.
// 5. Depois, a Promise simulada é executada.
// 6. Após 1 segundo, a Promise é resolvida.
// 7. O resultado é exibido no terminal.

async function executarExemplos() {
  const post = await buscarPost();

  console.log('ID recebido:', post.id);

  console.log('\n--- 3. PROMISE ---');

  const resultado = await simularPromise();

  console.log(resultado);
}

executarExemplos();