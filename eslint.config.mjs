// @ts-check

import eslint from '@eslint/js';
import tseslint from 'typescript-eslint';
import prettierConfig from 'eslint-config-prettier';

export default tseslint.config(
    {
        ignores: [
            'dist/**',
            'node_modules/**',
            '.history/**',
            'build/**',
            'coverage/**'
        ]
    },
    eslint.configs.recommended,
    // NOTE: enabling strict and stylistic rules will override recommended rules
    // https://typescript-eslint.io/getting-started/#additional-configs
    // tseslint.configs.recommended,
    tseslint.configs.strict,
    tseslint.configs.stylistic,
    // NOTE: Disable formatting rules to avoid conflicts
    // https://typescript-eslint.io/users/what-about-formatting
    prettierConfig,
);