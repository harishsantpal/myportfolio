import React from 'react'
import './certificate.css';

const Certificate = () => {

    const certificates = [
        {
          image: '/imgs/certificate.jpg',
          institute: 'Pentagon Space Bangalore',
          certification: 'Train and Certified Fullstack Java Developer',
        },
      ];

  return (
    <section id="certification">
    <h2>Certification</h2>
    <div className="certificate-container">
      {certificates.map((certificate, index) => (
        <div className="certificate-card" key={index}>
          <img src={certificate.image} alt="Certificate" />
          <div className="certificate-details">
            <h3>{certificate.institute}</h3>
            <p>{certificate.certification}</p>
          </div>
        </div>
      ))}
    </div>
  </section>
  )
}

export default Certificate