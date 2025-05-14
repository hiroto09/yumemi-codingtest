import { PrefectureResponse, Prefectures } from '@/types/prefectures';

export async function fetchPrefectures(): Promise<Prefectures> {
    const X_API_KEY: string | undefined = process.env.X_API_KEY;
    const API_URL: string | undefined = process.env.API_URL;

    if (!X_API_KEY) throw new Error('環境変数 X_API_KEY が設定されていません');
    if (!API_URL) throw new Error('環境変数 API_URL が設定されていません');

    const url = new URL('/api/v1/prefectures', API_URL);

    const response = await fetch(url.toString(), {
        cache: 'no-store',
        headers: { 'X-API-KEY': X_API_KEY },
    });

    if (!response.ok) {
        throw new Error(`HTTPエラー: ${response.status} ${response.statusText}`);
    }

    const responseJson: PrefectureResponse = await response.json();
    return responseJson.result;
}
