// eslint.config.mjs
import { dirname } from "path";
import { fileURLToPath } from "url";
import { FlatCompat } from "@eslint/eslintrc";
import js from "@eslint/js";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const eslintConfig = [
  js.configs.recommended, // ESLint recommended rules
  ...compat.extends("next/core-web-vitals", "next/typescript"), // Next.js rules
  ...compat.plugins("@typescript-eslint", "react", "react-hooks", "jsx-a11y"), // Add plugins
  {
    rules: {
      // React rules
      "react/prop-types": "off", // Disable prop-types (not needed with TypeScript)
      "react/react-in-jsx-scope": "off", // Disable React import (Next.js handles this)
      "react-hooks/rules-of-hooks": "error", // Enforce React Hooks rules
      "react-hooks/exhaustive-deps": "warn", // Warn about missing dependencies in useEffect

      // TypeScript rules
      "@typescript-eslint/explicit-module-boundary-types": "off", // Disable explicit return types
      "@typescript-eslint/no-unused-vars": [
        "warn",
        { argsIgnorePattern: "^_" },
      ], // Warn about unused variables

      // Accessibility rules
      "jsx-a11y/alt-text": "warn", // Warn about missing alt text on images
      "jsx-a11y/anchor-is-valid": "warn", // Warn about invalid anchor tags
    },
  },
  {
    files: ["**/*.ts", "**/*.tsx"], // Apply TypeScript rules only to TS files
    languageOptions: {
      parser: "@typescript-eslint/parser", // Use TypeScript parser
    },
  },
];

export default eslintConfig;
