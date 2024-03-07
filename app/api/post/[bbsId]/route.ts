import { NextResponse } from "next/server";
import prisma from "../../../../lib/prismaClient";

export async function GET(
  req: Request,
  { params }: { params: { bbsId: string } }
) {
  try {
    const bbsId = params.bbsId;
    const bbsDetailData = await prisma.post.findUnique({
      where: {
        id: parseInt(bbsId),
      },
    });
    return NextResponse.json(bbsDetailData);
  } catch (error) {
    console.log(error);
    return NextResponse.json(error);
  }
}
