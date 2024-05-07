import axios from 'axios';
import { useState } from 'react'

export default function AddSong() {
  const [songname,setSongname] = useState('');
  const [singername,setSingername] = useState('');
  const [musicdirector,setMusicdirector] = useState('');
  const [albumname,setAlbumname] = useState('');
  const [actorname,setActorname] = useState('');
  const [actressname,setActressname]=useState('');
  const [releaseddate,setReleaseddate] = useState('');
  const [genrename,setGenrename] = useState('');
  const [language,setLanguage] = useState('English');
  const [imageurl,setImageurl] = useState('');

  const addSong = (e:any) => {
    e.preventDefault();

    if (!songname || !singername || !musicdirector || !albumname || !actorname || !actressname || !releaseddate || !genrename || !language || !imageurl) {
      alert('Please fill in all fields');
      return;
    }

    axios.post('http://localhost:3001/register',{
      songname,
      singername,
      musicdirector,
      albumname,
      actorname,
      actressname,
      releaseddate,
      genrename,
      language,
      imageurl
    })
    .then(result => {
      console.log(result);
      // Reset form fields after successful submission
      setSongname('');
      setSingername('');
      setMusicdirector('');
      setAlbumname('');
      setActorname('');
      setActressname('');
      setReleaseddate('');
      setGenrename('');
      //setLanguage('');
      setImageurl('');
      alert('Song added successfully');
    })
    .catch(err => console.log(err));
  };

  return (
    <div className='flex flex-col bg-black h-screen text-white items-center justify-center gap-8'>
      <h1 className='text-3xl'>AddSong</h1>
      <form id='form1' className='flex flex-col gap-4 border border-green-400 rounded-lg h-full w-full max-w-2xl items-center justify-center text-black'>
        <div className='flex flex-col gap-8 w-full max-w-xl'>
          <input className='px-4  outline-green-400' value={songname} onChange={(e) => { setSongname(e.target.value) }} type="text" placeholder="Song Name"/>
          <input className='px-4  outline-green-400' value={singername} onChange={(e) => { setSingername(e.target.value ) } } type="text" placeholder="Singer Name"/>
          <input className='px-4  outline-green-400' value={musicdirector} onChange={(e) => { setMusicdirector(e.target.value)}} type="text" placeholder="Musicdirector Name"/>
          <input className='px-4  outline-green-400' value={albumname} onChange={(e) => { setAlbumname(e.target.value)}} type="text" placeholder="Album Name"/>
          <input className='px-4  outline-green-400' value={actorname} onChange={(e) => {setActorname(e.target.value)}} type="text" placeholder="Actor Name"/>
          <input className='px-4  outline-green-400' value={actressname} onChange={(e) => {setActressname(e.target.value)}} type="text" placeholder="Actress Name"/>
          <input className='px-4  outline-green-400' value={releaseddate} onChange={(e) => {setReleaseddate(e.target.value)}} type="text" placeholder="Released Date"/>
          <input className='px-4  outline-green-400' value={genrename} onChange={(e) => {setGenrename(e.target.value)}} type="text" placeholder="Genre"/>
          <select className='px-4 outline-green-400' onChange={(e) => {setLanguage(e.target.value)}}>
            <option value="English">English</option>
            <option value="Tamil">Tamil</option>
            <option value="Hindi">Hindi</option>
            <option value="Malayalam">Malayalam</option>
            <option value="Kannadam">Kannadam</option>
            <option value="Telungu">Telungu</option>
          </select>
         <input className='px-4' type="text" value={imageurl} onChange={(e) => {setImageurl(e.target.value)}} placeholder='Enter url of image' />
        </div>
        <button onClick={addSong} className='bg-blue-400 text-white py-1 px-5 rounded-sm'type='submit'>Submit</button>
      </form>
    </div>
  )
}
