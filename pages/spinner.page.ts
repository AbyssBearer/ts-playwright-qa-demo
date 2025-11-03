import { Page, Locator } from "@playwright/test";

export class SpinnerPage {
  readonly page: Page;
  readonly pageHeading: Locator;
  readonly loadingSpinner: Locator;

  constructor(page: Page) {
    this.page = page;
    this.pageHeading = page.getByRole("heading", { name: "Spinners" });
    this.loadingSpinner = page.locator("xpath=//div[@class='spinner']");
  }
}
