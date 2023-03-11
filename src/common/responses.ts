import { TErrorResponse } from "/types/index.ts";

interface TBadRequestResponse extends TErrorResponse {
  errors?: any[];
}

export const badRequestResponse: TBadRequestResponse = {
  code: 400,
  message: "Bad request",
};

export const invalidJsonResponse: TErrorResponse = {
  code: 400,
  message: "Invalid JSON",
};

export const unauthorizedResponse: TErrorResponse = {
  code: 401,
  message: "Unauthorized",
};

export const forbiddenResponse: TErrorResponse = {
  code: 403,
  message: "Forbidden",
};

export const notFoundResponse: TErrorResponse = {
  code: 404,
  message: "Not found",
};

export const contentTypeMissingResponse: TErrorResponse = {
  code: 415,
  message: "The Content-Type header is missing from the request",
};
