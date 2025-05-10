'use client';
import Chart from './Chart';
import { useState } from 'react';

export default function ChartContent() {
    const [selectedData, setSelectedData] = useState(0);

    return (
        <>
            <select value={selectedData} onChange={(e) => setSelectedData(Number(e.target.value))}>
                <option value="0">総人口</option>
                <option value="1">年少人口</option>
                <option value="2">生産年齢人口</option>
                <option value="3">老年人口</option>
            </select>
            <Chart selectedData={selectedData} />
        </>
    );
}
