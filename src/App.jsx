import Home from './Components/Home'
import { Route,Routes } from 'react-router-dom'
import Coursers from './Courses/Coursers'
import Loginpage from './Components/Loginpage'
import Sign from './Components/Sign'
import Contactpage from './Components/Contactpage'


function App() {

  return (
    <>
    <div className="dark:bg-slate-900 dark:text-white">
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/course' element={<Coursers/>}/>
      <Route path='/login' element={<Loginpage/>}/>
      <Route path='/signin' element={<Sign/>}/>
      <Route path='/contact' element={<Contactpage/>}/>
    </Routes>
    </div>
   </>
  )
}

export default App
