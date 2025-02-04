import tslint from 'typescript-eslint';
import newoEslintConfig from './index.js';

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