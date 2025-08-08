import React, { useState } from "react";

const UsersTable = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  return (
    <div>
      <table className="w-full bg-white/90 text-sm text-left">
        <thead className="bg-white text-dark sticky to-0 z-10">
          <tr>
            <th className="p-3">Name</th>
            <th className="p-3">Email</th>
            <th className="p-3">Role</th>
            <th className="p-3">Status</th>
            <th className="p-3">Actions</th>
          </tr>
        </thead>

        <tbody>
          <tr className="border-b border-black/15">
            <th className="p-3">
              <img src="" alt="" className="h-12 w-12 object-cover rounded" />
            </th>
            <th className="p-3"></th>
            <th className="p-3">$</th>
            <th className="p-3"></th>
            <th className="p-3"></th>
            <th className="p-3">
              <button className="text-blue-600 hover:underline mr-2">
                Edit
              </button>
              <button className="text-danger hover:underline">Delete</button>
            </th>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default UsersTable;
