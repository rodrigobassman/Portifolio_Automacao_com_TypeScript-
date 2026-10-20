import {Page, Locator} from '@playwright/test';
//Receber o page no construtor
//Encapsula os seletores/UI
//Metodos claros Ex: login(),fillEmail()...
//Melhor  pq se um seletor mudar no HTMl, so atualizamos em um unico local no page object

export class LoginPage {
    //Locators
    readonly emailInput: Locator;
    readonly passwordInput: Locator;
    readonly loginButton: Locator;
    readonly errorMessage: Locator;
    readonly statusMessage: Locator;
    readonly credentialsBox: Locator;

    constructor(private page: Page) {
        this.emailInput = page.locator('#email');
        this.passwordInput = page.locator('#password');
        this.loginButton = page.locator('#loginButton');
        this.errorMessage = page.locator('.error-message');
        this.statusMessage = page.locator('.status-message');
        this.credentialsBox = page.locator('.credentials-box');
    }

    
}