import {
  Avatar,
  Center,
  Flex,
  Grid,
  GridCol,
  Paper,
  Text,
} from "@mantine/core";
import { useGetBird } from "../api/hooks/birdHooks";
import { BirdStat } from "./birdStat";

export default function BirdInfoCard({ birdId }: { birdId: string }) {
  const { data: bird } = useGetBird(birdId ?? "");

  return (
    <Paper p={15} h={"100%"} w={"100%"}>
      <Center h={"100%"} w={"100%"}>
        <Grid>
          <GridCol span={4}>
            <Center>
              <Avatar
                src={
                  "https://mew-mate.nyc3.cdn.digitaloceanspaces.com/default/red-tail%20Small.jpeg"
                }
                radius="xl"
                h={150}
                w={150}
              />
            </Center>
          </GridCol>
          <GridCol span={8}>
            <Center h={"100%"}>
              <Grid>
                <GridCol span={4} p={1}>
                  <Flex justify={"flex-end"}>
                    <Text c={"dimmed"} size="md">
                      Name:
                    </Text>
                  </Flex>
                </GridCol>
                <GridCol span={8} p={1} pl={5}>
                  <Text c={"blue"} size="md">
                    {bird?.name}
                  </Text>
                </GridCol>
                <GridCol span={4} p={1}>
                  <Flex justify={"flex-end"}>
                    <Text c={"dimmed"} size="md">
                      Trap Date:
                    </Text>
                  </Flex>
                </GridCol>
                <GridCol c={"blue"} span={8} p={1}>
                  <Text size="md" pl={5}>
                    {bird?.trap_date.toString() ?? ""}
                  </Text>
                </GridCol>
                <GridCol span={4} p={1}>
                  <Flex justify={"flex-end"}>
                    <Text c={"dimmed"} size="md">
                      Species:
                    </Text>
                  </Flex>
                </GridCol>
                <GridCol span={8} c={"blue"} p={1} pl={5}>
                  <Text size="md">{bird?.species}</Text>
                </GridCol>
              </Grid>
            </Center>
          </GridCol>
          <GridCol span={4}>
            <BirdStat name={"Last Weight"} unit={"g"} value={"890"} />
          </GridCol>
          <GridCol span={4}>
            <BirdStat name={"Last Fed"} unit={"hrs"} value={"18"} />
          </GridCol>
          <GridCol span={4}>
            <BirdStat name={"Weight Est."} unit={"g"} value={"860"} />
          </GridCol>
        </Grid>
      </Center>
    </Paper>
  );
}
