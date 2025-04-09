import { useState, useEffect } from 'react';
import git from '../../image/git.png';
import './styles.css';

const Footer = ({ tasks }) => {
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);
    
    return () => clearInterval(timer);
  }, []);

  return (
    <footer className='footer'>
      <div className="footer-content">
        <div className="footer-links">
          <a href='https://github.com/Alex4421' target="_blank" rel="noopener noreferrer">
            <img src={git} alt="github" className="github-icon"/>
          </a>
        </div>
        <div className="time-display">
          {currentTime.toLocaleTimeString()}
        </div>
      </div>
    </footer>
  );
};

export default Footer;