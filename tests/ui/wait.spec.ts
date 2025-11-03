import { test, expect } from "../../fixtures/wait.fixture";

test.describe("Wait Operations", () => {
  test("should wait for Liftoff text after clicking Start button", async ({ homePage, jsDelaysPage }) => {
    const successMessageTimeout = 15000;

    await expect(homePage.pageHeading, "Home page should be loaded").toBeVisible();
    await homePage.jsDelaysButton.click();
    await expect(jsDelaysPage.pageHeading, "JavaScript Delays page should be loaded").toBeVisible();
    await expect(jsDelaysPage.successText, "Success message should not appear before starting countdown").toBeHidden();
    await jsDelaysPage.startButton.click();
    await expect(jsDelaysPage.successText, "User should see success confirmation after countdown completes").toBeVisible({ timeout: successMessageTimeout });
  });

  test("should wait for spinner to disappear on page load", async ({ homePage, spinnerPage }) => {
    await expect(homePage.pageHeading, "Home page should be loaded").toBeVisible();
    await homePage.spinnersButton.click();
    await expect(spinnerPage.pageHeading, "Spinners page should be loaded").toBeVisible();
    await expect(spinnerPage.loadingSpinner, "Loading spinner should disappear after page finishes loading").toBeHidden();
  });
});
