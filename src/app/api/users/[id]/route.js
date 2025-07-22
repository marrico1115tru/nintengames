import { NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function GET(request,{params}) {
  const user = await prisma.users.findUnique({where: { id: parseInt(params.id) }});

  return NextResponse.json(user);
}

export async function DELETE(request, { params }) {
  const id = parseInt(params.id);
  const user = await prisma.users.delete({
    where: { id: id },
  });

  return NextResponse.json(user);
}

export async function PUT(request, { params }) {
  const id = parseInt(params.id);
  const body = await request.json(); 

  const user = await prisma.users.update({
    where: { id: id },
    data: body, 
  });

  return NextResponse.json(user);
}