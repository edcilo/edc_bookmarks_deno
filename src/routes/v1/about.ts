import { Router } from "https://deno.land/x/oak@v12.1.0/mod.ts";
import { AboutController } from "/controllers/aboutController.ts";

export const about = new Router({ prefix: "/api/v1/about" })
  .get("/", new AboutController().about);
