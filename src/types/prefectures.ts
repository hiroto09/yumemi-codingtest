export type Prefectures = {
    prefCode: number;
    prefName: string;
}[];

export type PrefectureResponse = {
    message: string;
    result: Prefectures[];
};
