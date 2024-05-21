import { BrowserRouter as Router,Route,Routes, Link} from 'react-router-dom'
import './App.css'
import Login from './component/Login'
import LandingPage from './component/LandingPage'
import Main from './component/Main'
import SignupPage from './component/SignupPage'
import AddSong from './Admin/AddSong'
import SongSinglePage from './component/SongSinglePage'
import Hindi from './component/Hindi'
import AllSong from './component/AllSong'
import English from './component/English'
import Kannadam from './component/Kannadam'
import Malayalam from './component/Malayalam'
import Tamil from './component/Tamil'
import Telungu from './component/Telungu'
import Album from './component/Album'

function App() {


  return (
   
       <Router>


        <Link to='/login'></Link>

        <Routes>

          <Route path='/' Component={LandingPage}></Route>
          <Route path='/login' Component={Login}></Route>
          <Route path='/signup' Component={SignupPage}></Route>
          <Route path='/main/:user_id' Component={Main}></Route>
          <Route path="/admin/:user_id/addSong" Component={AddSong}></Route>
          <Route path='/main/:user_id/song/:song_id' Component={SongSinglePage}></Route>
          <Route path='/main/:user_id/hindi' Component={Hindi}></Route>
          <Route path='/main/:user_id/allsong' Component={AllSong}></Route>
          <Route path='/main/:user_id/english' Component={English}></Route>
          <Route path='/main/:user_id/kannada' Component={Kannadam}></Route>
          <Route path='/main/:user_id/malayalam' Component={Malayalam}></Route>
          <Route path='/main/:user_id/tamil' Component={Tamil}></Route>
          <Route path='/main/:user_id/telungu' Component={Telungu}></Route>
          <Route path='/main/:user_id/album/:album_id' Component={Album}></Route>
          {/* <Route path='/main/:user_id/album/:album_id/song/:song_id' Component={SongSinglePage}></Route> */}

        </Routes>


        </Router>

        
  )
}

export default App
