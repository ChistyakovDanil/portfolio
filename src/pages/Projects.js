import React from 'react';
import Header from '../components/header/Header';
import Project from '../components/project/Project';
import projects from '../helpers/projectsList';

const Projects = () => {
  return (
    <>
      <Header />
      <main className="section">
        <div className="container">
          <h2 className="title">Projects</h2>
          <ul className="projects">
            {projects.map((el, index) => {
              return (
                <Project
                  title={el.title}
                  key={index}
                  img={el.img}
                  gitHubLink={el.gitHubLink}
                  skills={el.skills}
                  index={index}
                />
              );
            })}
          </ul>
        </div>
      </main>
    </>
  );
};

export default Projects;
