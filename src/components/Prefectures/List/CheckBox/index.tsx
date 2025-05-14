'use client';
import { useSetAtom, useAtomValue } from 'jotai';
import { PopulationList } from '@/store';
import { ResultData } from '@/types/populations';

type CheckBoxProps = {
    prefCode: number;
    prefName: string;
};

export default function CheckBox({ prefCode, prefName }: CheckBoxProps) {
    const populationList = useAtomValue(PopulationList);
    const setPopulationList = useSetAtom(PopulationList);
    const API_URL = process.env.NEXT_PUBLIC_API_URL;

    if (!API_URL) throw new Error('環境変数 API_URL が設定されていません');

    const url = new URL('/api/populations', API_URL);
    url.searchParams.append('prefCode', prefCode.toString());

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
                const response = await fetch(url.toString());
                const populationData: ResultData[] = await response.json();

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
