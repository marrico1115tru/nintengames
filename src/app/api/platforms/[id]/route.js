import { NextResponse } from "next/server";
import prisma from "@/lib/prisma";

export async function GET() {
  const plarform = await prisma.platforms.findMany();

  return NextResponse.json(plarform);
}

export async function POST(request) {
  let json = await request.json();
  const plarform = await prisma.platforms.create({
    data: {
      name: json.name,
    },
  });
  return NextResponse.json(plarform);
}