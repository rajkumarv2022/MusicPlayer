import React from 'react'

export default function Album() {
  return (
    <div className='bg-black'>
      
        <div className='flex flex-col gap-8'>

            <div id='poster' className='flex flex-row gap-8 px-8 mt-8'>

                <img className='w-72' src="https://images.pexels.com/photos/3680219/pexels-photo-3680219.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" />

                <div className='flex flex-col items-center w-full px-40 gap-10 bg-green-800'>
                    
                    <p className='text-white text-6xl font-bold'>Ratchasan</p>

                    <div className='flex flex-col w-full gap-20'>

                       <div className='flex flex-row items-start justify-between'>
                            <div className='flex flex-col text-2xl'>
                                <p className='text-white'>Actor</p>
                                <p className='text-gray-400'>Vishnu Vishal</p>
                            </div>
                            
                            <div className='flex flex-col text-2xl'>
                                <p className='text-white'>Actress</p>
                                <p className='text-gray-400'>Amala Paul</p>
                            </div>
                        </div>

                        <div className='flex flex-row items-start justify-between'>
                        
                            <div className='flex flex-col text-2xl'>
                                <p className='text-white'>Music Director</p>
                                <p className='text-gray-400'>Ghibran</p>
                            </div>

                            <div className='flex flex-col text-2xl'>
                                <p className='text-white'>Singer</p>
                                <p className='text-gray-400'>Dharani</p>
                            </div>

                        </div>

                    </div>
                    
                </div>

            </div>

            <div id='song' className='flex flex-col gap-4 py-4'>

                <div className='flex flex-row px-8 items-center justify-between hover:border hover:border-gray-400 rounded-xl'>

                    <img className='w-12' src="https://images.pexels.com/photos/3680219/pexels-photo-3680219.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" />

                    <div className='flex flex-col'>
                    <p className='text-white text-lg'>Feeling Songs</p>
                    <p className='text-gray-400'>Song</p>
                    </div>

                    <div className='flex flex-col'>
                    <p className='text-white text-lg'>Movie Name</p>
                    <p className='text-gray-400'>Ratchasan</p>
                    </div>

                    <div className='flex flex-col'>
                    <p className='text-white text-lg'>Artist Name</p>
                    <p className='text-gray-400'>Aniruth</p>
                    </div>

                    <div className='flex flex-col'>
                    <p className='text-white text-lg'>Released Date</p>
                    <p className='text-gray-400'>22/04/2022</p>
                    </div>

                    <div className='text-green-400'>
                    <button>
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-circle-play"><circle cx="12" cy="12" r="10"/><polygon points="10 8 16 12 10 16 10 8"/></svg>
                    </button>
                    </div>

                    <div className='flex flex-col items-center justify-center'>
                    <button>
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-heart text-white"><path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"/></svg>
                    </button>
                    <span className='text-gray-400'>99</span>
                    </div>

                </div>

                <div className='flex flex-row px-8 items-center justify-between hover:border hover:border-gray-400 rounded-xl'>

                    <img className='w-12' src="https://images.pexels.com/photos/3680219/pexels-photo-3680219.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" />

                    <div className='flex flex-col'>
                    <p className='text-white text-lg'>Feeling Songs</p>
                    <p className='text-gray-400'>Song</p>
                    </div>

                    <div className='flex flex-col'>
                    <p className='text-white text-lg'>Movie Name</p>
                    <p className='text-gray-400'>Ratchasan</p>
                    </div>

                    <div className='flex flex-col'>
                    <p className='text-white text-lg'>Artist Name</p>
                    <p className='text-gray-400'>Aniruth</p>
                    </div>

                    <div className='flex flex-col'>
                    <p className='text-white text-lg'>Released Date</p>
                    <p className='text-gray-400'>22/04/2022</p>
                    </div>

                    <div className='text-green-400'>
                    <button>
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-circle-play"><circle cx="12" cy="12" r="10"/><polygon points="10 8 16 12 10 16 10 8"/></svg>
                    </button>
                    </div>

                    <div className='flex flex-col items-center justify-center'>
                    <button>
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-heart text-white"><path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"/></svg>
                    </button>
                    <span className='text-gray-400'>99</span>
                    </div>

                </div>

                <div className='flex flex-row px-8 items-center justify-between hover:border hover:border-gray-400 rounded-xl'>

                    <img className='w-12' src="https://images.pexels.com/photos/3680219/pexels-photo-3680219.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" />

                    <div className='flex flex-col'>
                    <p className='text-white text-lg'>Feeling Songs</p>
                    <p className='text-gray-400'>Song</p>
                    </div>

                    <div className='flex flex-col'>
                    <p className='text-white text-lg'>Movie Name</p>
                    <p className='text-gray-400'>Ratchasan</p>
                    </div>

                    <div className='flex flex-col'>
                    <p className='text-white text-lg'>Artist Name</p>
                    <p className='text-gray-400'>Aniruth</p>
                    </div>

                    <div className='flex flex-col'>
                    <p className='text-white text-lg'>Released Date</p>
                    <p className='text-gray-400'>22/04/2022</p>
                    </div>

                    <div className='text-green-400'>
                    <button>
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-circle-play"><circle cx="12" cy="12" r="10"/><polygon points="10 8 16 12 10 16 10 8"/></svg>
                    </button>
                    </div>

                    <div className='flex flex-col items-center justify-center'>
                    <button>
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-heart text-white"><path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"/></svg>
                    </button>
                    <span className='text-gray-400'>99</span>
                    </div>

                </div>

                <div className='flex flex-row px-8 items-center justify-between hover:border hover:border-gray-400 rounded-xl'>

                    <img className='w-12' src="https://images.pexels.com/photos/3680219/pexels-photo-3680219.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" />

                    <div className='flex flex-col'>
                    <p className='text-white text-lg'>Feeling Songs</p>
                    <p className='text-gray-400'>Song</p>
                    </div>

                    <div className='flex flex-col'>
                    <p className='text-white text-lg'>Movie Name</p>
                    <p className='text-gray-400'>Ratchasan</p>
                    </div>

                    <div className='flex flex-col'>
                    <p className='text-white text-lg'>Artist Name</p>
                    <p className='text-gray-400'>Aniruth</p>
                    </div>

                    <div className='flex flex-col'>
                    <p className='text-white text-lg'>Released Date</p>
                    <p className='text-gray-400'>22/04/2022</p>
                    </div>

                    <div className='text-green-400'>
                    <button>
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-circle-play"><circle cx="12" cy="12" r="10"/><polygon points="10 8 16 12 10 16 10 8"/></svg>
                    </button>
                    </div>

                    <div className='flex flex-col items-center justify-center'>
                    <button>
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-heart text-white"><path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"/></svg>
                    </button>
                    <span className='text-gray-400'>99</span>
                    </div>

                </div>

                <div className='flex flex-row px-8 items-center justify-between hover:border hover:border-gray-400 rounded-xl'>

                    <img className='w-12' src="https://images.pexels.com/photos/3680219/pexels-photo-3680219.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" />

                    <div className='flex flex-col'>
                    <p className='text-white text-lg'>Feeling Songs</p>
                    <p className='text-gray-400'>Song</p>
                    </div>

                    <div className='flex flex-col'>
                    <p className='text-white text-lg'>Movie Name</p>
                    <p className='text-gray-400'>Ratchasan</p>
                    </div>

                    <div className='flex flex-col'>
                    <p className='text-white text-lg'>Artist Name</p>
                    <p className='text-gray-400'>Aniruth</p>
                    </div>

                    <div className='flex flex-col'>
                    <p className='text-white text-lg'>Released Date</p>
                    <p className='text-gray-400'>22/04/2022</p>
                    </div>

                    <div className='text-green-400'>
                    <button>
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-circle-play"><circle cx="12" cy="12" r="10"/><polygon points="10 8 16 12 10 16 10 8"/></svg>
                    </button>
                    </div>

                    <div className='flex flex-col items-center justify-center'>
                    <button>
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-heart text-white"><path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"/></svg>
                    </button>
                    <span className='text-gray-400'>99</span>
                    </div>

                </div>

                <div className='flex flex-row px-8 items-center justify-between hover:border hover:border-gray-400 rounded-xl'>

                    <img className='w-12' src="https://images.pexels.com/photos/3680219/pexels-photo-3680219.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" />

                    <div className='flex flex-col'>
                    <p className='text-white text-lg'>Feeling Songs</p>
                    <p className='text-gray-400'>Song</p>
                    </div>

                    <div className='flex flex-col'>
                    <p className='text-white text-lg'>Movie Name</p>
                    <p className='text-gray-400'>Ratchasan</p>
                    </div>

                    <div className='flex flex-col'>
                    <p className='text-white text-lg'>Artist Name</p>
                    <p className='text-gray-400'>Aniruth</p>
                    </div>

                    <div className='flex flex-col'>
                    <p className='text-white text-lg'>Released Date</p>
                    <p className='text-gray-400'>22/04/2022</p>
                    </div>

                    <div className='text-green-400'>
                    <button>
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-circle-play"><circle cx="12" cy="12" r="10"/><polygon points="10 8 16 12 10 16 10 8"/></svg>
                    </button>
                    </div>

                    <div className='flex flex-col items-center justify-center'>
                    <button>
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-heart text-white"><path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"/></svg>
                    </button>
                    <span className='text-gray-400'>99</span>
                    </div>

                </div>
                

            </div>

        </div>

    </div>
  )
}
