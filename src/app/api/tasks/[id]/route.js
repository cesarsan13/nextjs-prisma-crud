import { NextResponse } from "next/server";
import { prisma } from "@/libs/prisma";

export async function GET(request, { params }) {
  const tarea = await prisma.task.findUnique({
    where: {
      id: Number(params.id),
    },
  });
  // console.log(tarea);

  return NextResponse.json(tarea);
}
export function POST(request, { params }) {
  return NextResponse.json(`Creando tarea ${params.id}`);
}
export async function DELETE(request, { params }) {
  try {
    const tareaEliminada = await prisma.task.delete({
      where: {
        id: Number(params.id),
      },
    });
    console.log(tareaEliminada);
    return NextResponse.json(tareaEliminada);
  } catch (error) {
    return NextResponse.json(error.meta.cause);
  }
}
export async function PUT(request, { params }) {
  const data = await request.json();
  const tareaActualizada = await prisma.task.update({
    where: {
      id: Number(params.id),
    },
    data: data
  });
  return NextResponse.json(tareaActualizada);
}
