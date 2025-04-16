import { getUser } from "@/lib/auth-sessions";
import { unauthorized } from "next/navigation";
import DashboardClient from "./dashboard-client";

export default async function DashboardPage() {
  const user = await getUser();

  if (!user) {
    unauthorized();
  }

  return <DashboardClient user={user} />;
}
