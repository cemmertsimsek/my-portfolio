import './footer.css';
import { BsLinkedin } from 'react-icons/bs';
import { BsGithub } from 'react-icons/bs';
import { BsInstagram } from 'react-icons/bs';

const Footer = () => {
  return (
    <footer>
      <a href="#" className="footer__logo">
        Cem Mert Simsek
      </a>

      <ul className="permalinks">
        <li>
          <a href="#">Home</a>
        </li>
        <li>
          <a href="#about">About</a>
        </li>
        <li>
          <a href="#skills">Skills</a>
        </li>
        <li>
          <a href="#portfolio">Portfolio</a>
        </li>
        <li>
          <a href="#contact">Contact</a>
        </li>
      </ul>

      <div className="footer__socials">
        <a
          href="https://www.linkedin.com/in/cem-mert-simsek/"
          target="_blank"
          rel="noreferrer"
        >
          <BsLinkedin />
        </a>
        <a
          href="https://www.instagram.com/cemsimsek14/"
          target="_blank"
          rel="noreferrer"
        >
          <BsInstagram />
        </a>
        <a
          href="https://github.com/cemmertsimsek"
          target="_blank"
          rel="noreferrer"
        >
          <BsGithub />
        </a>
      </div>

      <div className="footer__copyright">
        <small>
          &copy; Made with ❤️ by Cem Mert Simsek. All rights reserved.
        </small>
      </div>
    </footer>
  );
};

export default Footer;
