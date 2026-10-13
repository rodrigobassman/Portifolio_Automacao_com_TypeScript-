// src/aula25/06-cenarios.ts

// Definindo a interface e a lista de cenários
interface Cenario {
    id: number;
    titulo: string;
    tipo: 'funcional' | 'visual' | 'exploratorio' | 'carga';
    complexidade: 'baixa' | 'media' | 'alta';
}

const cenarios: Cenario[] = [
    { id: 1, titulo: 'Validar carregamento da página de login', tipo: 'funcional', complexidade: 'baixa' },
    { id: 2, titulo: 'Validar layout responsivo em telas mobile incomuns', tipo: 'visual', complexidade: 'alta' },
    { id: 3, titulo: 'Caminho feliz de login com credenciais válidas', tipo: 'funcional', complexidade: 'baixa' },
    { id: 4, titulo: 'Teste exploratório de usabilidade na Black Friday', tipo: 'exploratorio', complexidade: 'alta' },
    { id: 5, titulo: 'Verificar botão desativado com e-mail inválido', tipo: 'funcional', complexidade: 'baixa' },
    { id: 6, titulo: 'Cadastro completo de usuário do tipo cliente', tipo: 'funcional', complexidade: 'media' },
    { id: 7, titulo: 'Teste de estresse com 10.000 usuários simultâneos', tipo: 'carga', complexidade: 'alta' },
    { id: 8, titulo: 'Revelar campo de loja ao selecionar perfil lojista', tipo: 'funcional', complexidade: 'media' }
];

let quantidadeAutomatizaveis = 0;

console.log('=== CLASSIFICAÇÃO DE CENÁRIOS DE TESTE ===\n');

// Loop para percorrer os cenários e aplicar a condicional (if/else)
for (let i = 0; i < cenarios.length; i++) {
    const cenario = cenarios[i];
    let deveAutomatizar = false;

    // Regra de decisão (Condicional)
    if ((cenario.tipo === 'funcional' || cenario.tipo === 'carga') && cenario.complexidade !== 'alta') {
        deveAutomatizar = true;
    } else if (cenario.tipo === 'funcional' && cenario.complexidade === 'alta') {
        deveAutomatizar = true; // Automatizável com ressalvas
    }

    if (deveAutomatizar) {
        quantidadeAutomatizaveis++;
        console.log(`[AUTOMATIZAR] Cenario ${cenario.id}: ${cenario.titulo}`);
    } else {
        console.log(`[NÃO AUTOMATIZAR] Cenario ${cenario.id}: ${cenario.titulo}`);
    }
}

console.log(`\nTotal de cenários automatizáveis encontrados: ${quantidadeAutomatizaveis}`);