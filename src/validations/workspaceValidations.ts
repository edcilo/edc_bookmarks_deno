import { RouterContext } from "https://deno.land/x/oak@v12.1.0/mod.ts";
import joi from "npm:joi@^17.8.3";

export const workspacePaginateValidation = (_ctx: RouterContext<string>) =>
  joi.object({
    page: joi.number().integer().min(1).default(1),
    limit: joi.number().integer().min(1).max(100).default(10),
    order_by: joi.string().valid("name", "createdAt", "updatedAt").default(
      "createdAt",
    ),
    order: joi.string().valid("desc", "asc").default("desc"),
  });

export const workspaceCreateValidation = (_ctx: RouterContext<string>) =>
  joi.object({
    name: joi.string().required().min(3).max(60),
  });
