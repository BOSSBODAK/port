import React from 'react';

const Skills = () => {
  const skillsData = [
    { skill: "FIGMA", percentage: 60 },
    { skill: "UI/UX DESIGN", percentage: 55 },
    { skill: "JAVA", percentage: 30 },
    { skill: "CISCO", percentage: 20 },
  ];

  return (
    <section id="skills" className="skills-section">
      <h2>MY SKILLS</h2>
      <p>
        Here are some of my skills that demonstrate my expertise in web development, design, and technology:
        <br /><br />
        <b>&emsp;&emsp;&#xB7;</b> Skilled in Figma and UI/UX design, ensuring intuitive and aesthetically pleasing user experiences.
        <br />
        <b>&emsp;&emsp;&#xB7;</b> Competent in Java for software development and back-end solutions.
        <br />
        <b>&emsp;&emsp;&#xB7;</b> Knowledgeable in Cisco Packet Tracer for network simulation and design.
      </p>

      <div className="skills-container">
        {skillsData.map((skill, index) => (
          <div key={index} className="skill-bar">
            <div className="skill-info">
              <span>{skill.skill}</span>
              <span>{skill.percentage}%</span>
            </div>
            <div className="progress-bar">
              <div className="filled-bar" style={{ width: `${skill.percentage}%` }}></div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
