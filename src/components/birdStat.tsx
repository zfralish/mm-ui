import { Center, Stack, Text } from "@mantine/core";

interface BirdStatProps {
  name: string;
  value: string;
  unit: string;
}

export function BirdStat(props: BirdStatProps) {
  return (
    <Center>
      <Stack gap={0} align={"center"}>
        <Text c={"blue"} size="lg">
          {props.value} {props.unit}
        </Text>
        <Text c={"dimmed"} size="sm">
          {props.name}
        </Text>
      </Stack>
    </Center>
  );
}
