# Prisma Auth Tutorial

Une application de démonstration montrant comment implémenter un système d'authentification complet avec Next.js, Prisma et better-auth.

## Fonctionnalités

- 🔐 Authentification par email et mot de passe
- ✨ Authentification par Magic Link
- 🌐 Authentification sociale avec GitHub
- 🔄 Gestion des sessions

## Technologies utilisées

- [Next.js 15](https://nextjs.org/) - Framework React avec App Router
- [Prisma](https://www.prisma.io/) - ORM pour les bases de données
- [better-auth](https://github.com/better-auth) - Bibliothèque d'authentification
- [TypeScript](https://www.typescriptlang.org/) - Typage statique
- [Tailwind CSS](https://tailwindcss.com/) - Framework CSS utility-first
- [PostgreSQL](https://www.postgresql.org/) - Base de données relationnelle
- [Resend](https://resend.com/) - Service d'envoi d'emails

## Prérequis

- Node.js 18+
- PostgreSQL
- Compte GitHub pour l'authentification sociale (optionnel)
- Compte Resend pour l'envoi d'emails

## Installation

1. Clonez le dépôt :

   ```bash
    git clone https://github.com/takadmin00/prisma-Auth.git
   cd prisma-auth
   ```

2. Installez les dépendances :

   ```bash
   pnpm install
   ```

3. Configurez les variables d'environnement :

   - Copiez le fichier `env.example` vers `.env`
   - Remplissez les variables avec vos propres informations

   ```bash
   cp env.example .env
   ```

   Variables à configurer :

   - `BETTER_AUTH_SECRET` - Clé secrète pour l'authentification (vous pouvez générer une clé aléatoire)
   - `BETTER_AUTH_URL` - URL de votre application (par défaut: "http://localhost:3000")
   - `DATABASE_URL` - URL de connexion à votre base de données PostgreSQL
   - `RESEND_API_KEY` - Clé API Resend pour l'envoi d'emails
   - `GITHUB_CLIENT_ID` - ID client GitHub (pour l'authentification sociale)
   - `GITHUB_CLIENT_SECRET` - Secret client GitHub (pour l'authentification sociale)

4. Configurez la base de données :

   ```bash
   npx prisma migrate dev
   ```

5. Lancez le serveur de développement :

   ```bash
   pnpm dev
   ```

6. Ouvrez votre navigateur et accédez à `http://localhost:3000`

## Structure du projet

- `/app` - Routes et composants Next.js (App Router)
- `/lib` - Utilitaires et configurations
- `/prisma` - Schéma Prisma et migrations

## Configuration de l'authentification

L'authentification est configurée dans le fichier `lib/auth.ts`. Elle utilise better-auth avec l'adaptateur Prisma pour gérer les utilisateurs, les sessions et les comptes.

## Déploiement

Cette application peut être facilement déployée sur Vercel, Netlify ou tout autre fournisseur compatible avec Next.js.

## Licence

MIT

Ce projet est sous licence MIT - une licence open source permissive qui permet l'utilisation, la modification et la distribution du code, y compris pour des projets commerciaux.

Pour plus de détails, consultez le fichier [LICENSE](LICENSE) ou [opensource.org/licenses/MIT](https://opensource.org/licenses/MIT).

## Auteur

[Takadmin](https://github.com/takadmin00)
