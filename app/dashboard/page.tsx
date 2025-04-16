import { auth } from "@/lib/auth";
import { getUser } from "@/lib/auth-sessions";
import { headers } from "next/headers";
import { unauthorized } from "next/navigation";
import DashboardClient from "./dashboard-client";

export default async function DashboardPage() {
  const user = await getUser();
  const account = await auth.api.listUserAccounts({
    headers: await headers(),
  });

  const session = await auth.api.listSessions({
    headers: await headers(),
  });

  if (!user) {
    unauthorized();
  }

  return <DashboardClient user={user} account={account} session={session} />;
}
