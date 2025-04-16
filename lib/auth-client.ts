import { createAuthClient } from "better-auth/client";
import {
  inferAdditionalFields,
  magicLinkClient,
} from "better-auth/client/plugins";
import type { auth } from "./auth";

export const authClient = createAuthClient({
  baseURL: "http://localhost:3000",
  plugins: [inferAdditionalFields<typeof auth>(), magicLinkClient()],
});
