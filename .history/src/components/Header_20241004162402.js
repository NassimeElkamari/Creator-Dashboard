import React from 'react'

const Header = () => {
  return (
    <header  className="w-full bg-blue-600 text-white p-4 ml-10 flex justify-between items-center">
      <h1 className="text-2xl font-bold">overview</h1>
        <div>
          <button className="bg-blue-700 px-4 py-2 rounded hover:bg-blue-800">Logout</button>
        </div>
    </header>
  )
}

export default Header
