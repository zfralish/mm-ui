import { PieChart } from "@mantine/charts";
import { Center, Flex, Paper, Stack, Text } from "@mantine/core";
import { GraphTimelineButtonGroup } from "./graphTimelineButtonGroup";
export const data = [
  { name: "USA", value: 400, color: "indigo.6" },
  { name: "India", value: 300, color: "yellow.6" },
  { name: "Japan", value: 300, color: "teal.6" },
  { name: "Other", value: 200, color: "gray.6" },
];

const DietChart = () => {
  return (
    <Paper p={15}>
      <Center>
        <Stack w={"100%"} h={"100%"} gap={0}>
          <Flex justify={"space-between"} pr={15} pl={15}>
            <Text fw={700} size={"lg"} c={"blue"}>
              Diet:
            </Text>
            <GraphTimelineButtonGroup />
          </Flex>
          <Center>
            <PieChart
              withLabelsLine
              labelsPosition="outside"
              labelsType="percent"
              withLabels
              size={200}
              data={data}
            />
          </Center>
        </Stack>
      </Center>
    </Paper>
  );
};

export default DietChart;
