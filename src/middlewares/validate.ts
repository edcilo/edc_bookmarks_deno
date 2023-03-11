import { RouterContext } from "https://deno.land/x/oak@v12.1.0/mod.ts";
import { badRequestResponse } from "/common/index.ts";
import { TValidation } from "/validations/index.ts";

interface IQueryParams {
  [key: string]: string;
}

type TFrom = "body" | "query";

export const validateMiddleware = async (
  ctx: RouterContext<string>,
  next: () => Promise<unknown>,
  schema: TValidation,
  from: TFrom = "body",
) => {
  const { request, response } = ctx;
  let data: IQueryParams = {};

  if (from === "query") {
    request.url.searchParams.forEach((value, key) => data[key] = value);
  } else {
    data = await request.body().value;
  }

  const { error } = schema(ctx).validate(data);

  if (error) {
    badRequestResponse.errors = error.details;
    response.status = 400;
    response.body = badRequestResponse;
  } else {
    await next();
  }
};
