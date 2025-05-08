type PopulationData = {
    year: number;
    value: number;
}

export type PopulationDataList = {
    prefCode: number;
    prefName: string;
    color: string;
    data: PopulationData[];
}