import { test, expect, vi } from 'vitest';
//SIMULAR LOGIN LENTO
function loginLento(usuario: string): Promise<string> {
    return new Promise((resolve) => {
        setTimeout(()) => {
            resolve(`Bem vindo, ${usuario}!`);
        }, 5000); // Simula um atraso de 5 segundos
    });
}
test('simular login usando fake timers', async () => {
//ligando a máquina do tempo
vi.useFakeTimers();
console.log('Iniciando cenario de teste...')
const promessaLogin = loginLento('Biu Doido');
// configurar avanço de 5 segundos
vi.advanceTimersByTime(5000);

