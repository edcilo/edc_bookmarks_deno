import { Prisma, PrismaClient } from "../generated/client/deno/edge.ts";
import { load } from "https://deno.land/std@0.178.0/dotenv/mod.ts";

const { DATABASE_URL } = await load();

const prisma = new PrismaClient({
    datasources: {
        db: {
            url: DATABASE_URL,
        },
    },
});

// const workspacesData: Prisma.WorkspaceCreateInput[] = [
//     {
//         name: "Workspace 1",
//         user_id: "f07d329a-4564-44a7-941a-77a708b4f592",
//     },
//     {
//         name: "Workspace 2",
//         user_id: "f07d329a-4564-44a7-941a-77a708b4f592",
//     },
// ];

// for (const data of workspacesData) {
//     const workspace = await prisma.workspace.create({ data });
//     console.log(`Created workspace with id: ${workspace.id}`);
// }
// console.log(`Seeding finished.`);
  
// await prisma.$disconnect();
