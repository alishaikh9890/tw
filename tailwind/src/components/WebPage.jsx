import React from 'react'

const WebPage = () => {
  return (
    <div className='bg-slate-950 h-lvh'>


        <nav className='bg-indigo-200 h-14 flex justify-between items-center px-4 md:px-4'>
            <div className='text-indigo-700 text-2xl font-bold'>Navbar</div>
            <ul className='md:flex hidden font-semibold'>
                <li className='mx-[10px] cursor-pointer'>Home</li>
                <li className='mx-[10px] cursor-pointer'>About Us</li>
                <li className='mx-[10px] cursor-pointer'>Contact Us</li>
            </ul>
            <div className='hidden md:block px-2 py-1 bg-indigo-700 text-indigo-200 rounded font-semibold cursor-pointer'>Login/SignUp</div>
            <div className='md:hidden '>
                 <a href="" className='text-4xl'>&#8801;</a>
            </div>
        </nav>
        {/* navbar ends here */}

        
    </div>
  )
}

export default WebPage