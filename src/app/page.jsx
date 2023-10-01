import { prisma } from "@/libs/prisma"
import TaskCard from "@/components/TaskCard"
async function getTasks(){
  return await prisma.task.findMany()
}
// export const revalidate = 60;
export const dynamic = 'force-dynamic';
async function HomePage() {
  const tasks = await getTasks()
  return (
    <section className="container mx-auto text-slate-50">

      <div className="grid grid-cols-3 gap-3 mt-10">
        {
          tasks.map((task)=>(
           <TaskCard key={task.id} task={task}/>
          ))
        }
      </div>

    </section>
  )
}

export default HomePage