import React from 'react'

const Header = () => {
  return (
    <div>
      <h1 className="text-2xl font-bold">Admin Dashboard</h1>
        <div>
          {/* Add anything you need in the header like user profile, logout, notifications */}
          <button className="bg-blue-700 px-4 py-2 rounded hover:bg-blue-800">Logout</button>
        </div>
    </div>
  )
}

export default Header
