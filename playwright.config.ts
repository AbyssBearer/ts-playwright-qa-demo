import { defineConfig, devices } from "@playwright/test";
/* Read environment variables from file. See https://github.com/motdotla/dotenv */
import dotenv from "dotenv";
import path from "path";

dotenv.config({ path: path.resolve(__dirname, `configs/.env.${process.env.ENVIRONMENT}`) });
const VIEWPORT = { width: 1280, height: 800 };

/* See https://playwright.dev/docs/test-configuration */
export default defineConfig({
  testDir: "./tests",
  /* Run tests in files in parallel */
  fullyParallel: true,
  /* Fail the build on CI if you accidentally left test.only in the source code */
  forbidOnly: !!process.env.CI,
  /* Retry on CI only */
  retries: process.env.CI ? 2 : 0,
  /* Opt out of parallel tests on CI */
  workers: process.env.CI ? 1 : undefined,
  /* Reporter to use. See https://playwright.dev/docs/test-reporters */
  reporter: "html",
  /* Shared settings for all the projects below. See https://playwright.dev/docs/api/class-testoptions */
  use: {
    /* Base URL to use in actions like `await page.goto('/')`. */
    baseURL: process.env.BASE_URL,

    /* Capture screenshot after each test failure */
    screenshot: {
      mode: "only-on-failure",
      fullPage: true,
    },

    /* Record trace only when retrying a test for the first time */
    trace: "on-first-retry",

    /* Record video only when retrying a test for the first time */
    video: {
      mode: "on-first-retry",
      size: VIEWPORT,
    },
  },

  /* Configure projects for major browsers */
  projects: [
    {
      name: "chromium",
      use: {
        ...devices["Desktop Chrome"],
        viewport: VIEWPORT,
      },
    },

    {
      name: "firefox",
      use: {
        ...devices["Desktop Firefox"],
        viewport: VIEWPORT,
      },
    },

    {
      name: "webkit",
      use: {
        ...devices["Desktop Safari"],
        viewport: VIEWPORT,
      },
    },
  ],
});
