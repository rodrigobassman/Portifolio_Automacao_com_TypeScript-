import { test, expect } from '@playwright/test';

const BASE_URL = 'https://alisonmelo.github.io/tioalison-pe-t4-fap26/projetos-base/01-sistema-login';

test.describe('Aula 33 - Desafio Prático: Mapeamento de Localizadores - Painel Administrativo', () => {
  test.beforeEach(async ({ page }) => {

    // Acessar a aplicação na prática
    await page.goto(`${BASE_URL}/login.html`);

//Fazer login
await page.getByLabel('Usuário').fill('Admin');
await page.getByLabel('Senha').fill('AdminPassword123');
await page.getByRole('button', { name: /Entrar/i }).click();

//Validar redirecionamento para o painel
    await expect(page.getByText('Painel Administrativo')).toBeVisible();
  });

// CT 01 - Validar Exibição da Lista de Usuários
test('CT 01 - Validar Exibição da Lista de Usuários', async ({ page }) => {

  //Acessar a aba de usuários
  await page.getByRole('tab', { name: /Usuários/i }).click();

 //Validar a renderização de pelo menos um usuário na lista
  await expect(page.getByText('Administrador',{exact: true}).first()).toBeVisible();

});
});

//CT 02 - Validar Listagem e Filtros de produtos
test('CT 02 - Validar Listagem e Filtros de produtos', async ({ page }) => {

  //Acessar a aba de produtos
  await page.getByRole('tab', { name: /Produtos/i }).click();

  //Validar a visibilidade do campo de pesquisa
await expect(page.locator('input').first()).toBeVisible();

//Validar a visibilidade do seletor
await expect(page.getByText('todas as lojas', { exact: true })).toBeVisible();

//Validar a visibilidade do seletor de lojas
await expect(page.getByText('todas as lojas',{ exact: true })).toBeVisible();

//Validar a renderização de pelo menos um produto
await expect(page.getByText('Mouse Óptico Atlas', {exact: true})).toBeVisible();

});

//CT 03 - Validar informações na lista de lojas
test('CT 03 - Validar informações na lista de lojas', async ({ page }) => {

  //Acessar a aba de lojas
  await page.getByRole('tab', { name: /Lojas/i }).click();

  //Validar o título/nome da loja
  await expect(page.getByText('Minha Tech', {exact: true}).first()).toBeVisible();

  //Validar os dados da loja
  await expect(page.getByText(/Responsável:/i).first()).toBeVisible();

  //Validar a informação de produtos
  await expect(page.getByText(/Produto\(s\)/i).first()).toBeVisible();

});