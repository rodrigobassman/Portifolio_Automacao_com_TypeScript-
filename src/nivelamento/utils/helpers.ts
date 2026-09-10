// Função auxiliar para aguardar
function aguardar(ms: number): Promise<void> {
    return new Promise((resolve) => setTimeout(resolve, ms));
}
//SIMULANDO UMA API LOGIN
function simularlogin(usuario:string, senha:string): Promise<string>{
    return new Promise((resolve, reject) => {
        if(usuario === "admin" && senha === "1234"){
            resolve("Login bem-sucedido!");
        } else {
            reject("Usuário ou senha inválidos.");
        }

    });
}
//FUNÇÃO PRNCIPAL TESTANDO COM ASYNC/AWAIT
async function executarCT() {
    console.log("Iniciando cenário de teste...");
    try{
        console.log("passo 1: abrindo tela de login");
        await aguardar(2000);
        console.log("passo 2: inserindo credenciais");
        await aguardar(2000);
        console.log("passo 3: clicando no botão de login");
        await aguardar(2000);
        const resultado = await simularlogin("admin", "1234");
        console.log(resultado);
    }
}