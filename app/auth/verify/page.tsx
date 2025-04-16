"use client";

export default function Verify() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-4 bg-gray-50 dark:bg-neutral-950">
      <div className="max-w-md p-8 text-center border rounded-lg shadow-lg bg-white dark:bg-neutral-800">
        <h1 className="text-2xl font-bold text-black dark:text-white">
          Vérification de l'email
        </h1>
        <p className="mt-4 text-lg text-neutral-600 dark:text-neutral-300">
          Un lien de vérification a été envoyé à votre adresse email. Veuillez
          consulter votre boîte de réception pour procéder à la vérification de
          votre compte.
        </p>
        <button
          type="button"
          onClick={() => (window.location.href = "/auth/signin")}
          className="mt-6 w-full rounded-full bg-black px-4 py-2 text-white transition hover:bg-black/90 dark:bg-white dark:text-black"
        >
          Retour à la connexion
        </button>
      </div>
    </div>
  );
}
