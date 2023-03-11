import { invalidJsonResponse } from "/common/index.ts";

export const invalidJsonMiddleware = async (
  { response, request }: { response: any; request: any },
  next: Function,
) => {
  try {
    await request.body().value;
  } catch (_e) {
    response.status = 400;
    response.body = invalidJsonResponse;
    return;
  }
  await next();
};
