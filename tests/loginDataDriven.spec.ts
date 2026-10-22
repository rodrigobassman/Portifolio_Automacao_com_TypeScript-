import {test, expect} from '@playwright/test';
import{loginPage} from '../tests/pages/loginPage';
import {ctsLogins} from '../tests/data/login.data';

test.describe('autenticação dData-drive de múltiplos perfis com POM', () => {
 for (const cenario of ctsLogins) {
    test(`login com perfil: ${cenarios.perfil}`, async ({loginPage}) => 