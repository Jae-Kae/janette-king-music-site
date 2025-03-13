import Background from './background/Background'
import Footer from './footer/Footer'
import HamburgerNav from './nav/HamburgerNav'
import Nav from './nav/Nav'
import Contact from './pages/contact/Contact'
import Home from './pages/home/Home'
import Learn from './pages/learn/Learn'
import Shop from './pages/shop/Shop'
import Watch from './pages/watch/Watch'
import './styles/global.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

const App = () => {
  return (
    <>
      <Router>
        <Nav />
        <HamburgerNav />
        <Background />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/learn' element={<Learn />} />
          <Route path='/watch' element={<Watch />} />
          <Route path='/shop' element={<Shop />} />
          <Route path='/contact' element={<Contact />} />
        </Routes>
        <Footer />
      </Router>
    </>
  )
}

export default App
