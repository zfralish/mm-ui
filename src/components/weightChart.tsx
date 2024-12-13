import { addDays, differenceInDays, format, startOfDay } from "date-fns";
import {
  AreaChart,
  getFilteredChartTooltipPayload,
  LineChart,
} from "@mantine/charts";
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

export const data = [
  {
    date: "Mar 22",
    Apples: 2890,
    Oranges: 2338,
    Tomatoes: 2452,
  },
  {
    date: "Mar 23",
    Apples: 2756,
    Oranges: 2103,
    Tomatoes: 2402,
  },
  {
    date: "Mar 24",
    Apples: 3322,
    Oranges: 986,
    Tomatoes: 1821,
  },
  {
    date: "Mar 25",
    Apples: 3470,
    Oranges: 2108,
    Tomatoes: 2809,
  },
  {
    date: "Mar 26",
    Apples: 3129,
    Oranges: 1726,
    Tomatoes: 2290,
  },
];

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
          <LineChart
            h={300}
            data={data}
            dataKey="date"
            series={[
              { name: "Apples", color: "indigo.6" },
              { name: "Oranges", color: "blue.6" },
              { name: "Tomatoes", color: "teal.6" },
            ]}
            curveType="linear"
          />
        </Stack>
      </Center>
    </Paper>
  );
}
