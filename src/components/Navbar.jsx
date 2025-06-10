// import React from 'react'
// import {assets} from '../assets/assets'

// const Navbar = ({setToken}) => {
//   return (
//     <div className='flex items-center py-2 px-[4%] justify-between'>
//         <img className='w-[max(10%,80px)]' src={assets.logo} alt="" />
//         <button onClick={()=>setToken('')} className='bg-gray-600 text-white px-5 py-2 sm:px-7 sm:py-2 rounded-full text-xs sm:text-sm'>Logout</button>
//     </div>
//   )
// }

// export default Navbar
"use client"
 import {assets} from '../assets/assets'

const Navbar = ({ setToken, setSidebarOpen, sidebarOpen }) => {
  const handleLogout = () => {
    setToken("")
    localStorage.removeItem("token")
  }

  return (
    <nav className="bg-white shadow-sm border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Left side */}
          <div className="flex items-center">
            {/* Mobile menu button */}
            <button
              onClick={() => setSidebarOpen(!sidebarOpen)}
              className="lg:hidden p-2 rounded-md text-gray-600 hover:text-gray-900 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-500"
            >
            </button>

            {/* Logo */}
            <div className="flex items-center ml-4 lg:ml-0">
             <img className='w-[max(10%,80px)]' src={assets.logo} alt="" />
               {/* <img className='w-[max(10%,80px)]' src={assets.logo} alt="" /> */}
            </div>
          </div>

          {/* Right side */}
          <div className="flex items-center space-x-4">
            {/* Notifications */}
            <button className="p-2 text-gray-600 hover:text-gray-900 hover:bg-gray-100 rounded-md">
  
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 17h5l-5 5v-5zM10.5 3.5a6 6 0 0 1 9 9l-9-9zM13.5 10.5L21 3"
                />
            </button>

            {/* Profile dropdown */}
            <div className="relative">
              <button
                onClick={handleLogout}
                className="flex items-center space-x-2 px-3 py-2 text-sm font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-100 rounded-md transition-colors"
              >
                <span className="hidden sm:block">Logout</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
