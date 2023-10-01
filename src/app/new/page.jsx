"use client"
import { useRouter } from "next/navigation"
import { useEffect, useState } from "react";
function NewPage({ params }) {

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const router = useRouter()

  useEffect(() => {
    if (params.id) {
      fetch(`/api/tasks/${params.id}`)
        .then(res => res.json())
        .then(data => {
          setTitle(data.title)
          setDescription(data.description)
        })
    }
  }, []);

  const onSubmit = async (event) => {
    event.preventDefault()
    let res;
    if (params.id) {
      res = await fetch(`/api/tasks/${params.id}`, {
        method: 'PUT',
        body: JSON.stringify({ title, description }),
        headers: {
          'Content-Type': 'application/json'
        }
      })
    } else {
      res = await fetch('/api/tasks', {
        method: 'POST',
        body: JSON.stringify({ title, description }),
        headers: {
          'Content-Type': 'application/json'
        }
      })
    }
    if (res.status === 200) {
      router.refresh(); router.push('/');
    }

  }
  return (
    <div className="h-screen flex justify-center items-center">
      <form action="" className="bg-slate-800 p-10 sm:w-1/3 w-full" onSubmit={onSubmit}>
        <label htmlFor="title" className="font-bold text-sm">Titulo Tarea</label>
        <input type="text" id="title" className="border border-gray-400,p-2 mb-4 w-full" placeholder="Titulo" onChange={(e) => setTitle(e.target.value)} value={title} />
        <label htmlFor="description" className="font-bold text-sm">Descripcion</label>
        <textarea rows="3" id="description" className="border border-gray-400,p-2 mb-4 w-full" placeholder="Descripcion" onChange={(e) => setDescription(e.target.value)} value={description} ></textarea>
        <div className="flex justify-between">

          <button className=" bg-blue-700 hover:bg-green-700 text-white font-bold py-2 px-4 rounded">Crear</button>
          {
            params.id && (
              <button type="button" className=" bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded ml-4"
                onClick={async ()=>{
                  const res = await fetch(`/api/tasks/${params.id}`,{
                    method:"DELETE",
                  })
                  const data = await res.json()
                  router.refresh(); router.push('/');
                  console.log(data)
                }}
              >Eliminar</button>

            )
          }
        </div>
      </form>


    </div>
  )
}

export default NewPage