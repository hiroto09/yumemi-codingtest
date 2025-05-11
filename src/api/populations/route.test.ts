import { describe, expect, vi, beforeEach } from 'vitest';
import getPopulations from './route';
import type { PopulationResponse } from '@/types/populations';

const mockResponse: PopulationResponse = {
    message: '',
    result: {
        boundaryYear: 2020,
        data: [
            {
                label: '総人口',
                data: [
                    { year: 1980, value: 100000, rate: 10 },
                    { year: 2020, value: 120000, rate: 12 },
                ],
            },
        ],
    },
};

describe('getPopulations', () => {
    beforeEach(() => {
        vi.resetAllMocks();
        process.env.NEXT_PUBLIC_X_API_KEY = 'dummy-api-key';
        process.env.NEXT_PUBLIC_API_URL = 'https://example.com';
    });

    test('正常に人口データを返す', async () => {
        global.fetch = vi.fn().mockResolvedValue({
            ok: true,
            json: () => Promise.resolve(mockResponse),
        });

        const data = await getPopulations(1);

        expect(data).toEqual(mockResponse.result.data);
        expect(fetch).toHaveBeenCalledWith(
            'https://example.com/api/v1/population/composition/perYear?prefCode=1',
            {
                cache: 'no-store',
                headers: { 'X-API-KEY': 'dummy-api-key' },
            }
        );
    });

    test('fetch失敗時にエラーを投げる', async () => {
        global.fetch = vi.fn().mockResolvedValue({
            ok: false,
            status: 404,
            statusText: 'Not Found',
        });

        await expect(getPopulations(1)).rejects.toThrow('HTTPエラー: 404 Not Found');
    });

    test('環境変数が未設定の場合にエラーを投げる', async () => {
        delete process.env.NEXT_PUBLIC_X_API_KEY;
        await expect(getPopulations(1)).rejects.toThrow('環境変数 X_API_KEY が設定されていません');
    });
});
