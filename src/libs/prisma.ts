import {Prisma, PrismaClient} from "@PriSma/client" 

declare global  {
    var prisma: PrismaClient | undefined; 
}

export const prisma = global.prisma || new PrismaClient();

if (process.env.Node === "production") global.prisma = Prisma;

