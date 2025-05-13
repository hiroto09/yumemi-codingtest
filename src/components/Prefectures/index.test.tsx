import { describe, expect, test, vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import Prefecture from '.';

vi.mock('./List', () => ({
    __esModule: true,
    default: () => <div>Mocked PrefList</div>,
}));

describe('Prefecture', () => {
    test('初期レンダリング時のテスト', () => {
        render(<Prefecture />);
        expect(screen.getByText('都道府県リスト')).toBeInTheDocument();
        expect(screen.getByText('Mocked PrefList')).toBeInTheDocument();
    });
});
