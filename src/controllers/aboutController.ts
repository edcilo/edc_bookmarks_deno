import { RouterMiddleware } from "https://deno.land/x/oak@v12.1.0/mod.ts";
import config from "../config/index.ts";

export class AboutController {
    public about: RouterMiddleware<string> = ({ response }) => {
        response.status = 200;
        response.body = {
            name: config.app.name,
            version: config.app.version
        };
    }
}
