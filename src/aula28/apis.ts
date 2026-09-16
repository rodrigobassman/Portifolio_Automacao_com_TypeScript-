const BASE_URL = 'https://jsonplaceholder.typicode.com';

// Definir contratos de tipo
type Post = {
  userId: number;
  id?: number;
  title: string;
  body: string;
};

type Coment = {
  postId: number;
  id: number;
  name: string;
  email: string;
  body: string;
};


// GET /posts
async function listarPosts() {
  console.log('--- 1. GET /posts ---');

  const res = await fetch(`${BASE_URL}/posts`);
  const dados: Post[] = await res.json();

  console.log(`status: ${res.status}`);
  console.log(`Lidos ${dados.length} posts. EX: do primeiro`, dados[0]?.title);
}

async function chamarReqs1() {
  await listarPosts();
}

chamarReqs1();


// GET /posts/1
async function buscarPorId(id: number) {
  console.log('--- 2. GET /posts/1 ---');

  const res = await fetch(`${BASE_URL}/posts/${id}`);
  const dados: Post = await res.json();

  console.log(`status: ${res.status}`);
  console.log(`titulo do post ${id}:`, dados.title);
}

async function chamarReqs2() {
  await buscarPorId(1);
}

chamarReqs2();


// GET /posts/1/comments
async function listarComent(postId: number) {
  console.log('--- 3. GET /posts/1/comments ---');

  const res = await fetch(`${BASE_URL}/posts/${postId}/comments`);
  const dados: Coment[] = await res.json();

  console.log(`status: ${res.status}`);
  console.log(
    `O post ${postId} tem ${dados.length} comentários. EX: Email do primeiro comentário:`,
    dados[0]?.email
  );
}

async function chamarReqs3() {
  await listarComent(1);
}

chamarReqs3();


// POST /posts
async function criarPost() {
  console.log('--- 4. POST /posts ---');

  const novoPost: Post = {
    userId: 1,
    title: 'Meu novo post',
    body: 'Conteúdo do meu novo post'
  };

  const res = await fetch(`${BASE_URL}/posts`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(novoPost)
  });

  const dados: Post = await res.json();

  console.log(`status: ${res.status}`);
  console.log('Post criado:', dados);
}

async function chamarReqs4() {
  await criarPost();
}

chamarReqs4();