import { describe, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import PrefList from '.';

describe('初期レンダリング時のテスト', () => {
    test('都道府県情報の表示', async () => {
        const result = await PrefList();
        render(result);
        expect(screen.getByText('北海道')).toBeInTheDocument();
        expect(screen.getByText('大阪府')).toBeInTheDocument();
        expect(screen.getByText('東京都')).toBeInTheDocument();
        expect(screen.getByText('沖縄県')).toBeInTheDocument();
    });
});
