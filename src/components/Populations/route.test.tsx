import { describe, expect, test } from 'vitest';
import { render, screen } from '@testing-library/react';
import Populations from '.';

describe('Populations', () => {
    test('初期レンダリング時のテスト', () => {
        render(<Populations />);
        expect(screen.getByText('人口グラフ')).toBeInTheDocument();
    });
});
