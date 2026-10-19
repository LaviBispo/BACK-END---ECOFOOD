<<<<<<< HEAD
import "dotenv/config";
import { PrismaBetterSqlite3 } from "@prisma/adapter-better-sqlite3";
import { PrismaClient } from "../../generated/prisma/client";

const adapter = new PrismaBetterSqlite3({
  url: process.env.DATABASE_URL!,
});

const prisma = new PrismaClient({
  adapter,
=======
import { PrismaBetterSqlite3 } from '@prisma/adapter-better-sqlite3';
import { PrismaClient } from '../../generated/prisma/client';

const adapter = new PrismaBetterSqlite3({
  url: 'file:./dev.db'
});

const prisma = new PrismaClient({
  adapter
>>>>>>> 251f91ccce7377705d559fac702aeaba32c9b237
});

export default prisma;