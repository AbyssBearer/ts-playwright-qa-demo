import { test as base } from "@playwright/test";
import { HomePage } from "../pages/home.page";

type BaseFixture = {
  homePage: HomePage;
};

export const test = base.extend<BaseFixture>({
  homePage: async ({ page }, use) => {
    const homePage = new HomePage(page);

    await homePage.goto();

    await use(homePage);
  },
});
