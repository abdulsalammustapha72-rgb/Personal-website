import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FiArrowUpRight } from 'react-icons/fi';
import igagwuCar from '../../../public/projects pics/igagwucar.png';
import Ecommerce  from '../../../public/projects pics/E-commerceStore.png';
import todo from '../../../public/projects pics/to-do.png';
import crudApp from '../../../public/projects pics/CRUD.png';


import './Project.css';

const Project = () => {
  return (
      <motion.main
          id='projects'
          className='Projects-main'
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1.08 }}
      >
          <article className='article-h1'>
              <h1 className='artic-h1'>Projects</h1>
          </article>
          <section className='short-brief'>
              <article>
                  <p>Here are some of the projects i've built to put my skills into practice, explore new ideas, and solve real-world problems through code.</p>
              </article>
          </section>
          <section className='projects-section'>
              <article className='projects-article'>
                  <figure>
                      <img src={igagwuCar} alt="Igagwu motors" />
                  </figure>
                  <div>
                      <h1>Igagwu Motors</h1>
                      <div className='div-links'>
                          <span>
                          <a
                            href="https://github.com/abdulsalammustapha72-rgb/Igagwu-motors"
                            target="_blank"
                            rel="noopener noreferrer"
                            >
                             Source Code
                           </a>
                          </span>
                      <span>
                        <Link to='https://igagwu-motors-1.onrender.com'>
                            <FiArrowUpRight/>
                        </Link>
                      </span>
                      </div>
                  </div>
                  <div className='div-p'>
                      <p>A Full-Stack car E-commerce application built with React, Node.js, and MongoDB, combining a responsive FrontEnd with BackEnd functionality and database management.</p>
                  </div>
              </article>
              <article className='projects-article'>
                  <figure>
                      <img src={Ecommerce} alt="E-commerce store" />
                  </figure>
                  <div>
                      <h1>E-commerce Store</h1>
                      <div className='div-links'>
                        <span>
                            <a
                                href="https://github.com/abdulsalammustapha72-rgb/E-Commerce-store"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                Source Code
                            </a>
                        </span>
                        
                      <span>
                        <Link to='https://abdulsalammustapha72-rgb.github.io/E-Commerce-store/'>
                            <FiArrowUpRight/>
                        </Link>
                      </span>
                    </div>
                  </div>
                  <div className='div-p'>
                      <p>A responsive E-commerce store built with HTML, CSS, and JavaScript, featuring products displays, and interative Elements. <span>NB: Not all buttons works like the navs just focusing on purchasing products.</span></p>
                  </div>
              </article>
              <article className='projects-article'>
                  <figure>
                      <img src={crudApp} alt="CRUD APP" />
                  </figure>
                  <div>
                      <h1>CRUD APP</h1>
                      <div className='div-links'>
                          <span>
                              <a
                                  href="https://github.com/abdulsalammustapha72-rgb/CRUD-APP"
                                  target="_blank"
                                  rel="noopener noreferrer"
                              >
                                  Source Code
                              </a>
                          </span>
                      <span>
                        <Link to='https://abdulsalammustapha72-rgb.github.io/CRUD-APP/'>
                            <FiArrowUpRight/>
                        </Link>
                      </span>
                    </div>
                  </div>
                  <div className='div-p'>
                      <p>A web Application built with HTML, CSS, and JavaScript that demonstrates CRUD functionality, allowing users to create, view, update, and delete data through an interactive interface.</p>
                  </div>
              </article>
              <article className='projects-article'>
                  <figure>
                      <img src={todo} alt="to-do app" />
                  </figure>
                  <div>
                      <h1>TO-DO APP</h1>
                      <div className='div-links'>
                          <span>
                              <a
                                  href="https://github.com/abdulsalammustapha72-rgb/to-do-App"
                                  target="_blank"
                                  rel="noopener noreferrer"
                              >
                                  Source Code
                              </a>
                          </span>
                      <span>
                        <Link to='https://abdulsalammustapha72-rgb.github.io/to-do-App/'>
                            <FiArrowUpRight/>
                        </Link>
                      </span>
                    </div>
                  </div>
                  <div className='div-p'>
                      <p>A simple and responsive task management app built with HTML, CSS, and JavaScript, allowing users to create, manaage, and organize their tasks.</p>
                  </div>
              </article>
          </section>
    </motion.main>
  )
}

export default Project
