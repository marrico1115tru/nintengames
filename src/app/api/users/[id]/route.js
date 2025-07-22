import { NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function GET(request, props) {
  const params = await props.params;
  const user = await prisma.users.findUnique({where: { id: parseInt(params.id) }});

  return NextResponse.json(user);
}

export async function DELETE(request, props) {
  const params = await props.params;
  const id = parseInt(params.id);
  const user = await prisma.users.delete({
    where: { id: id },
  });

return NextResponse.json({
  mensaje: "Usuario eliminado correctamente",
  user
});}

export async function PUT(request, props) {
  const params = await props.params;
  const id = parseInt(params.id);
  const body = await request.json();

  const user = await prisma.users.update({
    where: { id: id },
    data: body, 
  });

return NextResponse.json({
  mensaje: "Usuario actualizado correctamente",
  user
});}