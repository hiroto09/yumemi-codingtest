import ChartTemplate from '@/const/ChartTemplate';
import { PopulationList } from '@/store';
import { useAtomValue } from 'jotai';
import styles from './index.module.scss';

type Props = {
    selectedData: number;
};

type DataSets = {
    label: string;
    data: number[];
    backgroundColor: string;
    borderColor: string;
};

export default function PopulationContent({ selectedData }: Props) {
    const populationList = useAtomValue(PopulationList);
    const checkedData = populationList.filter((item) => item.checked);

    if (checkedData.length === 0) {
        return <div className={styles.chartArea}>都道府県を選択してください</div>;
    }

    const label: number[] = [
        ...new Set(checkedData.flatMap(({ data }) => data[0].data.map((d) => d.year))),
    ];

    const datasets: DataSets[] = checkedData.map((item) => ({
        label: item.prefName,
        data: item.data[selectedData].data.map((d) => d.value),
        backgroundColor: item.color,
        borderColor: item.color,
    }));

    return <ChartTemplate labels={label} datasets={datasets} />;
}
