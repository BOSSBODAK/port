import React from 'react';
import pic from '../assets/pic1.jpg';

const About = () => {
  return (
    <section id="about-me" className="about">
      <div className="image-section">
        <img src={pic} alt="About" />
      </div>
      <div className="text-section">
        <h1>ABOUT ME</h1>
        <p>
          Hello everyone, my name is Russell Roi Llantero, a BSIT student at the Western Institute of Technology. 
          I'm a dedicated web designer and developer skilled in HTML, CSS, JavaScript, and Java, with expertise 
          in Cisco networking. Additionally, I have a strong background in Figma and UI/UX design, ensuring both 
          technical and visual excellence in my projects.
        </p>
      </div>
    </section>
  );
};

export default About;
