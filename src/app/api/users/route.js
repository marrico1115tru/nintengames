import { NextResponse } from "next/server";
import prisma from "@/lib/prisma";

export async function GET() {
  const user = await prisma.users.findMany();

  return NextResponse.json(user);
}

export async function POST(request) {
  let json = await request.json();
  const usuario = await prisma.users.create({
    data: {
      fullname: json.fullname,
      email: json.email,
      password: json.password,
    },
  });
  return NextResponse.json(usuario);
}

export async function DELETE() {
  return NextResponse.json({ mensaje: "usuario eliminado correectamente" });
}