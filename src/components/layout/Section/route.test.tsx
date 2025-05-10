import { describe, expect, test } from 'vitest';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Section from '.';

describe('初期レンダリング時のテスト', () => {
    test('Section', () => {
        render(<Section title="都道府県" />);
        expect(screen.getByText('都道府県')).toBeInTheDocument();
        render(<Section title="都道府県別人口" />);
        expect(screen.getByText('都道府県別人口')).toBeInTheDocument();
    });
});
