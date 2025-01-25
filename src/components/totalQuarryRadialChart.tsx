import {Center, Flex, Paper, Stack, Text} from "@mantine/core";
import {GraphTimelineButtonGroup} from "./graphTimelineButtonGroup.tsx";
import {RadialBarChart} from "@mantine/charts";

const data = [
  {name: '18-24', value: 31.47, color: 'blue.7'},
  {name: '25-29', value: 26.69, color: 'orange.6'},
  {name: '30-34', value: 15.69, color: 'yellow.7'},
  {name: '35-39', value: 8.22, color: 'cyan.6'},
  {name: '40-49', value: 8.63, color: 'green'},
  {name: '50+', value: 2.63, color: 'pink'},
  {name: 'unknown', value: 6.67, color: 'gray'},
];

export const TotalQuarryRadialChart = () => {
  return (
    <Paper p={15} h={"100%"}>
      <Center>
        <Stack w={"100%"} h={"100%"} gap={0} justify={"space-between"}>
          <Flex justify={"space-between"} pr={15} pl={15}>
            <Text fw={700} size={"lg"} c={"blue"}>
              Quarry:
            </Text>
            <GraphTimelineButtonGroup/>
          </Flex>
          <RadialBarChart data={data} dataKey="value" h={300}/>
        </Stack>
      </Center>
    </Paper>
  );
};
