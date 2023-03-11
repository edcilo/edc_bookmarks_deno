import { RouterContext } from "https://deno.land/x/oak@v12.1.0/mod.ts";
import { Schema } from "npm:joi@^17.8.3";

export type TValidation = (ctx: RouterContext<string>) => Schema;
