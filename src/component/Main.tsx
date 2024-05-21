import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';


// image url -  https://images.pexels.com/photos/3680219/pexels-photo-3680219.jpeg?auto=compress&cs=tinysrgb&w=600
// <img src="https://images.pexels.com/photos/3680219/pexels-photo-3680219.jpeg?auto=compress&cs=tinysrgb&w=600" className='h-60 w-50' alt="" />

export default function Main() {

  type Songdet = {

    _id : string;
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
  fetch('http://localhost:3001/song')
    .then((response) => response.json())
    .then((data) => {
      console.log('API Response:', data);
      setSongdetails(data);
    })
    .catch((error) => {
      console.log('Error fetching data:', error);
    });
}, []);


  return (
    <div className='flex flex-col bg-black gap-16'>

      <div className='w-full mt-4'>
        <nav className='w-full flex flex-row items-center justify-around text-white gap-4'>
        <button><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-bell"><path d="M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9"/><path d="M10.3 21a1.94 1.94 0 0 0 3.4 0"/></svg></button>
          <div className='flex flex-row border-2 border-green-500 w-full max-w-xl h-auto items-center justify-center'>
            <input type="search" placeholder='Search a song' className='w-full  py-2 px-2 text-black border-r-2 border-green-500 outline-none'/>
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="w-12 lucide lucide-search cursor-pointer"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.3-4.3"/></svg>
          </div>
        <button>profile <img src='' /> </button>
        </nav>
      </div>

      <div className='text-white mt-4 flex flex-col gap-10'>

        <nav className='columns-3 text-center'>
      <Link to={`/main/:user_id/tamil`}> <div className='py-20 bg-green-600 mb-4 cursor-pointer'><button className=''>Tamil</button></div> </Link> 
       <Link to={`/main/:user_id/english`}> <div className='py-20 bg-green-600 mb-4 cursor-pointer'><button className=''>English</button></div> </Link>
       <Link to={`/main/:user_id/kannada`}><div className='py-20 bg-green-600 mb-4 cursor-pointer'><button className=''>Kannadam</button></div> </Link> 
      <Link to={`/main/:user_id/telungu`}> <div className='py-20 bg-green-600 mb-4 cursor-pointer'><button className=''>Telungu</button></div> </Link>
       <Link to={`/main/:user_id/malayalam`}> <div className='py-20 bg-green-600 mb-4 cursor-pointer'><button className=''>Malaiyalam</button></div> </Link>
        <Link to={`/main/:user_id/hindi`}> <div className='py-20 bg-green-600 mb-4 cursor-pointer'><button className=''>Hindi</button></div> </Link>
        </nav>

        <div id='album' className='flex flex-col gap-4'>

          <p className='font-bold text-xl'>Album</p>

          <div className='flex flex-row gap-6 overflow-x-auto py-4 px-4' style={{ scrollBehavior: 'smooth' }}>

          {
            songdetail.map((song) => (

            <Link to={`/main/:user_id/album/${song._id}`}>
              
            <div className='min-w-48'>

              <img src={song.imageurl} className='h-60 w-50' alt="" />
              <p className=''>{song.songname}</p>
              <p className='text-gray-400'>{song.musicdirector}</p>            

            </div>

            </Link>

            )
          )

          }  
          
          </div>

        </div>

        <div id='madeforyou' className='flex flex-col gap-4'>

          <p className='font-bold text-xl'>Made for You</p>

          <div className='flex flex-row gap-6 w-full overflow-x-auto py-4 px-4' style={{ scrollBehavior: 'smooth' }}>

          {
              songdetail.map((song) => (

                <Link to={`/main/:user_id/song/${song._id}`}>

              <div className='min-w-48'>

                <img src={song.imageurl} className='h-60 w-50' alt="" />
                <p className=''>{song.songname}</p>
                <p className='text-gray-400'>{song.musicdirector}</p>             

              </div>

              </Link>

              )
              
              )
          }  
  
          </div>

        </div>

        <div id='music-director' className='flex flex-col gap-4'>

              <p className='font-bold text-xl'>Music Director</p>

              <div className='flex flex-row gap-6 overflow-x-auto py-4 px-4' style={{scrollBehavior:'smooth'}}>

              {
                songdetail.map((song) => (

                  <Link to={`/main/:user_id/song/${song._id}`}>

                <div className='min-w-48'>

                  <img src={song.imageurl} className='h-60 w-50' alt="" />
                  <p className=''>{song.songname}</p>
                  <p className='text-gray-400'>{song.musicdirector}</p>             

                </div>

                </Link>
                
                )
                )
              }  
            </div>
        </div>

        <div id='recently-watched' className='flex flex-col gap-4'>

              <p className='font-bold text-xl'>Recently Watched</p>

              <div className='flex flex-row gap-6 overflow-x-auto py-4 px-4' style={{scrollBehavior:'smooth'}}>

              {
                songdetail.map((song) => (

                  <Link to={`/main/:user_id/song/${song._id}`}>

                <div className='min-w-48'>

                <img src={song.imageurl} className='h-60 w-50' alt="" />
                <p className=''>{song.songname}</p>
                <p className='text-gray-400'>{song.musicdirector}</p>             
            
              </div>

              </Link>

                    )
                    )

              }  

              </div>
        </div>

      </div>

    </div>
  )
}
















/* 

          <div className='min-w-48'>

              <img src="https://images.pexels.com/photos/3680219/pexels-photo-3680219.jpeg?auto=compress&cs=tinysrgb&w=600" className='h-60 w-50' alt="" />
              <p className=''>Title</p>
              <p className='text-gray-400'>singer</p>

            </div>

            <div className='min-w-48'>

              <img src="https://images.pexels.com/photos/3680219/pexels-photo-3680219.jpeg?auto=compress&cs=tinysrgb&w=600" className='h-60 w-50' alt="" />
              <p className=''>Title</p>
              <p className='text-gray-400'>singer</p>

            </div>

            <div className='min-w-48'>

              <img src="https://images.pexels.com/photos/3680219/pexels-photo-3680219.jpeg?auto=compress&cs=tinysrgb&w=600" className='h-60 w-50' alt="" />
              <p className=''>Title</p>
              <p className='text-gray-400'>singer</p>

            </div>

            <div className='min-w-48'>

              <img src="https://images.pexels.com/photos/3680219/pexels-photo-3680219.jpeg?auto=compress&cs=tinysrgb&w=600" className='h-60 w-50' alt="" />
              <p className=''>Title</p>
              <p className='text-gray-400'>singer</p>

            </div>

            <div className='min-w-48'>

              <img src="https://images.pexels.com/photos/3680219/pexels-photo-3680219.jpeg?auto=compress&cs=tinysrgb&w=600" className='h-60 w-50' alt="" />
              <p className=''>Title</p>
              <p className='text-gray-400'>singer</p>

            </div>

            <div className='min-w-48'>

              <img src="https://images.pexels.com/photos/3680219/pexels-photo-3680219.jpeg?auto=compress&cs=tinysrgb&w=600" className='h-60 w-50' alt="" />
              <p className=''>Title</p>
              <p className='text-gray-400'>singer</p>

            </div>

            <div className='min-w-48'>

              <img src="https://images.pexels.com/photos/3680219/pexels-photo-3680219.jpeg?auto=compress&cs=tinysrgb&w=600" className='h-60 w-50' alt="" />
              <p className=''>Title</p>
              <p className='text-gray-400'>singer</p>

            </div>

            <div className='min-w-48'>

              <img src="https://images.pexels.com/photos/3680219/pexels-photo-3680219.jpeg?auto=compress&cs=tinysrgb&w=600" className='h-60 w-50' alt="" />
              <p className=''>Title</p>
              <p className='text-gray-400'>singer</p>

            </div>

*/

/*

            <div className='min-w-48'>
              <img src="https://images.pexels.com/photos/3680219/pexels-photo-3680219.jpeg?auto=compress&cs=tinysrgb&w=600" className='h-60 w-50' alt="" />
              <p className=''>Title</p>
              <p className='text-gray-400'>singer</p>
           </div>

           <div className='min-w-48'>
              <img src="https://images.pexels.com/photos/3680219/pexels-photo-3680219.jpeg?auto=compress&cs=tinysrgb&w=600" className='h-60 w-50' alt="" />
              <p className=''>Title</p>
              <p className='text-gray-400'>singer</p>
            </div>

            <div className='min-w-48'>
              <img src="https://images.pexels.com/photos/3680219/pexels-photo-3680219.jpeg?auto=compress&cs=tinysrgb&w=600" className='h-60 w-50' alt="" />
              <p className=''>Title</p>
              <p className='text-gray-400'>singer</p>
            </div>

            <div className='min-w-48'>
              <img src="https://images.pexels.com/photos/3680219/pexels-photo-3680219.jpeg?auto=compress&cs=tinysrgb&w=600" className='h-60 w-50' alt="" />
              <p className=''>Title</p>
              <p className='text-gray-400'>singer</p>
            </div>

            <div className='min-w-48'>
              <img src="https://images.pexels.com/photos/3680219/pexels-photo-3680219.jpeg?auto=compress&cs=tinysrgb&w=600" className='h-60 w-50' alt="" />
              <p className=''>Title</p>
              <p className='text-gray-400'>singer</p>
            </div>

            <div className='min-w-48'>
              <img src="https://images.pexels.com/photos/3680219/pexels-photo-3680219.jpeg?auto=compress&cs=tinysrgb&w=600" className='h-60 w-50' alt="" />
              <p className=''>Title</p>
              <p className='text-gray-400'>singer</p>
            </div>

            <div className='min-w-48'>
              <img src="https://images.pexels.com/photos/3680219/pexels-photo-3680219.jpeg?auto=compress&cs=tinysrgb&w=600" className='h-60 w-50' alt="" />
              <p className=''>Title</p>
              <p className='text-gray-400'>singer</p>
            </div>

            <div className='min-w-48'>
              <img src="https://images.pexels.com/photos/3680219/pexels-photo-3680219.jpeg?auto=compress&cs=tinysrgb&w=600" className='h-60 w-50' alt="" />
              <p className=''>Title</p>
              <p className='text-gray-400'>singer</p>
            </div>

            <div className='min-w-48'>
              <img src="https://images.pexels.com/photos/3680219/pexels-photo-3680219.jpeg?auto=compress&cs=tinysrgb&w=600" className='h-60 w-50' alt="" />
              <p className=''>Title</p>
              <p className='text-gray-400'>singer</p>
            </div>

            <div className='min-w-48'>
              <img src="https://images.pexels.com/photos/3680219/pexels-photo-3680219.jpeg?auto=compress&cs=tinysrgb&w=600" className='h-60 w-50' alt="" />
              <p className=''>Title</p>
              <p className='text-gray-400'>singer</p>
            </div>

            <div className='min-w-48'>
              <img src="https://images.pexels.com/photos/3680219/pexels-photo-3680219.jpeg?auto=compress&cs=tinysrgb&w=600" className='h-60 w-50' alt="" />
              <p className=''>Title</p>
              <p className='text-gray-400'>singer</p>
            </div>

            <div className='min-w-48'>
              <img src="https://images.pexels.com/photos/3680219/pexels-photo-3680219.jpeg?auto=compress&cs=tinysrgb&w=600" className='h-60 w-50' alt="" />
              <p className=''>Title</p>
              <p className='text-gray-400'>singer</p>
            </div>
*/

/*

                <div className='min-w-48'>
                  <img src="https://images.pexels.com/photos/3680219/pexels-photo-3680219.jpeg?auto=compress&cs=tinysrgb&w=600" className='h-60 w-50' alt="" />
                  <p className=''>Title</p>
                  <p className='text-gray-400'>singer</p>
                </div>

                <div className='min-w-48'>
                  <img src="https://images.pexels.com/photos/3680219/pexels-photo-3680219.jpeg?auto=compress&cs=tinysrgb&w=600" className='h-60 w-50' alt="" />
                  <p className=''>Title</p>
                  <p className='text-gray-400'>singer</p>
                </div>

                <div className='min-w-48'>
                  <img src="https://images.pexels.com/photos/3680219/pexels-photo-3680219.jpeg?auto=compress&cs=tinysrgb&w=600" className='h-60 w-50' alt="" />
                  <p className=''>Title</p>
                  <p className='text-gray-400'>singer</p>
                </div>

                <div className='min-w-48'>
                  <img src="https://images.pexels.com/photos/3680219/pexels-photo-3680219.jpeg?auto=compress&cs=tinysrgb&w=600" className='h-60 w-50' alt="" />
                  <p className=''>Title</p>
                  <p className='text-gray-400'>singer</p>
                </div>

                <div className='min-w-48'>
                  <img src="https://images.pexels.com/photos/3680219/pexels-photo-3680219.jpeg?auto=compress&cs=tinysrgb&w=600" className='h-60 w-50' alt="" />
                  <p className=''>Title</p>
                  <p className='text-gray-400'>singer</p>
                </div>

                <div className='min-w-48'>
                  <img src="https://images.pexels.com/photos/3680219/pexels-photo-3680219.jpeg?auto=compress&cs=tinysrgb&w=600" className='h-60 w-50' alt="" />
                  <p className=''>Title</p>
                  <p className='text-gray-400'>singer</p>
                </div>

                <div className='min-w-48'>
                  <img src="https://images.pexels.com/photos/3680219/pexels-photo-3680219.jpeg?auto=compress&cs=tinysrgb&w=600" className='h-60 w-50' alt="" />
                  <p className=''>Title</p>
                  <p className='text-gray-400'>singer</p>
                </div>

                <div className='min-w-48'>
                  <img src="https://images.pexels.com/photos/3680219/pexels-photo-3680219.jpeg?auto=compress&cs=tinysrgb&w=600" className='h-60 w-50' alt="" />
                  <p className=''>Title</p>
                  <p className='text-gray-400'>singer</p>
                </div>

                <div className='min-w-48'>
                  <img src="https://images.pexels.com/photos/3680219/pexels-photo-3680219.jpeg?auto=compress&cs=tinysrgb&w=600" className='h-60 w-50' alt="" />
                  <p className=''>Title</p>
                  <p className='text-gray-400'>singer</p>
                </div>

                <div className='min-w-48'>
                  <img src="https://images.pexels.com/photos/3680219/pexels-photo-3680219.jpeg?auto=compress&cs=tinysrgb&w=600" className='h-60 w-50' alt="" />
                  <p className=''>Title</p>
                  <p className='text-gray-400'>singer</p>
                </div>

                <div className='min-w-48'>
                  <img src="https://images.pexels.com/photos/3680219/pexels-photo-3680219.jpeg?auto=compress&cs=tinysrgb&w=600" className='h-60 w-50' alt="" />
                  <p className=''>Title</p>
                  <p className='text-gray-400'>singer</p>
                </div>

                <div className='min-w-48'>
                  <img src="https://images.pexels.com/photos/3680219/pexels-photo-3680219.jpeg?auto=compress&cs=tinysrgb&w=600" className='h-60 w-50' alt="" />
                  <p className=''>Title</p>
                  <p className='text-gray-400'>singer</p>
                </div>

*/


/*

<div className='min-w-48'>
                  <img src="https://images.pexels.com/photos/3680219/pexels-photo-3680219.jpeg?auto=compress&cs=tinysrgb&w=600" className='h-60 w-50' alt="" />
                  <p className=''>Title</p>
                  <p className='text-gray-400'>singer</p>
                </div>

                <div className='min-w-48'>
                  <img src="https://images.pexels.com/photos/3680219/pexels-photo-3680219.jpeg?auto=compress&cs=tinysrgb&w=600" className='h-60 w-50' alt="" />
                  <p className=''>Title</p>
                  <p className='text-gray-400'>singer</p>
                </div>

                <div className='min-w-48'>
                  <img src="https://images.pexels.com/photos/3680219/pexels-photo-3680219.jpeg?auto=compress&cs=tinysrgb&w=600" className='h-60 w-50' alt="" />
                  <p className=''>Title</p>
                  <p className='text-gray-400'>singer</p>
                </div>

                <div className='min-w-48'>
                  <img src="https://images.pexels.com/photos/3680219/pexels-photo-3680219.jpeg?auto=compress&cs=tinysrgb&w=600" className='h-60 w-50' alt="" />
                  <p className=''>Title</p>
                  <p className='text-gray-400'>singer</p>
                </div>

                <div className='min-w-48'>
                  <img src="https://images.pexels.com/photos/3680219/pexels-photo-3680219.jpeg?auto=compress&cs=tinysrgb&w=600" className='h-60 w-50' alt="" />
                  <p className=''>Title</p>
                  <p className='text-gray-400'>singer</p>
                </div>

                <div className='min-w-48'>
                  <img src="https://images.pexels.com/photos/3680219/pexels-photo-3680219.jpeg?auto=compress&cs=tinysrgb&w=600" className='h-60 w-50' alt="" />
                  <p className=''>Title</p>
                  <p className='text-gray-400'>singer</p>
                </div>

                <div className='min-w-48'>
                  <img src="https://images.pexels.com/photos/3680219/pexels-photo-3680219.jpeg?auto=compress&cs=tinysrgb&w=600" className='h-60 w-50' alt="" />
                  <p className=''>Title</p>
                  <p className='text-gray-400'>singer</p>
                </div>

                <div className='min-w-48'>
                  <img src="https://images.pexels.com/photos/3680219/pexels-photo-3680219.jpeg?auto=compress&cs=tinysrgb&w=600" className='h-60 w-50' alt="" />
                  <p className=''>Title</p>
                  <p className='text-gray-400'>singer</p>
                </div>

                <div className='min-w-48'>
                  <img src="https://images.pexels.com/photos/3680219/pexels-photo-3680219.jpeg?auto=compress&cs=tinysrgb&w=600" className='h-60 w-50' alt="" />
                  <p className=''>Title</p>
                  <p className='text-gray-400'>singer</p>
                </div>

                <div className='min-w-48'>
                  <img src="https://images.pexels.com/photos/3680219/pexels-photo-3680219.jpeg?auto=compress&cs=tinysrgb&w=600" className='h-60 w-50' alt="" />
                  <p className=''>Title</p>
                  <p className='text-gray-400'>singer</p>
                </div>

                <div className='min-w-48'>
                  <img src="https://images.pexels.com/photos/3680219/pexels-photo-3680219.jpeg?auto=compress&cs=tinysrgb&w=600" className='h-60 w-50' alt="" />
                  <p className=''>Title</p>
                  <p className='text-gray-400'>singer</p>
                </div>
*/