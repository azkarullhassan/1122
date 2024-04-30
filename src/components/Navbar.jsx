
  
 import React, { useState } from 'react'
import { IoMenu } from "react-icons/io5";

const Navbar = () => {
  let Links =[
    {name:"Entrepreneurship",link:"/"},
    {name:"Investments",link:"/"},
    {name:"News",link:"/"},
    {name:"Startups",link:"/"},
    {name:"Stock Market",link:"/"},
    
  ];
  let [open,setOpen]=useState(false);
return (
  <div className=' w-full'>
    <div className='mx-auto max-w-[80rem] md:flex items-center justify-between bg-white py-4 md:px-5 px-2'>
    <div>
             <img className='p-5' src="/src/assets/logo.png" alt="" />
         </div>
    
    <div onClick={()=>setOpen(!open)} className=' absolute right-8 top-6 cursor-pointer md:hidden'>
   
    <IoMenu className='text-3xl' name={open ? 'close':'menu'} /> 
    </div>
     

    <ul className={`md:flex md:items-center md:pb-0 pb-5 absolute md:static bg-white   left-0 w-full md:w-auto md:pl-0 pl-5 transition-all duration-500 ease-in ${open ? 'top-20 ':'top-[-490px]'}`}>
      {
        Links.map((link)=>(
          <li key={link.name} className='md:ml-8 font-medium text-[16px] md:my-0 my-5 '>
            <a href={link.link} className='  px-4 '>{link.name}</a>
           
          </li>
         
        ))
       
      }
     
    </ul>
   
    </div>
    <div className='  h-0.5   bg-black'></div>
  </div>
)
}

export default Navbar
