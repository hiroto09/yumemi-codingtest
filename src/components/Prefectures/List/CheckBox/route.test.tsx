import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import { describe, vi, expect, beforeEach } from 'vitest';
import { Provider } from 'jotai';
import CheckBox from '.';
import * as api from '@/app/api/populations/route';
import { PopulationList } from '@/store';
import { createStore } from 'jotai';

const createTestStore = () => {
    const store = createStore();
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
        vi.spyOn(api, 'GET').mockResolvedValue(fakePopulationData);
    });

    test('チェックイベントのテスト', async () => {
        const store = createTestStore();

        render(
            <Provider store={store}>
                <CheckBox prefCode={prefCode} prefName={prefName} />
            </Provider>
        );

        const checkbox = screen.getByRole('checkbox');
        fireEvent.click(checkbox);

        await waitFor(() => {
            const populationData = store.get(PopulationList);
            expect(populationData.length).toBe(1);
            expect(populationData[0].prefCode).toBe(prefCode);
            expect(populationData[0].data).toEqual(fakePopulationData);
            expect(populationData[0].checked).toBe(true);
        });
    });

    test('チェックボックスをオフにする時の処理', async () => {
        const store = createTestStore();

        store.set(PopulationList, [
            {
                prefCode,
                prefName,
                color: '#ff0000',
                data: fakePopulationData,
                checked: false,
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
            const populationData = store.get(PopulationList);
            expect(populationData[0].checked).toBe(false);
        });
    });
});
