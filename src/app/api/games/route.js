import { NextResponse } from "next/server";
import prisma from "@/lib/prisma";

export async function GET(request, context) {
  const { params } = context;
  const game = await prisma.games.findUnique({
    where: { id: parseInt(params.id) },
  });

  return NextResponse.json(game);
}

export async function DELETE(request, context) {
  const { params } = context;
  const id = parseInt(params.id);

  const game = await prisma.games.delete({
    where: { id },
  });

  return NextResponse.json(game);
}

export async function PUT(request, context) {
  const { params } = context;
  const id = parseInt(params.id);
  const body = await request.json();

  const game = await prisma.games.update({
    where: { id },
    data: {
      title: body.title,
      platform_id: body.platform_id,
      category_id: body.category_id,
      cover: body.cover,
      year: body.year,
    },
  });

  return NextResponse.json(game);
}