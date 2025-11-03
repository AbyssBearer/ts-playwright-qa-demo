import { type Locator, type Page } from "@playwright/test";

export class HomePage {
  readonly page: Page;
  readonly pageHeading: Locator;
  readonly jsDelaysButton: Locator;
  readonly spinnersButton: Locator;

  constructor(page: Page) {
    this.page = page;
    this.pageHeading = page.getByText("Welcome to your software automation practice website!");
    this.jsDelaysButton = page.getByRole("link", { name: "JavaScript Delays" });
    this.spinnersButton = page.getByRole("link", { name: "Spinners" });
  }

  async goto(): Promise<void> {
    await this.page.goto("/");
  }
}
