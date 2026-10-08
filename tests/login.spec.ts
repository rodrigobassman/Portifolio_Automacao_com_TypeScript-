import { test, expect } from "@playwright/test";
import { LoginPage } from "./pages/login.pages";

let loginPage: LoginPage;

test.beforeEach(async ({ page }) => {
  loginPage = new LoginPage(page);
  await loginPage.acessarsite();
});

test("login com sucesso", async ({ page }) => {
  // Realiza o login com as credenciais
  await loginPage.login("standard_user", "secret_sauce");
  
  // Validação: Garante que foi redirecionado para a página de produtos/inventário
  await expect(page).toHaveURL(/.*inventory\.html/);

 //validacao opcional: garante que o titulo da pagina ou o carrinho esta visivel
  await expect(page.locator(".title")).toHaveText("Products");
});

test("login com senha incorreta", async ({ page }) => {
  // Exemplo de teste negativo adicional para cobrir cenários de falha
  await loginPage.login("standard_user", "senha_errada");
  
  // Validação: Garante que a mensagem de erro aparece
  await expect(page.locator("[data-test='error']")).toBeVisible();
});
