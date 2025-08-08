import { PlusCircle } from 'lucide-react'
import React, { useState } from 'react'

const AdminDashoad = () => {
   const [showProjectDrawer, setShowProjectDrawer] = useState(false);
    const [showTaskDrawer, setShowTaskDrawer] = useState(false);
    const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className="p-6 space-y-8">
      {/* Header Section */}
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold">Admin Dashboard</h1>
        <div className="flex gap-3">
          <button
            onClick={() => setShowProjectDrawer(true)}
            className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-md shadow-sm hover:bg-blue-700 transition"
          >
            <PlusCircle size={18} /> Add Project
          </button>
          <button
            onClick={() => setShowTaskDrawer(true)}
            className="flex items-center gap-2 px-4 py-2 bg-green-600 text-white rounded-md shadow-sm hover:bg-green-700 transition"
          >
            <PlusCircle size={18} /> Add Task
          </button>
        </div>
      </div>

      {/* Overview Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        <div className="bg-blue-100 p-6 rounded-xl shadow-sm">
          <h2 className="text-lg font-semibold text-blue-800">📂 Projects</h2>
          <p className="text-2xl font-bold text-blue-900 mt-2">12</p>
        </div>

        <div className="bg-green-100 p-6 rounded-xl shadow-sm">
          <h2 className="text-lg font-semibold text-green-800">
            ✅ Completed Tasks
          </h2>
          <p className="text-2xl font-bold text-green-900 mt-2">6</p>
        </div>

        <div className="bg-yellow-100 p-6 rounded-xl shadow-sm">
          <h2 className="text-lg font-semibold text-yellow-800">
            🧑‍💻 Team Members
          </h2>
          <p className="text-2xl font-bold text-yellow-900 mt-2">6</p>
        </div>
      </div>
    </div>
  )
}

export default AdminDashoad
