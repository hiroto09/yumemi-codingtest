import { describe, expect, vi, beforeEach, afterEach } from 'vitest';
import { fetchPopulationData } from './fetchPopulations';
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

const originalEnv = process.env;

describe('populations_GET', () => {
    beforeEach(() => {
        vi.resetAllMocks();
        process.env = { ...originalEnv };
        process.env.X_API_KEY = 'dummy-api-key';
        process.env.API_URL = 'https://example.com';
    });

    afterEach(() => {
        process.env = originalEnv;
    });

    test('正常に人口データを返す', async () => {
        global.fetch = vi.fn().mockResolvedValue({
            ok: true,
            json: () => Promise.resolve(mockResponse),
        } as Response);

        const data = await fetchPopulationData(1);

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
        } as Response);

        await expect(fetchPopulationData(1)).rejects.toThrow('HTTPエラー: 404');
    });

    test('APIキー未設定時にエラーを投げる', async () => {
        delete process.env.X_API_KEY;

        await expect(fetchPopulationData(1)).rejects.toThrow(
            'X_API_KEY が未設定'
        );
    });

    test('API URL未設定時にエラーを投げる', async () => {
        delete process.env.API_URL;

        await expect(fetchPopulationData(1)).rejects.toThrow(
            'API_URL が未設定'
        );
    });
});
