import {test, expect} from '@playwright/test';
import{loginPage} from '../tests/pages/loginPage';
import {ctsLogins} from '../tests/data/login.data';

test.describe('autenticação dData-drive de múltiplos perfis com POM', () => {
 for (const cenario of ctsLogins) { test(`login com Perfil: ${cenario.perfil}`, async ({page}) => {
    await loginPage.acessarPaginaLogin(page);
    await loginPage.preencherFormularioLogin(page, cenario.email, cenario.senha);
    await loginPage.submeterFormularioLogin(page);
    if (cenario.esperaSucesso) {
      await expect(page).toHaveURL(cenario.urlEsperada);
    } else {
      await expect(loginPage.ErrorMessage).toBeVisible();
      await expect(page).toHaveURL(cenario.urlEsperada);
    }
})
