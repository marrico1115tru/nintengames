import { NextResponse } from "next/server";
import prisma from "@/lib/prisma";

export async function GET() {
  const game = await prisma.games.findMany();

  return NextResponse.json(game);
}

export async function POST(request) {
  let json = await request.json();
  const game = await prisma.games.create({
    data: {
      title: json.title,
      platform_id: json.platform_id,
      category_id: json.category_id,
      cover: json.cover,
      year: json.year,
    },
  });
return NextResponse.json({
  mensaje: "Game creado correctamente",
  game
});}