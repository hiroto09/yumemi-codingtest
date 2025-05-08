'use client';
import { useSetAtom, useAtomValue } from 'jotai';
import { selectPrefList, PopulationList } from '@/store';
import getPopulations from '@/api/populations/route';

type CheckBoxProps = {
    prefCode: number;
    prefName: string;
};

export default function CheckBox({ prefCode, prefName }: CheckBoxProps) {
    const setselectPrefList = useSetAtom(selectPrefList);
    const usePopulationList = useAtomValue(PopulationList);
    const setPopulationList = useSetAtom(PopulationList);
    const acquiredDataList = usePopulationList.map((data) => data.prefCode);

    const handleChangeCheckBox = async (checked: boolean) => {
        
        setselectPrefList((prev = []) =>
            checked ? [...prev, prefCode] : prev.filter((code) => code !== prefCode)
        );

        if (!acquiredDataList.includes(prefCode)) {
            const color = `#${Math.floor(Math.random() * 16777215).toString(16)}`;
            const populationData = await getPopulations(prefCode);
        
            setPopulationList((prev) => [
                ...prev,
                {
                    prefCode,
                    prefName,
                    color,
                    data: populationData,
                },
            ]);
        }
    };

    return <input type="checkbox" onChange={(e) => handleChangeCheckBox(e.target.checked)} />;
}
