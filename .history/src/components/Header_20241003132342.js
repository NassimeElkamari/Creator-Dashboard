import React from 'react'

const Header = () => {
  return (
    <header  className="w-full bg-blue-600 text-white p-4 flex justify-between items-center">
      <h1 className="text-2xl font-bold">Admin Dashboard</h1>
        <div>
          {/* Add anything you need in the header like user profile, logout, notifications */}
          <button className="bg-blue-700 px-4 py-2 rounded hover:bg-blue-800">Logout</button>
        </div>
    </header>
  )
}

export default Header
