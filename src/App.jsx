// import React, { useEffect, useState } from 'react'
// import Navbar from './components/Navbar'
// import Sidebar from './components/Sidebar'
// import { Routes, Route } from 'react-router-dom'
// import Add from './pages/Add'
// import List from './pages/List'
// import Orders from './pages/Orders'
// import Login from './components/Login'
// import { ToastContainer } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';

// export const backendUrl = import.meta.env.VITE_BACKEND_URL
// export const currency = '$'

// const App = () => {

//   const [token, setToken] = useState(localStorage.getItem('token')?localStorage.getItem('token'):'');

//   useEffect(()=>{
//     localStorage.setItem('token',token)
//   },[token])

//   return (
//     <div className='bg-gray-50 min-h-screen'>
//       <ToastContainer />
//       {token === ""
//         ? <Login setToken={setToken} />
//         : <>
//           <Navbar setToken={setToken} />
//           <hr />
//           <div className='flex w-full'>
//             <Sidebar />
//             <div className='w-[70%] mx-auto ml-[max(5vw,25px)] my-8 text-gray-600 text-base'>
//               <Routes>
//                 <Route path='/add' element={<Add token={token} />} />
//                 <Route path='/list' element={<List token={token} />} />
//                 <Route path='/orders' element={<Orders token={token} />} />
//               </Routes>
//             </div>
//           </div>
//         </>
//       }
//     </div>
//   )
// }

// export default App

"use client"

import { useEffect, useState } from "react"
import Navbar from "./components/Navbar"
import Sidebar from "./components/Sidebar"
import { Routes, Route } from "react-router-dom"
import Add from "./pages/Add"
import List from "./pages/List"
import Orders from "./pages/Orders"
import Login from "./components/Login"
import { ToastContainer } from "react-toastify"
import "react-toastify/dist/ReactToastify.css"

export const backendUrl = import.meta.env.VITE_BACKEND_URL
export const currency = "$"

const App = () => {
  const [token, setToken] = useState(localStorage.getItem("token") ? localStorage.getItem("token") : "")
  const [sidebarOpen, setSidebarOpen] = useState(false)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    localStorage.setItem("token", token)
  }, [token])

  useEffect(() => {
    // Simulate initial loading
    const timer = setTimeout(() => {
      setLoading(false)
    }, 1000)
    return () => clearTimeout(timer)
  }, [])

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto mb-4"></div>
          <p className="text-gray-600">Loading Admin Panel...</p>
        </div>
      </div>
    )
  }

  return (
    <div className="bg-gray-50 min-h-screen">
      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
        toastClassName="rounded-lg shadow-lg"
      />

      {token === "" ? (
        <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-indigo-100">
          <Login setToken={setToken} />
        </div>
      ) : (
        <div className="min-h-screen">
          {/* Mobile Sidebar Overlay */}
          {sidebarOpen && (
            <div
              className="fixed inset-0 bg-black bg-opacity-50 z-40 lg:hidden"
              onClick={() => setSidebarOpen(false)}
            ></div>
          )}

          {/* Navbar */}
          <Navbar setToken={setToken} setSidebarOpen={setSidebarOpen} sidebarOpen={sidebarOpen} />

          <div className="flex">
            {/* Sidebar */}
            <div
              className={`fixed inset-y-0 left-0 z-50 w-64 bg-white shadow-lg transform transition-transform duration-300 ease-in-out lg:translate-x-0 lg:static lg:inset-0 ${
                sidebarOpen ? "translate-x-0" : "-translate-x-full"
              }`}
            >
              <Sidebar setSidebarOpen={setSidebarOpen} />
            </div>

            {/* Main Content */}
            <div className="flex-1 lg:ml-0">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
                <Routes>
                  <Route path="/add" element={<Add token={token} />} />
                  <Route path="/list" element={<List token={token} />} />
                  <Route path="/orders" element={<Orders token={token} />} />
                  <Route
                    path="/"
                    element={
                      <div className="space-y-6">
                        {/* Dashboard Header */}
                        <div className="bg-white rounded-lg shadow-sm p-6">
                          <h1 className="text-2xl font-bold text-gray-900 mb-2">Dashboard Overview</h1>
                          <p className="text-gray-600">Welcome to your admin panel</p>
                        </div>

                        {/* Quick Stats */}
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                          <div className="bg-white rounded-lg shadow-sm p-6">
                            <div className="flex items-center">
                              <div className="flex-shrink-0">
                                <div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center">
                                  <svg
                                    className="h-5 w-5 text-blue-600"
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                  >
                                    <path
                                      strokeLinecap="round"
                                      strokeLinejoin="round"
                                      strokeWidth={2}
                                      d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4"
                                    />
                                  </svg>
                                </div>
                              </div>
                              <div className="ml-4">
                                <p className="text-sm font-medium text-gray-600">Total Products</p>
                                <p className="text-2xl font-semibold text-gray-900">--</p>
                              </div>
                            </div>
                          </div>

                          <div className="bg-white rounded-lg shadow-sm p-6">
                            <div className="flex items-center">
                              <div className="flex-shrink-0">
                                <div className="w-8 h-8 bg-green-100 rounded-lg flex items-center justify-center">
                                  <svg
                                    className="h-5 w-5 text-green-600"
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                  >
                                    <path
                                      strokeLinecap="round"
                                      strokeLinejoin="round"
                                      strokeWidth={2}
                                      d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"
                                    />
                                  </svg>
                                </div>
                              </div>
                              <div className="ml-4">
                                <p className="text-sm font-medium text-gray-600">Total Orders</p>
                                <p className="text-2xl font-semibold text-gray-900">--</p>
                              </div>
                            </div>
                          </div>

                          <div className="bg-white rounded-lg shadow-sm p-6">
                            <div className="flex items-center">
                              <div className="flex-shrink-0">
                                <div className="w-8 h-8 bg-purple-100 rounded-lg flex items-center justify-center">
                                  <svg
                                    className="h-5 w-5 text-purple-600"
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                  >
                                    <path
                                      strokeLinecap="round"
                                      strokeLinejoin="round"
                                      strokeWidth={2}
                                      d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1"
                                    />
                                  </svg>
                                </div>
                              </div>
                              <div className="ml-4">
                                <p className="text-sm font-medium text-gray-600">Revenue</p>
                                <p className="text-2xl font-semibold text-gray-900">{currency}--</p>
                              </div>
                            </div>
                          </div>
                        </div>

                        {/* Quick Actions */}
                        <div className="bg-white rounded-lg shadow-sm p-6">
                          <h2 className="text-lg font-semibold text-gray-900 mb-4">Quick Actions</h2>
                          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                            <a
                              href="/add"
                              className="flex items-center p-4 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors"
                            >
                              <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center mr-3">
                                <svg
                                  className="h-5 w-5 text-blue-600"
                                  fill="none"
                                  stroke="currentColor"
                                  viewBox="0 0 24 24"
                                >
                                  <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                                  />
                                </svg>
                              </div>
                              <div>
                                <p className="font-medium text-gray-900">Add Product</p>
                                <p className="text-sm text-gray-600">Create new product</p>
                              </div>
                            </a>

                            <a
                              href="/list"
                              className="flex items-center p-4 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors"
                            >
                              <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center mr-3">
                                <svg
                                  className="h-5 w-5 text-green-600"
                                  fill="none"
                                  stroke="currentColor"
                                  viewBox="0 0 24 24"
                                >
                                  <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M4 6h16M4 10h16M4 14h16M4 18h16"
                                  />
                                </svg>
                              </div>
                              <div>
                                <p className="font-medium text-gray-900">View Products</p>
                                <p className="text-sm text-gray-600">Manage inventory</p>
                              </div>
                            </a>

                            <a
                              href="/orders"
                              className="flex items-center p-4 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors"
                            >
                              <div className="w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center mr-3">
                                <svg
                                  className="h-5 w-5 text-purple-600"
                                  fill="none"
                                  stroke="currentColor"
                                  viewBox="0 0 24 24"
                                >
                                  <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"
                                  />
                                </svg>
                              </div>
                              <div>
                                <p className="font-medium text-gray-900">Manage Orders</p>
                                <p className="text-sm text-gray-600">Track & update</p>
                              </div>
                            </a>
                          </div>
                        </div>
                      </div>
                    }
                  />
                </Routes>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default App
