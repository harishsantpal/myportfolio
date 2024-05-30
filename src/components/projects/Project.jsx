import React from 'react'
import './project.css';

export const Project = () => {
  return (
    <section id="projects">
        <h2 className="heading">Projects</h2>
      <div className="projects-content">
        
        <div className="project-card">
          <div className="project-info">
            <img src="/imgs/pro2.jpg" alt="Contactify - Interactive Contact Form Web App" />
            <h3>Contactify - Interactive Contact Form Web App</h3>
            <p>Technologies used: <span>React.js, Spring Boot, MySQL</span></p>
          </div>
        </div>
        <div className="project-card">
          <div className="project-info">
            <img src="/imgs/pro1.png" alt="Project Image" />
            <h3>BookBazzar Library Management System</h3>
            <p>Technologies used:<span> Thymeleaf, Spring Boot, MySQL, Bootstrap</span></p>
          </div>
        </div>
        <div className="project-card">
          <div className="project-info">
            <img src="/imgs/pro3.png" alt="Dice Game" />
            <h3>Dice Game</h3>
            <p>Technologies used:<span> React.js</span></p>
          </div>
        </div>
        <div className="project-card">
          <div className="project-info">
            <img src="/imgs/pro4.png" alt="Customer Management Application" />
            <h3>Customer Management Application</h3>
            <p>Technologies used:<span> Android, Android Studio, XML, Java</span></p>
          </div>
        </div>
      </div>
    </section>
  )
}
