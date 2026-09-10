// Função utilitária para aguardar um período de tempo (delay).
export function aguardar(delay: number): Promise<void> {
	return new Promise((resolve) => setTimeout(resolve, delay));
}