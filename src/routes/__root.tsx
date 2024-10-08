import { Box } from "@mantine/core";
import { createRootRoute, Link, Outlet } from "@tanstack/react-router";
import { TanStackRouterDevtools } from "@tanstack/router-devtools";

export const Route = createRootRoute({
  component: () => (
    <Box style={{ backgroundColor: "#1F1F1F" }}>
      <Outlet />
      <TanStackRouterDevtools />
    </Box>
  ),
});
