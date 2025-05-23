import { defineConfig } from 'vitest/config';
import react from '@vitejs/plugin-react';
import tsconfigPaths from 'vite-tsconfig-paths';
import dotenv from 'dotenv';

dotenv.config({ path: '.env.local' });

export default defineConfig({
    plugins: [tsconfigPaths(), react()],
    test: {
        globals: true,
        environment: 'jsdom',
        setupFiles: './src/test/vitest-setup.ts',
        include: ['src/**/*.test.ts', 'src/**/*.test.tsx'],
    },
});
