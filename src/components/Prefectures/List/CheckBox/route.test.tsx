import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import { describe, vi, expect, beforeEach } from 'vitest';
import { Provider } from 'jotai';
import CheckBox from '.';
import * as api from '@/api/populations/route';
import { SelectPrefList, PopulationList } from '@/store';
import { createStore } from 'jotai';

const createTestStore = () => {
    const store = createStore();
    store.set(SelectPrefList, []);
    store.set(PopulationList, []);
    return store;
};

describe('CheckBoxコンポーネントのテスト', () => {
    const prefCode = 1;
    const prefName = '北海道';
    const fakePopulationData = [
        { label: '年少人口', data: [{ year: 2000, value: 100, rate: 10 }] },
    ];

    beforeEach(() => {
        vi.spyOn(api, 'default').mockResolvedValue(fakePopulationData);
    });

    test('チェックイベントのテスト', async () => {
        const store = createTestStore();

        render(
            <Provider store={store}>
                <CheckBox prefCode={prefCode} prefName={prefName} />
            </Provider>
        );

        const checkbox = screen.getByRole('checkbox');
        expect(checkbox).toBeInTheDocument();

        fireEvent.click(checkbox);

        await waitFor(() => {
            const populationData = store.get(PopulationList);
            expect(populationData.length).toBe(1);
            expect(populationData[0].prefCode).toBe(prefCode);
            expect(populationData[0].data).toEqual(fakePopulationData);
        });

        const selected = store.get(SelectPrefList);
        expect(selected).toContain(prefCode);
    });

    test('チェックボックスをオフにする時の処理', async () => {
        const store = createTestStore();

        store.set(SelectPrefList, [prefCode]);
        store.set(PopulationList, [
            {
                prefCode,
                prefName,
                color: '#ff0000',
                data: fakePopulationData,
            },
        ]);

        render(
            <Provider store={store}>
                <CheckBox prefCode={prefCode} prefName={prefName} />
            </Provider>
        );

        const checkbox = screen.getByRole('checkbox');
        fireEvent.click(checkbox);

        await waitFor(() => {
            const selected = store.get(SelectPrefList);
            expect(selected).not.toContain(prefCode);
        });
    });
});
