import React from 'react'
import Sidebar from '../components/dashboard/Sidebar'
import { Outlet } from 'react-router-dom'
import Topbar from '../components/dashboard/Topbar'

const UserLayout = () => {
  return (
    <div className='flex max-w-screen-2xl min-h-screen mx-auto bg-gradient-to-br from-black via-slate-900 to-black'>

      <aside className="hidden md:block w-40 fixed h-full backdrop-blur-xl border-r border-white/10 bg-white/5 shadow-xl shadow-pink-100/10 z-10">
        <Sidebar />
      </aside>

      <main className="flex-1 ml-40 w-full overflow-x-hidden">
        <div className="sticky top-0 z-40 flex justify-between items-center backdrop-blur-xl border-b border-white/10 bg-white/5 shadow-xl shadow-pink-100/10 text-white p-2">
          <div>
            <h1 className="text-lg font-bold">Hiii Mahanoor khan</h1>
            <h4>2nd August, 2025</h4>
          </div>

          <Topbar />
        </div>
        <div className="p-4">
          <Outlet />
          
        </div>
      </main>
    </div>
  )
}

export default UserLayout
