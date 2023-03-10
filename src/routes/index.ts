import { Router } from "https://deno.land/x/oak@v12.1.0/mod.ts";
import { about, workspaces } from "./v1/index.ts";

const router = new Router().use(
  about.routes(),
  workspaces.routes(),
);

export default router;
