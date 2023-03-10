import { RouterMiddleware } from "https://deno.land/x/oak@v12.1.0/mod.ts";

export const authenticateMiddleware: RouterMiddleware<string> = async (
  { state, request, response },
  next,
) => {
  const authorization = request.headers.get("Authorization");

  if (!authorization) {
    response.status = 401;
    return;
  }

  // TODO: validate token

  // TODO: get user from database
  state.user = { id: "f07d329a-4564-44a7-941a-77a708b4f592", name: "John Doe" };

  console.log("authenticate request");
  await next();
};
