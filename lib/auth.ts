import { betterAuth } from "better-auth";
import { prismaAdapter } from "better-auth/adapters/prisma";
import { nextCookies } from "better-auth/next-js";
import { magicLink } from "better-auth/plugins";
import { prisma } from "./prisma";
import resend from "./resend";

export const auth = betterAuth({
  database: prismaAdapter(prisma, {
    provider: "postgresql",
  }),
  appName: "prisma-auth",
  emailAndPassword: {
    enabled: true,
  },
  plugins: [
    magicLink({
      sendMagicLink: async ({ email, token, url }, request) => {
        // send email to user
        await resend.emails.send({
          to: email,
          from: "Prisma auth <contact@takadmin.com>",
          subject: "Magic Link",
          html: `<p>Bonjour,</p>
          <p>Cliquez sur le lien ci-dessous pour vous connecter à votre compte :</p>
          <p><a href="${url}" style="display: inline-block; padding: 10px 20px; background-color: #000; color: #fff; text-decoration: none; border-radius: 9999px;">Connexion à votre compte</a></p>
          <p>Si vous n'avez pas demandé ce lien, vous pouvez ignorer cet email.</p>`,
        });
      },
    }),
    nextCookies(),
  ],
});
