import { Autocomplete } from "@mantine/core";
import { IconSearch } from "@tabler/icons-react";

export default function GlobalSearch() {
  return (
    <Autocomplete
      placeholder="CMD + K to search..."
      data={["React", "Angular", "Vue", "Svelte"]}
      w={250}
      size="xs"
      leftSection={<IconSearch size={15} />}
    />
  );
}
