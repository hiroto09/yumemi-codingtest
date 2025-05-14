import { NextResponse } from 'next/server';
import { fetchPrefectures } from './fetchPrefectures';

export async function GET() {
    try {
        const data = await fetchPrefectures();
        return NextResponse.json(data);
    } catch (error) {
        return NextResponse.json({ error: (error as Error).message }, { status: 500 });
    }
}
