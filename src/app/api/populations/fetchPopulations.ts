import { PopulationResponse } from '@/types/populations';

export async function fetchPopulationData(prefCode: number) {
    const X_API_KEY = process.env.X_API_KEY;
    const API_URL = process.env.API_URL;

    if (!X_API_KEY) throw new Error('X_API_KEY が未設定');
    if (!API_URL) throw new Error('API_URL が未設定');

    const url = new URL('/api/v1/population/composition/perYear', API_URL);
    url.searchParams.append('prefCode', prefCode.toString());

    const response = await fetch(url.toString(), {
        headers: { 'X-API-KEY': X_API_KEY },
        cache: 'no-store',
    });

    if (!response.ok) throw new Error(`HTTPエラー: ${response.status}`);

    const json: PopulationResponse = await response.json();
    return json.result.data;
}
