"use client";

import { authClient } from "@/lib/auth-client";
import { IconBrandGithub } from "@tabler/icons-react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { toast } from "sonner";

export default function SignIn() {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);
  const [isMagicLink, setIsMagicLink] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.target as HTMLFormElement);
    const email = formData.get("email") as string;
    const password = formData.get("password") as string;

    if (isMagicLink) {
      authClient.signIn.magicLink(
        {
          email,
          callbackURL: "/dashboard",
        },
        {
          onRequest: () => {
            setIsLoading(true);
          },
          onSuccess: () => {
            router.push("/auth/verify");
            toast.success("Email envoyé avec succès");
            router.refresh();
          },
          onError: (ctx) => {
            setIsLoading(false);
            toast.error(ctx.error.message);
          },
        }
      );
    } else {
      authClient.signIn.email(
        {
          email,
          password,
          callbackURL: "/dashboard",
        },
        {
          onRequest: () => {
            setIsLoading(true);
          },
          onSuccess: () => {
            router.push("/dashboard");
            toast.success("Connexion réussie");
            router.refresh();
          },
          onError: (ctx) => {
            setIsLoading(false);
            toast.error(ctx.error.message);
          },
        }
      );
    }
  };

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
            Connectez-vous à votre compte
          </h2>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-neutral-700 dark:text-neutral-400"
              >
                Email
              </label>
              <input
                id="email"
                name="email"
                type="email"
                placeholder="vous@exemple.com"
                className="mt-1 w-full rounded-md border-0 bg-white px-4 py-2 text-black shadow-sm placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-neutral-400 dark:bg-neutral-900 dark:text-white"
              />
            </div>

            <div className="space-y-4">
              {!isMagicLink && (
                <>
                  <label
                    htmlFor="password"
                    className="block text-sm font-medium text-neutral-700 dark:text-neutral-400"
                  >
                    Mot de passe
                  </label>
                  <input
                    id="password"
                    name="password"
                    type="password"
                    placeholder="••••••••"
                    className="mt-1 w-full rounded-md border-0 bg-white px-4 py-2 text-black shadow-sm placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-neutral-400 dark:bg-neutral-900 dark:text-white"
                  />
                  <div className="mt-2 text-right">
                    <Link
                      href="/auth/forgot-password"
                      className="text-sm text-neutral-600 hover:text-black dark:text-neutral-400 dark:hover:text-white"
                    >
                      Mot de passe oublié ?
                    </Link>
                  </div>
                </>
              )}
            </div>

            <button
              type="submit"
              disabled={isLoading}
              className="w-full rounded-full bg-black px-4 py-2 text-white transition hover:bg-black/90 dark:bg-white dark:text-black"
            >
              {isLoading
                ? "Connexion en cours..."
                : isMagicLink
                ? "Envoyer le magic link"
                : "Se connecter"}
            </button>

            <button
              type="button"
              onClick={() => setIsMagicLink(!isMagicLink)}
              className="w-full mt-2 rounded-full border border-black px-4 py-2 text-black transition hover:bg-gray-100 dark:border-white dark:text-white dark:hover:bg-neutral-800"
            >
              {isMagicLink
                ? "Utiliser un mot de passe"
                : "Utiliser un magic link"}
            </button>

            <p className="text-center text-sm text-neutral-600 dark:text-neutral-400">
              Pas encore de compte ?{" "}
              <Link
                href="/auth/signup"
                className="underline text-black dark:text-white"
              >
                S'inscrire
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

          <button
            disabled={isLoading}
            type="button"
            onClick={() =>
              authClient.signIn.social(
                {
                  provider: "github",
                  callbackURL: "/dashboard",
                },
                {
                  onRequest: () => {
                    setIsLoading(true);
                  },
                  onSuccess: () => {
                    toast.success("Connexion réussie");
                    router.refresh();
                  },
                  onError: (ctx) => {
                    setIsLoading(false);
                    toast.error(ctx.error.message);
                  },
                }
              )
            }
            className="flex w-full items-center justify-center gap-2 rounded-full bg-black px-4 py-2 text-white hover:bg-black/90 dark:bg-white dark:text-black"
          >
            <IconBrandGithub className="h-5 w-5" />
            <span>Se connecter avec GitHub</span>
          </button>
        </div>
      </div>

      <div className="hidden bg-white dark:bg-neutral-900 md:block" />
    </div>
  );
}
