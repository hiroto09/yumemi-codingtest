/// <reference types="vitest/globals" />
import { describe, test, expect, vi, beforeEach, Mock } from 'vitest';
import { render, screen } from '@testing-library/react';
import PopulationContent from '.';
import { useAtomValue } from 'jotai';

vi.mock('@/const/ChartTemplate', () => ({
    default: () => <div data-testid="chart-template">ChartTemplate</div>,
}));

vi.mock('jotai', async () => {
    const actual = await vi.importActual<typeof import('jotai')>('jotai');
    return {
        ...actual,
        useAtomValue: vi.fn(),
    };
});

const mockedUseAtomValue = useAtomValue as unknown as Mock;

describe('PopulationContent', () => {
    beforeEach(() => {
        vi.clearAllMocks();
    });

    test('選択された都道府県が無い場合にメッセージを表示する', () => {
        mockedUseAtomValue.mockReturnValue([]);
        render(<PopulationContent selectedData={0} />);
        expect(screen.getByText('都道府県を選択してください')).toBeInTheDocument();
    });

    test('全ての都道府県のcheckedがfalseでもメッセージを表示する', () => {
        mockedUseAtomValue.mockReturnValue([
            { prefName: '東京都', checked: false, color: 'red', data: [] },
            { prefName: '大阪府', checked: false, color: 'blue', data: [] },
        ]);
        render(<PopulationContent selectedData={0} />);
        expect(screen.getByText('都道府県を選択してください')).toBeInTheDocument();
    });
});
