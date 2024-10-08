import { Grid, GridCol } from "@mantine/core";
// import { getWeightsWithinDateRange } from "@/lib/api/weights";
import BirdInfoCard from "./birdInfoCard";
import WeightChart from "./weightChart";
import DietChart from "./dietChart";

export default function MainGrid({
  birdId,
  wvt,
}: {
  birdId: string;
  wvt: string;
}) {
  // const chartData = await getWeightsWithinDateRange(birdId, wvt);
  // console.log(chartData);

  return (
    <Grid align={"stretch"}>
      <GridCol span={4}>
        <BirdInfoCard birdId={birdId} />
      </GridCol>
      <GridCol span={8}>
        <WeightChart chartData={[]} wvt={wvt} />
      </GridCol>

      <GridCol span={3}>
        <DietChart />
      </GridCol>
      <GridCol span={3}>2</GridCol>
      <GridCol span={3}>3</GridCol>

      <GridCol span={3}>1</GridCol>
      <GridCol span={4}>2</GridCol>
      <GridCol span={4}>3</GridCol>

      <GridCol span={4}>1</GridCol>
      <GridCol span={4}>2</GridCol>
      <GridCol span={4}>3</GridCol>
    </Grid>
  );
}
