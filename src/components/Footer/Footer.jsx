import { scroller } from 'react-scroll';
import { FiArrowUpRight, FiArrowUp } from 'react-icons/fi';
import './Footer.css';

const Footer = () => {

    const currentYear = new Date().getFullYear();
  return (
    <footer>
          <section className='section-One'>
              <span>Let's Build Something </span>
              <p>Have something in mind? Hit me up let work.</p>
              <article>
                  <button onClick={() => scroller.scrollTo('contact', {
                      smooth: true,
                      duration: 500
                  })}
                  >
                      Start a project
                  </button>
                  <button>
                      <a href='https://wa.me/2347015522255" target="_blank" rel="noopener noreferrer"'>
                        Chat on WhatsApp
                      </a>
                  </button>
              </article>
          </section>
          <section className='section-Two'>
            <h1>MustyDev</h1>
              <article>
                  <div>
                      {/* <span>Full-Stack Development</span>
                      <span>Web Application</span>
                      <span>Digital Solution</span> */}
                      <p>Full-Stack Development • Web Application • Digital Solution</p>
                  </div>
                  <div className='section-two-div'>
                      <a href="https://x.com/Abdulsalamirdx" target="_blank" rel="noopener noreferrer">Twitter <FiArrowUpRight /></a>
                      <a href="https://www.linkedin.com/in/abdulsalam-mustapha-016109399?utm_source=share_via&utm_content=profile&utm_medium=member_android" target="_blank" rel="noopener noreferrer">LinkedIn <FiArrowUpRight /></a>
                      <a href="https://www.facebook.com/profile.php?id=61593743655078" target="_blank" rel="noopener noreferrer">Facebook <FiArrowUpRight /></a>
                      <a href="https://wa.me/2347015522255" target="_blank" rel="noopener noreferrer">WhatsApp <FiArrowUpRight /></a>
                  </div>
                  <a href="#hero">Back To Top <FiArrowUp /></a>
              </article>
          </section>
          <section className='last-section'>
              <p>&copy; {currentYear} Abdulsalam Mustapha Igagwu • MustyDev • All Right Reserved</p>
              <p>BUILT WITH REACT.JS • LAGOS, NG</p>
          </section>
    </footer>
  )
}

export default Footer
