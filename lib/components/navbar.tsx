"use client";

import Image from "next/image";
import Link from "next/link";

export function Header() {
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
        </div>
      </div>
    </header>
  );
}
