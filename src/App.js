import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import ParticlesBg from "particles-bg"
import Header from './components/Header'
import Footer from './components/Footer'
import Homepage from './pages/Homepage'
import Projects from './pages/Projects'
import Resume from './pages/Resume'
import Blog from './pages/Blog'
import AboutMe from './pages/AboutMe'



const App = () => {
  return (
    <Router>
      <Header />
        <main className="py-5">
        <Route exact path='/' component={Homepage} />
        <Route exact path='/projects' component={Projects} />
        <Route exact path='/resume' component={Resume} />
        <Route exact path='/blog' component={Blog} />
        <Route exact path='/about' component={AboutMe} />
      </main>
      <Footer />
       <ParticlesBg type="random" bg={true}/>
      </Router>
  );
}

export default App


