import { getUser } from "@/lib/auth-sessions";
import DashboardClient from "./dashboard-client";

export default async function DashboardPage() {
  const user = await getUser();

  return <DashboardClient user={user} />;
}
