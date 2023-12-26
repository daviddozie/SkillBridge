import { Route, Routes } from 'react-router-dom';
import './App.css'
import Home from './components/Pages/Home/Home';
import Course from './components/Pages/Courses/Course';
import About from './components/Pages/About/About';
import PricingPage from './components/Pages/Pricing/PricingPage';
import Contact from './components/Pages/Contact/Contact';
export default function App() {

  return (
    <>
      <div>
        <Routes>
          <Route path='/' element={<Home />}/>
          <Route path='/courses' element={<Course />}/>
          <Route path='/about us' element={<About />}/>
          <Route path='/pricing' element={< PricingPage/>}/>
          <Route path='/contact' element={< Contact/>}/>
        </Routes>
      </div>
    </>
  )
}