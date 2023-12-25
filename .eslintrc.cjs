module.exports = {
  extends: ["plugin:astro/all", "plugin:astro/jsx-a11y-recommended"],
  overrides: [
    {
      files: ["*.astro"],
      parser: "astro-eslint-parser",
      processor: "astro/client-side-ts",
      parserOptions: {
        parser: "@typescript-eslint/parser",
        extraFileExtensions: [".astro"],
        sourceType: "module",
      },
    },
  ],
};
