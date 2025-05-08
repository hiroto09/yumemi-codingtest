'use client';
import { useSetAtom, useAtomValue } from 'jotai';
import { selectPrefList } from '@/store';

type CheckBoxProps = {
    prefCode: number;
    prefName: string;
};

export default function CheckBox({ prefCode, prefName }: CheckBoxProps) {
    const setselectPrefList = useSetAtom(selectPrefList);

    const handleChangeCheckBox = (checked: boolean) => {
        setselectPrefList((prev = []) =>
            checked ? [...prev, prefCode] : prev.filter((code) => code !== prefCode)
        );
    };

    return <input type="checkbox" onChange={(e) => handleChangeCheckBox(e.target.checked)} />;
}
