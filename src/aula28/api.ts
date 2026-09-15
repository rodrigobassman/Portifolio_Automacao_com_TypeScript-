const BASE_URL = 'https://jsonplaceholder.typicode.com';

// Definir contratos de tipo
type Post = {
  userId: number;
  id?: number; // Campo opcional
  title: string; // Corrigido de 'tittle' para 'title'
  body: string;
};

type Coment = { // Recomendado usar PascalCase, mas 'comment' é aceito
  postId: number;
  id: number;
  name: string;
  email: string;
  body: string;
};

// GET /posts
async function listarPosts() {
  console.log('--- 1. GET /posts ---');
  
  // Corrigido para usar crases (``)
  const res = await fetch(`${BASE_URL}/posts`);
  const dados: Post[] = await res.json();
  
  // Corrigido para usar crases e propriedades corretas
  console.log(`status: ${res.status}`);
  console.log(`Lidos ${dados.length} posts. EX: do primeiro`, dados[0]?.title);
}

async function chamarReqs() {
  await listarPosts();
}

chamarReqs();

//GET /posts/1
async function buscarPorId(id:number) {
    // GET /posts
async function listarPosts() {
  console.log('--- 1. GET /posts ---');
  
  // Corrigido para usar crases (``)
  const res = await fetch(`${BASE_URL}/posts/${id}`);
  const dadRL = 'https://jsonplaceholder.typicode.com';

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

// GET /posts
async function listarComent(postID:number) {
  console.log('--- 3. GET /posts ---');
  const res = await fetch(`${BASE_URL}/posts`);
  const dados: Post[] = await res.json();
  console.log(`status: ${res.status}`);
  console.log(`O post ${postId} tem ${dados.length} comentários. EX: Email do primeiro comentário:`, dados[0]?.email);
}

// Função principal de execução
async function chamarReqs() {
  await listarPosts();
  await listarComent(1);
}

chamarReqs();
os: Post[] = await res.json();
  
  // Corrigido para usar crases e propriedades corretas
  console.log(`status: ${res.status}`);
  console.log(`titulo do post: ${id}:', dados.title);

async function chamarReqs() {
  listarPosts();
  buscarPorId(3);
}

chamarReqs();
  }

const BASE_U


