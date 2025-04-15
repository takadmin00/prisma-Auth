import { User } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { getUser } from "../auth-sessions";
import { LogoutButton } from "./logout";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";

// Définition du type User
type User = {
  name?: string;
  email?: string;
};

export async function Header() {
  const user = (await getUser()) as User | null;

  return (
    <header className="w-full bg-white px-4 py-4 shadow-sm dark:bg-neutral-900">
      <div className="mx-auto flex max-w-7xl items-center justify-between">
        <Link href="/" className="flex items-center space-x-2">
          <Image
            src="https://assets.aceternity.com/logo-dark.png"
            alt="Logo"
            width={30}
            height={30}
          />
          <span className="text-lg font-semibold text-black dark:text-white">
            Better Auth Tutorial
          </span>
        </Link>

        <div className="flex gap-2 sm:gap-4">
          {!user ? (
            <>
              <Link
                href="/auth/signin"
                className="rounded-md bg-black px-4 py-2 text-sm text-white dark:bg-white dark:text-black sm:px-6"
              >
                Sign in
              </Link>
              <Link
                href="/auth/signup"
                className="rounded-md bg-black px-4 py-2 text-sm text-white dark:bg-white dark:text-black sm:px-6"
              >
                Sign up
              </Link>
            </>
          ) : (
            <DropdownMenu>
              <DropdownMenuTrigger className="flex items-center gap-2 rounded-md bg-black px-4 py-2 text-sm text-white dark:bg-white dark:text-black">
                {user?.name ?? user?.email ?? "Utilisateur"}
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="min-w-[180px]">
                <DropdownMenuItem asChild>
                  <Link
                    href="/dashboard"
                    className="flex w-full cursor-pointer items-center gap-2 px-2 py-1.5 text-sm outline-none transition-colors hover:bg-accent hover:text-accent-foreground"
                  >
                    <User className="h-4 w-4" />
                    Mon compte
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem asChild>
                  <LogoutButton />
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          )}
        </div>
      </div>
    </header>
  );
}
