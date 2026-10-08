
import { test, expect } from '@playwright/test';

const BASE_URL = 'https://alisonmelo.github.io/tioalison-pe-t4-fap26/projetos-base/01-sistema-login';

// 1. Criando a massa de dados (USERS) para resolver o erro do Ato 3
const USERS = {
  cliente: {
    nome: 'Cliente Teste',
    email: `cliente_${Date.now()}@teste.com`, // Usando timestamp para evitar e-mails duplicados
    password: 'UserPassword123'
  },
  logista: {
    nome: 'Logista Teste',
    email: `logista_${Date.now()}@teste.com`,
    password: 'UserPassword123'
  }
};

test.describe('Ato 1 - Validar carregamento e visibilidade de elementos', () => {

  test('Validar titulo e carregamento da pagina', async ({ page }) => {
    // Navegar ate pagina de login
    await page.goto(`${BASE_URL}/login.html`);
    // Validar titulo
    await expect(page).toHaveTitle(/LojaQA | Entrar/i);
  });

  test('Verificar exibicao dos campos do form de login', async ({ page }) => {
    // Navegar ate pagina de login
    await page.goto(`${BASE_URL}/login.html`);

    // Validar campos
    await expect(page.locator('#email')).toBeVisible();
    await expect(page.locator('#password')).toBeVisible();
    await expect(page.locator('#loginBtn')).toBeVisible();
    // Verificar se btn esta desativado
    await expect(page.locator('#loginBtn')).toBeDisabled();
  });

});

test.describe('Ato 2 - Caminho Feliz', () => {
  
  test('Validar acesso e redirecionar ao painel', async ({ page }) => {
    // Navegar ate pagina de login
    await page.goto(`${BASE_URL}/login.html`);
    // Preencher campos utilizando o fill()
    await page.fill('#email', 'bassman@system.com');
    await page.fill('#password', 'UserPassword666');
    
    // Validar botao ativo
    await expect(page.locator('#loginBtn')).toBeEnabled();
    // Acao de clique no btn
    await page.click('#loginBtn');
    // Validar o redirecionamento para a pagina /painel
    await expect(page).toHaveURL(/painel\.html/);
  });

  test('Verificar botao login desativado quando email incorreto', async ({ page }) => {
    // Navegar ate pagina de login
    await page.goto(`${BASE_URL}/login.html`);

    // Preencher campos utilizando o fill()
    await page.fill('#email', 'email_sem_formato');
    await page.fill('#password', 'UserPassword669');
    
    // Validar botao desativado
    await expect(page.locator('#loginBtn')).toBeDisabled();
  });

});

test.describe('Ato 3 - Validar cadastro e login de diferentes perfis (Cliente e Logista)', () => {

  test('Validar formulario de cadastro e login de um novo Cliente', async ({ page }) => {
    // 1. Ir para a página de cadastro
    await page.goto(`${BASE_URL}/cadastro.html`);

    // 2. Preencher os campos do formulário de cadastro
    await page.fill('#nome', USERS.cliente.nome);
    await page.fill('#email', USERS.cliente.email);
    await page.fill('#password', USERS.cliente.password);
    
    // 3. Submeter o cadastro
    await page.click('#cadastroBtn');

    // 4. Fazer o login com o cliente recém-criado
    await page.goto(`${BASE_URL}/login.html`);
    await page.fill('#email', USERS.cliente.email);
    await page.fill('#password', USERS.cliente.password);
    
    await expect(page.locator('#loginBtn')).toBeEnabled();
    await page.click('#loginBtn');
    await expect(page).toHaveURL(/painel\.html/);
  });

  test('Validar formulario de cadastro e login de um novo Logista', async ({ page }) => {
    // 1. Ir para a página de cadastro
    await page.goto(`${BASE_URL}/cadastro.html`);

    // 2. Preencher os campos do formulário de cadastro
    await page.fill('#nome', USERS.logista.nome);
    await page.fill('#email', USERS.logista.email);
    await page.fill('#password', USERS.logista.password);
    
    // 3. Submeter o cadastro
    await page.click('#cadastroBtn');

    // 4. Fazer o login com o logista recém-criado
    await page.goto(`${BASE_URL}/login.html`);
    await page.fill('#email', USERS.logista.email);
    await page.fill('#password', USERS.logista.password);
    
    await expect(page.locator('#loginBtn')).toBeEnabled();
    await page.click('#loginBtn');
    await expect(page).toHaveURL(/painel\.html/);
  });

});