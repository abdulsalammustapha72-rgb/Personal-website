import { TypeAnimation } from 'react-type-animation';
import { motion } from 'framer-motion';
import { Link } from 'react-scroll';
import Developer from '../../../public/myPic.png';

import './Hero.css';

const Hero = () => {
  return (
    <motion.main
      id='hero'
      className='Hero-main'
      initial={{ opacity: 0, x: -100 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 1.08 }}
      viewport={{ once: true }}
    >
      <section className='first-section'>
        <article>
          <h1>Hey, I'm Abdulsalam</h1>
        </article>
        <TypeAnimation
          sequence={[
            'Full-Stack Developer',
            2000,
            'React Developer',
            2000,
            'Node.js Developer',
            2000,
            'MERN Stack Developer',
            2000,
            'AI Enthusiast',
            1500
          ]}
          wrapper='h2'
          repeat={Infinity}
          className='typing'
        />
        <article>
          <p className='p'>
            I build modern, responsive and scalable web applications using React, Node.js, Express and MongoDB. I enjoy turning ideas into clean, efficient and user-friendly digital experiences.
          </p>
        </article>
        <article className='button-article'>
          <button className='project-btn'>
            <Link to='projects' smooth={true} duration={500}>
              View Projects
            </Link>
          </button>
          <button className='contact-btn'>
            <Link to='contact' smooth={true} duration={500}>
              Contact Me
            </Link>
          </button>
        </article>
      </section>
      <section className='second-section'>
        <figure>
          <img src={Developer} alt="Abdulsalam Mustapha Igagwu" />
          <figcaption>
            <p>Available for Freelance and Remote Jobs.</p>
          </figcaption>
        </figure>
      </section>
      </motion.main>
  )
}

export default Hero
