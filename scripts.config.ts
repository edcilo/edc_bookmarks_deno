import type { DenonConfig } from "https://deno.land/x/denon@2.5.0/mod.ts";

const config: DenonConfig = {
    scripts: {
        start: {
            cmd: "deno run src/server.ts",
            desc: "run my app.ts",
            watch: true,
            allow: ["net", "read", "env"],
        },
    },
};

export default config;
