import React from 'react'
import './home.css';

export const Home = ({ scrollToAbout }) => {

  const handleDownloadResume = () => {
    // Change the URL to the actual path of your resume PDF file
    const resumeUrl = '/resume/ResumeHarishSantpal.pdf';
    // Create an anchor element
    const link = document.createElement('a');
    // Set the href attribute to the resume URL
    link.href = resumeUrl;
    // Set the download attribute to force download
    link.setAttribute('download', 'ResumeHarishSantpal.pdf');
    // Append the anchor element to the body
    document.body.appendChild(link);
    // Programmatically trigger a click event on the anchor element
    link.click();
    // Remove the anchor element from the DOM
    document.body.removeChild(link);
  };

  return (
    <section id="home">
      <div className="container">
      <div className="home-content">
        <h1>Harish Santpal</h1>
        <p>Java Fullstack Developer</p>
        <button onClick={scrollToAbout}>Know About Me</button>
      </div>
      <div className="resumedownload">
        <button onClick={handleDownloadResume} className='download-button' >Download My Resume</button>
        </div>
        </div>
      <div className="img-container">
          <img src='/imgs/profileimg.jpg' alt='profile Image' className='imagedata'/>
        </div>
        
    </section>
  )
}
