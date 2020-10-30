import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import HeroArea from './components/HeroArea'
import ProjectsArea from './components/ProjectsArea'
import ProjectsHeading from './components/ProjectsHeading'
import ResumeHeading from './components/ResumeHeading'
import ResumeArea from './components/ResumeArea'
import BlogHeading from './components/BlogHeading'
import BlogArea from './components/BlogArea'


const App = () => {
  return (
    <Router>
      <Header />
      <main className="py-5">
        <HeroArea />
        <ProjectsHeading />
        <ProjectsArea />
        <ResumeHeading />
        <ResumeArea />
        <BlogHeading />
        <BlogArea />
      </main>
      <Footer />
      </Router>
  );
}

export default App;


