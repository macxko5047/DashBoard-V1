// Fetch all posts (in /pages/api/posts.ts)
import { PrismaClient } from "@prisma/client";
import type { NextApiRequest, NextApiResponse } from "next";
const prisma = new PrismaClient();

(BigInt.prototype as any).toJSON = function () {
  return this.toString();
};

export default async function handle(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const posts = await prisma.production_history.findMany();
  console.log(posts);
  return {
    statusCode: 200,
    headers: {},
    body: res.status(200).json(posts),
  };
}
