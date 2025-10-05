import js from "@eslint/js";
import globals from "globals";
import stylistic from "@stylistic/eslint-plugin";
import tseslint from "typescript-eslint";
import { defineConfig } from "eslint/config";

export default defineConfig([
  { files: ["**/*.{js,mjs,cjs,ts,mts,cts}"], plugins: { js }, extends: ["js/recommended"], languageOptions: { globals: { ...globals.browser, ...globals.node } } },
  tseslint.configs.recommendedTypeChecked,
  stylistic.configs.customize({
    indent: 2,
    quotes: "double",
    semi: true,
    jsx: false,
  }),
  {
    languageOptions: {
      parserOptions: {
        projectService: true,
        tsconfigRootDir: import.meta.dirname,
      },
    },
    rules: {
      "@typescript-eslint/no-floating-promises": "error",
      "@typescript-eslint/await-thenable": "error",
    },
  },
]);
