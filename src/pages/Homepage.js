import React from 'react';
import BlogArea from '../components/BlogArea';
import BlogHeading from '../components/BlogHeading';
import ContactArea from '../components/ContactArea';
import ContactHeading from '../components/ContactHeading';
import HeroArea from '../components/HeroArea';
import ProjectsArea from '../components/ProjectsArea';
import ProjectsHeading from '../components/ProjectsHeading';
import ResumeArea from '../components/ResumeArea';
import ResumeHeading from '../components/ResumeHeading';

const Homepage = () => {
    return (
        <>
            <HeroArea />
            <ProjectsHeading />
            <ProjectsArea />
            <ResumeHeading />
            <ResumeArea />
            <BlogHeading />
            <BlogArea />
            <ContactHeading />
            <ContactArea />
        </>
    );
};

export default Homepage;