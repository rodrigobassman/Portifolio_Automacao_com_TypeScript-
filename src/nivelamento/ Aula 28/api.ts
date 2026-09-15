const BASE_URL = 'https://jsonplaceholder.typicode.com';

// Definir contratos de tipo
type Post = {
  userId: number;
  id?: number; // Campo opcional
  title: string; // Corrigido de 'tittle' para 'title'
  body: string;
};

type Comment = { // Recomendado usar PascalCase, mas 'comment' é aceito
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