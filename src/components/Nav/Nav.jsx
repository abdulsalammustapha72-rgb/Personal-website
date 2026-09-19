import { Link, scroller } from 'react-scroll';
import { FiMenu, FiX } from 'react-icons/fi';
import { useState } from 'react';

import './Nav.css';

const Nav = () => {
    const [isOpen, setIsOpen] = useState(false);

    const closeMenu = () => {
        setIsOpen(false);
    };

  return (
      <nav>
          <h1>musty <span>dev</span></h1>

          <ul className={isOpen ? 'nav-links open' : 'nav-links'}>
              <li>
                  <Link to='hero' smooth={true} duration={500} onClick={closeMenu}>Home</Link>
              </li>
              <li>
                  <Link to='about' smooth={true} duration={500} onClick={closeMenu}>About</Link>
              </li>
              <li>
                  <Link to='skills' smooth={true} duration={500} onClick={closeMenu}>Skills</Link>
              </li>
              <li>
                  <Link to='projects' smooth={true} duration={500} onClick={closeMenu}>Project</Link>
              </li>
              <li>
                  <Link to='contact' smooth={true} duration={500} onClick={closeMenu}>Contact</Link>
              </li>
              <button
                  className='Hire'
                  onClick={() => scroller.scrollTo('contact', {
                      smooth: true,
                      duration: 500
                  })}
              >
                  HIRE ME <span className='btn-arrow'>➡</span>
              </button>
          </ul>
            <button className='menu-btn' onClick={() => setIsOpen(!isOpen)} >
                {isOpen ? <FiX /> : <FiMenu />}
            </button>
    </nav>
  )
}
    
export default Nav
