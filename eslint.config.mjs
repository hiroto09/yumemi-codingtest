import { dirname } from 'path';
import { fileURLToPath } from 'url';
import { FlatCompat } from '@eslint/eslintrc';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
    baseDirectory: __dirname,
});

const eslintConfig = [
    ...compat.extends('next/core-web-vitals', 'next/typescript'),
    {
        rules: {
            'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'warn',

            indent: ['error', 4],

            'react/jsx-indent': 'off',
            'react/jsx-indent-props': 'off',
        },
    },
];

export default eslintConfig;
