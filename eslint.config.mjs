import nextCoreWebVitals from "eslint-config-next/core-web-vitals";

const eslintConfig = [
  {
    ignores: [".next/**", "out/**", "build/**"],
  },
  ...nextCoreWebVitals,
  {
    rules: {
      "react/no-unescaped-entities": "off",
      "react-hooks/exhaustive-deps": "warn",
      // Present in eslint-config-next 16.4; the previous config did not flag this pattern.
      "react-hooks/set-state-in-effect": "off",
      "@next/next/no-img-element": "off",
      "react/jsx-key": "warn",
      "react/jsx-no-duplicate-props": "off",
      "@next/next/no-sync-scripts": "off",
      "@next/next/no-html-link-for-pages": "off",
      "@next/next/no-css-tags": "off",
      "@next/next/no-head-element": "off",
      "react/no-unknown-property": "off",
    },
  },
];

export default eslintConfig;
