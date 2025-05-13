'use client';
import { useSetAtom, useAtomValue } from 'jotai';
import { PopulationList } from '@/store';
import GET from '@/app/api/populations/route'; // APIから人口データを取得する関数

type CheckBoxProps = {
    prefCode: number;
    prefName: string;
};

export default function CheckBox({ prefCode, prefName }: CheckBoxProps) {
    const populationList = useAtomValue(PopulationList);
    const setPopulationList = useSetAtom(PopulationList);

    const handleChangeCheckBox = async (checked: boolean) => {
        if (checked) {
            const existing = populationList.find((data) => data.prefCode === prefCode);

            if (existing) {
                setPopulationList((prev) =>
                    prev.map((data) =>
                        data.prefCode === prefCode ? { ...data, checked: true } : data
                    )
                );
            } else {
                const color = `#${Math.floor(Math.random() * 16777215).toString(16)}`;
                const populationData = await GET(prefCode);
                setPopulationList((prev) => [
                    ...prev,
                    {
                        prefCode,
                        prefName,
                        color,
                        data: populationData,
                        checked: true,
                    },
                ]);
            }
        } else {
            setPopulationList((prev) =>
                prev.map((data) =>
                    data.prefCode === prefCode ? { ...data, checked: false } : data
                )
            );
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
