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

type ChartTemplateProps = {
    labels: number[];
    datasets: {
        label: string;
        data: number[];
        borderColor: string;
        backgroundColor: string;
    }[];
};

export default function ChartTemplate({ labels, datasets }: ChartTemplateProps) {
    const options = {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
            legend: {
                position: 'top' as const,
            },
        },
    };

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
