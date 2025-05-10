import ChartTemplate from "@/const/ChartTemplate";

type Props = {
    selectedData: number;
}

export default function PopulationContent({selectedData}: Props) {
    return (
        <>
            <ChartTemplate/>
        </>
    );
}