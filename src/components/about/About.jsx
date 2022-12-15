import './about.css';
import ME1 from '../../assets/me.png';
import { FaAward } from 'react-icons/fa';

const About = () => {
  return (
    <section id="about">
      <h5>Get to Know</h5>
      <h2>About Me</h2>

      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={ME1} alt="AboutImage" />
            {/* buraya arka plani mavi fotograf */}
          </div>
        </div>

        <div className="about__content">
          <div className="about__cards">
            <article className="about__card">
              <FaAward className="about__icon" />
              <h5>Skills</h5>
              <small>3+ Years Working</small>
            </article>

            <article className="about__card">
              <FaAward className="about__icon" />
              <h5>Skills</h5>
              <small>3+ Years Working</small>
            </article>

            <article className="about__card">
              <FaAward className="about__icon" />
              <h5>Skills</h5>
              <small>3+ Years Working</small>
            </article>
          </div>

          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quas
            labore praesentium repudiandae repellendus ratione porro laudantium
            error? Deleniti optio ut impedit vero, sapiente repellat, ducimus
            eaque obcaecati quia nobis non.
          </p>

          <a href="#contact" className="btn btn-primary btn-contact">
            Contact Me
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
