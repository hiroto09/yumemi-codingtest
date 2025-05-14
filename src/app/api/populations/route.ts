import { NextRequest } from 'next/server';
import { fetchPopulationData } from './fetchPopulations';

export async function GET(req: NextRequest) {
    const { searchParams } = new URL(req.url);
    const prefCode = searchParams.get('prefCode');

    if (!prefCode) {
        return new Response('prefCode が指定されていません', { status: 400 });
    }

    const data = await fetchPopulationData(Number(prefCode));
    return Response.json(data);
}
