import React from 'react'
import './education.css';

const Education = () => {
    return (
        <section id="education">
      <h2>Education</h2>
      <div className="education-container">
        <div className="vertical-line"></div>
        <div className="education-row">
          <div className="left-education">
            <div className="education-card">
              <h1>Master of Computer Application (MCA)</h1>
              <h3>Marathwada Institute of Technology, Aurangabad</h3>
              <p>Passing Year: 2023 | CGPA: 8.26</p>
            </div>
          </div>
          <div className="right-education">
            <div className="education-card">
              <h1>Bachelor of Computer Science (BCS)</h1>
              <h3>Dr. Babasaheb Ambedkar Marathwada University, Aurangabad</h3>
              <p>Passing Year: 2021 | Percentage: 78.30%</p>
            </div>
          </div>
        </div>
        <div className="education-row">
          <div className="left-education">
            <div className="education-card">
              <h1>HSC (12th)</h1>
              <h3>Vasantrao Naik Mahavidhyalaya, Aurangabad</h3>
              <p>Passing Year: 2018 | Percentage: 60.00%</p>
            </div>
          </div>
          <div className="right-education">
            <div className="education-card">
              <h1>SSC (10th)</h1>
              <h3>Baliram Patil Vidhyalaya, Aurangabad</h3>
              <p>Passing Year: 2016 | Percentage: 77.80%</p>
            </div>
          </div>
        </div>
      </div>
    </section>
    )
}

export default Education