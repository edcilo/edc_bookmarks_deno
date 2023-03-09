import { PrismaClient } from "../../generated/client/deno/edge.ts";
import { load } from "https://deno.land/std@0.178.0/dotenv/mod.ts";

const { DATABASE_URL_PROXY } = await load();

export default abstract class Repository {
    protected client = (): PrismaClient => {
        return new PrismaClient({
            datasources: {
                db: {
                    url: DATABASE_URL_PROXY,
                },
            },
        });
    }
}
