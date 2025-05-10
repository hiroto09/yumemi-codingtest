import { PopulationResponse } from '@/types/populations';

export default async function getPopulations(prefCode: number) {
    const X_API_KEY: string | undefined = process.env.NEXT_PUBLIC_X_API_KEY;
    const API_URL: string | undefined = process.env.NEXT_PUBLIC_API_URL;

    if (!X_API_KEY) throw new Error('環境変数 X_API_KEY が設定されていません');
    if (!API_URL) throw new Error('環境変数 API_URL が設定されていません');

    const url = new URL('/api/v1/population/composition/perYear', API_URL);

    url.searchParams.append('prefCode', prefCode.toString());

    const response = await fetch(url.toString(), {
        cache: 'no-store',
        headers: { 'X-API-KEY': X_API_KEY },
    });

    if (!response.ok) {
        throw new Error(`HTTPエラー: ${response.status} ${response.statusText}`);
    }

    const responseJson: PopulationResponse = await response.json();

    const populationData = responseJson.result.data;

    return populationData;
}
