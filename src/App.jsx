import './App.css'
import Footer from './components/Footer'
import Header from './components/Header'
// import NavBar from './components/NavBar'
import {Routes, Route} from 'react-router-dom'
import Home from './components/Home'
import Meetings from './components/Meetings'
import Activities from './components/Activities'
import Error from './components/Error'
import Login from './components/Login'
import Logout from './components/Logout'
import Datos from './components/Datos'
// import MeetingsMenu from './components/MeetingsMenu'
// import NewMeeting from './components/submenu/NewMeeting'

function App() {

  return (
    <>
      <Header />
      
      <main>
        <Routes>
          <Route path='/' element={<Home />}></Route>
          <Route path='meetings' element={<Meetings />}></Route>
          <Route path='activities' element={<Activities />}></Route>
          <Route path='datos' element={<Datos />}></Route>
          <Route path='login' element={<Login />}></Route>
          <Route path='logout' element={<Logout />}></Route>
          <Route path='*' element={<Error />}></Route>
          {/* <Route path='meetings/*' element={<MeetingsMenu />}>
            <Route path='new' element={<NewMeeting />} />
            <Route path='new' element={<NewMeeting />} />
            <Route path='new' element={<NewMeeting />} />
          </Route> */}

        </Routes>

          
      </main>
      <Footer />
    </>
  )
}

export default App
