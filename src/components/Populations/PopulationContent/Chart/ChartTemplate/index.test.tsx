import { render, screen } from '@testing-library/react';
import ChartTemplate from '.';
import { vi } from 'vitest';

vi.mock('react-chartjs-2', () => ({
    Line: vi.fn(() => <div data-testid="line-chart" />),
}));

import { Line } from 'react-chartjs-2';

describe('ChartTemplate', () => {
    test('Lineチャートが正しく描画される', () => {
        const labels = [2000, 2005, 2010];
        const datasets = [
            {
                label: 'Test Data',
                data: [10, 20, 30],
                borderColor: 'red',
                backgroundColor: 'red',
            },
        ];
        const options = {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                legend: {
                    position: 'top',
                },
            },
        };
        const data = {
            labels: labels,
            datasets: datasets,
        };

        render(<ChartTemplate labels={labels} datasets={datasets} />);

        expect(screen.getByTestId('line-chart')).toBeInTheDocument();

        expect(Line).toHaveBeenCalledWith(
            {
                data,
                options,
            },
            undefined
        );
    });
});
