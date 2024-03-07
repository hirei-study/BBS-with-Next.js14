import { NextResponse } from "next/server";
import prisma from "../../../lib/prismaClient";

export async function GET(req: Request) {
  try {
    const allBBBSPosts = await prisma.post.findMany();
    return NextResponse.json(allBBBSPosts);
  } catch (error) {
    console.log(error);
    return NextResponse.json(error);
  }
}
// export async function POST(req: Request) {
//   try {
//     const { username, title, content } = await req.json();
//     const createPost = await prisma.post.create({
//       data: {
//         username: username,
//         title: title,
//         content: content,
//       },
//     });
//     return NextResponse.json(createPost);
//   } catch (error) {
//     console.log(error);
//     return NextResponse.json(error);
//   }
// }
