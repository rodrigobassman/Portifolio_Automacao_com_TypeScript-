import {Page, Locator, expect}from "@playwright/test"
export class LoginPage{
    readonly page: Page;
    readonly alert: Locator;

    constructor(page: Page){
        this.page = page;
        this.alert = page.getByRole('alert')
    }
    async acessarsite(){
        await this.page.goto('https://www.saucedemo.com/')
        await expect(this.page).toHaveTitle("Swag Labs")
    }
async login(email:string, password:string) {
    

}