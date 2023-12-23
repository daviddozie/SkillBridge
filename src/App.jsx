import { Route, Routes } from 'react-router-dom';
import './App.css'
import Home from './components/Pages/Home/Home';
import Course from './components/Pages/Courses/Course';
import About from './components/Pages/About/About';
export default function App() {

  return (
    <>
      <div>
        <Routes>
          <Route path='/' element={<Home />}/>
          <Route path='/courses' element={<Course />}/>
          <Route path='/about us' element={<About />}/>
        </Routes>
      </div>
    </>
  )
}