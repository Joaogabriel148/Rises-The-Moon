import React from 'react';
import { FaGithub } from 'react-icons/fa'; // Certifique-se de ter o pacote react-icons instalado
import './footer.css'

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <p>&copy; {currentYear} Rises The Moon</p>
      <a href="https://github.com/Joaogabriel148/Rises-The-Moon" target="_blank" rel="noopener noreferrer">
        <FaGithub /> GitHub
      </a>
    </footer>
  );
};

export default Footer;