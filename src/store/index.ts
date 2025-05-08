import { atom } from 'jotai';

export const selectPrefList = atom<number[] | undefined>(undefined);
export const selectPref = atom<number | undefined>(undefined);
