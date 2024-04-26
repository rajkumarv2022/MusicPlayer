import React from 'react'

export default function Main() {
  return (
    <div className='flex flex-col bg-black gap-16'>

      <div className='w-full mt-4'>
        <nav className='w-full flex flex-row items-center justify-around text-white gap-4'>
        <button><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-bell"><path d="M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9"/><path d="M10.3 21a1.94 1.94 0 0 0 3.4 0"/></svg></button>
          <div className='flex flex-row border-2 border-green-500 w-full max-w-xl h-auto items-center justify-center'>
            <input type="text" placeholder='Search a song' className='w-full  py-2 px-2 text-black border-r-2 border-green-500 outline-none'/>
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="w-12 lucide lucide-search cursor-pointer"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.3-4.3"/></svg>
          </div>
        <button>profile <img src='' /> </button>
        </nav>
      </div>

      <div className='text-white mt-4 flex flex-col gap-10'>

        <nav className='columns-3 text-center'>
        <div className='py-20 bg-pink-500 border border-white rounded-lg mb-4 cursor-pointer'><button className=''>Tamil</button></div>
        <div className='py-20 bg-pink-500 border border-white rounded-lg mb-4 cursor-pointer'><button className=''>English</button></div>
        <div className='py-20 bg-pink-500 border border-white rounded-lg mb-4 cursor-pointer'><button className=''>Kannadam</button></div>
        <div className='py-20 bg-pink-500 border border-white rounded-lg mb-4 cursor-pointer'><button className=''>Telungu</button></div>
        <div className='py-20 bg-pink-500 border border-white rounded-lg mb-4 cursor-pointer'><button className=''>Malaiyalam</button></div>
        <div className='py-20 bg-pink-500 border border-white rounded-lg mb-4 cursor-pointer'><button className=''>Hindi</button></div>
        </nav>

        <div id='history' className='flex flex-col gap-4'>

          <p className='font-bold text-xl'>History</p>

          <div className='flex flex-row gap-6'>

            <div>
              <img src="https://images.pexels.com/photos/3680219/pexels-photo-3680219.jpeg?auto=compress&cs=tinysrgb&w=600" className='h-60 w-50' alt="" />
              <p className=''>Title</p>
              <p className='text-gray-400'>singer</p>

            </div>

            <div>

              <img src="https://images.pexels.com/photos/3680219/pexels-photo-3680219.jpeg?auto=compress&cs=tinysrgb&w=600" className='h-60 w-50' alt="" />
              <p className=''>Title</p>
              <p className='text-gray-400'>singer</p>

            </div>

          </div>
          

        </div>

        <div id='madeforyou' className='flex flex-col gap-4'>

          <p className='font-bold text-xl'>Made for You</p>

          <div className='flex flex-row gap-6'>

            <div>
              <img src="https://images.pexels.com/photos/3680219/pexels-photo-3680219.jpeg?auto=compress&cs=tinysrgb&w=600" className='h-60 w-50' alt="" />
              <p className=''>Title</p>
              <p className='text-gray-400'>singer</p>
           </div>

           <div>
              <img src="https://images.pexels.com/photos/3680219/pexels-photo-3680219.jpeg?auto=compress&cs=tinysrgb&w=600" className='h-60 w-50' alt="" />
              <p className=''>Title</p>
              <p className='text-gray-400'>singer</p>
            </div>

          </div>

        </div>

        <div id='music-director'>

        </div>

        <div id='recently-watched'>

        </div>

      </div>

      

    </div>
  )
}
