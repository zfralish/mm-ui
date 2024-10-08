import { InputBase, Combobox, useCombobox } from "@mantine/core";
import { useGetBirds } from "../api/hooks/birdHooks";
import { useRouterState, useNavigate, useParams } from "@tanstack/react-router";

export default function BirdSelectBox() {
  const combobox = useCombobox({
    onDropdownClose: () => combobox.resetSelectedOption(),
  });
  const navigate = useNavigate();
  const routerState = useRouterState();
  const { data } = useGetBirds();
  const { birdId } = useParams({ strict: false });

  const handledSubmit = (value: string) => {
    navigate({ to: routerState.location.href.replace(birdId ?? "", value) });
  };

  const options =
    data?.map((bird) => (
      <Combobox.Option value={bird.id} key={bird.id}>
        {bird.name}
      </Combobox.Option>
    )) ?? [];

  return (
    <Combobox store={combobox} onOptionSubmit={(val) => handledSubmit(val)}>
      <Combobox.Target>
        <InputBase
          component="button"
          type="button"
          pointer
          rightSection={<Combobox.Chevron />}
          rightSectionPointerEvents="none"
          onClick={() => combobox.toggleDropdown()}
          w={200}
        >
          {data?.find((bird) => bird.id === birdId)?.name ?? "Select Bird"}
        </InputBase>
      </Combobox.Target>

      <Combobox.Dropdown>
        <Combobox.Options>{options}</Combobox.Options>
      </Combobox.Dropdown>
    </Combobox>
  );
}
