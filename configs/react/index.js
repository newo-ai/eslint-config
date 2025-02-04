import react from 'eslint-plugin-react';
import reactHooks from 'eslint-plugin-react-hooks';
import reactRefresh from 'eslint-plugin-react-refresh';
import { fixupPluginRules } from "@eslint/compat";

export default [
    react.configs.flat.recommended,
    {
        plugins: {
            'react-hooks': fixupPluginRules(reactHooks),
            'react-refresh': reactRefresh,
            react
        },
        rules: {
            ...reactHooks.configs.recommended.rules,
            'react-refresh/only-export-components': [
                'warn',
                { allowConstantExport: true },
            ],
            // react
            "react/boolean-prop-naming": ["error", { "rule": "^(is|has|with|can)[A-Z]([A-Za-z0-9]?)+" }],
            "react/button-has-type": ["error", { "button": true, "submit": true, "reset": true }],
            "react/display-name": ["error", { "ignoreTranspilerName": false }],
            "react/forward-ref-uses-ref": "error",
            "react/function-component-definition": ["error", { "namedComponents": "arrow-function", "unnamedComponents": "arrow-function" }],
            "react/iframe-missing-sandbox": "warn",
            "react/jsx-boolean-value": ["error", "never"],
            "react/jsx-child-element-spacing": "off",
            "react/jsx-closing-bracket-location": ["error", "line-aligned"],
            "react/jsx-curly-brace-presence": ["error", { "props": "never", "children": "never" }],
            "react/jsx-curly-newline": ["error", { "multiline": "consistent", "singleline": "consistent" }],
            "react/jsx-curly-spacing": ["error", { "when": "never", "children": true }],
            "react/jsx-equals-spacing": ["error", "never"],
            "react/jsx-filename-extension": ["error", { "extensions": [".jsx", ".tsx"] }],
            "react/jsx-first-prop-new-line": ["error", "multiline"],
            "react/jsx-fragments": ["error", "syntax"],
            "react/jsx-handler-names": [
                "error",
                {
                    "eventHandlerPrefix": "handle",
                    "eventHandlerPropPrefix": "on"
                }
            ],
            "react/jsx-key": "error",
            "react/jsx-newline": ["error", { "prevent": true }],
            "react/jsx-no-bind": ["error", { "ignoreRefs": true, "allowArrowFunctions": true, "allowBind": false }],
            "react/jsx-no-constructed-context-values": "error",
            "react/jsx-no-duplicate-props": ["error", { "ignoreCase": true }],
            "react/jsx-no-leaked-render": "error",
            "react/jsx-no-script-url": "error",
            "react/jsx-no-target-blank": ["error", { "enforceDynamicLinks": "always" }],
            "react/jsx-no-undef": "error",
            "react/jsx-no-useless-fragment": "error",
            "react/jsx-one-expression-per-line": ["error", { "allow": "single-child" }],
            "react/jsx-pascal-case": ["error", { "allowAllCaps": true }],
            "react/jsx-props-no-multi-spaces": "error",
            "react/jsx-props-no-spreading": ["error", { "html": "enforce", "custom": "enforce", "explicitSpread": "ignore" }],
            "react/jsx-sort-props": ["error", { "callbacksLast": true, "shorthandFirst": true, "shorthandLast": false, "ignoreCase": true, "noSortAlphabetically": false }],
            "react/jsx-tag-spacing": ["error", { "closingSlash": "never", "beforeSelfClosing": "always", "afterOpening": "never", "beforeClosing": "never" }],
            "react/jsx-uses-react": "error",
            "react/jsx-wrap-multilines": ["error", { "declaration": "parens-new-line", "assignment": "parens-new-line", "return": "parens-new-line", "arrow": "parens-new-line", "condition": "parens-new-line", "logical": "parens-new-line", "prop": "parens-new-line" }],
            "react/no-access-state-in-setstate": "error",
            "react/no-array-index-key": "off", // covered by sonarjs/no-array-index-key
            "react/no-children-prop": "error",
            "react/no-danger": "off", // turn on if needed
            "react/no-danger-with-children": "error",
            "react/no-deprecated": "error",
            "react/no-direct-mutation-state": "error",
            "react/no-find-dom-node": "error",
            "react/no-is-mounted": "error",
            "react/no-multi-comp": "error",
            "react/no-object-type-as-default-prop": "error",
            "react/no-string-refs": "error",
            "react/no-this-in-sfc": "error",
            "react/no-unescaped-entities": "error",
            "react/no-unknown-property": "error",
            "react/no-unstable-nested-components": "error",
            "react/no-unused-state": "error",
            "react/style-prop-object": "error",
            "react/self-closing-comp": "error"
        }
    }
];