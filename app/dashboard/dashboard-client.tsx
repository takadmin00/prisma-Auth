"use client";

import { cn } from "@/lib/utils";
import {
  IconBrandTabler,
  IconChevronLeft,
  IconChevronRight,
  IconSettings,
  IconUserBolt,
} from "@tabler/icons-react";
import Link from "next/link";
import { useState } from "react";

const links = [
  { label: "Dashboard", href: "#", icon: <IconBrandTabler size={20} /> },
  { label: "Profile", href: "#", icon: <IconUserBolt size={20} /> },
  { label: "Settings", href: "#", icon: <IconSettings size={20} /> },
];

export default function DashboardClient({
  user,
  account,
  session,
}: {
  user: any;
  account: any;
  session: any;
}) {
  const [collapsed, setCollapsed] = useState(false);

  return (
    <div className="flex h-screen w-full">
      {/* Sidebar */}
      <aside
        className={cn(
          "flex flex-col justify-between border-r bg-white px-3 py-4 transition-all dark:border-neutral-700 dark:bg-neutral-900",
          collapsed ? "w-16" : "w-64"
        )}
      >
        <div className="space-y-6">
          {/* Toggle */}
          <button
            onClick={() => setCollapsed(!collapsed)}
            className="flex items-center gap-2 text-sm text-neutral-500 hover:text-black dark:text-neutral-400 dark:hover:text-white"
          >
            {collapsed ? (
              <IconChevronRight size={20} />
            ) : (
              <IconChevronLeft size={20} />
            )}
            {!collapsed && <span className="text-xs">Collapse</span>}
          </button>

          {/* Links */}
          <nav className="flex flex-col space-y-2">
            {links.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className="flex items-center gap-3 rounded px-2 py-2 text-sm text-neutral-700 hover:bg-neutral-200 dark:text-neutral-300 dark:hover:bg-neutral-800"
              >
                {link.icon}
                {!collapsed && <span>{link.label}</span>}
              </Link>
            ))}
          </nav>
        </div>
      </aside>

      {/* Content */}
      <main className="flex flex-1 flex-col bg-gray-50 p-6 dark:bg-neutral-950">
        <h1 className="text-2xl font-bold text-black dark:text-white">
          Dashboard
        </h1>
        <div className="mt-4">
          <h2 className="text-lg font-bold text-black dark:text-white">User</h2>
          {user && (
            <pre className="p-4 bg-white dark:bg-neutral-800 rounded shadow-sm">
              {JSON.stringify(user, null, 2)}
            </pre>
          )}
        </div>
        <div className="mt-4">
          <h2 className="text-lg font-bold text-black dark:text-white">
            Accounts
          </h2>
          <pre className="p-4 bg-white dark:bg-neutral-800 rounded shadow-sm">
            {JSON.stringify(account, null, 2)}
          </pre>
        </div>
        <div className="mt-4">
          <h2 className="text-lg font-bold text-black dark:text-white">
            Session
          </h2>
          <pre className="p-4 bg-white dark:bg-neutral-800 rounded shadow-sm">
            {JSON.stringify(session, null, 2)}
          </pre>
        </div>
      </main>
    </div>
  );
}
