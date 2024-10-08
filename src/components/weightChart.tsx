import { addDays, differenceInDays, format, startOfDay } from "date-fns";
import { AreaChart, getFilteredChartTooltipPayload } from "@mantine/charts";
import { Button, Center, Flex, Paper, Stack, Text } from "@mantine/core";
import { GraphTimelineButtonGroup } from "./graphTimelineButtonGroup";
import { Weight } from "../api/schema/weights";

interface ChartTooltipProps {
  label: string;
  payload: Record<string, any>[] | undefined;
}

function ChartTooltip({ label, payload }: ChartTooltipProps) {
  if (!payload || payload.length === 0) return null;
  const newLabelDate =
    getFilteredChartTooltipPayload(payload)[0]?.payload?.w_time;
  const newLabel = format(new Date(newLabelDate), "MMMM d, yyyy h:mm a");
  return (
    <Paper px="md" py="sm" withBorder shadow="md" radius="md">
      <Text fw={500} mb={5}>
        {newLabel}
      </Text>
      {getFilteredChartTooltipPayload(payload).map((item: any) => (
        <Text key={item.name} c={item.color} fz="sm">
          {item.name}: {item.value}
        </Text>
      ))}
    </Paper>
  );
}

export default function WeightChart({
  chartData,
  wvt,
}: {
  chartData: Weight[];
  wvt: string;
}) {
  const formattedChartData = chartData.map((item) => ({
    ...item,
    formattedDate: format(new Date(item.w_time), "M/dd"),
  }));

  // Generate custom ticks aligned to midnight
  const generateCustomTicks = () => {
    const sortedDates = chartData
      .map((item) => new Date(item.w_time))
      .sort((a, b) => a.getTime() - b.getTime());
    const startDate = startOfDay(sortedDates[0]); // Align to start of day
    const endDate = startOfDay(sortedDates[sortedDates.length - 1]); // Align to start of day
    const daysBetween = differenceInDays(endDate, startDate);

    const tickCount = 12; // You can adjust this number
    const dayStep = Math.max(1, Math.floor(daysBetween / (tickCount - 1)));

    const customTicks = [];
    for (let i = 0; i <= daysBetween; i += dayStep) {
      const tickDate = addDays(startDate, i);
      customTicks.push(format(tickDate, "M/dd"));
    }

    return customTicks;
  };

  const customTicks = generateCustomTicks();

  return (
    <Paper p={10}>
      <Center>
        <Stack w={"100%"} h={"100%"} gap={0}>
          <Flex justify={"space-between"} pl={15} pr={15}>
            <Text fw={700} size={"lg"} c={"blue"}>
              Weight vs Time:
            </Text>
            <GraphTimelineButtonGroup valKey={"wvt"} />
          </Flex>
          <AreaChart
            h={300}
            data={formattedChartData.reverse()}
            xAxisLabel="Date"
            yAxisLabel="Weight"
            series={[{ name: "weight", color: "indigo.6" }]}
            curveType="linear"
            tickLine="x"
            xAxisProps={{
              ticks: customTicks,
              tickFormatter: (value) => value,
            }}
            gridAxis="x"
            tooltipProps={{
              content: ({ label, payload }) => (
                <ChartTooltip label={label} payload={payload} />
              ),
            }}
            dataKey={"formattedDate"}
          />
        </Stack>
      </Center>
    </Paper>
  );
}
