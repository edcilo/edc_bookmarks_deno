# edc_bookmarks

## Setup

Install denon
```bash
deno install -qAf --unstable https://deno.land/x/denon/denon.ts
```

Start develop server
```bash 
denon start
```

## Run seeds

```bash
deno run -A prisma/seed.ts
```

### Prisma commands

```bash
deno run --allow-read --allow-env --allow-write npm:prisma@^4.11 init

deno run -A npm:prisma@^4.11 db pull

deno run -A npm:prisma@^4.11 generate --data-proxy

deno run -A npm:prisma@^4.11 db push
```
