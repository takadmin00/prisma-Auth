import { IconBrandGithub } from "@tabler/icons-react";
import Image from "next/image";
import Link from "next/link";

export default function SignUp() {
  return (
    <div className="grid min-h-screen grid-cols-1 md:grid-cols-2">
      <div className="flex w-full items-center justify-center bg-gray-50 px-6 py-12 dark:bg-neutral-950">
        <div className="w-full max-w-md space-y-8">
          <Link href="/" className="flex items-center space-x-2">
            <Image
              src="https://assets.aceternity.com/logo-dark.png"
              alt="Logo"
              width={30}
              height={30}
            />
            <span className="text-lg font-semibold text-black dark:text-white">
              Better Auth
            </span>
          </Link>

          <h2 className="text-2xl font-bold text-black dark:text-white">
            Créer un compte
          </h2>

          <form className="space-y-6">
            <div>
              <label
                htmlFor="name"
                className="block text-sm font-medium text-neutral-700 dark:text-neutral-400"
              >
                Nom complet
              </label>
              <input
                id="name"
                type="text"
                placeholder="John Doe"
                className="mt-1 w-full rounded-md border-0 bg-white px-4 py-2 text-black shadow-sm placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-neutral-400 dark:bg-neutral-900 dark:text-white"
              />
            </div>

            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-neutral-700 dark:text-neutral-400"
              >
                Email
              </label>
              <input
                id="email"
                type="email"
                placeholder="vous@exemple.com"
                className="mt-1 w-full rounded-md border-0 bg-white px-4 py-2 text-black shadow-sm placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-neutral-400 dark:bg-neutral-900 dark:text-white"
              />
            </div>

            <div>
              <label
                htmlFor="password"
                className="block text-sm font-medium text-neutral-700 dark:text-neutral-400"
              >
                Mot de passe
              </label>
              <input
                id="password"
                type="password"
                placeholder="••••••••"
                className="mt-1 w-full rounded-md border-0 bg-white px-4 py-2 text-black shadow-sm placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-neutral-400 dark:bg-neutral-900 dark:text-white"
              />
            </div>

            <button
              type="submit"
              className="w-full rounded-full bg-black px-4 py-2 text-white transition hover:bg-black/90 dark:bg-white dark:text-black"
            >
              S'inscrire
            </button>

            <p className="text-center text-sm text-neutral-600 dark:text-neutral-400">
              Déjà un compte ?{" "}
              <Link
                href="/auth/signin"
                className="underline text-black dark:text-white"
              >
                Se connecter
              </Link>
            </p>
          </form>

          <div className="relative mt-8">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-neutral-300 dark:border-neutral-700" />
            </div>
            <div className="relative flex justify-center text-sm">
              <span className="bg-gray-50 px-4 text-neutral-500 dark:bg-neutral-950">
                Ou continuer avec
              </span>
            </div>
          </div>

          <button className="flex w-full items-center justify-center gap-2 rounded-full bg-black px-4 py-2 text-white hover:bg-black/90 dark:bg-white dark:text-black">
            <IconBrandGithub className="h-5 w-5" />
            <span>S'inscrire avec GitHub</span>
          </button>
        </div>
      </div>

      <div className="hidden bg-white dark:bg-neutral-900 md:block" />
    </div>
  );
}
