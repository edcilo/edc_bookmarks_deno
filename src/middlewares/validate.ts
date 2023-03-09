import { RouterContext } from "https://deno.land/x/oak@v12.1.0/mod.ts";
import { Schema }  from "npm:joi@^17.8.3";

interface IQueryParams {
    [key: string]: string;
}

type TFrom = 'body' | 'query';

export const validateMiddleware = async (
    { request, response }: RouterContext<string>,
    next: () => Promise<unknown>, 
    schema: Schema,
    from: TFrom = 'body'
) => {
    let data: IQueryParams = {};

    if (from === 'query') {
        request.url.searchParams.forEach((value, key) => data[key] = value);
    } else {
        data = await request.body().value;
    }

    const { error } = schema.validate(data);

    if (error) {
        response.status = 400;
        response.body = error.details;
    } else {
        await next();
    }
}
