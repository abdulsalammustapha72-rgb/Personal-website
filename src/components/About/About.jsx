import { motion } from 'framer-motion';
import { FiArrowRight } from 'react-icons/fi';
import './About.css';

const About = () => {
  return (
      <motion.main
          id='about'
          className='About-main'
          initial={{ opacity: 0, x: 100 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1.08 }}
      >
          <article className='article-h1'>
              <h1 className='artic-h1'>About Me</h1>
          </article>
          <section className='About-section'>
          <section className='sectionOne'>
              <p>
                  I'm a passionate Full-Stack Developer who enjoys turning ideas into modern, functional, and user-friendly digital experience. I work across both FrontEnd and BackEnd development, using technologies like React, Node.js, Express, and MongoDB to build reliable and scalable applications. <br />
                  <br />
                  I'm constantly learning, improving my craft, and exploring better ways to solve problems through code. Whether i'm building a responsive interface, developing an API, or working with databases, my goal is simple: create software that is useful, clean and built with purpose.
              </p>
              <div className="stats-grid">
                <article>
                    <span>Focus</span>
                    <strong>Full-Stack Development</strong>
                </article>
                <article>
                    <span>Projects Built</span>
                    <strong>5+</strong>
                </article>
                <article>
                    <span>Experience</span>
                    <strong>9 months & growing</strong>
                </article>
                <article>
                    <span>Open To</span>
                    <strong>Freelance & Remote Jobs</strong>
                </article>
              </div>
          </section>
          <section className='sectionTwo'>
              <p className='sectionTwo-p'>What i do</p>
              <article>
                  <div>
                      <h2><span>01</span>FrontEnd Development</h2>
                      <p>I build responsive, modern interfaces with React, focusing on clean UI and smooth user experiences.</p>
                  </div>
              </article>
              <article>
                  <div>
                      <h2><span>02</span>BackEnd Development</h2>
                      <p>I build server-side application and REST APIs with Node.js and Express, handling business logic and application functionality.</p>
                  </div>
              </article>
              <article>
                  <div>
                      <h2><span>03</span>Database Integration</h2>
                      <p>I design and manage MongoDB databases, building flexible data models and connecting applications to reliable, scalable, and well-organized document-based data.</p>
                  </div>
              </article>
              <article>
                  <div>
                      <h2><span>04</span>Full-Stack Applications</h2>
                      <p>I bring the FrontEnd, BackEnd, and Database together to build complete,functional web applications from idea to implementation.</p>
                  </div>
              </article>
          </section>
          </section>
          <article className='article-h3'>
                <h3 className='artic-h3'>How I Work</h3>
          </article>
          <section className="how-i-work">
            <section className="work-section">
                <p className='work-section-p'>
                    I believe good software starts with understanding the problem before writing the code. I take a structured approach to every project understanding the goal, planning the solution, building with clean and maintainable code, and testing along the way. <br />
                    <br />
                    I focus on creating experience that are simple, responsive, accessible, and reliable, while continously learning and improving throughout the process. <br />
                    <br />
                </p>
                <article>
                    <p className='work-flow'>Understand <FiArrowRight/> Plan <FiArrowRight/> Build <FiArrowRight/> Test <FiArrowRight/> Improve</p>
                </article>
            </section>
                <section className='section-brief'>
                    <article>
                        <div>
                            <h4><span>01</span>Understand</h4>
                            <p>I first understand the problem, goals and requirements.</p>
                        </div>
                    </article>
                    <article>
                        <div>
                            <h4><span>02</span>Plan</h4>
                            <p>I break the idea into clear and manageable steps.</p>
                        </div>
                    </article>
                    <article>
                        <div>
                            <h4><span>03</span>Build</h4>
                            <p>I turn the plan into clean, functional, and responsive software.</p>
                        </div>
                    </article>
                    <article>
                        <div>
                            <h4><span>04</span>Test</h4>
                            <p>I test the product to ensure everything works as expected.</p>
                        </div>
                    </article>
                    <article>
                        <div>
                            <h4><span>05</span>Improve</h4>
                            <p>I refine the product based on feedback, testing and performance.</p>
                        </div>
                  </article>
                </section>
            </section>
    </motion.main>
  )
}

export default About
