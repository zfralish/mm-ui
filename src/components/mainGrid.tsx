import { Grid, GridCol } from "@mantine/core";
// import { getWeightsWithinDateRange } from "@/lib/api/weights";
import BirdInfoCard from "./birdInfoCard";
import WeightChart from "./weightChart";
import DietChart from "./dietChart";
import {DietBarChart} from "./dietBarChart.tsx";
import {TotalQuarryRadialChart} from "./totalQuarryRadialChart.tsx";
import {KillsAtWeightChart} from "./killsAtWeightChart.tsx";

export default function MainGrid({
  birdId,
}: {
  birdId: string;
}) {
  // const chartData = await getWeightsWithinDateRange(birdId, wvt);
  // console.log(chartData);

  return (
    <Grid>
      <GridCol span={4}>
        <BirdInfoCard birdId={birdId} />
      </GridCol>
      <GridCol span={8} >
        <WeightChart/>
      </GridCol>

      <GridCol span={3} >
        <DietChart />
      </GridCol>
      <GridCol span={6} >
        <DietBarChart/>
      </GridCol>

      <GridCol span={3}>
        <TotalQuarryRadialChart/>
      </GridCol>
      <GridCol span={4}>
        <DietBarChart/>
      </GridCol>
      <GridCol span={8}>
        <KillsAtWeightChart/>
      </GridCol>

    </Grid>
  );
}
