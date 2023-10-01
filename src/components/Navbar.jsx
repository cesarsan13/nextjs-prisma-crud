import React from 'react'
import Link from 'next/link'
function Navbar() {
  return (
    <nav className='bg-slate-800'>
      <div className='container mx-auto flex justify-between items-center py-3'>
        <Link href={'/'}>
          <h3 className='font-bold text-3xl text-gray-400 hover:text-slate-300 cursor-pointer'>Next Crud</h3>
        </Link>
        <ul>
          <li>
            <Link className='text-slate-500 hover:text-slate-200' href={"/new"}>Nueva Tarea</Link>
          </li>
          <li>
            <Link className=' text-slate-500 hover:text-slate-200 ' href={"/about"}>Acerca De...</Link>
          </li>
        </ul>

      </div>
    </nav>
  )
}

export default Navbar