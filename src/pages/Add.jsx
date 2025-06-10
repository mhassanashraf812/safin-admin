// import React, { useState } from 'react'
// import {assets} from '../assets/assets'
// import axios from 'axios'
// import { backendUrl } from '../App'
// import { toast } from 'react-toastify'

// const Add = ({token}) => {

//   const [image1,setImage1] = useState(false)
//   const [image2,setImage2] = useState(false)
//   const [image3,setImage3] = useState(false)
//   const [image4,setImage4] = useState(false)
//   const [colors, setColors] = useState([]);

//    const [name, setName] = useState("");
//    const [description, setDescription] = useState("");
//    const [price, setPrice] = useState("");
//    const [discountPrice, setDiscountPrice] = useState("");
//    const [category, setCategory] = useState("2 Piece");
//    const [collection, setCollection] = useState("Summer");
//    const [subCategory, setSubCategory] = useState("Topwear");
//    const [bestseller, setBestseller] = useState(false);
//    const [soldOut, setSoldOut] = useState(false);
//    const [sizes, setSizes] = useState([]);

//    const onSubmitHandler = async (e) => {
//     e.preventDefault();

//     try {
      
//       const formData = new FormData()

//       formData.append("name",name)
//       formData.append("description",description)
//       formData.append("price",price)
//       formData.append("discountPrice", discountPrice)
//       formData.append("category",category)
//       formData.append("collection",collection)
//       formData.append("subCategory",subCategory)
//       formData.append("bestseller",bestseller)
//       formData.append("soldOut",soldOut)
//       formData.append("sizes",JSON.stringify(sizes))
//       formData.append("colors", JSON.stringify(colors)); // 🆕
//      // Log formData entries
//      console.log("Colors being sent:", JSON.stringify(colors));

//       image1 && formData.append("image1",image1)
//       image2 && formData.append("image2",image2)
//       image3 && formData.append("image3",image3)
//       image4 && formData.append("image4",image4)

//       const response = await axios.post(backendUrl + "/api/product/add",formData,{headers:{token}})

//       if (response.data.success) {
//         toast.success(response.data.message)
//         setName('')
//         setDescription('')
//         setImage1(false)
//         setImage2(false)
//         setImage3(false)
//         setImage4(false)
//         setPrice('')
//         setDiscountPrice('')
//       } else {
//         toast.error(response.data.message)
//       }

//     } catch (error) {
//       console.log(error);
//       toast.error(error.message)
//     }
//    }

   
//   return (
//     <form onSubmit={onSubmitHandler} className='flex flex-col w-full items-start gap-3'>
//         <div>
//           <p className='mb-2'>Upload Image</p>

//           <div className='flex gap-2'>
//             <label htmlFor="image1">
//               <img className='w-20' src={!image1 ? assets.upload_area : URL.createObjectURL(image1)} alt="" />
//               <input onChange={(e)=>setImage1(e.target.files[0])} type="file" id="image1" hidden/>
//             </label>
//             <label htmlFor="image2">
//               <img className='w-20' src={!image2 ? assets.upload_area : URL.createObjectURL(image2)} alt="" />
//               <input onChange={(e)=>setImage2(e.target.files[0])} type="file" id="image2" hidden/>
//             </label>
//             <label htmlFor="image3">
//               <img className='w-20' src={!image3 ? assets.upload_area : URL.createObjectURL(image3)} alt="" />
//               <input onChange={(e)=>setImage3(e.target.files[0])} type="file" id="image3" hidden/>
//             </label>
//             <label htmlFor="image4">
//               <img className='w-20' src={!image4 ? assets.upload_area : URL.createObjectURL(image4)} alt="" />
//               <input onChange={(e)=>setImage4(e.target.files[0])} type="file" id="image4" hidden/>
//             </label>
//           </div>
//         </div>

//         <div className='w-full'>
//           <p className='mb-2'>Product name</p>
//           <input onChange={(e)=>setName(e.target.value)} value={name} className='w-full max-w-[500px] px-3 py-2' type="text" placeholder='Type here' required/>
//         </div>

//         <div className='w-full'>
//           <p className='mb-2'>Product description</p>
//           <textarea onChange={(e)=>setDescription(e.target.value)} value={description} className='w-full max-w-[500px] px-3 py-2' type="text" placeholder='Write content here' required/>
//         </div>

//         <div className='flex flex-col sm:flex-row gap-2 w-full sm:gap-8'>

//             <div>
//               <p className='mb-2'>Filter</p>
//               <select onChange={(e) => setCategory(e.target.value)} className='w-full px-3 py-2'>
//                   <option value="2 Piece">2 Piece</option>
//                   <option value="3 Piece">3 Piece</option>
              
//               </select>
//             </div>
//             <div>
//               <p className='mb-2'>Collection</p>
//               <select value={collection} onChange={(e) => setCollection(e.target.value)} className='w-full px-3 py-2'>
//                   <option value="Cord Set">Cord Sets Collections</option>
//                   <option value="Summer">Summer Collections</option>
//                   <option value="Festive">Festive Collections</option>
//                   <option value="casual">Casual Collections</option>
//                   <option value="ThreePiece">Three Piece Collections</option>

//               </select>
//             </div>

//             {/* <div>
//               <p className='mb-2'>Sub category</p>s
//               <select onChange={(e) => setSubCategory(e.target.value)} className='w-full px-3 py-2'>
//                   <option value="Topwear">Topwear</option>
//                   <option value="Bottomwear">Bottomwear</option>
//                   <option value="Summerwear">Summerwear</option>
//               </select>
//             </div> */}

//             <div>
//               <p className='mb-2'>Product Price</p>
//               <input onChange={(e) => setPrice(e.target.value)} value={price} className='w-full px-3 py-2 sm:w-[120px]' type="Number" placeholder='25' />
//               <p className='mb-2 mt-2'>Discount Price (optional)</p>
//               <input onChange={(e) => setDiscountPrice(e.target.value)} value={discountPrice} className='w-full px-3 py-2 sm:w-[120px]' type="Number" placeholder='20' />
//             </div>

//         </div>

//         <div>
//           <p className='mb-2'>Product Sizes</p>
//           <div className='flex gap-3'>
//             <div onClick={()=>setSizes(prev => prev.includes("S") ? prev.filter( item => item !== "S") : [...prev,"S"])}>
//               <p className={`${sizes.includes("S") ? "bg-pink-100" : "bg-slate-200" } px-3 py-1 cursor-pointer`}>S</p>
//             </div>
            
//             <div onClick={()=>setSizes(prev => prev.includes("M") ? prev.filter( item => item !== "M") : [...prev,"M"])}>
//               <p className={`${sizes.includes("M") ? "bg-pink-100" : "bg-slate-200" } px-3 py-1 cursor-pointer`}>M</p>
//             </div>

//             <div onClick={()=>setSizes(prev => prev.includes("L") ? prev.filter( item => item !== "L") : [...prev,"L"])}>
//               <p className={`${sizes.includes("L") ? "bg-pink-100" : "bg-slate-200" } px-3 py-1 cursor-pointer`}>L</p>
//             </div>

//             <div onClick={()=>setSizes(prev => prev.includes("XL") ? prev.filter( item => item !== "XL") : [...prev,"XL"])}>
//               <p className={`${sizes.includes("XL") ? "bg-pink-100" : "bg-slate-200" } px-3 py-1 cursor-pointer`}>XL</p>
//             </div>

//             <div onClick={()=>setSizes(prev => prev.includes("Free Size") ? prev.filter( item => item !== "Free Size") : [...prev,"Free Size"])}>
//               <p className={`${sizes.includes("Free Size") ? "bg-pink-100" : "bg-slate-200" } px-3 py-1 cursor-pointer`}>Free Size</p>
//             </div>
//           </div>
//         </div>
//         <div>
//   <p className='mb-2'>Product Colors</p>
//   <div className='flex gap-3 flex-wrap'>
//     {["Red", "Blue", "Black", "White", "Green", "Yellow", "Purple", "Brown", "Pink", "Gray"].map(color => (
//       <div
//         key={color}
//         onClick={() =>
//           setColors(prev =>
//             prev.includes(color)
//               ? prev.filter(item => item !== color)
//               : [...prev, color]
//           )
//         }
//       >
//         <p className={`${colors.includes(color) ? "bg-pink-100" : "bg-slate-200"} px-3 py-1 cursor-pointer`}>
//           {color}
//         </p>
//       </div>
//     ))}
//   </div>
// </div>

//         <div className='flex gap-2 mt-2'>
//           <input onChange={() => setBestseller(prev => !prev)} checked={bestseller} type="checkbox" id='bestseller' />
//           <label className='cursor-pointer' htmlFor="bestseller">Add to bestseller</label>
//         </div>
//         <div className='flex gap-2 mt-2'>
//           <input onChange={() => setSoldOut(prev => !prev)} checked={soldOut} type="checkbox" id='soldOut' />
//           <label className='cursor-pointer' htmlFor="soldOut">Sold Out</label>
//         </div>

//         <button type="submit" className='w-28 py-3 mt-4 bg-black text-white'>ADD</button>

//     </form>
//   )
// }

// export default Add
"use client"

import { useState } from "react"
import axios from "axios"
import { backendUrl } from "../App"
import { toast } from "react-toastify"

const Add = ({ token }) => {
  const [image1, setImage1] = useState(false)
  const [image2, setImage2] = useState(false)
  const [image3, setImage3] = useState(false)
  const [image4, setImage4] = useState(false)
  const [colors, setColors] = useState([])
  const [name, setName] = useState("")
  const [description, setDescription] = useState("")
  const [price, setPrice] = useState("")
  const [discountPrice, setDiscountPrice] = useState("")
  const [category, setCategory] = useState("2 Piece")
  const [collection, setCollection] = useState("Summer")
  const [subCategory, setSubCategory] = useState("Topwear")
  const [bestseller, setBestseller] = useState(false)
  const [soldOut, setSoldOut] = useState(false)
  const [sizes, setSizes] = useState([])
  const [loading, setLoading] = useState(false)

  const onSubmitHandler = async (e) => {
    e.preventDefault()
    setLoading(true)

    try {
      const formData = new FormData()

      formData.append("name", name)
      formData.append("description", description)
      formData.append("price", price)
      formData.append("discountPrice", discountPrice)
      formData.append("category", category)
      formData.append("collection", collection)
      formData.append("subCategory", subCategory)
      formData.append("bestseller", bestseller)
      formData.append("soldOut", soldOut)
      formData.append("sizes", JSON.stringify(sizes))
      formData.append("colors", JSON.stringify(colors))

      console.log("Colors being sent:", JSON.stringify(colors))

      image1 && formData.append("image1", image1)
      image2 && formData.append("image2", image2)
      image3 && formData.append("image3", image3)
      image4 && formData.append("image4", image4)

      const response = await axios.post(backendUrl + "/api/product/add", formData, { headers: { token } })

      if (response.data.success) {
        toast.success(response.data.message)
        // Reset form
        setName("")
        setDescription("")
        setImage1(false)
        setImage2(false)
        setImage3(false)
        setImage4(false)
        setPrice("")
        setDiscountPrice("")
        setColors([])
        setSizes([])
        setBestseller(false)
        setSoldOut(false)
      } else {
        toast.error(response.data.message)
      }
    } catch (error) {
      console.log(error)
      toast.error(error.message)
    } finally {
      setLoading(false)
    }
  }

  const colorOptions = [
    { name: "Red", bg: "bg-red-500" },
    { name: "Blue", bg: "bg-blue-500" },
    { name: "Black", bg: "bg-black" },
    { name: "White", bg: "bg-white border-2 border-gray-300" },
    { name: "Green", bg: "bg-green-500" },
    { name: "Yellow", bg: "bg-yellow-400" },
    { name: "Purple", bg: "bg-purple-500" },
    { name: "Brown", bg: "bg-amber-800" },
    { name: "Pink", bg: "bg-pink-500" },
    { name: "Gray", bg: "bg-gray-500" },
  ]

  const sizeOptions = ["S", "M", "L", "XL", "Free Size"]

  return (
    <div className="max-w-4xl mx-auto p-6">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-2xl font-bold text-gray-900">Add New Product</h1>
        <p className="text-gray-600">Create a new product listing for your store</p>
      </div>

      <form onSubmit={onSubmitHandler} className="space-y-8">
        {/* Image Upload Section */}
        <div className="bg-white p-6 rounded-lg border shadow-sm">
          <div className="flex items-center gap-2 mb-4">
            <svg className="h-5 w-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
              />
            </svg>
            <h3 className="text-lg font-semibold text-gray-900">Product Images</h3>
          </div>
          <p className="text-sm text-gray-600 mb-4">Upload up to 4 images of your product</p>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { image: image1, setImage: setImage1, id: "image1" },
              { image: image2, setImage: setImage2, id: "image2" },
              { image: image3, setImage: setImage3, id: "image3" },
              { image: image4, setImage: setImage4, id: "image4" },
            ].map(({ image, setImage, id }, index) => (
              <label
                key={id}
                htmlFor={id}
                className="relative group cursor-pointer border-2 border-dashed border-gray-300 rounded-lg p-4 hover:border-blue-400 transition-colors"
              >
                <div className="aspect-square flex items-center justify-center">
                  {!image ? (
                    <div className="text-center">
                      <svg
                        className="h-8 w-8 text-gray-400 mx-auto mb-2"
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
                      <p className="text-xs text-gray-500">Upload Image {index + 1}</p>
                    </div>
                  ) : (
                    <img
                      className="w-full h-full object-cover rounded"
                      src={URL.createObjectURL(image) || "/placeholder.svg"}
                      alt={`Product ${index + 1}`}
                    />
                  )}
                </div>
                <input onChange={(e) => setImage(e.target.files[0])} type="file" id={id} hidden accept="image/*" />
              </label>
            ))}
          </div>
        </div>

        {/* Basic Information */}
        <div className="bg-white p-6 rounded-lg border shadow-sm">
          <div className="flex items-center gap-2 mb-4">
            <svg className="h-5 w-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
            <h3 className="text-lg font-semibold text-gray-900">Basic Information</h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="md:col-span-2">
              <label className="block text-sm font-medium text-gray-700 mb-2">Product Name</label>
              <input
                onChange={(e) => setName(e.target.value)}
                value={name}
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                type="text"
                placeholder="Enter product name"
                required
              />
            </div>

            <div className="md:col-span-2">
              <label className="block text-sm font-medium text-gray-700 mb-2">Product Description</label>
              <textarea
                onChange={(e) => setDescription(e.target.value)}
                value={description}
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent h-24 resize-none"
                placeholder="Describe your product..."
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Regular Price</label>
              <div className="relative">
                <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500">$</span>
                <input
                  onChange={(e) => setPrice(e.target.value)}
                  value={price}
                  className="w-full pl-8 pr-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  type="number"
                  placeholder="0.00"
                  min="0"
                  step="0.01"
                  required
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Discount Price (Optional)</label>
              <div className="relative">
                <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500">$</span>
                <input
                  onChange={(e) => setDiscountPrice(e.target.value)}
                  value={discountPrice}
                  className="w-full pl-8 pr-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  type="number"
                  placeholder="0.00"
                  min="0"
                  step="0.01"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Categories */}
        <div className="bg-white p-6 rounded-lg border shadow-sm">
          <div className="flex items-center gap-2 mb-4">
            <svg className="h-5 w-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z"
              />
            </svg>
            <h3 className="text-lg font-semibold text-gray-900">Categories</h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Filter</label>
              <select
                onChange={(e) => setCategory(e.target.value)}
                value={category}
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white"
              >
                <option value="2 Piece">2 Piece</option>
                <option value="3 Piece">3 Piece</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Collection</label>
              <select
                value={collection}
                onChange={(e) => setCollection(e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white"
              >
                <option value="Cord Set">Cord Sets Collections</option>
                <option value="Summer">Summer Collections</option>
                <option value="Festive">Festive Collections</option>
                <option value="casual">Casual Collections</option>
                <option value="ThreePiece">Three Piece Collections</option>
              </select>
            </div>
          </div>
        </div>

        {/* Sizes */}
        <div className="bg-white p-6 rounded-lg border shadow-sm">
          <div className="flex items-center gap-2 mb-4">
            <svg className="h-5 w-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5l-5-5m5 5v-4m0 4h-4"
              />
            </svg>
            <h3 className="text-lg font-semibold text-gray-900">Available Sizes</h3>
          </div>
          <p className="text-sm text-gray-600 mb-4">Select all available sizes for this product</p>

          <div className="flex flex-wrap gap-3">
            {sizeOptions.map((size) => (
              <button
                key={size}
                type="button"
                onClick={() =>
                  setSizes((prev) => (prev.includes(size) ? prev.filter((item) => item !== size) : [...prev, size]))
                }
                className={`px-4 py-2 rounded-md border-2 transition-all ${
                  sizes.includes(size)
                    ? "bg-blue-500 text-white border-blue-500"
                    : "bg-white text-gray-700 border-gray-300 hover:border-blue-300"
                }`}
              >
                {size}
              </button>
            ))}
          </div>
        </div>

        {/* Colors */}
        <div className="bg-white p-6 rounded-lg border shadow-sm">
          <div className="flex items-center gap-2 mb-4">
            <svg className="h-5 w-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zM7 3H5a2 2 0 00-2 2v12a4 4 0 004 4h2M9 3h10a2 2 0 012 2v12a4 4 0 01-2 2H9"
              />
            </svg>
            <h3 className="text-lg font-semibold text-gray-900">Available Colors</h3>
          </div>
          <p className="text-sm text-gray-600 mb-4">Select all available colors for this product</p>

          <div className="grid grid-cols-2 sm:grid-cols-5 gap-3">
            {colorOptions.map((color) => (
              <button
                key={color.name}
                type="button"
                onClick={() =>
                  setColors((prev) =>
                    prev.includes(color.name) ? prev.filter((item) => item !== color.name) : [...prev, color.name],
                  )
                }
                className={`flex items-center gap-3 px-4 py-3 rounded-md border-2 transition-all ${
                  colors.includes(color.name)
                    ? "bg-blue-50 border-blue-500"
                    : "bg-white border-gray-300 hover:border-blue-300"
                }`}
              >
                <div className={`w-4 h-4 rounded-full ${color.bg}`}></div>
                <span className="text-sm font-medium">{color.name}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Additional Options */}
        <div className="bg-white p-6 rounded-lg border shadow-sm">
          <div className="flex items-center gap-2 mb-4">
            <svg className="h-5 w-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 100 4m0-4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 100 4m0-4v2m0-6V4"
              />
            </svg>
            <h3 className="text-lg font-semibold text-gray-900">Additional Options</h3>
          </div>

          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <input
                onChange={() => setBestseller((prev) => !prev)}
                checked={bestseller}
                type="checkbox"
                id="bestseller"
                className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500"
              />
              <label htmlFor="bestseller" className="text-sm font-medium text-gray-700 cursor-pointer">
                Add to bestseller
              </label>
            </div>

            <div className="flex items-center gap-3">
              <input
                onChange={() => setSoldOut((prev) => !prev)}
                checked={soldOut}
                type="checkbox"
                id="soldOut"
                className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500"
              />
              <label htmlFor="soldOut" className="text-sm font-medium text-gray-700 cursor-pointer">
                Mark as sold out
              </label>
            </div>
          </div>
        </div>

        {/* Submit Button */}
        <div className="flex justify-end">
          <button
            type="submit"
            disabled={loading}
            className="px-8 py-3 bg-blue-600 text-white font-medium rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
          >
            {loading ? (
              <div className="flex items-center gap-2">
                <svg className="animate-spin h-4 w-4" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                  <path
                    className="opacity-75"
                    fill="currentColor"
                    d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                  ></path>
                </svg>
                Adding Product...
              </div>
            ) : (
              "Add Product"
            )}
          </button>
        </div>
      </form>
    </div>
  )
}

export default Add
