import React from 'react'

const Layout = () => {
  return (
    <>
        <div className='grid m-4 gap-4 md:grid-cols-12'>
            <div className="shadow h-46 bg-orange-500 rounded md:col-span-2"></div>
            <div className="inset-shadow-sm inset-shadow-red-500 border border-red-800 h-46  rounded md:col-span-8"></div>
            <div className="shadow h-46 bg-red-500 rounded md:col-span-2"></div>

            <button className='bg-fuchsia-800 px-4 text-2xl text-white font-bold py-2 rounded shadow hover:rotate-180 transition-all duration-1000'>Click me</button>
        </div>
    </>
    
  )
}

export default Layout