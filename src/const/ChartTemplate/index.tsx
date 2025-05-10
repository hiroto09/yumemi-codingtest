'use client';
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Tooltip,
    Legend,
} from 'chart.js';
import { Line } from 'react-chartjs-2';
import styles from './index.module.scss';

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Tooltip, Legend);

export const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
        legend: {
            position: 'top' as const,
        },
    },
};

export default function ChartTemplate() {
    const labels = ['January', 'February', 'March', 'April', 'May'];

    const datasets = [
        {
            label: 'Population',
            data: [0, 10, 5, 2, 20],
            borderColor: 'rgba(75, 192, 192, 1)',
            backgroundColor: 'rgba(75, 192, 192, 0.2)',
        },
    ];
    const data = {
        labels,
        datasets,
    };
    return (
        <div className={styles.chart}>
            <Line options={options} data={data} />
        </div>
    );
}
