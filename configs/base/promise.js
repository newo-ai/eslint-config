import pluginPromise from 'eslint-plugin-promise'

export default [
    pluginPromise.configs['flat/recommended'],
    {
        rules: {
            "promise/catch-or-return": ["error", { "allowFinally": true }],
            "promise/no-multiple-resolved": "error",
            "promise/no-nesting": "warn",
            "promise/no-new-statics": "error",
            "promise/param-names": "error",
            "promise/prefer-await-to-callbacks": "error",
            "promise/spec-only": "error",
            "promise/valid-params": "error",
            "promise/always-return": ["error", { ignoreLastCallback: true }]
        }
    }
];