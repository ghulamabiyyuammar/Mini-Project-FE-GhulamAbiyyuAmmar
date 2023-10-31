import { Route, Routes } from 'react-router-dom'

import './App.css'
import Navbar from './components/pages/Navbar'
import Home from './components/Home'
import About from './components/About'
import Courses from './components/Courses'
import Review from './components/Review'
import Footer from './components/Footer'
import ChatAi from './components/ChatAi'

const App = () => {
  return (
    <div className="App">
      <Navbar />
     <Routes>
      <Route path ="/home" element={<Home/>} />
      <Route path ="/about" element={<About/>} />
      <Route path ="/courses" element={<Courses/>} />
      <Route path ="/review" element={<Review/>} />
      <Route path ="/chatai" element={<ChatAi/>} />

     </Routes>
     <Footer/>
    </div>
  )
}

export default App