import { motion } from 'framer-motion';
import './Skills.css';

const Skills = () => {
  return (
      <motion.main
          id='skills'
          className='Skills-main'
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1.08 }}
          viewport={{ once: true }}
      >
          <article className='article-h1'>
              <h1 className='artic-h1'>
                  Skills
              </h1>
          </article>
          <section className='brief-about'>
              <article>
                  <p>
                      I use a range of FrontEnd and BackEnd technologies to turn ideas into responsive, functional, and user-focused web experiences.
                  </p>
              </article>
          </section>
          <section className='skills-section'>
              <article className='skills-article'>
                  <h2>Languages</h2>
                  <div className='skills-div'>
                      <div>
                          Javascript
                      </div>
                      <div>
                          HTML5
                      </div>
                      <div>
                          CSS3
                      </div>
                      <div>
                          Python
                      </div>
                  </div>
              </article>
              <article className='skills-article'>
                  <h2>Framework and libraries</h2>
                  <div className='skills-div'>
                      <div>
                          Node.js
                      </div>
                      <div>
                          React
                      </div>
                      <div>
                          Express
                      </div>
                      <div>
                          Numpy & panda
                      </div>
                  </div>
              </article>
              <article className='skills-article'>
                  <h2>Styling & UI</h2>
                  <div className='skills-div'>
                      <div>
                          Framer motion
                      </div>
                      <div>
                          Type animation
                      </div>
                  </div>
              </article>
              <article className='skills-article'>
                  <h2>State and Data</h2>
                  <div className='skills-div'>
                      <div>
                          MongoDB
                      </div>
                  </div>
              </article>
              <article className='skills-article'>
                  <h2>Infra & Tooling</h2>
                  <div className='skills-div'>
                      <div>
                          Render
                      </div>
                      <div>
                          Git & Github
                      </div>
                      <div>
                          Thunderclient
                      </div>
                      <div>
                          ESLint
                      </div>
                      <div>
                          npm
                      </div>
                  </div>
              </article>
              <article className='skills-article'>
                  <h2>Practice</h2>
                  <div className='skills-div'>
                      <div>
                          Problem solving
                      </div>
                      <div>
                          Responsive and Cross Browser
                      </div>
                      <div>
                          Performance
                      </div>
                      <div>
                          Accessibility
                      </div>
                  </div>
              </article>
          </section>
    </motion.main>
  )
}

export default Skills
