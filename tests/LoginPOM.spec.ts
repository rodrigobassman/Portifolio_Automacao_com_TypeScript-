import { test, expect } from '@playwright/test';
import { LoginPage } from '../tests/pages/loginPage';

test.describe('Login Tests com page object Model', () => {
  let loginPage: LoginPage;

  test.beforeEach(async ({ page }) => {
    loginPage = new LoginPage(page);
    await loginPage.goto();
  });

  test('Login com sucesso via POM', async ({ page }) => {
    await loginPage.Login('admin@system.com' , 'AdminPassword123');
    await expect(loginPage.statusMessage).toBeVisible();
    await expect(loginPage.statusMessage).toContainText('Login bem sucedido');
    await expect(page).toHaveURL(/painel\.html/); 
  });

  test('Testarr visibilidadee do bt login', async ({ page }) => {
    await expect(loginPage.loginButton).toBeDisabled();
  }
});