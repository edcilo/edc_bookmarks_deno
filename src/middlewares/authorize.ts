import { RouterContext } from "https://deno.land/x/oak@v12.1.0/mod.ts";
import { forbiddenResponse } from "/common/index.ts";

export const authorizeMiddleware = async (
  { response, state }: RouterContext<string>,
  next: () => Promise<unknown>,
  permission: string,
) => {
  const { user } = state;

  if (!user) {
    response.status = 403;
    response.body = forbiddenResponse;
    return;
  }

  console.log("authorize request", permission);
  await next();
};
