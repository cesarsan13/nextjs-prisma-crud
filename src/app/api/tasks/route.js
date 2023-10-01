import { NextResponse } from "next/server";
import { prisma } from "@/libs/prisma";
export async  function GET(){
    const tareas = await prisma.task.findMany()
    console.log(tareas)
    return NextResponse.json(tareas)
}
export async function POST(request){
    const data = await request.json()
    console.log(data)
    
    const {title,description} = data
    const res  = await prisma.task.create({
        data:{
            title,
            description
        }
    })
    return NextResponse.json(res)
}