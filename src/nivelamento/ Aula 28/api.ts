const BASE_URL = 'https://jsonplaceholder.typicode.com/';
// Definir contratos de tipo
type Post = {
 userId:number;
 id?: number; // Campo opcional
 tittle: string;
 body: string;
};
type comment ={
postId: number;
id: number;
name: string;
email: string;
body: string;

};

