import ChartTemplate from '@/const/ChartTemplate';
import { PopulationList } from '@/store';
import { useAtomValue } from 'jotai';
import styles from './index.module.scss';

type Props = {
    selectedData: number;
};

export default function PopulationContent({ selectedData }: Props) {
    const populationList = useAtomValue(PopulationList);
    const filteredData = populationList.filter((item) => item.checked);

    if (filteredData.length === 0) {
        return <div className={styles.chartArea}>都道府県を選択してください</div>;
    }

    if (populationList.length === 0) {
        return <div className={styles.chartArea}>データ取得中...</div>;
    }

    const label: number[] = [
        ...new Set(filteredData.flatMap(({ data }) => data[0].data.map((d) => d.year))),
    ];

    const datasets = filteredData.map((item) => ({
        label: item.prefName,
        data: item.data[selectedData].data.map((d) => d.value),
        backgroundColor: item.color,
        borderColor: item.color,
        borderWidth: 1,
    }));

    return <ChartTemplate label={label} datasets={datasets} />;
}
