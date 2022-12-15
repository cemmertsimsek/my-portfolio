import React from 'react';
import CV from '../../assets/cem-mert-simsek-cv.pdf';

const CTA = () => {
  return (
    <div className="cta">
      <a href="#contact" className="btn btn-primary">
        My Portfolio
      </a>
      <a href={CV} download className="btn">
        Download CV
      </a>
    </div>
  );
};

export default CTA;
