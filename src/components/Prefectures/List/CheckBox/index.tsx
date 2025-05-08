'use client';
import { useSetAtom, useAtomValue } from 'jotai';
import { selectPrefList,PopulationList } from '@/store';

type CheckBoxProps = {
    prefCode: number;
    prefName: string;
};

export default function CheckBox({ prefCode, prefName }: CheckBoxProps) {

    const setselectPrefList = useSetAtom(selectPrefList);
    const usePopulationList = useAtomValue(PopulationList);
    const setPopulationList = useSetAtom(PopulationList);
    const acquiredDataList = usePopulationList.map((data) => data.prefCode)

    const handleChangeCheckBox = (checked: boolean) => {

        setselectPrefList((prev = []) =>
            checked ? [...prev, prefCode] : prev.filter((code) => code !== prefCode)
        );

        if(!acquiredDataList.includes(prefCode)){

            const color = `#${Math.floor(Math.random() * 16777215).toString(16)}`;
            const popurationData = getPopulationData(prefCode);

            setPopulationList((prev) => [
                ...prev,
                {
                    prefCode: prefCode,
                    prefName: prefName,
                    color: color,
                    data: popurationData,
                },
            ]);
        }
    };

    return <input type="checkbox" onChange={(e) => handleChangeCheckBox(e.target.checked)} />;
}
