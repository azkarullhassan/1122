import { FaAngleRight } from "react-icons/fa6";

const Three = () => {
  return (
    <section className='w-full  py-28'>
    <main className='mx-auto max-w-[80rem] flex flex-col md:flex-row gap-5  md:p-0 p-4 '>
   {/* img 1 */}
      <div className='w-full md:w-1/2 '>
      <img className='max-w-full md:max-w-none h-auto' src="/src/assets/002.png" alt="arrow" />
     {/* content */}
      <div>
        <button className='border-[1px] mt-4 md:px-8 px-2 py-1 bg-[#008F62] rounded-[8px] text-[16px] text-white font-bold'>
        Stock market
          </button>
          <h1 className='font-bold text-[24px] pt-4'>Ethical issues in business today</h1>
          <p className='pt-2 font-medium text-[16px]'>Deserunt tempora explicabo sunt qui enim repellat. Ut mollitia consequatur nam
                   quia illo voluptate autem et facilis. Ni </p>
              
          <div className="  pt-6 flex gap-2 "> 
            <h2 className='font-bold text-[20px]'>Read more</h2>
          <FaAngleRight className="mt-2.5" />
          </div>
        </div>
     </div>
     {/* img 2 */}
     <div className='w-full md:w-1/2 '>
      <img className='max-w-full md:max-w-none h-auto' src="/src/assets/0002.png" alt="arrow" />
     {/* content */}
      <div>
        <button className='border-[1px] mt-4 md:px-8 px-2 py-1 bg-[#0067B9] rounded-[8px] text-[16px] text-white font-bold'>
        Investments
          </button>
          <h1 className='font-bold text-[24px] pt-4'>The changing face of business in the 21st century</h1>
          <p className='pt-2  font-medium text-[16px]'>Repudiandae est repellendus. Sunt eaque fugiat. Velit porro beatae excepturi
               aliquam velit et. Dolorum necessitatibus f
              </p>
          <div className="  pt-6 flex gap-2 "> 
            <h2 className='font-bold text-[20px]'>Read more</h2>
          <FaAngleRight className="mt-2.5" />
          </div>
        </div>
     </div>
    </main>
{/* second */}

    <main className='mx-auto max-w-[80rem] flex flex-col md:flex-row gap-5 mt-10 md:p-0 p-4'>
   {/* img 1 */}
      <div className='w-full md:w-1/2 '>
      <img className='max-w-full md:max-w-none h-auto' src="/src/assets/aaaa.png" alt="arrow" />
     {/* content */}
      <div>
        <button className='border-[1px] mt-4 md:px-8 px-2 py-1 bg-[#370085] rounded-[8px] text-[16px] text-white font-bold'>
        News
          </button>
          <h1 className='font-bold text-[24px] pt-4'>Advice from successful entrepreneurs</h1>
          <p className='pt-2 font-medium text-[16px]'>Omnis rem maiores autem voluptas vol ex quia rem quaerat
qui eius animi dignis
                   </p>
              
          <div className="  pt-6 flex gap-2 "> 
            <h2 className='font-bold text-[20px]'>Read more</h2>
          <FaAngleRight className="mt-2.5" />
          </div>
        </div>
     </div>
     {/* img 2 */}
     <div className='w-full md:w-1/2 '>
      <img className='max-w-full md:max-w-none h-auto' src="/src/assets/bbbb.png" alt="arrow" />
     {/* content */}
      <div>
        <button className='border-[1px] mt-4 md:px-8 px-2 py-1 bg-[#008F62] rounded-[8px] text-[16px] text-white font-bold'>
        Stock Market
          </button>
          <h1 className='font-bold text-[24px] pt-4'>The changing face of business in the 21st century</h1>
          <p className='pt-2  font-medium text-[16px]'>
          Quibusdam veniam cumque. Nihil nisi officiis qui commodi nulla
              </p>
          <div className="  pt-14 flex gap-2 "> 
            <h2 className='font-bold text-[20px]'>Read more</h2>
          <FaAngleRight className="mt-2.5" />
          </div>
        </div>
     </div>
    </main>
  </section>
);
};
  

export default Three