import { describe, expect, vi, beforeEach } from 'vitest';
import { fetchPrefectures } from './fetchPrefectures';
import type { PrefectureResponse } from '@/types/prefectures';

const mockResponse: PrefectureResponse = {
    message: '',
    result: [
        { prefCode: 1, prefName: '北海道' },
        { prefCode: 13, prefName: '東京都' },
    ],
};

describe('prefectures_GET', () => {
    beforeEach(() => {
        vi.resetAllMocks();
        process.env.X_API_KEY = 'dummy-api-key';
        process.env.API_URL = 'https://example.com';
    });

    test('正常に都道府県一覧を返す', async () => {
        global.fetch = vi.fn().mockResolvedValue({
            ok: true,
            json: () => Promise.resolve(mockResponse),
        });

        const data = await fetchPrefectures();

        expect(data).toEqual(mockResponse.result);
        expect(fetch).toHaveBeenCalledWith('https://example.com/api/v1/prefectures', {
            cache: 'no-store',
            headers: { 'X-API-KEY': 'dummy-api-key' },
        });
    });

    test('fetch が失敗した場合にエラーを投げる', async () => {
        global.fetch = vi.fn().mockResolvedValue({
            ok: false,
            status: 500,
            statusText: 'Internal Server Error',
        });

        await expect(fetchPrefectures()).rejects.toThrow('HTTPエラー: 500 Internal Server Error');
    });

    test('X_API_KEY が未設定の場合にエラーを投げる', async () => {
        delete process.env.X_API_KEY;

        await expect(fetchPrefectures()).rejects.toThrow('環境変数 X_API_KEY が設定されていません');
    });

    test('API_URL が未設定の場合にエラーを投げる', async () => {
        delete process.env.API_URL;

        await expect(fetchPrefectures()).rejects.toThrow('環境変数 API_URL が設定されていません');
    });
});
