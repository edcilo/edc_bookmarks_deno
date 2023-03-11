import { contentTypeMissingResponse } from "/common/index.ts";

export const unsupportedTypeMiddleware = async (
  { response, request }: { response: any; request: any },
  next: Function,
) => {
  const verbs = ["POST", "PUT", "PATCH"];
  const verb = request.method;
  const hasContentType = request.headers.has("content-type");
  if (verbs.includes(verb) && !hasContentType) {
    response.status = 415;
    response.body = contentTypeMissingResponse;
    return;
  }
  await next();
};
