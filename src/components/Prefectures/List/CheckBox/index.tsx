'use client';
import { useSetAtom, useAtomValue } from 'jotai';
import { selectPrefList, PopulationList } from '@/store';
import getPopulations from '@/api/populations/route';

type CheckBoxProps = {
    prefCode: number;
    prefName: string;
};

export default function CheckBox({ prefCode, prefName }: CheckBoxProps) {
    const setSelectPrefList = useSetAtom(selectPrefList);
    const populationList = useAtomValue(PopulationList);
    const setPopulationList = useSetAtom(PopulationList);

    const handleChangeCheckBox = async (checked: boolean) => {
        setSelectPrefList((prev) => {
            const list = prev ?? [];
            return checked ? [...list, prefCode] : list.filter((code) => code !== prefCode);
        });

        if (checked && !populationList.some((data) => data.prefCode === prefCode)) {
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

    return (
        <input
            type="checkbox"
            onChange={(e) => handleChangeCheckBox(e.target.checked)}
            defaultChecked={populationList.some((data) => data.prefCode === prefCode)}
        />
    );
}
