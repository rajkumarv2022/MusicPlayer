import React from 'react'

export default function Main() {
  return (
    <div className='bg-black'>

      <div className='flex flex-row items-center justify-around  text-white'>
 
        <nav className='w-full max-w-xl flex flex-row items-center justify-between'>
        <button>All</button>
        <button>Tamil</button>
        <button>English</button>
        <button>Kannadam</button>
        <button>Telungu</button>
        <button>Malaiyalam</button>
        <button>Hindi</button>
        </nav>

        <input type="text" placeholder='Search song' className='' />

        <nav className='w-full max-w-60 flex flex-row items-center justify-around'>

         <button>bell</button>
         <button>profile</button>

        </nav>

      </div>

    </div>
  )
}
