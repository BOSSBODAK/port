import React, { useState } from 'react';
import proj1 from '../assets/proj1.jpg';
import proj6 from '../assets/proj6.jpg';
import proj4 from '../assets/proj4.jpg';
import proj5 from '../assets/proj5.jpg';

const Projects = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [currentImage, setCurrentImage] = useState(null);

  const openModal = (image) => {
    setCurrentImage(image);
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
    setCurrentImage(null);
  };

  return (
    <section id="projects" className="projects">
      <div className="services-intro">
        <h3>MY PROJECTS</h3>
        <p>
          I have worked on projects that highlight my skills in web design, 
          development, and graphic design.
        </p>
      </div>
      <div className="project-cards">
        <div className="card">
          <div className="card-image" onClick={() => openModal(proj1)}>
            <img src={proj1} alt="Figma" />
          </div>
          <p className="card-title">FIGMA</p>
        </div>
        <div className="card">
          <div className="card-image" onClick={() => openModal(proj6)}>
            <img src={proj6} alt="UI/UX Design" />
          </div>
          <p className="card-title">UI/UX DESIGN</p>
        </div>
        <div className="card">
          <div className="card-image" onClick={() => openModal(proj4)}>
            <img src={proj4} alt="Java" />
          </div>
          <p className="card-title">JAVA</p>
        </div>
        <div className="card">
          <div className="card-image" onClick={() => openModal(proj5)}>
            <img src={proj5} alt="Cisco" />
          </div>
          <p className="card-title">CISCO</p>
        </div>
      </div>

      {isOpen && (
        <div className="modal-overlay" onClick={closeModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <img src={currentImage} alt="Modal" className="modal-image" />
            <button className="close-button" onClick={closeModal}>Close</button>
          </div>
        </div>
      )}
    </section>
  );
};

export default Projects;
