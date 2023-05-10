module.exports = {
  root: true,
  env: {
    node: true,
  },
  extends: [
    "plugin:vue/essential",
    "eslint:recommended",
    "plugin:vue/recommended",
  ],
  parserOptions: {
    parser: "@babel/eslint-parser",
  },
  plugins: ["vue"],
  rules: {
    indent: ["error", 2],
    "no-console": process.env.NODE_ENV === "production" ? "warn" : "off",
    "no-debugger": process.env.NODE_ENV === "production" ? "warn" : "off",
  },
};
