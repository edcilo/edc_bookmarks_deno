import { notFoundResponse } from "/common/index.ts";

export const notFoundMiddleware = async (
  { response, request }: { response: any; request: any },
  next: Function,
) => {
  await next();
  if (response.status === 404 && request.accepts("text/json")) {
    response.status = 404;
    response.body = notFoundResponse;
  }
};
