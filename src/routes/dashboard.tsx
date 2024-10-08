import { createFileRoute, Outlet } from '@tanstack/react-router'
import {
  ActionIcon,
  AppShell,
  AppShellHeader,
  AppShellMain,
  Avatar,
  Center,
  Divider,
  Flex,
  Group,
  NavLink,
  Image,
  Stack,
  Text,
} from '@mantine/core'
import {
  IconAdjustments,
  IconBone,
  IconCrosshair,
  IconGauge,
  IconHome2,
  IconSettings,
  IconWeight,
} from '@tabler/icons-react'
import GlobalSearch from '../components/globalSearch'
import BirdSelectBox from '../components/birdSelectBox'

export const Route = createFileRoute('/dashboard')({
  component: () => <DashboardLayout />,
})

function DashboardLayout() {
  return (
    <AppShell padding="md" header={{ height: 110 }}>
      <AppShellHeader mb={0}>
        <Stack gap={0}>
          <Group justify={'space-between'} pr={100} pl={100} pt={10} pb={10}>
            <Center>
              <Group>
                <Image src={'/favicon.svg'} alt={''} width={35} height={35} />
                <Text size="lg">Mew Mate</Text>
              </Group>
            </Center>
            <Group gap={20}>
              <Group gap={5}>
                <BirdSelectBox birds={[]} selectedBird={'some-id'} />
              </Group>
              <Group gap={0}>
                <ActionIcon variant="subtle" aria-label="Settings">
                  <IconSettings
                    style={{ width: '70%', height: '70%' }}
                    stroke={1.5}
                  />
                </ActionIcon>
                <ActionIcon variant="subtle" aria-label="Settings">
                  <IconAdjustments
                    style={{ width: '70%', height: '70%' }}
                    stroke={1.5}
                  />
                </ActionIcon>
              </Group>
              <Group gap={5}>
                <Avatar color="blue" radius="sm" name={'Zeke Fralish'} />
                <Stack gap={0}>
                  <Text size="sm">Zeke Fralish</Text>
                  <Text size="xs">General Falconer</Text>
                </Stack>
              </Group>
            </Group>
          </Group>
          <Divider />
          <Group pr={115} pl={115} justify={'space-between'} h={50}>
            <Flex miw={700} gap={0}>
              <NavLink
                href="#required-for-focus"
                label="Dashboard"
                leftSection={<IconHome2 size="1rem" stroke={1.5} />}
              />
              <NavLink
                href="#required-for-focus"
                label="Feeding Log"
                leftSection={<IconBone size="1rem" stroke={1.5} />}
              />
              <NavLink
                href="#required-for-focus"
                label="Training Log"
                leftSection={<IconGauge size="1rem" stroke={1.5} />}
              />
              <NavLink
                href="#required-for-focus"
                label="Hunting Log"
                leftSection={<IconCrosshair size="1rem" stroke={1.5} />}
              />
              <NavLink
                href="#required-for-focus"
                label="Weight Log"
                leftSection={<IconWeight size="1rem" stroke={1.5} />}
              />
            </Flex>
            <GlobalSearch />
          </Group>
        </Stack>
      </AppShellHeader>

      <AppShellMain>
        <Outlet />
      </AppShellMain>
    </AppShell>
  )
}
