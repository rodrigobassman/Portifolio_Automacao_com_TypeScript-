// Função auxiliar para aguardar
function aguardar(ms: number): Promise<void> {
    return new Promise((resolve) => setTimeout(resolve, ms));
}

// SIMULANDO UMA API LOGIN
function simularlogin(usuario: string, senha: string): Promise<string> {
    return new Promise((resolve, reject) => {
        if (usuario === "admin" && senha === "123456") {
            resolve("Login bem-sucedido!");
        } else {
            reject("Usuário ou senha inválidos.");
        }
    });
}

// FUNÇÃO PRINCIPAL TESTANDO COM ASYNC/AWAIT
async function executarCT() {
    console.log("Iniciando cenário de teste...");
    try {
        console.log("passo 1: abrindo tela de login");
        await aguardar(2000);
        
        console.log("passo 2: inserindo credenciais");
        await aguardar(3000);
        
        const token = await simularlogin("admin", "123456");
        console.log(`SUCESSO! USUARIO LOGADO, TOKEN RECEBIDO: ${token}\n`);
    } catch (erro) {
        console.error(`FALHA NO TESTE: ${erro}\n`);
    } finally {
        console.log("Passo final: fechando navegador e limpando dados.");
    }
}

// Chamando a função para executar
executarCT();