import React from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
import ParticlesBg from "particles-bg"
import Header from './components/Header'
import Footer from './components/Footer'
import Homepage from './pages/Homepage'



const App = () => {
  return (
    <Router>
      <Header />
        <main className="pb-5">
        <Homepage />
      </main>
      <Footer />
       <ParticlesBg type="random" bg={true}/>
      </Router>
  );
}

export default App


