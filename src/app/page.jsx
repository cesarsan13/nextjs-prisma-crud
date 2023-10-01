import { prisma } from "@/libs/prisma"
import TaskCard from "@/components/taskCard"
async function getTasks(){
  return await prisma.task.findMany()
}
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