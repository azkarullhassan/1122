import { FaAngleRight } from "react-icons/fa6";

const One = () => {
  return (
    <section className='w-full md:py-28 py-8'>
    <main className='mx-auto max-w-[80rem] flex flex-col md:flex-row gap-5 px-4 py-[30px]'>
    
     
      {/* image div */}
      <div className='w-full md:w-1/2 flex justify-center'>
      <img className='max-w-full md:max-w-none h-auto' src="/src/assets/img 1.png" alt="arrow" />
     </div>
     <div >
        
        
        <div className=' p-14 '>
          <button className='border-[1px] md:px-8 px-3 py-3 bg-[#0067B9] rounded-[8px] text-[16px] text-white font-bold'>
          Investments
          </button>
          <h3 className='font-bold text-[26px] pt-4'>Socially responsible businesses to support</h3>
          <p className='font-normal text-[16px] pt-4'>Voluptas voluptatem voluptate qui asperiores cum. Incidunt voluptatibus
           voluptatum consequuntur maiores occaeca</p>
           <div className=" pt-4 flex gap-2 ">
           <h1 className='font-bold text-[26px] ' >Read more</h1>
          <FaAngleRight className=" mt-4"/>
          </div>
        </div>
      </div>

    </main>
  </section>
);
};
  


export default One