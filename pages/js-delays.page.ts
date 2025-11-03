import { type Locator, type Page } from "@playwright/test";

export class JavaScriptDelaysPage {
  readonly page: Page;
  readonly pageHeading: Locator;
  readonly startButton: Locator;
  readonly successText: Locator;

  constructor(page: Page) {
    this.page = page;
    this.pageHeading = page.getByRole("heading", { name: "JavaScript Delays" });
    this.startButton = page.getByRole("button", { name: "Start" });
    this.successText = page.getByText("Liftoff!", { exact: true });
  }
}
