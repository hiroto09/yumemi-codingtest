type PopulationData = {
    year: number;
    value: number;
    rate: number;
};

type ResultData = {
    label: string;
    data: PopulationData[];
};

export type PopulationResponse = {
    message: string;
    result: {
        boundaryYear: number;
        data: ResultData[];
    };
};

export type PopulationDataList = {
    prefCode: number;
    prefName: string;
    color: string;
    data: ResultData[];
};
