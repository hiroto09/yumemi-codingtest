import { describe, expect, test } from 'vitest';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Section from '.';

describe('初期レンダリング時のテスト', () => {
    test('Section', () => {
        render(<Section title="都道府県リスト" />);
        expect(screen.getByText('都道府県リスト')).toBeInTheDocument();
        render(<Section title="人口グラフ" />);
        expect(screen.getByText('人口グラフ')).toBeInTheDocument();
    });
});
