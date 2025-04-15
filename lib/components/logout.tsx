"use client";

import { LogOut } from "lucide-react";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { authClient } from "../auth-client";

export function LogoutButton() {
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();

  return (
    <button
      className="flex w-full cursor-pointer items-center gap-2 px-2 py-1.5 text-sm outline-none transition-colors hover:bg-accent hover:text-accent-foreground"
      onClick={() => {
        authClient.signOut(
          {},
          {
            onRequest: () => {
              setIsLoading(true);
            },
            onSuccess: () => {
              setIsLoading(false);
              router.push("/");
              router.refresh();
            },
          }
        );
      }}
      disabled={isLoading}
    >
      <LogOut className="h-4 w-4" />
      {isLoading ? "Déconnexion..." : "Déconnexion"}
    </button>
  );
}
