
# eslint-config-newo

A shareable ESLint flat configuration used internally at Newo, now available for public use. It provides opinionated linting rules for JavaScript, TypeScript, and React projects.

## Installation

```bash
npm install --save-dev eslint-config-newo eslint typescript-eslint 
```

## Available Configurations

This package provides two ESLint configurations:

- Base Configuration: Supports JavaScript and TypeScript.

- React Configuration: Rules for React projects.

## Usage

In your `eslint.config.js` file:

```js
import tslint from 'typescript-eslint';
import newoEslintConfig from 'eslint-config-newo';

export default tslint.config(
    ...newoEslintConfig.configs.base,
    ...newoEslintConfig.configs.react,
    {
        files: ['**/*.{js,mjs,cjs,jsx,mjsx,ts,tsx,mtsx}'],
        languageOptions: {
            parserOptions: {
                project: "./tsconfig.json",
                ecmaFeatures: {
                    jsx: true,
                }
            }
        },
        settings: {
            'import-x/resolver': {
                typescript: {
                    project: "./tsconfig.json",
                }
            }
        }
    }
);

```

## Included Plugins & Rules

### Dependencies

This configuration includes the following ESLint plugins:

- [eslint-plugin-array-func](https://github.com/freaktechnik/eslint-plugin-array-func)
- [eslint-plugin-import-x](https://github.com/un-ts/eslint-plugin-import-x)
- [eslint-plugin-promise](https://github.com/eslint-community/eslint-plugin-promise)
- [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react)
- [eslint-plugin-regexp](https://www.npmjs.com/package/eslint-plugin-regexp)
- [eslint-plugin-sonar](https://github.com/un-ts/eslint-plugin-sonar)
- [eslint-plugin-sonarjs](https://github.com/SonarSource/SonarJS)
- [eslint-plugin-unicorn](https://github.com/sindresorhus/eslint-plugin-unicorn)
- [typescript-eslint](https://typescript-eslint.io/)



## License

MIT


