import { describe, expect, test } from 'vitest';
import { render, screen } from '@testing-library/react';
import PopulationContent from '.';

describe('PopulationContent コンポーネントのテスト', () => {
    test('初期レンダリング時にセレクトボックスとオプションが表示される', () => {
        render(<PopulationContent />);
        
        const select = screen.getByRole('combobox');
        expect(select).toBeInTheDocument();

        expect(screen.getByRole('option', { name: '総人口' })).toBeInTheDocument();
        expect(screen.getByRole('option', { name: '年少人口' })).toBeInTheDocument();
        expect(screen.getByRole('option', { name: '生産年齢人口' })).toBeInTheDocument();
        expect(screen.getByRole('option', { name: '老年人口' })).toBeInTheDocument();
    });
});
