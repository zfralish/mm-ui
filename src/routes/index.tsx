import { createFileRoute, Link } from '@tanstack/react-router'

export const Route = createFileRoute('/')({
  component: () => <Link to="/dashboard">Dashboard</Link>,
})
