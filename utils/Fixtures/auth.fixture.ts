import { test as base, expect, Page } from "@playwright/test";
import { LoginPage } from "./pages/loginPage"; // Ajuste o caminho relativo conforme a localização deste arquivo

type AuthFixtures = {
    loginPage: LoginPage;
    loggedPage: Page;
};

export const test = base.extend<AuthFixtures>({
    // Entregando a página de login já instanciada e navegada
    loginPage: async ({ page }, use) => {
        const loginPage = new LoginPage(page);
        await loginPage.goto();
        await use(loginPage);
    },
    
    // Entregando a página já logada (reaproveitando a fixture loginPage)
    loggedPage: async ({ page, loginPage }, use) => {
        await loginPage.login('admin@system.com', 'AdminPassword123');
        await page.waitForURL(/painel\.html/);
        await use(page);
    },
});

export { expect } from "@playwright/test";
