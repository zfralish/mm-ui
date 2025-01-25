import {ScatterChart,} from "@mantine/charts";
import {Center, Flex, Paper, Stack, Text} from "@mantine/core";
import {GraphTimelineButtonGroup} from "./graphTimelineButtonGroup";

const data = [
  {
    color: "blue.5",
    name: "Group 1",
    data: [
      {age: 25, BMI: 20},
      {age: 30, BMI: 22},
      {age: 35, BMI: 18},
      {age: 40, BMI: 25},
      {age: 45, BMI: 30},
      {age: 28, BMI: 15},
      {age: 22, BMI: 12},
      {age: 50, BMI: 28},
      {age: 32, BMI: 19},
      {age: 48, BMI: 31},
      {age: 26, BMI: 24},
      {age: 38, BMI: 27},
      {age: 42, BMI: 29},
      {age: 29, BMI: 16},
      {age: 34, BMI: 23},
      {age: 44, BMI: 33},
      {age: 23, BMI: 14},
      {age: 37, BMI: 26},
      {age: 49, BMI: 34},
      {age: 27, BMI: 17},
      {age: 41, BMI: 32},
      {age: 31, BMI: 21},
      {age: 46, BMI: 35},
      {age: 24, BMI: 13},
      {age: 33, BMI: 22},
      {age: 39, BMI: 28},
      {age: 47, BMI: 30},
      {age: 36, BMI: 25},
      {age: 43, BMI: 29},
      {age: 21, BMI: 11},
    ],
  },
];

export default function WeightChart() {
  return (
    <Paper p={15}>
      <Center>
        <Stack w={"100%"} h={"100%"} gap={0}>
          <Flex justify={"space-between"} pr={15} pl={15}>
            <Text fw={700} size={"lg"} c={"blue"}>
              Weight Over Time:
            </Text>
            <GraphTimelineButtonGroup />
          </Flex>
          <Center>
            <ScatterChart
              h={250}
              data={data}
              dataKey={{x: "age", y: "BMI"}}
              xAxisLabel="Age"
              yAxisLabel="BMI"
            />
          </Center>
        </Stack>
      </Center>
    </Paper>
  );
}
