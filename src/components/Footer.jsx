import { ImFacebook } from "react-icons/im";
import { SiInstagram } from "react-icons/si";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { IoLogoYoutube } from "react-icons/io";

const Footer = () => {
  return (
   <section className="w-full">
   <div className="mx-auto max-w-[80rem]">
   <div className='  h-0.5 mt-10 ml-6 mr-6 bg-black'></div>
   <nav className=' flex md:flex-row flex-col  items-center  pt-14'>
        
    <div>
        <img className='m-6' src="/src/assets/logo.png" alt="" />
    </div>
    <div className="  md:flex-row flex gap-4 md:pl-52 md:gap-8 md:p-0 p-4 ">
      <a href="/" className="text-black font-medium text-[16px] ">Entreurship</a>
      <a href="/" className="text-black font-medium text-[16px] ">Investments</a>
      <a href="/" className="text-black font-medium text-[16px] ">News</a>
      <a href="/" className="text-black font-medium text-[16px] ">Startups</a>
      <a href="/" className="text-black font-medium text-[16px] ">Stock Market</a>

    </div>

    <div className="  md:flex-row flex md:pl-52 gap-8 md:gap-4 ">
    <ImFacebook />
    <SiInstagram />
    <FaTwitter />
    <FaLinkedin />
    <IoLogoYoutube />
    </div>
  </nav>

  <div className=' h-0.5 mt-10 ml-6 mr-6 bg-gray-200'></div>
  <div className=" flex justify-center gap-16 p-10">
     <h1>© 2024 Copyright</h1>
     <h2 className="underline font-bold">Powered by Azkarullhassan</h2>
  </div>
   </div>
  </section>
  )
}

export default Footer