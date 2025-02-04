import sonarjs from "eslint-plugin-sonarjs";
import * as sonar from 'eslint-plugin-sonar'

export default [
    sonarjs.configs.recommended,
    ...sonar.configs.flatRecommended,
    {
        rules: {
            "sonarjs/todo-tag": "warn",
            "sonarjs/new-cap": "off",
            "sonarjs/cognitive-complexity": "warn",
            // TODO: enable when ready
            "sonarjs/no-accessor-field-mismatch": "off",
            "sonar/no-accessor-field-mismatch": "off"
        }
    }
];