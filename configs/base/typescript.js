import tslint from 'typescript-eslint';


export default [
    ...tslint.configs.recommendedTypeChecked,
    ...tslint.configs.strictTypeChecked,
    ...tslint.configs.stylisticTypeChecked,
    {
        rules: {
            "@typescript-eslint/consistent-type-definitions": "off",
            "@typescript-eslint/consistent-type-exports": "error",
            "default-param-last": "error",
            "@typescript-eslint/method-signature-style": ["error", "property"],
            "@typescript-eslint/no-import-type-side-effects": "error",
            "@typescript-eslint/no-unnecessary-parameter-property-assignment": "error",
            "no-use-before-define": "off",
            "@typescript-eslint/no-use-before-define": "error",
            "@typescript-eslint/no-useless-empty-export": "error",
            "prefer-destructuring": "off",
            "@typescript-eslint/prefer-destructuring": "error",
            "@typescript-eslint/promise-function-async": "error",
            "@typescript-eslint/require-array-sort-compare": "error"
        }
    }
];