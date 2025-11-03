import { JavaScriptDelaysPage } from "../pages/js-delays.page";
import { SpinnerPage } from "../pages/spinner.page";
import { test as base } from "./base.fixture";

type WaitFixture = {
  jsDelaysPage: JavaScriptDelaysPage;
  spinnerPage: SpinnerPage;
};

export const test = base.extend<WaitFixture>({
  jsDelaysPage: async ({ page }, use) => {
    await use(new JavaScriptDelaysPage(page));
  },

  spinnerPage: async ({ page }, use) => {
    await use(new SpinnerPage(page));
  },
});

export { expect } from "@playwright/test";
