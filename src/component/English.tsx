import React, { useEffect, useState } from 'react'

export default function English() {

  //!songname || !singername || !musicdirector || !albumname || !actorname || !actressname || !releaseddate || !genrename || !language || !imageurl
  // <img className='w-12' src="https://images.pexels.com/photos/3680219/pexels-photo-3680219.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" />

   type Songdet = {

      songname:string;
      musicdirector:string;
      albumname:string;
      releaseddate:string;
      genrename:string;
      imageurl:string;
      language:string;

   };


   const [songdetail,setSongdetails] = useState<Songdet[]>([]);


   useEffect(() => {
    fetch('http://localhost:3001/song/lang')
      .then((response) => response.json())
      .then((data) => {
        console.log('API Response:', data);
        const englishSongs = data.filter((song: { language: string; }) => song.language === "English");
        setSongdetails(englishSongs);
      })
      .catch((error) => {
        console.log('Error fetching data:', error);
      });
  }, []);
  
  



  return (
    <div className='bg-black h-full'>

      <div className='flex flex-col gap-16'>

        <div id='navbar'>
          <nav className='flex flex-col justify-around text-white gap-8'>
            <div className='flex flex-row items-center justify-between px-8 mt-4'>

              <button className='border border-gray-600 rounded-xl px-4 py-2 hover:bg-green-400'>Top</button>

              <div className='flex flex-row border-2 border-green-500 w-full max-w-xl h-auto items-center justify-center'>
              <input type="text" placeholder='Search a song' className='w-full  py-2 px-2 text-black border-r-2 border-green-500 outline-none'/>
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="w-12 lucide lucide-search cursor-pointer"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.3-4.3"/></svg>
              </div>

              <button className='border border-gray-600 rounded-xl px-4 py-2 hover:bg-green-400'>Playlists</button>
            </div>

            <div className='flex flex-row items-center justify-between px-8'>

            <button className='border border-gray-600 rounded-xl px-4 py-2 hover:bg-green-400'>Albums</button>
            <button className='border border-gray-600 rounded-xl px-4 py-2 hover:bg-green-400'>Songs</button>
            <button className='border border-gray-600 rounded-xl px-4 py-2 hover:bg-green-400'>Artists</button>
            <button className='border border-gray-600 rounded-xl px-4 py-2 hover:bg-green-400'>Profiles</button>

            </div>

          </nav>
        </div>

        <div id='song' className='flex flex-col gap-4 py-4'>

         {songdetail.map((song) => (
        
          <div className='flex flex-row px-8 items-center justify-between hover:border hover:border-gray-400 rounded-xl'>

            <img className='w-12' src={song.imageurl} alt="" />

            <div className='flex flex-col'>
              <p className='text-white text-lg'>{song.genrename}</p>
              <p className='text-gray-400'>{song.songname}</p>
            </div>

            <div className='flex flex-col'>
              <p className='text-white text-lg'>Movie Name</p>
              <p className='text-gray-400'>{song.albumname}</p>
            </div>

            <div className='flex flex-col'>
              <p className='text-white text-lg'>Artist Name</p>
              <p className='text-gray-400'>{song.musicdirector}</p>
            </div>

            <div className='flex flex-col'>
              <p className='text-white text-lg'>Released Date</p>
              <p className='text-gray-400'>{song.releaseddate}</p>
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

          ))}

        </div>

      </div>

    </div>
  )
}


