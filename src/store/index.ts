import { atom } from 'jotai';
import { PopulationDataList } from '@/types/populations';

export const PopulationList = atom<PopulationDataList[]>([]);
