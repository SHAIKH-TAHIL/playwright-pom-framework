import { Page } from "playwright-core";
import { LoginPage } from "../pages/loginPage";
import { expect } from "playwright/test";

export class LoginActions {
    private page: Page;
    private loginPage: LoginPage;

    constructor (page: Page) {
        this.page = page;
        this.loginPage = new LoginPage(page);
    }

    /**
     * @description Enters the username in the Username input field
     * @param username Username to be entered
     */
    async enterUsername (username: string) {
        await expect(this.loginPage.getUsername()).toBeVisible();
        await this.loginPage.getUsername().fill(username);
    }

    /**
     * @description Enters the password in the password input field
     * @param password Username to be entered
     */
    async enterpassword (password: string) {
        await expect(this.loginPage.getPassword()).toBeVisible();
        await this.loginPage.getPassword().fill(password);
    }

    /**
     * @description Clicks the login button
     */
    async clickLoginButton () {
        await expect(this.loginPage.getLoginBtn()).toBeVisible();
        await this.loginPage.getLoginBtn().click();
    }

    /**
     * @description This function logs in to the site with the params provided below
     * @param username username to be entered
     * @param password password to be entered
     */
    async login (username: string, password: string) {
        await this.enterUsername(username);
        await this.enterpassword(password);
        await this.clickLoginButton();
    }

}