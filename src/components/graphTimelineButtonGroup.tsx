import { Button, Flex } from "@mantine/core";

export const GraphTimelineButtonGroup = ({ valKey }: { valKey: string }) => {
  const isSelected = (label: string) => {
    return "filled";
  };

  const onTimeFrameChange = (timeFrame: string) => {};

  return (
    <Flex justify={"flex-end"} gap={3} mb={15}>
      <Button
        size={"xs"}
        variant={isSelected("1w")}
        onClick={() => onTimeFrameChange("1w")}
      >
        1w
      </Button>
      <Button
        size={"xs"}
        variant={isSelected("2w")}
        onClick={() => onTimeFrameChange("2w")}
      >
        2w
      </Button>
      <Button
        size={"xs"}
        variant={isSelected("1m")}
        onClick={() => onTimeFrameChange("1m")}
      >
        1m
      </Button>
      <Button
        size={"xs"}
        variant={isSelected("3m")}
        onClick={() => onTimeFrameChange("3m")}
      >
        3m
      </Button>
      <Button
        size={"xs"}
        variant={isSelected("6m")}
        onClick={() => onTimeFrameChange("6m")}
      >
        6m
      </Button>
    </Flex>
  );
};
