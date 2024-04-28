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
import { useState } from 'react'
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

  //Counter
  // const [count, setCount] = useState(0)

  // function handleAdd() {
  //   setCount(count+1)
  // }
  
  // function handleSub() {
  //   setCount(count-1)
  // }

  // function handleReset(){
  //   setCount(0)
  // }


  //useState with arrays
  // const [tasks, setTasks] = useState([
  //   {id: 1, name: "Record lectures", completed: true},
  //   {id: 2, name: "Review lectures", completed: true},
  //   {id: 3, name: "Android lectures", completed: false},
  //   {id: 4, name: "iphone lectures", completed: false},
  //   {id: 5, name: "Windows lectures", completed: true},
  //   {id: 6, name: "English lectures", completed: false},
  //   {id: 7, name: "Kamapakepec lectures", completed: true},
  // ])

  //Deleting a task
  // function handleDelete(id) {
  //   //Here the setTask hook compares the id clicked with the one in the array and if they are not equal it will remove it and
  //   //update the whole task array and re-render it
  //   setTasks(tasks.filter(task => id !== task.id))
  // }

  // const [show, setShow] = useState(true)

  /* useState with arrays
        <div className='box'>
          <h1>Task list</h1>
            <button onClick={() => setShow(!show)}>Toggle</button>
          <ul>
            { show && tasks.map((task) => (
              //if task.completed is true, the className will stay as "completed"
              <li key={task.id} className={task.completed ? "completed" : "incomplete"}>
                <span>{task.id} - {task.name}</span>
                <button onClick={() => handleDelete(task.id)} className='delete'>Delete</button>
              </li>
              ))
            }
          </ul>
        </div> */
}

export default App
