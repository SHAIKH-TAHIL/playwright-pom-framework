import { Page } from "playwright-core";

export class LoginPage {
    private page: Page;

    constructor (page: Page) {
        this.page = page;
    }

    // Defining locators
    private readonly USER_NAME_INPUT = "//input[@id='user-name']";
    private readonly PASSWORD_INPUT = "//input[@id='password']";
    private readonly LOGIN_BUTTON = "//input[@id='login-button']"

    // Get locator methods

    /**
     * @returns Locator for the Username input field
     */
    getUsername () {
        return this.page.locator(this.USER_NAME_INPUT);
    }

    /**
     * @returns Locator for the Password input field
     */
    getPassword () {
        return this.page.locator(this.PASSWORD_INPUT);
    }

    /**
     * @returns Locator for the Login button
     */
    getLoginBtn () {
        return this.page.locator(this.LOGIN_BUTTON);
    }

}