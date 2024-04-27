import { FaAngleRight } from "react-icons/fa6";

const Two = () => {
  return (
    <section className='w-full'>
       <main className=' flex md:flex-row flex-col justify-center md:p-0 p-10 md:gap-6 '>
       <div >
        <img className='' src="/src/assets/pic1 (3).png" alt="arrow" />
        <button className='border-[1px] mt-4 md:px-8 px-2 py-1 bg-[#370085] rounded-[8px] text-[16px] text-white font-bold'>
          News
          </button>
          <h1 className='font-bold text-[20px] pt-4'>How to make your business more <br />
            sustainable</h1>
            <p className='pt-2'>Deleniti pariatur et voluptas. Nihil consec non. <br /> Sit quod esse molestiae </p>
            <div className="  pt-2 flex gap-2 "> 
            <h2 className='font-bold text-[20px] '>Read more</h2>
          <FaAngleRight className="mt-2.5" />
          </div>
            
        </div>
        <div>
        <img className='md:pt-0 pt-4' src="/src/assets/pic1 (2).png" alt="arrow" />
        <button className='border-[1px] mt-4 md:px-8 px-2 py-1 bg-[#0067B9] rounded-[8px] text-[16px] text-white font-bold'>
        Investments
          </button>
          <h1 className='font-bold text-[20px] pt-4'>Businesses that are doing good</h1>
          <p className='pt-4'>Aperiam rerum quam vitae aut repellendus qui. Eavelit ut <br /> ab iusto corrupti praesentium est quam vita</p>
          <div className="  pt-6 flex gap-2 "> 
            <h2 className='font-bold text-[20px]'>Read more</h2>
          <FaAngleRight className="mt-2.5" />
          </div>
        </div>
        <div>
        <img className="md:pt-0 pt-4" src="/src/assets/pic1 (1).png" alt="arrow" />
        <button className='border-[1px] mt-4 md:px-8 px-2 py-1 bg-[#3F51B5] rounded-[8px] text-[16px] text-white font-bold'>
        Startups
          </button>
          <h1 className='font-bold text-[20px] pt-4 '>Community-minded businesses</h1>
          <p className='pt-6'>Sed qui suscipit debitis et molestias. Fugiat quidemvel re <br /> repellat est et qui. Es</p>
          <div className="  pt-4 flex gap-2 "> 
            <h2 className='font-bold text-[20px]'>Read more</h2>
          <FaAngleRight className="mt-2.5" />
          </div>
        </div>
       </main>

{/* second */}

       <main className=' flex md:flex-row flex-col justify-center md:p-0 p-10 gap-6 pt-24'>
       <div >
        <img className='' src="/src/assets/111.png" alt="arrow" />
        <button className='border-[1px] mt-4 md:px-8 px-2 py-1 bg-[#370085] rounded-[8px] text-[16px] text-white font-bold'>
          News
          </button>
          <h1 className='font-bold text-[20px] pt-4'>
          Business news for students</h1>
            <p className='pt-2'>Provident quaerat at nisi dolorem vel fac</p>
            <div className="  pt-16 flex gap-2 "> 
            <h2 className='font-bold text-[20px]'>Read more</h2>
          <FaAngleRight className="mt-2.5" />
          </div>
            
        </div>
        <div>
        <img className='' src="/src/assets/222.png" alt="arrow" />
        <button className='border-[1px] mt-4 md:px-8 px-2 py-1 bg-[#008F62] rounded-[8px] text-[16px] text-white font-bold'>
        Stock market
          </button>
          <h1 className='font-bold text-[20px] pt-4'>How to get ahead in business</h1>
          <p className='pt-2'>Ad cupiditate excepturi dolores quam et <br /> et sed
               um minima. Et vitae voluptates <br /> quaerat eum esse
                 possimus repudiandae ut. Im</p>
          <div className="  pt-6 flex gap-2 "> 
            <h2 className='font-bold text-[20px]'>Read more</h2>
          <FaAngleRight className="mt-2.5" />
          </div>
        </div>
        <div>
        <img  src="/src/assets/333.png" alt="arrow" />
        <button className='border-[1px] mt-4 md:px-8 px-2 py-1 bg-[#3F51B5] rounded-[8px] text-[16px] text-white font-bold'>
        Startups
          </button>
          <h1 className='font-bold text-[20px] pt-4 '>Startups to watch out for in 2022</h1>
          <p className='pt-6'>Id rerum doloremque aut voluptatem blanditiis <br />
           nesciunt in et et. Corporis a harum dolor ut est
           adipisc</p>
          <div className="  pt-7 flex gap-2 "> 
            <h2 className='font-bold text-[20px]'>Read more</h2>
          <FaAngleRight className="mt-2.5" />
          </div>
        </div>
       </main>
       
        
    </section>
  )
}

export default Two