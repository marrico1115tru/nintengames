import { NextResponse } from "next/server";
import prisma from "@/lib/prisma";

export async function GET(request, { params }) {
  const id = parseInt(params.id);
  const categori = await prisma.categories.findUnique({
    where: { id },
  });

  return NextResponse.json(categori);
}

export async function DELETE(request, { params }) {
  const id = parseInt(params.id);

  const categori = await prisma.categories.delete({
    where: { id },
  });

  return NextResponse.json(categori);
}

export async function PUT(request, { params }) {
  const id = parseInt(params.id);
  const body = await request.json();

  const categori = await prisma.categories.update({
    where: { id },
    data: {
      name: body.name,
    },
  });

  return NextResponse.json(categori);
}