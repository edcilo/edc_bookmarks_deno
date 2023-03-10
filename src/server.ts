import { Application } from "https://deno.land/x/oak@v12.1.0/mod.ts";
import logger from "https://deno.land/x/oak_logger@1.0.0/mod.ts";
import config from "/config/index.ts";
import {
  invalidJsonMiddleware,
  notFoundMiddleware,
  unsupportedTypeMiddleware,
} from "/middlewares/index.ts";
import router from "/routes/index.ts";

const app = new Application();

app.use(logger.logger);
app.use(logger.responseTime);
app.use(unsupportedTypeMiddleware);
app.use(invalidJsonMiddleware);
app.use(notFoundMiddleware);
app.use(router.routes());
app.use(router.allowedMethods());

console.log(`Server running on port ${config.app.port}`);
await app.listen({ port: config.app.port });
