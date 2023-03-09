import { load } from "https://deno.land/std@0.178.0/dotenv/mod.ts";

const { APP_NAME, APP_VERSION, APP_PORT } = await load();

export const app = {
    name: APP_NAME || "app",
    version: APP_VERSION || "1.0.0",
    port: +APP_PORT || 3000,
}
