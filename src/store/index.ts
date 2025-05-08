import { atom } from 'jotai';
import { PopulationDataList } from '@/types/populations';

export const selectPrefList = atom<number[] | undefined>(undefined);
export const PopulationList = atom<PopulationDataList[]>([]);