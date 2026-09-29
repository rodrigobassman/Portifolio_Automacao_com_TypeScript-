import { test, expect } from '@playwright/test';

const BASE_URL = 'https://alisonmelo.github.io/tioalison-pe-t4-fap26/projetos-base/01-sistema-login/login.html';

test.describe('Ato 1 - Validar carregamento e visibilidade de elementos', () => {

    test('validar título e carregamento da página', async ({ page }) => {
        // Navegar até a página de login
        await page.goto(BASE_URL);

        // Validar título da página
        await expect(page).toHaveTitle(/LojaQA | Entrar/i);
    });

    test('Verificar exibição dos campos do formulário de login', async ({ page }) => {
        // Navegar até a página de login
        await page.goto(BASE_URL);
        
        // Validar campos
        await expect(page.locator('#email')).toBeVisible();
        await expect(page.locator('#password')).toBeVisible();
        await expect(page.locator('#loginBtn')).toBeVisible();

        //verificar se btn esta desativado
        await expect(page.locator('#loginBtn')).toBeDisabled();

    });

});


test.describe('ATO 2 - Caminho feliz', ()=>{
test('Validar acesso e redirecionar painel',async({page})=>{

// Navegar até a página de login
        await page.goto('${BASE_URL}/Login.html')

        //preencher campos utilizando  fill()
        await page.fill('#email', 'admin@system.com');
         await page.fill('#password', 'AdminPassword123');
        
         //validar botao ativo
         await expect(page.locator('#loginBtn')).toBeEnabled();

         //acao de click
         await page.click('#loginBtn'); 
         
    //validar o redirecionamento para a pagina/painel
    await expect(page).toHaveURL(/painel\.html/);
})

})