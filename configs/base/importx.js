import eslintPluginImportX from 'eslint-plugin-import-x';



export default [
    eslintPluginImportX.flatConfigs.recommended,
    eslintPluginImportX.flatConfigs.typescript,
    {
        rules: {
            "import-x/export": "error",
            "import-x/no-empty-named-blocks": "error",
            "import-x/no-extraneous-dependencies": "error",
            "import-x/no-mutable-exports": "error",
            "import-x/no-named-as-default": "off",
            "import-x/no-rename-default": "off",
            "import-x/no-unused-modules": "error",
            "import-x/no-amd": "error",
            "import-x/no-commonjs": "error",
            "import-x/no-import-module-exports": "error",
            "import-x/no-cycle": "error",
            "import-x/consistent-type-specifier-style": "error",
            "import-x/first": "error",
            "import-x/newline-after-import": "error",
            "import-x/order": ["error", {
                groups: ["builtin", ["external", "internal"], "parent", "sibling", "index"],
            }],
            "import-x/no-unresolved": "off"
        }
    }
];