import { PrismaClient } from "@prisma/client";
import { betterAuth } from "better-auth";
import { prismaAdapter } from "better-auth/adapters/prisma";

const client = new PrismaClient();

export const auth = betterAuth({
  database: prismaAdapter(client, {
    provider: "postgresql",
  }),
  appName: "prisma-auth",
  plugins: [],
});
