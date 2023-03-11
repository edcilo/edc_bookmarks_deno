import { Router } from "https://deno.land/x/oak@v12.1.0/mod.ts";
import { WorkspaceController } from "/controllers/workspacesController.ts";
import {
  authenticateMiddleware,
  authorizeMiddleware,
  validateMiddleware,
} from "/middlewares/index.ts";
import {
  workspaceCreateValidation,
  workspacePaginateValidation,
} from "/validations/index.ts";

const prefix = "/api/v1/workspaces";
const controller = new WorkspaceController();

export const workspaces = new Router({ prefix })
  .get(
    "/",
    authenticateMiddleware,
    (ctx, next) => authorizeMiddleware(ctx, next, "read:workspaces"),
    (ctx, next) =>
      validateMiddleware(ctx, next, workspacePaginateValidation, "query"),
    controller.getAll,
  )
  .post(
    "/",
    authenticateMiddleware,
    (ctx, next) => authorizeMiddleware(ctx, next, "create:workspaces"),
    (ctx, next) => validateMiddleware(ctx, next, workspaceCreateValidation),
    controller.create,
  )
  .get(
    "/:id",
    authenticateMiddleware,
    (ctx, next) => authorizeMiddleware(ctx, next, "read:workspaces"),
    controller.get,
  )
  .put(
    "/:id",
    authenticateMiddleware,
    (ctx, next) => authorizeMiddleware(ctx, next, "update:workspaces"),
    (ctx, next) => validateMiddleware(ctx, next, workspaceCreateValidation),
    controller.update,
  )
  .delete(
    "/:id",
    authenticateMiddleware,
    (ctx, next) => authorizeMiddleware(ctx, next, "delete:workspaces"),
    controller.delete,
  );
