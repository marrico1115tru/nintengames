import { NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function GET(request, props) {
  const params = await props.params;
  const game = await prisma.games.findUnique({where: { id: parseInt(params.id) }});

  return NextResponse.json(game);
}

export async function DELETE(request, props) {
  const params = await props.params;
  const id = parseInt(params.id);
  const game = await prisma.games.delete({
    where: { id: id },
  });

return NextResponse.json({
  mensaje: "Game eliminado correctamente",
  game
});}

export async function PUT(request, props) {
  const params = await props.params;
  const id = parseInt(params.id);
  const body = await request.json();

  const game = await prisma.games.update({
    where: { id: id },
    data: body, 
  });

return NextResponse.json({
  mensaje: "Game actualizado correctamente",
  game
});}