// Função utilitária para aguardar um período de tempo (delay).
import function aguardar(delay) {
    return new Promise((resolve) => setTimeout(resolve, delay));
}
