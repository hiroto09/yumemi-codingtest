import { atom } from 'jotai';
import { PopulationDataList } from '@/types/populations';

export const SelectPrefList = atom<number[] | undefined>(undefined);
export const PopulationList = atom<PopulationDataList[]>([]);
