import React from 'react'

export default function AddSong() {
  return (
    <div className='flex flex-col bg-black h-screen text-white items-center justify-center gap-8'>
        
        <h1 className='text-3xl'>AddSong</h1>

       
            <form className='flex flex-col gap-4 border border-green-400 rounded-lg h-full w-full max-h-[500px] max-w-2xl items-center justify-center text-black'>

                <div className='flex flex-col gap-8 w-full max-w-xl'>
                <input className='px-4 py-3 outline-green-400' type="text" placeholder="Song Name" />
                <input className='px-4 py-3 outline-green-400' type="text" placeholder="Artist Name" />
                <input className='px-4 py-3 outline-green-400' type="text" placeholder="Album Name" />
                <input className='px-4 py-3 outline-green-400' type="text" placeholder="Genre" />
                </div>
                <button className='bg-blue-400 text-white py-2 px-5 rounded-sm' type='submit'>submit</button>

            </form>
        

    </div>
  )
}
