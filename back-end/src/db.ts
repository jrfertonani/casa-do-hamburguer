import "dotenv/config";
<<<<<<< HEAD
import { PrismaPg } from '@prisma/adapter-pg'
import { PrismaClient } from '../generated/prisma/client.js'

const connectionString = `${process.env.DATABASE_URL}`

const adapter = new PrismaPg({ connectionString })
const prisma = new PrismaClient({ adapter })

export async function connection () {
  try {
    await prisma.$connect()
    console.log("Conectado ao BD.")
  } catch (error) {
    console.log("Erro ao conectar-se com o banco de dados")
  }
}


export { prisma }
=======
import { PrismaPg } from "@prisma/adapter-pg";
import { PrismaClient } from "../generated/prisma/client.js";

const connectionString = `${process.env.DATABASE_URL}`;

const adapter = new PrismaPg({ connectionString });
const prisma = new PrismaClient({ adapter });

// forma antiga
// const prisma = new PrismaClient();

export { prisma };

export async function connection() {
  try {
    await prisma.$connect();
    console.log("Conectado ao banco de dados");
  } catch (error) {
    console.error("Erro ao conectar ao banco de dados:", error);
    process.exit(1);
  }
}
>>>>>>> ce037113d509e9985f28ad20e3d581562529f4ee
