import React from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
import ParticlesBg from "particles-bg"
import Header from './components/Header'
import Footer from './components/Footer'
import Homepage from './pages/Homepage'
import MessengerCustomerChat from 'react-messenger-customer-chat'



const App = () => {
  return (
    <Router>
      <Header />
        <main className="pb-5">
        <Homepage />
      </main>
      <MessengerCustomerChat
        pageId="104283934658093"
        appId="3376326325749318"
      />
      <Footer />
       <ParticlesBg type="random" bg={true}/>
      </Router>
  );
}

export default App


