import { NextResponse } from "next/server";
import prisma from "@/lib/prisma";

export async function GET(request, context) {
  const { params } = context;
  const platform = await prisma.platforms.findUnique({
    where: { id: parseInt(params.id) },
  });

  return NextResponse.json(platform);
}

export async function DELETE(request, context) {
  const { params } = context;
  const id = parseInt(params.id);

  const platform = await prisma.platforms.delete({
    where: { id },
  });

  return NextResponse.json(platform);
}

export async function PUT(request, context) {
  const { params } = context;
  const id = parseInt(params.id);
  const body = await request.json();

  const platform = await prisma.platforms.update({
    where: { id },
    data: {
      name: body.name,
    },
  });

  return NextResponse.json(platform);
}