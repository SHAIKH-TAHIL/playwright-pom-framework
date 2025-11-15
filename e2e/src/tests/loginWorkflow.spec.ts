import { test, expect } from '@playwright/test';
import { URLs } from '../constants/urlConstants';
import { LoginActions } from '../actions/loginActions';
import setUpTestdata from '../config/config';
import { LoginTestSuite } from '../fixtures/loginTest/interface';

test.describe("Regression test", () => {

  let loginActions: LoginActions;
  const suite = 'loginTest';
  const testData: LoginTestSuite = setUpTestdata(suite);
  const validCreds = testData.validCreds;
  const invalidCreds = testData.invalidCreds;

  test.beforeEach(async ({ page }) => {
    await page.goto(URLs.BASE_URL);
  });

  test('has title', async ({ page }) => {
    loginActions = new LoginActions(page);

    await test.step("Login with Invalid Credentials", async () => {
      await loginActions.enterUsername(invalidCreds.username);
      await loginActions.enterpassword(invalidCreds.password);
      await loginActions.clickLoginButton();
    });

    await test.step("Login with Valid Credentials", async () => {
      await loginActions.enterUsername(validCreds.username);
      await loginActions.enterpassword(validCreds.password);
      await loginActions.clickLoginButton();
      await expect(page).toHaveURL(URLs.INVENTORY_URL);
    });
  });
});

