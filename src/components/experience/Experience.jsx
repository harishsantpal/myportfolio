import React from 'react'
import './experience.css';

export const Experience = () => {
  return (
    <section id="experience">
      <div className="experience-content">
        <h2 className='heading'>Experience</h2>
        <div className="job">
          <h3>Posotion: <span className='text-highlight'> Android App Developer (Intern) </span></h3>
          <h4>Company: Ekatta Innovators LLP</h4>
          <p>Time Period: January 2023 - July 2023</p>
          <ul>
            <li>Developed and maintained Android applications using Java.</li>
            <li>Collaborated with the development team to implement new features and fix bugs.</li>
            <li>Conducted code reviews to ensure code quality and adherence to coding standards.</li>
            <li>Created and updated user interfaces (UI) for improved user experience.</li>
          </ul>
        </div>
      </div>
    </section>
  )
}
