import './Footer.css';
import LinkedIn from './../img/LinkedIn.svg';
import GitHub from './../img/GitHub.svg';

const Footer = () => {
  return (
    <div className="footer-container">
        <a href="https://github.com/Pits111">
         <img 
          className="github" 
          src={GitHub} 
          alt="GitHub"
          />
        </a>
      <a href="https://de.linkedin.com/in/isabelmehlmann">
      <img 
        className="linkedin" 
        src={LinkedIn} 
        alt="LinkedIn"
      />
      </a>
      
      <p></p>
    </div>
  );
};

export default Footer; 
